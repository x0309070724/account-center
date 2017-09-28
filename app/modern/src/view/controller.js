Ext.define('APP.view.controller', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.baseController',
  onNavInitialize: function (me) {
    if (me.type === 'box') {
      me.setUserCls('x-ui-nav-box');
      me.setItemCls('x-ui-circle');
      me.setItemRipple({color: 'blue'});
    }
    if (me.navigation) {
      var store = Ext.getStore('nav'),
        node = store.findNode('id', me.navigation);
      if (node) {
        if (me.hideTitle) {
          me.setHtml('');
        } else {
          me.setHtml('<h3 class="x-ui-title">' + node.data.text + '</h3>');
        }
        // The initial set of data to apply to the tpl to update the content area of the Component.
        me.setData(node.childNodes);
        // console.log(node.childNodes);
      } else {
        me.setHtml(false);
        me.setHidden(true);
      }
    }
  },
  onNavItemtap: function (list, idx, el, record) {
    // Stops layouts from happening in the whole framework.
    // It's useful to suspend the layout activity while updating multiple components and containers:
    Ext.suspendLayouts();
    if (record.data.view) {
      this.redirectTo('#' + record.data.id);
    } else if (record.data.handler) {
      return this[record.data.handler](record)
    }
    // Resumes layout activity in the whole framework.
    Ext.resumeLayouts(true);
  },
  onNavButtontap: function (button) {
    if (button.routeId) {
      this.redirectTo('#' + button.routeId);
    } else if (button.handler) {
      return this[button.handler]()
    }
  },
  onNavigationPop: function (button) {
    // console.log('base controller');
    var navigation = button.up('navigationview');
    navigation.pop();
  },
  /*NVABAR MENU*/
  onRefreshSegmentedButtonToggle: function (container, button, pressed) {
    var view = this.getView();
    if (pressed) {
      var store = view.getStore();
      // store.removeAll();
      Ext.apply(store.getProxy().getExtraParams(), button.getData());
      store.loadPage(1);
    }
  },
  // =================================================================================================Store Apply后 LOAD
  onApplyStoreLoad: function (view) {
    // var me = this;
    var store = view.getStore(),
      params = view.parameter || {};
    Ext.apply(store.getProxy().getExtraParams(), params);
    store.loadPage(1);
//		store.loadPage(1,{
//			callback:function(records,operation,success){
////				var params=store.getProxy().getExtraParams(),
////					boxDatepart=view.down('boxdatepart'),
////					boxTotal=view.down('boxtotal'),
////					cartesian=view.down('cartesian');
////
////				if(cartesian){
////					var chartData=[];
////					Ext.Array.each(records,function(record,i){
////						chartData.push({
////							label:record.data.objects,
////							value:record.data.funds_net_deposit
////						});
////					})
////					cartesian.getStore().setData(chartData);
////				}
////				if(boxDatepart){
////					boxDatepart.setHidden(!params.startdate);
////					if(params.startdate==params.enddate){
////						var html='<b>'+params.enddate+'<b>'
////					}else{
////						var html='From <b>'+params.startdate+'</b> To <b>'+params.enddate+'</b>'
////					}
////					boxDatepart.setHtml(html);
////				}
////				if(boxTotal){
////					boxTotal.setHidden(!store.totalValue);
////					boxTotal.setHtml(store.totalValueString);
////				}
//			}
//		});
  },
  // ==========================================================================================================MAIN INIT
  onMainInitialize: function (tabpanel) {
    var account = APP.app.getAppData('account'),
      roles = account.roles,
      items = [];
    // console.log(account);
    switch (parseInt(roles.query)) {
      // ===============================================================总监
      case 1:
      case 100: {
        items = [
          {root: 1000, xtype: 'sdIndex', title: '销售', iconCls: 'f-mt mt-access', userCls: 'x-ui-corange'},
          {root: 2000, xtype: 'rdIndex', title: '交易', iconCls: 'f-mt mt-chart-4', userCls: 'x-ui-gold'},
          {root: 3000, xtype: 'hrIndex', title: '通讯录', iconCls: 'f-mt mt-additve', userCls: 'x-ui-gold'},
          {root: 4000, xtype: 'analysisIndex', title: '设置', iconCls: 'f-mt mt-chart-pie-3', userCls: 'x-ui-orange'},
          {root: 5000, xtype: 'accountIndex', title: '我', iconCls: 'f-mt mt-account-audit', userCls: 'x-ui-green'}
        ];
      }
        break;
      default: {
        switch (account.departmentid) {
          // ===============================================================销售
          case 103: {
            items = [
              {root: 103001, xtype: 'sdMainSales', title: '销售', iconCls: 'f-mt mt-access', userCls: 'x-ui-blue'},
              {root: 103002, xtype: 'sdMainResults', title: '业绩', iconCls: 'f-mt mt-chart-pie-3', userCls: 'x-ui-blue'},
              {root: 5000, xtype: 'accountIndex', title: '我', iconCls: 'f-mt mt-account-audit', userCls: 'x-ui-green'}
            ];
          }
            break;
          // ===============================================================团长
          case 104: {
          }
            break;
          // ===============================================================销售员
          default: {
          }
            break;
        }
      }
        break;
    }
    if (!items.length) {
      Mate.error('账户无测试权限，请等待开放...', function (choice) {
        if (typeof(wx) !== 'undefined') {
          wx.closeWindow();
        } else {
          window.location.href = '/wechat/index.html#/authorize/index.html';
        }
      });
      return false;
    }
    tabpanel.add(items);
    // Retrieves the first descendant of this container which matches the passed selector.
    var tabbar = tabpanel.down('tabbar'),
      state = Mate.getCache('touch/state') || {},
      activeItem = state.navigation ? tabpanel.down('[root=' + state.navigation + ']') : 0;
    tabpanel.setActiveItem(activeItem);
    tabbar.setUserCls(tabpanel.getActiveItem().getUserCls());
  },
  // ===========================================================================================MAIN 选项卡切换时 记录缓存
  onMainTabChange: function (tab, e) {
    // 不传第二个参数，浏览器自动配置时间，在IE，FireFox中，第一次配可能给个很大的数字，100ms上下，往后会缩小到最小时间间隔，
    // Safari，chrome，opera则多为10ms上下。
    window.setTimeout(function () {
      var main = tab.up('main'),
        tabbar = main.down('tabbar'),
        active = main.getActiveItem();
      Mate.updateCache('touch', {state: {navigation: active.root}});
      tabbar.setUserCls(active.getUserCls());
    });
  }
});
