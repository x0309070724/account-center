Ext.define('APP.view.agent.account.manage', {
  extend: 'Ext.List',
  xtype: 'agentAccountManage',
  controller: 'agent.account',
  viewModel: {data: {parameter: {_field: 'account'}}},
  store: {
    type: 'agent.account',
    autoLoad: false,
    proxy: {
      extraParams: {}
    }
  },
  items: [
    {xtype: 'navbar'},
    {xtype: 'searchbar', component: {pattern: '[0-9]*'}},
    {
      xtype: 'segmentedtab', ui: 'tab', name: '_field', bind: {value: '{parameter._field}'},
      items: [
        {text: '账户', iconCls: 'f-mt mt-user-3', value: 'account'}
      ]
    }
  ],
  userCls: 'x-ui-list',
  itemCls: 'x-ui-list-account',
  itemTpl: [
    '<div class="x-ui-left">',
      '<p>{login}</p>',
      '<p>{property_name}</p>',
    '</div>',
    '<div class="x-ui-explain">',
      '<p>',
        '<label>入金：</label>',
        '<b class="x-ui-text-blue">{funds_deposit:usMoney} <r><b class="x-ui-grey">{trade_count} 笔</b></r></b></br>',
        '<label>出金：</label>',
        '<b class="x-ui-text-blue">{funds_withdrawal:usMoney}</b></br>',
      '</p>',
      '<p>',
        '<label>成交量：</label>',
        '<b>{trade_volume:stringNumeral(2)}</b></br>',
        '<label> 佣金：</label>',
        '<b>{trade_commission:usMoney}</b></br>',
      '</p>',
      '<p>',
        '<label>余额：</label><b class="x-ui-text-green">{balance:usMoney}</b></br>',
        '<label> 净值：</label><b class="x-ui-text-green">{roleid:usMoney}</b></br>',
      '</p>',
    '</div>'
  ],
  listeners: {
    // itemtap: 'onRecordItemtap'
  }
});
