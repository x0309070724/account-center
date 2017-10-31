Ext.define('APP.view.agent.account.statistics', {
  extend: 'Ext.List',
  xtype: 'agentAccountStatistics',
  controller: 'agent.account',
  viewModel: {data: {parameter: {_field: 'account'}}},
  store: {
    type: 'agent.statistics',
    autoLoad: false,
    proxy: {
      extraParams: {
        app:'account',
        datepart: 'month',
        startdate: Ext.Date.format(new Date(new Date().getFullYear() - 1, new Date().getMonth() + 1), 'Y-m'),
        enddate: Ext.Date.format(new Date(), 'Y-m')
      }
    }
  },
  items: [
    {xtype: 'navbar', menu: [
      {xtype: 'spacer'},
      {xtype: 'datepartbutton'}
    ]},
    {xtype: 'boxdatepart'},
    {xtype: 'searchbar', component: {pattern: '[0-9]*'}},
    {
      xtype: 'segmentedtab', ui: 'tab', name: '_field', bind: {value: '{parameter._field}'},
      items: [
        {text: '账户类型', iconCls: 'f-mt mt-user-3', value: 'account'}
      ]
    }
  ],
  userCls: 'x-ui-list',
  itemCls: 'x-ui-list-account',
  itemTpl: [
    '<div class="x-ui-left">',
      '<p>{objects}</p>',
      '<p>{objects_tip}</p>',
    '</div>',
    '<div class="x-ui-explain">',
      '<p>',
        '<label>入金：</label>',
        '<b class="x-ui-text-blue">{funds_deposit:usMoney} <r><b class="x-ui-grey">{trade_volume} 笔</b></r></b></br>',
        '<label>出金：</label>',
        '<b class="x-ui-text-blue">{funds_withdrawal:usMoney}</b></br>',
      '</p>',
      '<p>',
        '<label>成交量：</label>',
        '<b>{trade_volume:stringNumeral(2)}</b></br>',
        '<label> 內返：</label>',
        '<b>{trade_commission_internal:usMoney}</b></br>',
      '</p>',
      '<p>',
        '<label>外拥：</label><b class="x-ui-text-green">{balance:usMoney}</b></br>',
        '<label> 佣金：</label><b class="x-ui-text-green">{trade_commission:usMoney}</b></br>',
      '</p>',
    '</div>'
  ],
  listeners: {
    // itemtap: 'onRecordItemtap'
  }
});
