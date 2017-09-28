Ext.define('APP.store.resources.filter',{
    extend:'APP.store.cross',
	alias:'store.resources.filter',
	model:'APP.model.resources',
	sorters:[{property:'operator_time',direction:'DESC'}],
	grouper:{groupFn:function(record){return Ext.Date.format(record.data.operator_time,'Y-m-d')},property:'operator_time',direction:'DESC'},		
	proxy:{
		url:Boot.appUrl('/sd/resources/manager/getFilter.do'),
		extraParams:{},
		reader:{type:'json',rootProperty:'plant',totalProperty:'totalProperty'}
	}
});
