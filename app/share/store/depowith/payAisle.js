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
    timeout: 60000,
    // extraParams: {sp: 'SP_VMS_TRADE_TREND'}
  },
  listeners: {
    load: function (store, records, successful, operation, eOpts) {
      var payAisle = this.getProxy().extraParams.payAisle;
      var bank = store.data.items[0].data.bank;
      console.log(bank);
      switch (payAisle ) {
        case 'bank' : {
          store.setData(bank.plant);
        }
          break;
        // case 'complete' : {
        //   store.filter({property: 'audit', value: '1'});
        //   store.clearFilter(true);
        // }
        //   break;
        // case 'cancel' : {
        //   store.filter({property: 'audit', value: '-2'});
        //   store.clearFilter(true);
        //   // store.clearFilter(true);
        // }
        //   break;
        // case 'pending' : {
        //   store.filter({property: 'audit', value: '0'});
        //   store.clearFilter(true);
        // }
        //   break;
        // case 'all' : {
        //   store.clearFilter();
        //   // store.filter({property: 'audit', value: '0'});
        // }
        //   break;
      }
    }
  }
});
