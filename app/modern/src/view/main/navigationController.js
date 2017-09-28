Ext.define('APP.view.main.navigationController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.navigation',
  routes: {
    ':main': {
      action: 'onMainRouteChange',
      //conditions:{':main':'([a-z0-9/./]+)'},
      conditions: {':main': '([0-9a-zA-Z/\.]+)'},
      before: function (id, action) {
        var me = this,
          navigation = Ext.Viewport.down('mainNavigation');
        if (APP.complete) {
          action.resume();
          return false;
        }
        APP.app.refreshMateData(function (json) {
          Ext.get('appLoadingIndicator').remove();
          if (!json.pushKey) {
            navigation.setActiveItem({xtype: 'login'});
          } else {
            navigation.setActiveItem({xtype: 'main'});
            APP.app.pushStart();
            action.resume();
            //navigation.setMasked({xtype:'loadmask',message:'验证中...'});
          }
        });
      }
    }
  },
  onMainRouteChange: function (routeId) {
    // console.log(routeId);
    if (!routeId || routeId == '' || routeId == 'main') {
      return false;
    }
    var me = this,
      navigation = this.getView();
    routeId = routeId.replace('#', '');
    if (navigation) {
      if (Ext.isNumeric(routeId)) {
        var store = Ext.getStore('nav'),
          view = store.findNode('id', routeId);
      } else {
        routeId = routeId.replace(/\//g, '.');
        if (routeId[0] == '.') {
          routeId = routeId.replace(routeId[0], '');
        }
        var store = Ext.getStore('nav'),
          view = store.findNode('view', routeId);
        //console.log(routeId)
        var view = {
          data: {
            id: new Date().getTime(),
            view: routeId
          }
        }
      }
      if (!view) {
        navigation.removeAll();
        navigation.setActiveItem({xtype: 'main'});
        Mate.showTask('<h6>ERROR</h6>View not found...', true);
        return false;
      } else {
        this.setCurrentView(view);
//				var main=navigation.down('main'),
//					groupNote=store.findNode('id',view.parentNode?view.parentNode.id:0);
//				if(groupNote){
//					var active=Ext.getCmp('container[root='+groupNote.parentNode.id+']')||false;
//					active?main.setActiveItem(active):false
//				}
      }
    }
  },
  onNavigationPush: function (navigation, view, eOpts) {
    // document.title = record.data.text;
    // console.log('Push', view.title)
    // if (view.title) {
    //   document.title = view.title;
    // }
    // console.log(view.xtype);
    if (view.xtype !== 'main' && view.xtype !== 'login') {
      var navbar = view.down('navbar');
      if (!navbar) {
        view.add(
          {xtype: 'navbar', title: view.config.title || ''}
        )
      } else {
        if (!navbar.hiddenTitle) {
          navbar.setTitle(view.config.title || '')
        }
      }
    }
  },
  onNavigationPop: function (navigation, view, eOpts) {
    // var view = navigation.getActiveItem()
    // if (view.title) {
    //   document.title = view.title;
    // }
    if (eOpts === 2) {
      // console.log('navigation controller');
      // Updates the hash on the window. This shouldn't need to be used directly but use the add method instead.
      // Ext.util.History.setHash('main')
      // Add a new token to the history stack.
      Ext.util.History.add('main');
    }
  },
  setCurrentView: function (record) {
    if (!Ext.isObject(record)) {
      return false;
    }
    var navigation = this.getView(),
      navId = 'NAV-' + record.data.id,
      view = Ext.getCmp(navId);
    if (!view) {
      view = Ext.create('APP.view.' + record.data.view, {
        hideMode: 'offsets',
        viewId: record.data.id,
        id: navId,
        title: record.data.text,
        viewModel: {data: {parameter: record.data.parameter || {}}},
        parameter: record.data.parameter
      });
    }
    //Ext.suspendLayouts();
    navigation.push(view);
    //navigation.setActiveItem(view);

    //Ext.resumeLayouts(true);
  },


  //===============================================================================================================================================登陆
  onLoginFromWechat: function (button) {
    var view = this.getView();

    if (typeof(wx) != 'undefined') {
      view.setActiveItem({xtype: 'bindForm'})
    } else {
      Mate.showTask('<h6>消息提示</h6>请在微信框架内访问.', true);
    }
  },
  onLoginFromQq: function (button) {
    var view = this.getView();
    Mate.showTask('<h6>消息提示</h6>QQ登陆准备中.', true);
  },
  onBindFormInitialize: function (view) {
    this.wechatAuthorization();
  },
  //===============================================================================================================微信授权
  wechatAuthorization: function (callback) {
    //console.log(typeof(wx),Mate.getCache('wechat'))
    if (typeof(wx) == 'undefined') {
      return false;
    }
    Mate.ajax({
      url: Boot.appUrl('/wechat/authorize/getOpenid.do'),
      params: Mate.getCache('wechat'),
      success: function (json) {
        var wechat = {
          openid: json.account.wx_openid,
          nickname: json.account.wx_nickname,
          headimgurl: json.account.wx_userface
        };
        Mate.setCache('wechat', wechat)
        window.location.reload();
      },
      failure: function (json) {
        //console.log(json)
        //return false
        switch (json.code) {
          //==============微信已授权，未绑定
          case '-01': {
            var wechat = {openid: json.openid, nickname: json.nickname, headimgurl: json.headimgurl};
            Mate.setCache('wechat', wechat);
            var redirectURI = '/wechat/index.html#/authorize/bind.html';
//						if(window.location.hash.indexOf('bind.html')<0){
//							redirectURI+='?backUrl='+escape(window.location.href);
//						}
            window.location.href = redirectURI;
            return false;
          }
            ;
            break
          //==============微信未授权
          case '-02': {
            var backUrl = '//' + window.location.host + '/wechat/index.html#/authorize/bind.html?backUrl=' + escape(window.location.href);
            var redirectURI = '//' + Boot.apiDomain + '/wechat/authorize/redirect.do?';
            redirectURI += 'appid=' + APP.app.getAppData('oa/basis/wechat_appid');
            redirectURI += '&appDomain=' + Boot.appDomain;
            redirectURI += '&backUrl=' + escape(window.location.href);
            window.location.href = redirectURI;
          }
            ;
            break
        }
      }
    })
  },
  onLoginInitialize: function (view) {
    var me = this;
    if (typeof(wx) !== 'undefined') {
      me.wechatAuthorization();
      // view.setActiveItem({xtype: 'bindForm'});
      // window.location.href = 'http://localhost:999/wechat/#/authorize/bind.html?backUrl=' + escape(window.location.href);
    } else {
      view.setActiveItem({xtype: 'loginForm'})
    }
  },
  onLoginFormEnterSubmit: function (field, e) {
    var form = field.up('formpanel'),
      button = form.down('button[name=submit]'),
      login = form.down('field[name=login]').getValue() || '',
      password = form.down('field[name=password]').getValue() || '';
    if (login !== '' && password !== '') {
      this.onLoginFormSubmit(button);
    }
  },
  onLoginFormSubmit: function (button) {
    var navigation = button.up('navigationview'),
      form = button.up('formpanel'),
      login = form.down('field[name=login]').getValue() || '',
      password = form.down('field[name=password]').getValue() || '';
    if (login === '') {
      Mate.showTask('<h6>错误消息</h6>请输入登陆帐号.', true);
      return false;
    }
    if (password === '') {
      Mate.showTask('<h6>错误消息</h6>请输入登陆密码.', true);
      return false;
    }
    form.setMasked({xtype: 'loadmask'});
    // button.setDisabled(true);
    Mate.ajax({
      url: Boot.appUrl('/login.do'),
      params: form.getValues(),
      success: function (json, opts) {
        APP.app.refreshMateData(function (json) {
          if (json.success) {
            // form.unmask();
            // Removes all items currently in the Container, optionally destroying them all.
            navigation.removeAll();
            navigation.setActiveItem({xtype: 'main'});
          }
        });
      },
      failure: function (json, opts) {
        form.unmask();
        // button.setDisabled(false).removeCls('x-submiting');
      }
    });
  }
});
