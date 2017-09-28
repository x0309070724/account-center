Ext.define('APP.mate.overlay',{
	extend:'Ext.Panel',
	alias:'widget.overlay',
	//xtype:'overlay',
	modal:true,
	shadow:true,
	hideOnMaskTap:true,
	showAnimation:{type:'popIn',duration:250,easing:'ease-out'},
	hideAnimation:{type:'popOut',duration:250,easing:'ease-out'},
	centered:true,
	width:'88%',
	height:'78%',
	styleHtmlContent:false,
	padding:10,
	scrollable:true,
	header:{
		titleAlign:'center',
		title:'Overlay Title'
	}
//	items:[
//		{docked:'top',xtype:'toolbar',ui:'dark'}
//	]
})
