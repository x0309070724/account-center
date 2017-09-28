// Ext.enableAria=false;
// Ext.enableFx=false;
// Ext.supports.MouseWheel=false;
Ext.ariaWarn = Ext.emptyFn;
// Loads Ext.app.Application class and starts it up with given configuration after the page is ready.
// config :  Object/String
// Application config object or name of a class derived from Ext.app.Application.
Ext.application({
  name: 'APP',
  extend: 'APP.Application',
  controllers: [
    'post'
  ],
  getAppData: function (key) {
    var data = this.data;
    if (key) {
      var arrKey = key.split('/');
      if (arrKey.length > 1) {
        Ext.Array.each(arrKey, function (item) {
          if (!data) {
            return false;
          }
          data = data[item] || false;
        });
        return data;
      } else {
        return data[key];
      }
    } else {
      return data;
    }
  },

  getViewport: function () {
    if (Ext.touch) {
      return Ext.Viewport;
    } else {
      return Ext.getCmp('mainViewport');
    }
  },

  setViewport: function (view) {
    var viewport = this.getViewport();
    viewport.removeAll();
    viewport.add(view);
  },

  getViewModel: function () {
    if (!this.getViewport()) {
      return false;
    }
    return this.getViewport().getViewModel();
  },

  getViewData: function (key) {
    var viewModel = this.getViewModel(),
      data = viewModel.getData();
    return key ? data[key] : data;
  },

  updateViewData: function (key, json) {
    // The ViewModel is a data provider for this component and its children. The data contained in the ViewModel is
    // typically used by adding bind configs to the components that want present or edit this data.
    var me = this,
      viewModel = this.getViewModel();
    // 为什么下面else里面的viewModel.set()会影响这里的viewModel的输出呢？是执行时机的问题？
    // console.log(viewModel);
    if (key) {
      viewModel.set(key, json || {});
    } else {
      viewModel.set('oa', {
        basis: me.getAppData('oa/basis') || {}
      });
      viewModel.set('crm', {
        basis: me.getAppData('crm/basis') || {}
      });
//				viewModel.set('version',{
//					client:Boot.version,
//					server:'1.0.1'
//				});
      //viewModel.set('basis',Mate.getAppData('crm/basis')||{});
      viewModel.set('account', me.getAppData('account') || {});
      viewModel.set('rate', me.getAppData('crm/rate') || {});
      viewModel.set('time', Ext.Date.format(new Date(), 'Y-m-d H:i A'));
    }
  },

  getTeamTreeData: function (json) {
    var json = APP.app.data;

    function treeMenu(arr) {
      this.tree = arr || [];
      this.groups = {};
    };
    treeMenu.prototype = {
      init: function (parentid) {
        this.group();
        return this.getJson(this.groups[parentid]);
      },
      group: function () {
        for (var i = 0; i < this.tree.length; i++) {
          //console.log(this.groups[this.tree[i].id])
          //console.log(this.groups[this.tree[i].parentid].name,this.tree[i].name)
          var record = {
            id: this.tree[i].id,
            name: this.tree[i].name,
            info: this.tree[i].manager_namecn,
            sortnum: this.tree[i].id,
            iconCls: Ext.util.Format.teamIcon(this.tree[i].id),
            expanded: true
          }
          if (this.groups[this.tree[i].parentid]) {
            this.groups[this.tree[i].parentid].push(record);
          } else {
            this.groups[this.tree[i].parentid] = [];
            this.groups[this.tree[i].parentid].push(record);
          }
        }
      },
      getJson: function (arr) {
        if (!arr) {
          return false
        }
        var children = [];
        for (var i = 0; i < arr.length; i++) {
          children.push(arr[i]);
          var data = this.getJson(this.groups[arr[i].id]);
          if (data.length) {
            arr[i].children = data;
          } else {
            arr[i].leaf = true;
          }
        }
        return children;
      }
    };
    var teamTree = new treeMenu(json.company.team).init(0);
    return teamTree;
  },

  updateAccount: function (json) {
    var account = json.account,
      roleManager = Ext.String.format('{0}', account.post_manager).split(',');

    if (account.administrator) {
      account.roles = {
        query: 100,
        'export': true,
        creat: true,
        update: true,
        remove: true,
        other: true
      };
    } else {
      account.roles = {
        query: json.account.post_query,
        'export': json.account.post_export,
        creat: roleManager[0] == 1,
        update: roleManager[1] == 1,
        remove: roleManager[2] == 1,
        other: roleManager[3] == 1
      };
    }
  },

  refreshMateData: function (callback) {
    // Mate.waiting('<h6>正在加载最新配置信息</h6>');
    var me = this;
    // console.log(APP);
    // console.log(this);
    Mate.ajax({
      url: Boot.appUrl('/mate.do'),
      success: function (json) {
        // console.log(json);
        APP.complete = true;
        // ============================================================构造权限按钮
        if (json.pushKey) {
          me.updateAccount(json);
          //Mate.setJsonStorage('CACHE',json);
          //console.log(json.account.login,json.pushKey)
        } else {
          json.account = {};
          json.account.wx_userface = '/resources/images/account.png';
        }
        me.data = json;
        me.updateViewData(false, json);
        // console.log(callback);
        return callback ? callback(json) : false;
      },
      failure: function (json) {
        Mate.error(
          json.message,
          function () {
            window.location.reload()
          }
        );
      }
    });
  },

  pushCount: 0,

  pushConnect: function () {
    var me = this,
      json = this.data;
    if (me.pushCount < 3) {
      PushService.connect({
        url: 'wss://' + Boot.serviceDomain,
        login: json.account.login,
        token: json.pushKey,
        isManager: true
        //ignore:[]
      });
      me.pushCount += 1
      //console.log(me.pushCount)
    } else {
      console.log('3 次联机无效')
    }
  },

  pushStart: function () {
    var me = this;
    me.pushConnect();
    PushService.addEventListener('error', function (e) {
      if (e.message) {
        console.log(e.message)
      }
      //me.pushConnect();
    });
    PushService.addEventListener('close', function (e) {
      if (e.message) {
        console.log(e.message)
      }
      window.setTimeout(function () {
        me.pushConnect();
        console.log('close', me.pushCount)
      }, 1000 * 60 * 3)
    });


    var storeGroup = function (storeId) {
        return Ext.create('Ext.data.Store', {
          storeId: storeId,
          model: 'APP.model.mt4.positions',
          sorters: {property: 'objects', direction: 'ASC'}
        })
      },
      storeLogin = storeGroup('mt4TradeGroupByLogin'),
      storeAgent = storeGroup('mt4TradeGroupByAgent'),
      storeSymbol = storeGroup('mt4TradeGroupBySymbol');
    PushService.ready(function () {
      var buffers = PushService.getBuffer();
      // console.log(buffers);

      var dataLogin = buffers.getSummaryWithUser(),
        dataAgent = buffers.getSummaryWithAgent(),
        dataSymbol = buffers.getSummaryWithSymbol();

      storeLogin.setData(dataLogin);
      storeAgent.setData(dataAgent);
      storeSymbol.setData(dataSymbol);

      if (!Ext.touch) {
        Ext.TaskManager.start({
          run: function () {
            var dataLogin = buffers.getSummaryWithUser(),
              dataAgent = buffers.getSummaryWithAgent(),
              dataSymbol = buffers.getSummaryWithSymbol();
            storeLogin.setData(dataLogin);
            storeAgent.setData(dataAgent);
            storeSymbol.setData(dataSymbol);
//						Ext.Array.each(buffers.getSummaryWithUser(),function(item){
//							var record=storeLogin.getById(item.objects);
//								record?record.set(item):storeLogin.add(item);
//						});
//						Ext.Array.each(buffers.getSummaryWithAgent(),function(item){
//							var record=storeAgent.getById(item.objects);
//								record?record.set(item):storeAgent.add(item);
//						});
//						Ext.Array.each(buffers.getSummaryWithSymbol(),function(item){
//							var record=storeSymbol.getById(item.objects);
//								record?record.set(item):storeSymbol.add(item);
//						});
          },
          interval: 100
        });
      }
    });
  },

  init: function () {
    // console.log(Worker);
    if (typeof(Worker) === 'undefined') {
      Mate.error('<h6>浏览器版本过低</h6>请升级您的浏览器后继续...');
    }
    Ext.Date.formatCodes.a = "(this.getHours() < 12 ? 'AM' : 'PM')";
    Ext.Date.formatCodes.A = "(this.getHours() < 12 ? 'AM' : 'PM')";
    Ext.apply(Ext.Date, {
      format: function (date, format) {
        var utilDate = Ext.Date,
          formatFunctions = utilDate.formatFunctions;
        if (!date) {
          return '';
        }
        // if (!isNaN(date) && date.toString().length === 10) {
        //   date = date * 1000
        // }
        if (!Ext.isDate(date)) {
          date = new Date(date);
        }
        var utc = date.getTime(),
          localTimeZone = -(new Date().getTimezoneOffset() / 60),
          timeZone = Mate.getCache('settings/timeZone') || 8;
        // 计算的区时 = 已知区时 -（已知区时的时区 - 要计算区时的时区），（注：东时区为正，西时区为负）
        date = utc - (3600000 * (localTimeZone - timeZone));
        date = new Date(date);
        // console.log(formatFunctions[format]);
        // if (formatFunctions[format] === undefined) {
        //   utilDate.createFormat(format);
        // }
        if (formatFunctions[format] == null) {
          utilDate.createFormat(format);
        }
        return formatFunctions[format].call(date);
      }
    });
  }

  // onAppUpdate: function () {
  //   window.location.reload();
  //   Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
  //     function (choice) {
  //       if (choice === 'yes') {
  //         Mate.clearStorage();
  //         window.location.reload();
  //       }
  //     }
  //   );
  // }
});
