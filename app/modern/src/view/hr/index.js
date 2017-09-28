Ext.define('APP.view.hr.index', {
  extend: 'Ext.Container',
  xtype: 'hrIndex',
  controller: 'hr',
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
    {xtype: 'navList', type: 'list', userCls: 'x-ui-nav x-ui-mini', navigation: 3001}
    // {xtype: 'navList', type: 'box', navigation: 3002},
    // {xtype: 'navList', type: 'box', navigation: 3003}
  ]
});
