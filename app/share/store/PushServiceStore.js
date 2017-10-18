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
    ecacheString: '_',
    // 这里mate.do随便写的，因为一定要写url，而url又要有东西
    url: Boot.appUrl('/mate.do')
    // extraParams: {sp: 'SP_VMS_TRADE_TREND'}
  },
  listeners: {
    load: function (store, records, successful, operation, eOpts) {

      var datas = Ext.getStore('mt4TradeGroupBySymbol').getData();


      // console.log(this.getStore('mt4TradeGroupByLogin'));

      console.log(Ext.getStore(datas));

      PushService.ready(function () {
        console.log(111);
        var buffers = PushService.getBuffer(),
          datas = buffers.getSummaryWithSymbol();
        for (var i = 0, len = datas.length; i < len; i++) {
          var data = datas[i];
          data._field = store.proxy.extraParams._field;
        }
        store.setData(datas);
        console.log(store);
        // console.log(datas);
      })
    }
  }
});
