Ext.define('APP.view.transition.index', {
  extend: 'Ext.Container',
  xtype: 'transitionIndex',
  controller: 'transition',
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
    {xtype: 'navList', navigation: 6001, hideTitle: false},
    {xtype: 'navList', userCls: 'x-ui-nav x-ui-mini', navigation: 6002, hideTitle: false},
    {xtype: 'navList', userCls: 'x-ui-nav x-ui-mini', navigation: 6003}
  ],
  listeners: {}
});
