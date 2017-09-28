Ext.define('APP.view.account.index', {
  extend: 'Ext.Container',
  xtype: 'accountIndex',
  controller: 'account',
  scrollable: true,
  defaults: {scrollable: false},
  items: [
    {
      xtype: 'container', userCls: 'x-ui-color-panel', height: 220, items: [
      {
        xtype: 'container',
        userCls: 'x-ui-user-icon',
        items: [{xtype: 'image', height: 100, width: 100, alt: '', bind: {src: '{account.wx_userface}'}}],
        bind: {html: '<p>{account.namecn} {account.name}</p></p>{account.team_name} {account.post_name}</p>'}
      }
    ]
    },
    {xtype: 'navList', navigation: 8001, hideTitle: true},
    {xtype: 'navList', userCls: 'x-ui-nav x-ui-mini', navigation: 8002, hideTitle: true},
    {xtype: 'navList', userCls: 'x-ui-nav x-ui-mini', navigation: 8004},
    {xtype: 'navList', userCls: 'x-ui-nav x-ui-mini', navigation: 8005},
    {xtype: 'button', flex: 1, text: '安全退出', margin: '15 0', handler: 'onLogoutTap'}
  ],
  listeners: {
    painted: function (el) {
      var store = Ext.getStore('nav'),
        account = APP.app.getAppData('account');
      // nodes = store.findNode('id', 8004);
      // records = nodes.getData().children;
      store.findNode('id', 800401).set({value: account.mobile});
      store.findNode('id', 800402).set({value: account.email});
      store.findNode('id', 800403).set({value: account.wx_nickname});
      store.findNode('id', 800404).set({value: account.qq});
    }
  }
});
