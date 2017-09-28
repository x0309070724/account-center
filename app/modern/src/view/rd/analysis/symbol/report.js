Ext.define('APP.view.rd.analysis.symbol.report', {
  extend: 'Ext.List',
  controller: 'rd.analysis',
  store: {
    type: 'analysis.trade.statistics',
    autoLoad: false,
    // 自定义属性super
    // super: true,
    proxy: {
      extraParams: {
        menu: 'symbol',
        datepart: 'month',
        startdate: Ext.Date.format(new Date(), 'Y-m'),
        enddate: Ext.Date.format(new Date(), 'Y-m')
      }
    }
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
        {
          text: '佣金',
          iconCls: 'f-mt mt-field-agent',
          value: 'agent',
          sorter: {property: 'trade_commission_agent', direction: 'DESC'}
        },
        {
          text: '净盈亏',
          iconCls: 'f-mt mt-field-clear',
          value: 'trade',
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
      '<p>{objects_tip}</p>',
    '</div>',
    '<tpl switch="field">',
    // ====================================================================================交易量
      '<tpl case="agent">',
        '<div class="x-ui-explain">',
          '<p><label>交易量：</label><b class="x-ui-text-green">{trade_volume_ib:stringNumeral(2)}</b></p>',
          '<p><label>佣　金：</label><b class="x-ui-text-red">{trade_commission_agent:money}</b></p>',
        '</div>',
        '<div class="x-ui-right">',
          '<label>佣金</label>',
          '<b>{trade_commission_agent:money}</b>',
        '</div>',
    // ====================================================================================交易盈亏
      '<tpl case="trade">',
        '<div class="x-ui-explain">',
          '<p><label>盈亏：</label><b class="x-ui-text-green">{trade_profit:money}</b></p>',
          '<p><label>佣金：</label><b class="x-ui-text-red">{trade_commission_agent:money}</b></p>',
        '</div>',
        '<div class="x-ui-right">',
          '<label>净盈亏</label>',
          '<b>{trade_clear:money}</b>',
        '</div>',
    '</tpl>'
  ],
  listeners: {
    //itemtap:'onItemtap'
  }
});
