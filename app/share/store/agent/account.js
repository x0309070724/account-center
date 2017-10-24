Ext.define('APP.store.agent.account', {
  extend: 'APP.store.cross',
  alias: 'store.agent.account',
  proxy: {
    url: Boot.appUrl('/agent/account/getLowerLogin.do')
  }
});
