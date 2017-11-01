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
    {xtype: 'navList', navigation: 8001, hideTitle: false},
    {xtype: 'navList', userCls: 'x-ui-nav x-ui-mini', navigation: 8002, hideTitle: false},
    {xtype: 'navList', userCls: 'x-ui-nav x-ui-mini', navigation: 8004},
    {xtype: 'navList', userCls: 'x-ui-nav x-ui-mini', navigation: 8005},
    {xtype: 'button', flex: 1, text: '安全退出', margin: '15 0', handler: 'onLogoutTap'}
  ],
  listeners: {
    painted: function () {
      // var account = APP.app.getAppData('account');
    }
  }
});
