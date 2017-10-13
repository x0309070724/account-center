Ext.define('APP.store.history.record', {
  extend: 'APP.store.summary',
  alias: 'store.history.record',
  // model: 'APP.model.analysis',
  // sorters: [{property: 'objects', direction: 'ASC'}],
  proxy: {
    url: Boot.appUrl('/history/getRecord.do')
    // extraParams: {sp: 'SP_VMS_TRADE_TREND'}
  },
  listeners: {
    load: function (store, records, successful, operation, eOpts) {
      this.summary(store, records, successful, operation, eOpts);
    }
  }
});
