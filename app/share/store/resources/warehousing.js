Ext.define('APP.store.resources.warehousing',{
    extend:'APP.store.cross',
	alias:'store.resources.warehousing',
	pageSize:false,
	sorters:[{property:'time',direction:'DESC'}],
	proxy:{
		url:Boot.appUrl('/sd/resources/storage/getWarehousing.do'),
		extraParams:{}
	}
});


