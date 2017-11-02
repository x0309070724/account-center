Ext.define('APP.store.PushServiceStore', {
  extend: 'Ext.data.Store',
  alias: 'store.PushServiceStore',
  autoLoad: false,
  remoteSort: false,
  pageSize: 30,
  loadEvent: {
    mt4Sync: false,
    selectFirstRow: false
  },
  proxy: {
    type: 'jsonp',
    noCache: false,
    timeout: 60000,
    // 这里mate.do随便写的，因为一定要写url，而url又要有东西
    url: Boot.appUrl('/mate.do')
  },
  listeners: {
    load: function (store, records, successful, operation, eOpts) {
      var storeSymbol = Ext.getStore('mt4TradeGroupBySymbol');
      storeSymbol.filterBy(function (record) {
        record.data._field = store.proxy.extraParams._field;
        return true;
      });
      store.setData(storeSymbol.getData().items);
      console.log(store);
    }
  }
});
