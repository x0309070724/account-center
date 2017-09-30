Ext.define('APP.store.account.record', {
  extend: 'Ext.data.Store',
  alias: 'store.account.record',
  autoLoad: false,
  remoteSort: false,
  pageSize:30,
  // model: 'APP.model.account.record',
  // sorters: [{property: 'regdate', direction: 'DESC'}, {property: 'id', direction: 'DESC'}],
  // grouper: {
  //   groupFn: function (record) {
  //     return Ext.Date.format(record.data.regdate, 'Y-m-d')
  //   }, property: 'regdate', direction: 'DESC'
  // },
  // loadEvent: {mt4Sync: true},
  proxy: {
    type:'jsonp',
    noCache:false,
    timeout:60000,
    ecacheString:'_',
    // reader:{type:'json',rootProperty:''}
    url: Boot.appUrl('/mate.do'),
    extraParams: {}
  }
});
