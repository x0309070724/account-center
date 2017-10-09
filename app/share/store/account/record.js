Ext.define('APP.store.account.record', {
  extend: 'Ext.data.Store',
  alias: 'store.account.record',
  autoLoad: false,
  remoteSort: false,
  pageSize: 30,
  proxy: {
    type: 'jsonp',
    noCache: false,
    timeout: 60000,
    ecacheString: '_',
    // reader: {type: 'json', rootProperty: ''}
    url: Boot.appUrl('/mate.do'),
    extraParams: {}
  }
});
