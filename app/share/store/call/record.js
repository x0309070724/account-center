Ext.define('APP.store.call.record',{
    extend:'APP.store.cross',
	alias:'store.call.record',
	fields:[
		{name:'id',type:'int'},
		{name:'time',type:'date'}
	],
	sorters:[{property:'time',direction:'DESC'},{property:'id',direction:'DESC'}],
	grouper:{groupFn:function(record){return Ext.Date.format(record.data.time,'Y-m-d H:00 A')},property:'time',direction:'DESC'},		
	//groupField:'month',
	//groupDir:'DESC',
	remoteSort:true,
	proxy:{
		url:Boot.appUrl('/sd/call/getRecord.do'),
		extraParams:{}
	}	
});
