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
      var _field = store.data.items[0].data._field || '';
      console.log(_field );
      switch (_field ) {
        case 'reject' : {
          store.filter({property: 'audit', value: '-1'});
          store.clearFilter(true);
        }
          break;
        case 'complete' : {
          store.filter({property: 'audit', value: '1'});
          store.clearFilter(true);
        }
          break;
        case 'cancel' : {
          store.filter({property: 'audit', value: '-2'});
          store.clearFilter(true);
          // store.clearFilter(true);
        }
          break;
        case 'pending' : {
          store.filter({property: 'audit', value: '0'});
          store.clearFilter(true);
        }
          break;
        case 'all' : {
          store.clearFilter();
          // store.filter({property: 'audit', value: '0'});
        }
          break;
      }
      // console.log(store);
    }
  }
});
