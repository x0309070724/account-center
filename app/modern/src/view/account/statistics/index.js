Ext.define('APP.view.account.statistics.index', {
  extend: 'Ext.tab.Panel',
  xtype: 'accountStatisticsIndex',
  layout: 'card',
  controller: 'account',
  items: [
    {
      xtype: 'accountStatisticsAccountStatistics',
      title: '档案',
      iconCls: 'f-mt mt-account-strate',
      parameter: {login: 666666}
    },
    {xtype: 'accountStatisticsOrder', title: '历史订单', iconCls: 'f-mt mt-check-order'}
    // {xtype: 'sdAccountDetailPositions', title: '持仓订单', iconCls: 'f-mt mt-premium-chart', parameter: {login: login}},
    // {xtype: 'sdAccountDetailOrder', title: '历史订单', iconCls: 'f-mt mt-check-order', parameter: {login: login}}
  ],
  tabBar: {
    layout: {pack: 'center', align: 'center'},
    docked: 'bottom', border: true,
    defaults: {iconAlign: 'top', flex: 1}
  }
});
