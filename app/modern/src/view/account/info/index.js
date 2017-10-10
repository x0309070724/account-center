Ext.define('APP.view.account.info.index', {
  extend: 'Ext.tab.Panel',
  xtype: 'accountInfoIndex',
  layout: 'card',
  controller: 'account',

  items: [
    {xtype: 'accountInfoAccountInfo', title: '档案', iconCls: 'f-mt mt-account-strate', parameter: {login: 666666}},
    {xtype: 'accountInfoBank', title: '收款银行卡', iconCls: 'f-mt mt-trading'}
    // {xtype: 'sdAccountDetailPositions', title: '持仓订单', iconCls: 'f-mt mt-premium-chart', parameter: {login: login}},
    // {xtype: 'sdAccountDetailOrder', title: '历史订单', iconCls: 'f-mt mt-check-order', parameter: {login: login}}
  ],

  tabBar: {
    layout: {pack: 'center', align: 'center'},
    docked: 'bottom', border: true,
    defaults: {iconAlign: 'top', flex: 1}
  }
});
