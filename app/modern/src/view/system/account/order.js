Ext.define('APP.view.system.account.order', {
  extend: 'Ext.List',
  xtype: 'systemAccountOrder',
  controller: 'system.account',
  store: {
    type: 'account.record',
    autoLoad: true
  },
  items: [
    {xtype: 'navbar'}
  ],
  userCls: 'x-ui-list',
  itemCls: 'x-ui-list-account',
  itemTpl: [
    '<div class="x-ui-left">',
      '<p>交易{account.trade_volume}手</p>',
      '<p>挂单{account.pending_volume}手<br/>交易盈亏{account.trade_profit}</p>',
    '</div>',
    '<div class="x-ui-explain">',
      '<p>',
        '<label>入金：</label>',
        '<b class="x-ui-text-blue">{account.funds_deposit:money}</b>',
      '</p>',
      '<p>',
        '<label>出金：</label>',
        '<b class="x-ui-text-blue">{account.funds_withdrawal:money}</b>',
      '</p>',
      '<p>',
        '<label>信用：</label>',
        '<b class="x-ui-text-blue">{account.funds_credit:money}</b>',
      '</p>',
      '<p>',
        '<label>交易盈亏：</label>',
        '<b>{account.trade_profit:stringNumeral(2)}</b>',
        '<y></y>{account.trade_count:stringInteger} 笔',
      '</p>',
      '<p>',
        '<label>交易盈亏：</label>',
        '<b>{account.trade_profit:stringNumeral(2)}</b>',
        '<y></y>{account.trade_count:stringInteger} 笔',
      '</p>',
    '</div>'
  ],
  listeners: {
    itemtap: 'onHistoryOrderTap'
  }
});
