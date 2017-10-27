Ext.define('APP.store.account.bankCard', {
  extend: 'APP.store.cross',
  alias: 'store.account.bankCard',
  proxy: {
    url: Boot.appUrl('/account/getBankCard.do'),
    extraParams: {}
  }
});
