Ext.define('APP.store.agent.record', {
  extend: 'APP.store.summary',
  alias: 'store.agent.record',
  proxy: {
    url: Boot.appUrl('/agent/account/getApply.do')
  },
  listeners: {
    load: function (store, records, successful, operation, eOpts) {
      this.summary(store, records, successful, operation, eOpts);
      console.log(store);
    }
  }
});
