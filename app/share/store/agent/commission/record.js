Ext.define('APP.store.agent.commission.record', {
  extend: 'APP.store.cross',
  alias: 'store.agent.commission.record',
  proxy: {
    url: Boot.appUrl('/agent/history/getRecord.do'),
    extraParams: {}
  }
});
