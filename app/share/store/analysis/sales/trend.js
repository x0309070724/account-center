Ext.define('APP.store.analysis.sales.trend',{
    extend:'APP.store.cross',
	alias:'store.analysis.sales.trend',
	proxy:{
		url:Boot.appUrl('/analysis/getTrend.do'),
		extraParams:{sp:'SP_SD_SALES_TREND'}
	}
});
