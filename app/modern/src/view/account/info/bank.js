Ext.define('APP.view.account.info.bank', {
  extend: 'Ext.List',
  xtype: 'accountInfoBank',
  controller: 'account',
  store: {
    type: 'account.bankCard',
    autoLoad: true
  },
  userCls: 'x-ui-list',
  itemTpl: [
    '<div class="x-ui-explain">',
      '<span class="x-ui-bank-icon {icon} bank-icon"></span>',
      '<div class="card-no">{cardno}</div>',
      '<div class="branch">{branch}</div>',
    '</div>'
  ],
  listeners: {
    // initialize: 'onApplyStoreLoad',
    // itemtap: 'onRecordItemtap'
  }
});
