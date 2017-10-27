Ext.define('APP.view.transition.position.order', {
  extend: 'Ext.List',
  xtype: 'transitionPositionOrder',
  controller: 'transition.position',
  store: {
    type: 'transition.position.order',
    autoLoad: false,
    proxy: {
      extraParams: {}
    }
  },
  viewModel: {data: {parameter: {_field: 'all', menu: 'type'}}},
  items: [
    {
      xtype: 'navbar', hiddenTitle: true, menu: [
      {xtype: 'spacer'},
      {
        xtype: 'segmentedtab', ui: false, docked: false, name: '_field', bind: {value: '{parameter._field}'},
        defaults: {minWidth: 80, iconAlign: 'left', ripple: false},
        items: [
          {text: '订单', value: 'order', sorter: {property: 'account_new_count', direction: 'DESC'}},
          {text: '挂单', value: 'pending', sorter: {property: 'funds_net_deposit', direction: 'DESC'}},
          {text: '全部', value: 'all', sorter: {property: 'trade_volume', direction: 'DESC'}}
        ]
      },
      {xtype: 'spacer'}
    ]
    },
    {
      xtype: 'segmentedtab', ui: 'tab', name: 'menu', bind: {value: '{parameter.menu}'},
      items: [
        {text: '交易类型', iconCls: 'f-mt mt-staff', value: 'type'},
        {text: '开仓', iconCls: 'f-mt mt-team', value: 'open_price'},
        {text: '现价', iconCls: 'f-mt mt-team', value: 'close_price'},
        {text: '交易盈亏', iconCls: 'f-mt mt-team', value: 'profit'}
      ]
    }
  ],
  userCls: 'x-ui-list',
  itemCls: 'x-ui-listitem-ranking',
  itemTpl: [
    '<div class="x-ui-objects">',
      '<p>#{order}</p>',
    '</div>',
    '<tpl switch="_field">',
      // =====================================================================================全部
      '<tpl case="all">',
        '<tpl switch="menu">',
          // ===================================================交易类型
          '<tpl case="type">',
            '<div class="x-ui-explain">',
              '<p><b class="x-ui-text-green">{cmd:tradeCmd}==>{symbol}</b></p>',
            '</div>',
            '<div class="x-ui-right">',
              '<label>成交量</label>',
              '<b>{volume:money}</b>',
            '</div>',
          // ===================================================开仓
          '<tpl case="open_price">',
            '<div class="x-ui-explain">',
              '<p><b class="x-ui-text-green">{open_time:date("Y-m-d")}</b></p>',
              '<p><b class="x-ui-text-green">{open_time:date("H:i:s")}</b></p>',
            '</div>',
            '<div class="x-ui-right">',
              '<label>开仓价</label>',
              '<b>{open_price:money}</b>',
            '</div>',
          // ===================================================现价
          '<tpl case="close_price">',
            '<div class="x-ui-explain">',
              '<p><b class="x-ui-text-green">{sl:stringSl} | {sl:stringSl}</b></p>',
            '</div>',
            '<div class="x-ui-right">',
              '<label>现价</label>',
              '<b>{close_price:money}</b>',
            '</div>',
          // ===================================================交易盈亏
          '<tpl case="profit">',
            '<div class="x-ui-explain">',
              '<p>',
                '<b class="x-ui-text-green">手续费：{taxes:usMoney}</b></br>',
                '<b class="x-ui-text-green">库存费：{storage:usMoney}</b>',
              '</p>',
            '</div>',
            '<div class="x-ui-right">',
              '<label>交易盈亏</label>',
              '<b>{profit:usMoney}</b>',
            '</div>',
        '</tpl>',
      // =====================================================================================挂单
      '<tpl case="pending">',
        '<tpl switch="menu">',
          // ===================================================交易类型
          '<tpl case="type">',
            '<div class="x-ui-explain">',
              '<p><b class="x-ui-text-green">{cmd:tradeCmd}==>{symbol}</b></p>',
            '</div>',
            '<div class="x-ui-right">',
              '<label>成交量</label>',
              '<b>{volume:money}</b>',
            '</div>',
          // ===================================================开仓
          '<tpl case="open_price">',
            '<div class="x-ui-explain">',
              '<p><b class="x-ui-text-green">{open_time:date("Y-m-d")}</b></p>',
              '<p><b class="x-ui-text-green">{open_time:date("H:i:s")}</b></p>',
            '</div>',
            '<div class="x-ui-right">',
              '<label>开仓价</label>',
              '<b>{open_price:money}</b>',
            '</div>',
          // ===================================================现价
          '<tpl case="close_price">',
            '<div class="x-ui-explain">',
              '<p><b class="x-ui-text-green">{sl:stringSl} | {sl:stringSl}</b></p>',
            '</div>',
            '<div class="x-ui-right">',
              '<label>现价</label>',
              '<b>{close_price:money}</b>',
            '</div>',
          // ===================================================交易盈亏
          '<tpl case="profit">',
            '<div class="x-ui-explain">',
              '<p>',
                '<b class="x-ui-text-green">手续费：{taxes:usMoney}</b></br>',
                '<b class="x-ui-text-green">库存费：{storage:usMoney}</b>',
              '</p>',
            '</div>',
            '<div class="x-ui-right">',
              '<label>交易盈亏</label>',
              '<b>{profit:usMoney}</b>',
            '</div>',
        '</tpl>',
      // =====================================================================================订单
      '<tpl case="order">',
        '<tpl switch="menu">',
          // ===================================================交易类型
          '<tpl case="type">',
            '<div class="x-ui-explain">',
              '<p><b class="x-ui-text-green">{cmd:tradeCmd}==>{symbol}</b></p>',
            '</div>',
            '<div class="x-ui-right">',
              '<label>成交量</label>',
              '<b>{volume:money}</b>',
            '</div>',
          // ===================================================开仓
          '<tpl case="open_price">',
            '<div class="x-ui-explain">',
              '<p><b class="x-ui-text-green">{open_time:date("Y-m-d")}</b></p>',
              '<p><b class="x-ui-text-green">{open_time:date("H:i:s")}</b></p>',
            '</div>',
            '<div class="x-ui-right">',
              '<label>开仓价</label>',
              '<b>{open_price:money}</b>',
            '</div>',
          // ===================================================现价
          '<tpl case="close_price">',
            '<div class="x-ui-explain">',
              '<p><b class="x-ui-text-green">{sl:stringSl} | {sl:stringSl}</b></p>',
            '</div>',
            '<div class="x-ui-right">',
              '<label>现价</label>',
              '<b>{close_price:money}</b>',
            '</div>',
          // ===================================================交易盈亏
          '<tpl case="profit">',
            '<div class="x-ui-explain">',
              '<p>',
                '<b class="x-ui-text-green">手续费：{taxes:usMoney}</b></br>',
                '<b class="x-ui-text-green">库存费：{storage:usMoney}</b>',
              '</p>',
            '</div>',
            '<div class="x-ui-right">',
              '<label>交易盈亏</label>',
              '<b>{profit:usMoney}</b>',
            '</div>',
        '</tpl>',
    '</tpl>'
  ],
  listeners: {
    // itemtap: 'onObjectsItemtap'
  }
});
