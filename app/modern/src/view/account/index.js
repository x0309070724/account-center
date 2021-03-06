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
        items: [{xtype: 'image', height: 100, width: 100, alt: '', bind: {src: '/resources/images/extlogo.gif'}}],
        bind: {html: '<p>{account.login}</p><p>{account.name} {account.namecn}</p>'}
      }
    ]
    },
    {xtype: 'navList', navigation: 7001, hideTitle: false},
    {xtype: 'navList', userCls: 'x-ui-nav x-ui-mini', navigation: 7002, hideTitle: false},
    {xtype: 'navList', userCls: 'x-ui-nav x-ui-mini', navigation: 7003},
    {xtype: 'button', flex: 1, text: '安全退出', margin: '15 0', handler: 'onLogoutTap'}
  ],
  listeners: {}
});
