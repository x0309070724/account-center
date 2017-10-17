Ext.define('APP.view.transition.report.report', {
  extend: 'Ext.List',
  controller: 'transition.report',
  store: {
    type: 'analysis.trade.trend',
    autoLoad: false,
    // super: true,
    proxy: {
      extraParams: {
        // menu: 'account',
        datepart: 'day',
        startdate: Ext.Date.format(new Date(new Date().getFullYear(),new Date().getMonth()-1,new Date().getDate()), 'Y-m-d'),
        enddate: Ext.Date.format(new Date(), 'Y-m-d')
      }
    }
  },
  // 用了plugins,会报isWidget of null 的错
  // plugins: [
  //   {type: 'pullrefresh'}
  // ],
  viewModel: {data: {parameter: {_field: 'funds'}}},
  items: [
    {
      xtype: 'navbar', menu: [
      {xtype: 'spacer'},
      {xtype: 'datepartbutton'}
    ]
    },
    {xtype: 'boxdatepart'},
    {
      xtype: 'segmentedtab', ui: 'tab', name: '_field', bind: {value: '{parameter._field}'},
      items: [
        {
          text: '净入金',
          iconCls: 'f-mt mt-field-funds',
          value: 'funds',
          sorter: {property: 'funds_net_deposit', direction: 'DESC'}
        },
        {
          text: '交易量',
          iconCls: 'f-mt mt-field-volume',
          value: 'volume',
          sorter: {property: 'trade_volume', direction: 'DESC'}
        },
        {
          text: '净盈亏',
          iconCls: 'f-mt mt-field-clear',
          value: 'trades',
          sorter: {property: 'trade_clear', direction: 'DESC'}
        }
      ]
    },
    {xtype: 'boxtotal'}
  ],
  userCls: 'x-ui-list',
  itemCls: 'x-ui-list-report',
  itemTpl: [
    '<div class="x-ui-objects">',
      '<p>{objects}</p>',
      // '<p>{objects_tip}</p>',
    '</div>',
    '<tpl switch="_field">',
      // =====================================================================================净入金
      '<tpl case="funds">',
        '<div class="x-ui-explain">',
          '<p><label>入金：</label><b class="x-ui-text-green">{funds_deposit:money}</b></p>',
          '<p><label>出金：</label><b class="x-ui-text-red">{funds_withdrawal:money}</b></p>',
        '</div>',
        '<div class="x-ui-right">',
          '<label>净入金</label>',
          '<b>{funds_net_deposit:money}</b>',
        '</div>',
      // =====================================================================================交易量
      '<tpl case="volume">',
        '<div class="x-ui-explain">',
          '<p><label>手续费：</label><b class="x-ui-text-green">{trade_commission:money}</b></p>',
          '<p><label>佣　金：</label><b class="x-ui-text-red">{trade_commission_agent:money}</b></p>',
        '</div>',
        '<div class="x-ui-right">',
          '<label>交易量</label>',
          '<b>{trade_volume:stringNumeral(2)}</b>',
        '</div>',
      // =====================================================================================净盈亏
      '<tpl case="trades">',
        '<div class="x-ui-explain">',
          '<p><label>交易盈亏：</label><b class="x-ui-text-green">{trade_profit:money}</b></p>',
          '<p><label>代理佣金：</label><b class="x-ui-text-red">{trade_commission_agent:money}</b></p>',
        '</div>',
        '<div class="x-ui-right">',
          '<label>净盈亏</label>',
          '<b>{trade_clear:money}</b>',
        '</div>',
    '</tpl>'
  ],
  listeners: {
    // itemtap: 'onRecordItemtap'
  }
});
