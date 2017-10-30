Ext.define('APP.view.account.info.index', {
  extend: 'Ext.tab.Panel',
  xtype: 'accountInfoIndex',
  layout: 'card',
  controller: 'account',
  items: [
    {xtype: 'accountInfoAccountInfo', title: '档案', iconCls: 'f-mt mt-account-strate'},
    {xtype: 'accountInfoBank', title: '收款银行卡', iconCls: 'f-mt mt-trading'}
  ],
  tabBar: {
    layout: {pack: 'center', align: 'center'},
    docked: 'bottom', border: true,
    defaults: {iconAlign: 'top', flex: 1}
  }
});
