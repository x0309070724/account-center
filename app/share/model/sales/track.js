Ext.define('APP.model.sales.track',{
	extend:'Ext.data.Model',
	idProperty:'id',
	fields:[
		{name:'id',type:'int'},
		{name:'mobile',type:'string'},
		{name:'track',type:'int'},
		{name:'track_count',type:'int'},
		{name:'track_day',type:'int'},
		{name:'tag',type:'string'},
		{name:'reserve_date',type:'string'},
		{name:'reserve_time',type:'string'},
		{name:'reserve_explain',type:'string'},
		{name:'time',type:'date'},
		{name:'explain',type:'string'}
	]
});

