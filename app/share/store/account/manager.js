Ext.define('APP.store.account.manager', {
  extend: 'APP.store.cross',
  alias: 'store.account.manager',
  autoLoad: false,
  remoteSort: false,
  model: 'APP.model.account.record',
  sorters: [{property: 'regdate', direction: 'DESC'}, {property: 'id', direction: 'DESC'}],
  grouper: {
    groupFn: function (record) {
      return Ext.Date.format(record.data.regdate, 'Y-m-d')
    }, property: 'regdate', direction: 'DESC'
  },
  loadEvent: {mt4Sync: true},
  proxy: {
    url: Boot.appUrl('/sd/account/manager/getRecord.do'),
    extraParams: {}
  }
});
