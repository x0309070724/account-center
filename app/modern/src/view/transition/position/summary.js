Ext.define('APP.view.transition.position.summary', {
  extend: 'Ext.List',
  controller: 'transition.position',
  store: {
    type: 'PushServiceStore',
    autoLoad: false,
    // super: true,
    proxy: {
      extraParams: {
        // menu: 'account',
        datepart: 'day',
        // startdate: Ext.Date.format(new Date(new Date().getFullYear(),new Date().getMonth()-1,new Date().getDate()), 'Y-m-d'),
        // enddate: Ext.Date.format(new Date(), 'Y-m-d')
      }
    }
  },
  // plugins: [
  //   {type: 'pullrefresh'}
  // ],
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
          value: 'buy_sell',
          // sorter: {property: 'funds_net_deposit', direction: 'DESC'}
        },
        {
          text: '手续费',
          iconCls: 'f-mt mt-field-volume',
          value: 'commission',
          // sorter: {property: 'trade_volume', direction: 'DESC'}
        },
        {
          text: '交易盈亏',
          iconCls: 'f-mt mt-field-clear',
          value: 'trades',
          // sorter: {property: 'trade_clear', direction: 'DESC'}
        }
      ]
    },
    // {xtype: 'boxtotal'}
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
      '<tpl case="buy_sell">',
        '<div class="x-ui-explain">',
          '<p><label>买入：</label><b class="x-ui-text-green">{buy_volume:money}<r>{buy_profit:money}</r></b></p>',
          '<p><label>卖出：</label><b class="x-ui-text-red">{funds_withdrawal:money}</b></p>',
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
    // painted: function () {
    //   var store = this.getView().getStore();
    //   console.log(store);
    // }
  }
});
