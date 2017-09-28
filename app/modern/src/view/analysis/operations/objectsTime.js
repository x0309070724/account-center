Ext.define('APP.view.analysis.operations.objectsTime', {
  extend: 'Ext.List',
  xtype: 'analysisOperationsObjectsTime',
  controller: 'analysis',
  store: {
    type: 'analysis.trade.trend',
    autoLoad: false,
    sorters: [{property: 'objects', direction: 'DESC'}]
  },
  plugins: [
    {type: 'pullrefresh'}
  ],
  items: [
    {
      xtype: 'navbar', menu: [
      {xtype: 'spacer'},
      {xtype: 'datepartbutton'}
    ]
    },
    {xtype: 'boxdatepart'},
    {
      xtype: 'segmentedtab', ui: 'tab', name: 'field', bind: {value: '{parameter.field}'},
      items: [
        {text: '佣金', value: 'commission', iconCls: 'f-mt mt-field-agent'},
        {text: '盈亏', value: 'profit', iconCls: 'f-mt mt-field-profit'},
        {text: '净盈亏', value: 'clear', iconCls: 'f-mt mt-field-clear'}
      ]
    },
    {xtype: 'boxtotal'}
  ],
  userCls: 'x-ui-list',
  itemTpl: [
    '<div>',
      '<b>{objects:ledgerDay}</b>',
    '</div>',
    '<div class="x-ui-float-right">',
      '<tpl switch="field">',
      // =====================================================================================佣金
        '<tpl case="commission">',
          '<b class="x-ui-text-red">{trade_commission_agent:money}</b>',
      // =====================================================================================交易盈亏
        '<tpl case="profit">',
          '<b class="{trade_profit:moneyColor}">{trade_profit:money}</b>',
      // =====================================================================================净盈亏
        '<tpl case="clear">',
          '<b class="{trade_clear:moneyColor}">{trade_clear:money}</b>',
      '</tpl>',
    '</div>'
  ]
});
