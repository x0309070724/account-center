Ext.define('APP.view.account.statistics.index', {
  extend: 'Ext.tab.Panel',
  xtype: 'accountStatisticsIndex',
  layout: 'card',
  controller: 'account',
  items: [
    {
      xtype: 'accountStatisticsAccountStatistics',
      title: '档案',
      iconCls: 'f-mt mt-account-strate'
    },
    {xtype: 'accountStatisticsOrder', title: '历史订单', iconCls: 'f-mt mt-check-order'}
  ],
  tabBar: {
    layout: {pack: 'center', align: 'center'},
    docked: 'bottom', border: true,
    defaults: {iconAlign: 'top', flex: 1}
  }
});
