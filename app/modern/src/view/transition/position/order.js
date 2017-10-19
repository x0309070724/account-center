Ext.define('APP.view.transition.position.order', {
  extend: 'Ext.List',
  xtype: 'transitionPositionOrder',
  controller: 'transition.position',
  // name: 'results',
  store: {
    type: 'transition.position.order',
    // autoLoad: false,
    // super: true,
    proxy: {
      extraParams: {
        // datepart: 'month',
        // startdate: Ext.Date.format(new Date(), 'Y-m'),
        // enddate: Ext.Date.format(new Date(), 'Y-m')
      }
    }
  },
  // plugins: [
  //   {type: 'pullrefresh'}
  // ],
  viewModel: {data: {parameter: {_field: 'pending', menu: 'type'}}},
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
      {xtype: 'spacer'},
      // {xtype: 'datepartbutton'}
    ]
    },
    // {xtype: 'boxdatepart'},
    {
      xtype: 'segmentedtab', ui: 'tab', name: 'menu', bind: {value: '{parameter.menu}'},
      items: [
        {text: '交易类型', iconCls: 'f-mt mt-staff', value: 'type'},
        {text: '开仓', iconCls: 'f-mt mt-team', value: 'open_price'},
        {text: '现价', iconCls: 'f-mt mt-team', value: 'close_price'},
        {text: '交易盈亏', iconCls: 'f-mt mt-team', value: 'profit'}
      ]
    },
    // {xtype: 'boxtotal'}
  ],
  userCls: 'x-ui-list',
  itemCls: 'x-ui-listitem-ranking',
  itemTpl: [
    // '<tpl switch="menu">',
    // // =====================================================================================销售
    //   '<tpl case="staff">',
    //     '<div class="x-ui-no x-ui-no-{ranking}">',
    //       '<b>{ranking}</b>',
    //     '</div>',
    //   '<div class="x-ui-userface">',
    //     '<img src="{objects_icon:resizeWxImg("/0","/64")}" alt="" onerror="this.src=\'/resources/images/userface.png\'"/>',
    //   '</div>',
    //   '<div class="x-ui-name">',
    //     '<p>{objects}</p>',
    //     '<p>{objects_tip}{[this.postName(values)]}</p>',
    //   '</div>',
    // // =====================================================================================团队
    //   '<tpl default>',
    //     '<div class="x-ui-no x-ui-no-{ranking}">',
    //       '<b>{ranking}</b>',
    //     '</div>',
    //   '<div class="x-ui-name">',
    //     '<p>{objects}</p>',
    //     '<p>{manager_namecn} <span>{manager_name}</span></p>',
    //   '</div>',
    // '</tpl>',
    // '<div class="x-ui-value">',
    //   '<tpl switch="field">',
    //   // =====================================================================================开户量
    //     '<tpl case="account">',
    //       '<label>开户量</label>',
    //       '<b>{account_new_count:stringInteger}</b>',
    //   // =====================================================================================净入金
    //     '<tpl case="funds">',
    //       '<label>净入金</label>',
    //       '<b>{funds_net_deposit:money}</b>',
    //   // =====================================================================================交易量
    //     '<tpl case="volume">',
    //       '<label>交易量</label>',
    //       '<b>{trade_volume:stringNumeral(3)}</b>',
    //   '</tpl>',
    // '</div>',
    // {
    //   postName: function (record, a, b) {
    //     // console.log(record,this);
    //     if (record.id === record.managerid && record.teamid.toString().substr(9, 3) === '000') {
    //       return '·经理'
    //     } else if (record.id == record.managerid) {
    //       return '·主管'
    //     }
    //   }
    // }
    '<div class="x-ui-objects">',
      '<p>#{order}</p>',
      // '<p>{objects_tip}</p>',
    '</div>',
    '<tpl switch="_field">',
      // =====================================================================================全部
      '<tpl case="all">',
        '<div class="x-ui-explain">',
          '<p><b class="x-ui-text-green">{cmd:tradeCmd}==>{symbol}</b></p>',
        '</div>',
        '<div class="x-ui-right">',
          '<label>成交量</label>',
          '<b>{volume:money}</b>',
        '</div>',
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
              '<p><b class="x-ui-text-green">{timestamp:date}</b></p>',
              '<p><b class="x-ui-text-green">{timestamp:date}</b></p>',
            '</div>',
            '<div class="x-ui-right">',
              '<label>开仓价</label>',
              '<b>{open_price:money}</b>',
            '</div>',
        '</tpl>',



      // =====================================================================================订单
      '<tpl case="order">',
        '<div class="x-ui-explain">',
          '<p><b class="x-ui-text-green">{cmd:tradeCmd}==>{symbol}</b></p>',
        '</div>',
        '<div class="x-ui-right">',
          '<label>成交量</label>',
          '<b>{volume:money}</b>',
        '</div>',
    // // =====================================================================================手续费
    // '<tpl case="pending">',
    //   '<div class="x-ui-explain">',
    //     '<p><label>净头寸：</label><b class="x-ui-text-green">{position_volume:money}</b></p>',
    //   '</div>',
    //   '<div class="x-ui-right">',
    //     '<label>手续费</label>',
    //     '<b>{commission:usMoney}</b>',
    //   '</div>',
    // // =====================================================================================交易盈亏
    // '<tpl case="order">',
    //   '<div class="x-ui-explain">',
    //     '<p><label>库存费：</label><b class="x-ui-text-green">{storage:money}</b></p>',
    //   '</div>',
    //   '<div class="x-ui-right">',
    //     '<label>交易盈亏</label>',
    //     '<b>{clear:money}</b>',
    //   '</div>',
    '</tpl>'
  ],
  listeners: {
    // itemtap: 'onObjectsItemtap'
  }
});
