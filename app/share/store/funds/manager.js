Ext.define('APP.store.funds.manager',{
    extend:'APP.store.cross',
	alias:'store.funds.manager',
	model:'APP.model.account.funds',
	sorters:[{property:'id',direction:'DESC'}],
	grouper:{groupFn:function(record){return Ext.Date.format(record.data.audit_time,'Y-m-d')},property:'audit_time',direction:'DESC'},		
	loadEvent:{mt4Sync:{tag:'account'}},
	proxy:{
		url:Boot.appUrl('/trade/funds/getRecord.do'),
		extraParams:{}
	}
});
