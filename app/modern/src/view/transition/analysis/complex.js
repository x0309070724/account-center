Ext.define('APP.view.transition.analysis.complex', {
  extend: 'Ext.List',
  xtype: 'transitionAnalysisComplete',
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
  viewModel: {data: {parameter: {_field: 'trade_profit_total'}}},
  items: [
    {xtype: 'navbar', menu: [
      {xtype: 'spacer'},
      {xtype: 'datepartbutton'}
    ]},
    {xtype: 'boxdatepart'},
    {xtype: 'boxchart'},
    {
      xtype: 'segmentedtab', ui: 'tab', name: '_field', bind: {value: '{parameter._field}'},
      items: [
        {text: '净盈亏', value: 'trade_profit_total', iconCls: 'f-mt mt-field-account'},
        {text: '交易盈亏', value: 'trade_profit', iconCls: 'f-mt mt-field-funds'},
        {text: '每手收益', value: 'trade_profit_average', iconCls: 'f-mt mt-field-funds'}
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
        // =====================================================================================净盈亏
        '<tpl case="trade_profit_total">',
          '<b class="{trade_profit:moneyColor}">{trade_profit_total:usMoney}</b>',
        // =====================================================================================交易盈亏
        '<tpl case="trade_profit">',
          '<b class="{trade_profit:moneyColor}">{trade_profit:usMoney}</b>',
        // =====================================================================================每手收益
        '<tpl case="trade_profit_average">',
          '<b class="{trade_profit_average:moneyColor}">{trade_profit_average:usMoney}</b>',
      '</tpl>',
    '</div>'
  ]
});
