Ext.define('APP.store.agent.statistics', {
  extend: 'APP.store.cross',
  alias: 'store.agent.statistics',
  proxy: {
    url: Boot.appUrl('/agent/analysis/getStatistics.do'),
    extraParams: {
      sp: 'SP_VMS_TRADE_STATISTICS'
    }
  }
});
