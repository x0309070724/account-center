Ext.define('APP.store.analysis.trade.statistics', {
  extend: 'APP.store.summary',
  alias: 'store.analysis.trade.statistics',
  model: 'APP.model.analysis',
  proxy: {
    url: Boot.appUrl('/analysis/getStatistics.do'),
    extraParams: {sp: 'SP_RD_TRADE_STATISTICS'}
  },
  listeners: {
    load: function (store, records, successful, operation, eOpts) {
      this.summary(store, records, successful, operation, eOpts);
    }
  }
});
