Ext.define('APP.store.sales.analysis.results',{
    extend:'APP.store.summary',
	alias:'store.sales.analysis.results',
	model:'APP.model.analysis',
	sorters:[{property:'objects',direction:'ASC'}],
	proxy:{
		url:Boot.appUrl('/analysis/getTrend.do'),
		extraParams:{sp:'SP_SD_RESULTS_TREND',staff:1}
	},
	listeners:{
		load:function(store,records,successful,operation,eOpts){
			this.summary(store,records,successful,operation,eOpts);
		}
	}
});
