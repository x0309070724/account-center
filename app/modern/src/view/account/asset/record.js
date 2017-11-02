Ext.define('APP.view.account.asset.record', {
  extend: 'Ext.List',
  xtype: 'accountAssetRecord',
  controller: 'account',
  store: {
    type: 'account.asset',
    autoLoad: false
  },
  viewModel: {data: {parameter: {_field: 'balance'}}},
  items: [
    {xtype: 'navbar'},
    {xtype: 'boxdatepart'},
    {xtype: 'boxchart'},
    {
      xtype: 'segmentedtab', ui: 'tab', name: '_field', bind: {value: '{parameter._field}'},
      items: [
        {text: '余额', value: 'balance', iconCls: 'f-mt mt-field-account'},
        {text: '净值', value: 'equity', iconCls: 'f-mt mt-field-funds'}
      ]
    },
    {xtype: 'boxtotal'}
  ],
  userCls: 'x-ui-list',
  itemTpl: [
    '<div>',
      '<b>{time}</b>',
    '</div>',
    '<tpl switch="_field">',
      // =====================================================================================余额
      '<tpl case="balance">',
        '<div class="x-ui-explain">',
          '<p>',
            '<b class="x-ui-text-green">入金：{funds_deposit:usMoney}</b></br>',
            // '<r><b class="x-ui-text-grey">{funds_deposit_count:stringInteger}笔</b></r></br>',
            '<b class="x-ui-text-red">出金：{funds_withdrawal:usMoney}</b>',
            // '<r><b class="x-ui-text-grey">{funds_withdrawal_count:stringInteger}笔</b></r></br>',
          '</p>',
        '</div>',
        '<div class="x-ui-float-right">',
          '<b class="x-ui-text-green">{balance:usMoney}</b>',
        '</div>',
      // =====================================================================================净值
      '<tpl case="equity">',
        '<div class="x-ui-explain">',
          // '<p><b class="x-ui-text-red">交易盈亏：</b></p>',
          '<p><b class="x-ui-text-green">浮动盈亏：{balance:usMoney}</b></p>',
        '</div>',
        '<div class="x-ui-float-right">',
          '<b class="x-ui-text-red">{equity:usMoney}</b>',
        '</div>',
    '</tpl>'
  ],
  listeners: {
    itemtap: 'onRecordItemtap'
  }
});
