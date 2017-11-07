Ext.define('APP.store.depowith.config', {
  extend: 'APP.store.summary',
  alias: 'store.depowith.config',
  model: 'APP.model.account.config',
  proxy: {
    url: Boot.appUrl('/withdrawal/getConfig.do')
  }
});
