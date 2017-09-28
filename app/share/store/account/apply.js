Ext.define('APP.store.account.apply', {
  extend: 'APP.store.cross',
  alias: 'store.account.apply',
  model: 'APP.model.account.record',
  sorters: [{property: 'id', direction: 'DESC'}],
  grouper: {
    groupFn: function (record) {
      return Ext.Date.format(record.data.time, 'Y-m-d')
    }, property: 'time', direction: 'DESC'
  },
  proxy: {
    url: Boot.appUrl('/sd/account/apply/getRecord.do'),
    extraParams: {}
  }
});
