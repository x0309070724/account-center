Ext.define('APP.view.sd.account.detail.index', {
  extend: 'Ext.tab.Panel',
  xtype: 'sdAccountDetailIndex',
  //title:'MT4MATE TOUCH',
  layout: 'card',
  controller: 'sd.account',
//	defaults:{
//		autoDestroy:true
//		//layout:{animation:{type:'cover',direction:'left'}},
//		//layout:{type:'card',animation:{type:'cover',direction:'left'}},
//		//layout:{type:'card',animation:{type:'flip'}},
//	},
  tabBar: {
    layout: {pack: 'center', align: 'center'},
    docked: 'bottom', border: true,
    defaults: {iconAlign: 'top', flex: 1}
  }
});
