Ext.define('APP.store.analysis.results.statistics', {
  extend: 'APP.store.summary',
  alias: [
    'store.analysis.results.statistics'
  ],
  model: 'APP.model.analysis',
  proxy: {
    url: Boot.appUrl('/analysis/getStatistics.do'),
    extraParams: {sp: 'SP_SD_RESULTS_STATISTICS'}
  },
  listeners: {
    // Marks this store as needing a load. When the current executing event handler exits, this store will send a request
    // to load using its configured proxy.
    // Upon return of the data from whatever data source the proxy connected to, the retrieved Ext.data.Model will be
    // loaded into this store, and the optional callback will be called.
    load: function (store, records, successful, operation, eOpts) {
      this.summary(store, records, successful, operation, eOpts);
    }
  }
});
