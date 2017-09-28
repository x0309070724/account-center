Ext.define('APP.view.sd.main.results', {
  extend: 'Ext.Container',
  xtype: 'sdMainResults',
  controller: 'sd',
  scrollable: true,
  defaults: {scrollable: false},
  items: [
    {
      xtype: 'container', userCls: 'x-ui-color-panel', height: 220, items: [
      {
        xtype: 'container',
        userCls: 'x-ui-user-icon',
        items: [{xtype: 'image', height: 100, width: 100, alt: '', bind: {src: '{account.wx_userface}'}}],
        bind: {html: '<p>{account.namecn} {account.name}</p><p>{account.team_name} {account.post_name}</p>'}
      }
    ]
    },
    {xtype: 'navList', type: 'box', navigation: 10300201, hideTitle: false},
    {xtype: 'navList', type: 'list', navigation: 10300202},
    {xtype: 'navList', type: 'list', navigation: 10300203}
  ]
});
