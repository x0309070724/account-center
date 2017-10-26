Ext.define('APP.store.depowith.payAisle', {
  extend: 'Ext.data.Store',
  alias: 'store.depowith.payAisle',
  autoLoad: false,
  remoteSort: false,
  // model: 'APP.model.analysis',
  // sorters: [{property: 'objects', direction: 'ASC'}],
  // grouper: {
  //   groupFn: function (record) {
  //     return Ext.Date.format(record.data.time, 'Y-m-d')
  //   }, property: 'time', direction: 'DESC'
  // },
  proxy: {
    url: 'http://cashier.abc-123.co/getPayAisle.do',
    type: 'jsonp',
    noCache: false,
    timeout: 60000
    // extraParams: {sp: 'SP_VMS_TRADE_TREND'}
  },
  listeners: {
    load: function (store, records, successful, operation, eOpts) {
      var payAisle = this.getProxy().extraParams.payAisle;
      var bank = store.data.items[0].data.bank;
      var credit = store.data.items[0].data.credit;
      var app = store.data.items[0].data.app;
      console.log(store);
      console.log(payAisle);
      switch (payAisle) {
        case 'deposit' : {
          store.setData(bank.plant);
        }
          break;
        case 'credit' : {
          store.setData(credit.plant);
        }
          break;
        case 'app' : {
          store.setData(app.plant);
        }
          break;
      }
    }
  }
});
