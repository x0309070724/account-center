Ext.define('APP.view.sd.main.sales', {
  extend: 'Ext.Container',
  xtype: 'sdMainSales',
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
//		{xtype:'container',height:500,defaults:{xtype:'button',margin:3,iconCls:'f-mt mt-resources',text:'Button'},items:[
//			{ui:'border blue'},
//			{ui:'border red'},
//			{xtype:'box',width:'100%',height:1},
//
//			{ui:'radius blue'},
//			{ui:'radius red'},
//			{xtype:'box',width:'100%',height:1},
//
//			{ui:'medium border blue'},
//			{ui:'medium border red'},
//			{xtype:'box',width:'100%',height:1},
//
//			{ui:'medium radius blue'},
//			{ui:'medium radius red'},
//			{xtype:'box',width:'100%',height:1},
//
//			{ui:'large border blue'},
//			{ui:'large border red'},
//			{xtype:'box',width:'100%',height:1},
//
//			{ui:'large radius blue'},
//			{ui:'large radius red'},
//			{xtype:'box',width:'100%',height:1},
//
//			{ui:'medium blue background'},
//			{ui:'medium red background'},
//			{xtype:'box',width:'100%',height:1},
//
//		]},
    //{xtype:'navList',type:'box',navigation:1001},
    {xtype: 'navList', type: 'box', navigation: 10300101, hideTitle: false},
//		{xtype:'navList',type:'box',navigation:1002,hideTitle:false},
//		{xtype:'navList',type:'list',navigation:1003},
//		{xtype:'navList',type:'list',navigation:1004}
  ]
});
