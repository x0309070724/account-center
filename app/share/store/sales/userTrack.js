Ext.define('APP.store.sales.userTrack',{
    extend:'APP.store.cross',
	alias:'store.sales.uerTrack',
	mobile:'APP.model.sales.track',
	//sorters:[{property:'id',direction:'DESC'}],
	proxy:{
		url:Boot.appUrl('/sd/sales/getUserTrack.do')
	}
});
