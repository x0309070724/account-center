Ext.define('APP.store.rd.trade.history', {
  extend: 'APP.store.cross',
  alias: 'store.rdTradeHistory',
  model: 'APP.model.trade.record',
  sorters: [{property: 'close_time', direction: 'DESC'}, {property: 'id', direction: 'DESC'}],
  proxy: {
    url: Boot.appUrl('/history/getRecord.do'),
    extraParams: false
  }
});
