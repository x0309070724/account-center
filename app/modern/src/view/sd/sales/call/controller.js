Ext.define('APP.view.sd.sales.call.controller',{
    extend:'APP.view.controller',
	alias:'controller.sd.sales.call',
	
	onTrendInitialize:function(view){
		var store=view.getStore(),
			params=view.parameter;
		switch(view.parameter.datepart){
			case 'year':{
				params.startdate=Ext.Date.format(Ext.Date.add(new Date(),Ext.Date.DAY,-5),'Y')
				params.enddate=Ext.Date.format(new Date(),'Y')
			}break;
			case 'month':{
				params.startdate=Ext.Date.format(Ext.Date.add(new Date(),Ext.Date.MONTH,-11),'Y-m'),
				params.enddate=Ext.Date.format(new Date(),'Y-m')
			}break;
			case 'week':{
				params.startdate=Ext.Date.format(Ext.Date.add(new Date(),Ext.Date.MONTH,-1),'Y-m');
				params.enddate=Ext.Date.format(new Date(),'Y-m');
			}break;
			case 'day':{
				params.startdate=Ext.Date.format(Ext.Date.add(new Date(),Ext.Date.DAY,-15),'Y-m-d')
				params.enddate=Ext.Date.format(new Date(),'Y-m-d')
			}break;
		}	
		Ext.apply(store.getProxy().getExtraParams(),params);
		store.load();
	},
	
	
	onTrendItemtap:function(list,idx,el,record){
		var navigation=list.up('navigationview');
		this.module=Ext.widget('analysisOperationDetail',{title:record.data.objects});
		navigation.push(this.module);
		this.module.setData(record)
	}
	
});  
