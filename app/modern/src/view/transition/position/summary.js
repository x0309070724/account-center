Ext.define('APP.view.transition.position.summary', {
  extend: 'Ext.List',
  controller: 'transition.position',
  store: {
    type: 'PushServiceStore',
    autoLoad: false,
    proxy: {
      extraParams: {}
    }
  },
  viewModel: {data: {parameter: {_field: 'buy_sell'}}},
  items: [
    {
      xtype: 'navbar'
    },
    {
      xtype: 'segmentedtab', ui: 'tab', name: '_field', bind: {value: '{parameter._field}'},
      items: [
        {
          text: '买卖',
          iconCls: 'f-mt mt-field-funds',
          value: 'buy_sell'
        },
        {
          text: '手续费',
          iconCls: 'f-mt mt-field-volume',
          value: 'commission'
        },
        {
          text: '交易盈亏',
          iconCls: 'f-mt mt-field-clear',
          value: 'trades'
        }
      ]
    }
  ],
  userCls: 'x-ui-list',
  itemCls: 'x-ui-list-report',
  itemTpl: [
    '<div class="x-ui-objects">',
      '<p>{objects}</p>',
    '</div>',
    '<tpl switch="_field">',
      // =====================================================================================买卖
      '<tpl case="buy_sell">',
        '<div class="x-ui-explain">',
          '<p><label>买入：</label><b class="x-ui-text-green">{buy_volume:money}</b><r><b class="x-ui-grey">{buy_profit:usMoney}</b></r></p>',
          '<p><label>卖出：</label><b class="x-ui-text-red">{sell_volume:money}</b><r><b class="x-ui-grey">{sell_profit:usMoney}</b></r></p>',
        '</div>',
      // =====================================================================================手续费
      '<tpl case="commission">',
        '<div class="x-ui-explain">',
          '<p><label>净头寸：</label><b class="x-ui-text-blue">{position_volume:money}</b></p>',
        '</div>',
        '<div class="x-ui-right">',
          '<label>手续费</label>',
          '<b>{commission:usMoney}</b>',
        '</div>',
      // =====================================================================================交易盈亏
      '<tpl case="trades">',
        '<div class="x-ui-explain">',
          '<p><label>库存费：</label><b class="x-ui-text-black">{storage:usMoney}</b></p>',
        '</div>',
        '<div class="x-ui-right">',
          '<label>交易盈亏</label>',
          '<tpl if="clear &gt; 0">',
            '<b class="x-ui-green">{clear:usMoney}</b>',
          '<tpl else>',
            '<b class="x-ui-red">{clear:usMoney}</b>',
          '</tpl>',
        '</div>',
    '</tpl>'
  ],
  listeners: {
    itemtap: 'onSummaryItemtap'
  }
});
