Ext.define('APP.store.agent.record', {
  extend: 'APP.store.summary',
  alias: 'store.agent.record',
  // grouper: {
  //   groupFn: function (record) {
  //     return Ext.Date.format(record.data.time, 'Y-m-d')
  //   }, property: 'time', direction: 'DESC'
  // },
  proxy: {
    url: Boot.appUrl('/agent/account/getApply.do')
    // extraParams: {sp: 'SP_VMS_TRADE_TREND'}
  },
  listeners: {
    load: function (store, records, successful, operation, eOpts) {
      this.summary(store, records, successful, operation, eOpts);

      console.log(store);

      // var _field = store.data.items[0].data._field || '';
      // console.log(_field );
      // switch (_field ) {
      //   case 'reject' : {
      //     store.filter({property: 'audit', value: '-1'});
      //     store.clearFilter(true);
      //   }
      //     break;
      //   case 'complete' : {
      //     store.filter({property: 'audit', value: '1'});
      //     store.clearFilter(true);
      //   }
      //     break;
      //   case 'cancel' : {
      //     store.filter({property: 'audit', value: '-2'});
      //     store.clearFilter(true);
      //     // store.clearFilter(true);
      //   }
      //     break;
      //   case 'pending' : {
      //     store.filter({property: 'audit', value: '0'});
      //     store.clearFilter(true);
      //   }
      //     break;
      //   case 'all' : {
      //     store.clearFilter();
      //     // store.filter({property: 'audit', value: '0'});
      //   }
      //     break;
      // }
    }
  }
});
