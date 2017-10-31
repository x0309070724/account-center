Ext.define('APP.view.agent.commission.detail', {
  extend: 'Ext.List',
  xtype: 'agentCommissionDetail',
  controller: 'agent.commission',
  viewModel: {data: {parameter: {_field: 'order'}}},
  store: {
    type: 'agent.commission.record',
    autoLoad: false,
    proxy: {
      extraParams: {
        app: 'rebate',
        datepart: 'day',
        startdate: Ext.Date.format(new Date(new Date().getFullYear(), new Date().getMonth() - 1, new Date().getDate()), 'Y-m-d'),
        enddate: Ext.Date.format(new Date(), 'Y-m-d')
      }
    }
  },
  items: [
    {xtype: 'navbar', menu: [
      {xtype: 'spacer'},
      {xtype: 'datepartbutton'}
    ]},
    {xtype: 'boxdatepart'},
    {
      xtype: 'segmentedtab', ui: 'tab', name: '_field', bind: {value: '{parameter._field}'},
      items: [
        {text: '账户类型', iconCls: 'f-mt mt-user-3', value: 'order'}
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
        '<b class="x-ui-text-blue">{funds_deposit:money} <r>{trade_count} 笔</r></b></br>',
        '<label>出金：</label>',
        '<b class="x-ui-text-blue">{funds_withdrawal:money}</b></br>',
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
