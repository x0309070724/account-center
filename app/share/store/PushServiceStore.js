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
    // extraParams: {sp: 'SP_VMS_TRADE_TREND'}
  },
  listeners: {
    load: function (store, records, successful, operation, eOpts) {
      var storeSymbol = Ext.getStore('mt4TradeGroupBySymbol');

      storeSymbol.filterBy(function (record) {
        record.data._field = store.proxy.extraParams._field;
        return true;
      });
      store.setData(storeSymbol.getData().items);

      // console.log(storeSymbol.getData().items);
      // var items = storeSymbol.getData().items;
      //
      // console.log(storeSymbol);
      // console.log(items);
      // console.log(items.length);
      // for (var i = 0, len = items.length; i < len; i++) {
      //   var data = items[i].data;
      //   data._field = store.proxy.extraParams._field;
      //   console.log(data._field);
      // }
      // PushService.ready(function () {
      //   // console.log(111);
      //   var buffers = PushService.getBuffer(),
      //     datas = buffers.getSummaryWithSymbol();
      //   for (var i = 0, len = datas.length; i < len; i++) {
      //     var data = datas[i];
      //     data._field = store.proxy.extraParams._field;
      //   }
      //   store.setData(datas);
        // console.log(store);
        // console.log(datas);
      // })
    }
  }
});
