Ext.define('APP.store.funds.apply', {
  extend: 'APP.store.cross',
  alias: 'store.funds.apply',
  model: 'APP.model.account.funds',
  sorters: [{property: 'id', direction: 'DESC'}],
  grouper: {
    groupFn: function (record) {
      return Ext.Date.format(record.data.time, 'Y-m-d')
    }, property: 'time', direction: 'DESC'
  },
  loadEvent: {mt4Sync: {tag: 'account'}},
  proxy: {
    url: Boot.appUrl('/trade/apply/getRecord.do'),
    extraParams: {}
  }
});
