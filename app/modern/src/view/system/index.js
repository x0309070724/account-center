Ext.define('APP.view.system.index', {
  extend: 'Ext.Container',
  xtype: 'systemIndex',
  controller: 'system',
  scrollable: true,
  defaults: {scrollable: false},
  items: [
    {
      xtype: 'container', userCls: 'x-ui-color-panel', height: 220, items: [
      {
        xtype: 'container',
        userCls: 'x-ui-user-icon',
        items: [{xtype: 'image', height: 100, width: 100, alt: '', bind: {src: '/resources/images/extlogo.gif'}}],
        bind: {html: '<p>{account.login}</p><p>{account.property_name} {account.namecn}</p>'}
      }
    ]
    },
    {xtype: 'navList', navigation: 8001, hideTitle: true},
    {xtype: 'navList', userCls: 'x-ui-nav x-ui-mini', navigation: 8002, hideTitle: false},
    {xtype: 'navList', userCls: 'x-ui-nav x-ui-mini', navigation: 8004},
    {xtype: 'navList', userCls: 'x-ui-nav x-ui-mini', navigation: 8005},
    {xtype: 'button', flex: 1, text: '安全退出', margin: '15 0', handler: 'onLogoutTap'}
  ],
  listeners: {
    painted: function () {
      // var account = APP.app.getAppData('account');
      // console.log(account.login);
    }
    // Fires whenever this Element actually becomes visible (painted) on the screen. This is useful when you need to
    // perform 'read' operations on the DOM element, i.e: calculating natural sizes and positioning.
    // painted: function (el) {
    // var store = Ext.getStore('nav'),
    //   account = APP.app.getAppData('account');
    // console.log(account.login);
    // account = {username: '666666', password: 'abc123456', roles: {query: 100}};
    // nodes = store.findNode('id', 8004);
    // records = nodes.getData().children;
    // store.findNode('id', 800401).set({value: account.mobile});
    // store.findNode('id', 800402).set({value: account.email});
    // store.findNode('id', 800403).set({value: account.wx_nickname});
    // store.findNode('id', 800404).set({value: account.qq});
    // }
  }
});
