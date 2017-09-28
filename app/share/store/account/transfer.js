Ext.define('APP.store.account.transfer',{
    extend:'APP.store.cross',
	alias:'store.account.transfer',
	//model:'APP.model.account.record',
	fields:[
		{name:'id',type:'int'},
		{name:'effective_date',type:'string'},
		{name:'time',type:'date'},
		{name:'account_regdate',type:'date'}
	],
	sorters:[{property:'effective_date',direction:'DESC'},{property:'id',direction:'DESC'}],
	//grouper:{groupFn:function(record){return Ext.Date.format(record.data.effective_date,'Y-m-d')},property:'effective_date',direction:'DESC'},		
	groupField:'effective_date',	
	groupDir:'DESC',	
	proxy:{
		url:Boot.appUrl('/sd/account/transfer/getRecord.do')
	}
});
