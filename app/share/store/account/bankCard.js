Ext.define('APP.store.account.bankCard', {
  extend: 'APP.store.cross',
  alias: 'store.account.bankCard',
  // model: 'APP.model.account.record',
  // sorters: [{property: 'id', direction: 'DESC'}],
  // grouper: {
  //   groupFn: function (record) {
  //     return Ext.Date.format(record.data.time, 'Y-m-d')
  //   }, property: 'time', direction: 'DESC'
  // },
  proxy: {
    url: Boot.appUrl('/account/getBankCard.do'),
    extraParams: {}
  }
});
