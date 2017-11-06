Ext.define('APP.store.depowith.config', {
  extend: 'APP.store.cross',
  alias: 'store.depowith.config',
  proxy: {
    url: Boot.appUrl('/withdrawal/getConfig.do')
  }
});
