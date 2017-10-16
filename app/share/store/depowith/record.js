Ext.define('APP.store.depowith.record', {
  extend: 'APP.store.summary',
  alias: 'store.depowith.record',
  // model: 'APP.model.analysis',
  // sorters: [{property: 'objects', direction: 'ASC'}],
  grouper: {
    groupFn: function (record) {
      return Ext.Date.format(record.data.time, 'Y-m-d')
    }, property: 'time', direction: 'DESC'
  },
  proxy: {
    url: Boot.appUrl('/funds/getRecord.do')
    // extraParams: {sp: 'SP_VMS_TRADE_TREND'}
  },
  listeners: {
    load: function (store, records, successful, operation, eOpts) {
      this.summary(store, records, successful, operation, eOpts);
    }
  }
});
