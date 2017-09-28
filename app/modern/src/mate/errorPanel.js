Ext.define('APP.mate.errorPanel',{
	extend:'Ext.Container',
	xtype:'errorPanel',
	cls:'x-ui-error',
	padding:0,
	margin:'10 0',
	hidden:true,
	tpl:['{message}'],
	data:{message:'My Message'}
});
