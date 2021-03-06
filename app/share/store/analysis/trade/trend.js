Ext.define('APP.store.analysis.trade.trend', {
  extend: 'APP.store.summary',
  alias: 'store.analysis.trade.trend',
  model: 'APP.model.analysis',
  sorters: [{property: 'objects', direction: 'ASC'}],
  proxy: {
    url: Boot.appUrl('/analysis/getTrend.do'),
    extraParams: {sp: 'SP_VMS_TRADE_TREND'}
  },
  listeners: {
    load: function (store, records, successful, operation, eOpts) {
      this.summary(store, records, successful, operation, eOpts);
      console.log(store);
    }
  }
});
