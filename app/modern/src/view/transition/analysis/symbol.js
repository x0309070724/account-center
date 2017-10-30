Ext.define('APP.view.transition.analysis.symbol', {
  extend: 'Ext.List',
  xtype: 'transitionAnalysisSymbol',
  controller: 'transition.analysis',
  store: {
    type: 'analysis.trade.statistics',
    autoLoad: false,
    // super: true,
    proxy: {
      extraParams: {
        // menu: 'account',
        datepart:'month',
        app: 'symbol',
        startdate: Ext.Date.format(new Date(new Date().getFullYear()-1,new Date().getMonth()+1,new Date().getDate()), 'Y-m'),
        enddate: Ext.Date.format(new Date(), 'Y-m')
      }
    }
  },
  viewModel: {data: {parameter: {_field: 'trade_volume'}}},
  items: [
    {xtype: 'navbar', menu: [
      {xtype: 'spacer'},
      {xtype: 'datepartbutton'}
    ]},
    {xtype: 'boxdatepart'},
    {xtype: 'piechart'},
    {
      xtype: 'segmentedtab', ui: 'tab', name: '_field', bind: {value: '{parameter._field}'},
      items: [
        {text: '交易量', value: 'trade_volume', iconCls: 'f-mt mt-field-account'},
        {text: '交易盈亏', value: 'trade_profit', iconCls: 'f-mt mt-field-funds'}
      ]
    },
    {xtype: 'boxtotal'}
  ],
  userCls: 'x-ui-list',
  itemTpl: [
    '<div>',
      // '<b>{objects:ledgerDay}</b>',
      '<b>{objects}</b>',
    '</div>',
    '<div class="x-ui-float-right">',
      '<tpl switch="_field">',
        // =====================================================================================交易量
        '<tpl case="trade_volume">',
          '<b>{trade_volume:money}量 </b> <b class="x-ui-grey">{trade_count:stringInteger}笔</b>',
        // =====================================================================================交易盈亏
        '<tpl case="trade_profit">',
          '<b class="{trade_profit:moneyColor}">{trade_profit:usMoney}</b>',
      '</tpl>',
    '</div>'
  ]
});
