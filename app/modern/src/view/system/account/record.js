Ext.define('APP.view.system.account.record', {
  extend: 'Ext.List',
  xtype: 'systemAccountRecord',
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
      '<p>{account.login}</p>',
      '<p>{account.namecn}<br/>{account.name}</p>',
    '</div>',
    '<div class="x-ui-explain">',
      '<p class="x-ui-first">',
        '<span class="x-ui-label x-ui-bg-black">{account.regdate:date("Y-m-d")}</span><span class="x-ui-label x-ui-bg-black">{account.type}</span>',
      '</p>',
      '<tpl if="agent">',
        '<p><label>代理：</label>{account.agent} {account.agent_volume}</p>',
      '</tpl>',
      '<p>',
        '<label>入金：</label>',
        '<b class="x-ui-text-blue">{account.funds_net_deposit:money}</b>',
      '</p>',
      '<p>',
        '<label>交易：</label>',
        '<b>{account.trade_volume:stringNumeral(2)}</b>',
      '</p>',
      '<p><label>余额：</label><b class="x-ui-text-green">{account.balance:money}</b></p>',
    '</div>'
  ],
  listeners: {
    itemtap: 'onRecordTap'
  }
});
