Ext.define('APP.store.call.record.fake',{
    extend:'APP.store.cross',
	alias:'store.call.record.fake',
	fields:[
		{name:'time',type:'date'},
		{name:'firsttime',type:'date'},
		{name:'lasttime',type:'date'}
	],
	pageSize:false,
	remoteSort:true,
	sorters:[{property:'time',direction:'DESC'},{property:'id',direction:'DESC'}],
	grouper:{groupFn:function(record){return Ext.Date.format(record.data.time,'Y-m-d')},property:'time',direction:'DESC'},		
	proxy:{
		url:Boot.appUrl('/sd/call/getFake.do'),
		extraParams:{}
	}	
});
