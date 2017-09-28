Ext.define('APP.Application', {
  extend: 'Ext.app.Application',
  name: 'APP',
  requires: [
    // 'Ext.*',
    'Ext.app.*',
    'Ext.chart.*',
    // 'Ext.dataview.*',
    'Ext.data.*',
    'Ext.tree.*',
    'Ext.grid.*',
    'Ext.list.Tree',
    'Ext.Toast',
    'Ext.MessageBox',
    'Ext.dataview.pullrefresh.*',
    'Ext.plugin.PullRefresh',
    'Ext.plugin.ListPaging',
    'APP.*'
  ],
  // Array of views to require from AppName.view namespace and to generate getter methods for.
  views: [
    'controller',
    'main.navigationController',
    'main.navigation',
    'main.login',
    'main.main'
  ],
  controllers: [],
  // The default token to be used at application launch if one is not present. Often this is set to something like 'home'.
  defaultToken: 'main',
  navigation: [],
  launch: function () {
    // Ext.Msg.defaultAllowedConfig.showAnimation = true;
    // Ext.Msg.defaultAllowedConfig.hideAnimation = true;
    // var me = this;
    var navigation;
    // Ext.Viewport.setMasked({xtype: 'loadmask', message: '验证中...'});
    Ext.create('Ext.data.TreeStore', {
      storeId: 'nav',
      root: {expanded: true, children: oaNav.navigation}
    });
    Ext.Viewport.setViewModel(true);
    navigation = Ext.widget('mainNavigation');
    // Ext.Viewport.down('mainNavigation');
    Ext.Viewport.add(navigation);
    // Mate.alert('111111111111111');
    // Mate.showTask('111111111111111');
    // window.addEventListener('touchmove', function (e) {
    //   e.preventDefault();
    // });
    // ===============================================================微信返回菜单 监听
    window.addEventListener('popstate', function (e) {
      var hash = Ext.util.History.getHash();
      // window.location.hash
      // Mate.showTask(hash)
      if (hash == '') {
        if (typeof(wx) != 'undefined') {
          wx.closeWindow();
        }
      } else {
        // navigation.pop(1);
      }
      return false;
    }, true);
  },
  reLogin: function (callback) {
    var navigation = Ext.Viewport.down('mainNavigation');
    navigation.setActiveItem({xtype: 'login'});
  }
});
