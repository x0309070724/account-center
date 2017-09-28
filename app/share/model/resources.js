Ext.define('APP.model.resources',{
	extend:'Ext.data.Model',
	idProperty:'mobile',
	fields:[
		{name:'id',type:'int'},
		{name:'mobile',type:'string'},
		{name:'call_firsttime',type:'date'},
		{name:'call_lasttime',type:'date'},
		{name:'track_time',type:'date'},
		
		{name:'track_explain',type:'string'},
		{name:'reserve_explain',type:'string'}
	]
});

