Ext.define('APP.store.transition.position.order', {
  extend: 'Ext.data.Store',
  alias: 'store.transition.position.order',
  autoLoad: false,
  remoteSort: false,
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
      var storeTrades = Ext.getStore('mt4TradeGroupByTrades');
      storeTrades.filterBy(function (record) {
        record.data._field = store.proxy.extraParams._field;
        record.data.menu = store.proxy.extraParams.menu;
        return true;
      });
      store.setData(storeTrades.getData().items);
      var _field = store.getProxy().getExtraParams()._field;
      // console.log(_field);
      switch (_field) {
        case 'pending' : {
          store.filterBy(function (record) {
            // console.log(record);
            switch (record.data.cmd) {
              case 2:
              case 3:
              case 4:
              case 5:
                return true;
                break;
            }
          });
          store.clearFilter(true);
        }
          break;
        case 'order' : {
          store.filterBy(function (record) {
            switch (record.data.cmd) {
              case 0:
              case 1:
              case 6:
              case 7:
                return true;
                break;
            }
          });
          store.clearFilter(true);
        }
          break;
        case 'all' : {
          store.clearFilter(true);
        }
          break;
      }
    }
  }
});
