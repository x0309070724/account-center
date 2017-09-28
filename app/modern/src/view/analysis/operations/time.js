Ext.define('APP.view.analysis.operations.time', {
  extend: 'Ext.List',
  xtype: 'analysisOperationsTime',
  controller: 'analysis',
  store: {
    type: 'analysis.trade.trend',
    autoLoad: false,
    sorters: [{property: 'objects', direction: 'ASC'}]
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
    {xtype: 'boxchart'},
    {
      xtype: 'segmentedtab', ui: 'tab', name: 'field', bind: {value: '{parameter.field}'},
      items: [
        {text: '佣金', value: 'commission', iconCls: 'f-mt mt-field-agent'},
        {text: '交易盈亏', value: 'profit', iconCls: 'f-mt mt-field-profit'},
        {text: '净盈亏', value: 'clear', iconCls: 'f-mt mt-field-clear'}
      ]
    },
    {xtype: 'boxtotal'}
  ],
  userCls: 'x-ui-list',
  itemTpl: [
    '<div class="x-ui-left x-ui-block">',
      '{objects:ledgerDay}',
    '</div>',
    '<tpl switch="field">',
      // =====================================================================================佣金
      '<tpl case="commission">',
        '<div class="x-ui-explain">',
          '<p><label>内佣：</label>{trade_commission_internal:money}</p>',
          '<p><label>外佣：</label>{trade_commission_foreign:money}</p>',
        '</div>',
        '<div class="x-ui-right">',
          '<label>佣金</label>',
          '<b>{trade_commission_agent:money}</b>',
        '</div>',
      // =====================================================================================交易盈亏
      '<tpl case="profit">',
        '<div class="x-ui-explain">',
          '<p><label>散户：</label>{trade_profit_sh:money}</p>',
          '<p><label>代理：</label>{trade_profit_ib:money}</p>',
          '</div>',
        '<div class="x-ui-right">',
          '<label>盈亏</label>',
          '<b>{trade_profit:money}</b>',
        '</div>',
      // =====================================================================================净盈亏
      '<tpl case="clear">',
        '<div class="x-ui-explain">',
          '<p class="x-ui-text-red"><label>散户：</label>{trade_clear_sh:money}</p>',
          '<p class="x-ui-text-green"><label>代理：</label>{trade_clear_ib:money}</p>',
        '</div>',
        '<div class="x-ui-right">',
          '<label>净盈亏</label>',
          '<b>{trade_clear:money}</b>',
        '</div>',
    '</tpl>'
  ],
  listeners: {
    itemtap: 'onTimeItemtap'
  }
});
