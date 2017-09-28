Ext.define('APP.store.resources.allot.total',{
    extend:'APP.store.cross',
	alias:'store.resources.allot.total',
	autoLoad:false,
	//remoteSort:true,
	//grouper:{groupFn:function(record){return Ext.Date.format(record.data.date,'Y-m')},property:'date',direction:'DESC'},		
	sorters:[{property:'teamid',direction:'ASC'},{property:'staffid',direction:'ASC'},{property:'no',direction:'DESC'}],
	groupField:'date',
	groupDir:'DESC',
	proxy:{
		url:Boot.appUrl('/sd/resources/allot/getRecordTotal.do')
	}	
});
