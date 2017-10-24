Ext.define('APP.view.agent.account.record', {
  extend: 'Ext.List',
  xtype: 'agentAccountRecord',
  controller: 'agent',
  store: {
    type: 'agent.record',
    proxy: {
      extraParams: {
        // app: 'transfer',
        // startdate: Ext.Date.format(new Date(), 'Y-m'),
        // enddate: Ext.Date.format(new Date(), 'Y-m')
      }
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
          {text: '全部', value: 'all', sorter: {property: 'account_new_count', direction: 'DESC'}},
          {text: '已拒绝', value: 'reject', sorter: {property: 'funds_net_deposit', direction: 'DESC'}},
          {text: '已完成', value: 'complete', sorter: {property: 'trade_volume', direction: 'DESC'}},
          {text: '处理中', value: 'pending', sorter: {property: 'trade_volume', direction: 'DESC'}}
        ]
      },
      {xtype: 'spacer'}
    ]
    },
    {
      xtype: 'segmentedtab', ui: 'tab', name: 'menu', bind: {value: '{parameter.menu}'},
      items: [
        {text: '账户性质', iconCls: 'f-mt mt-staff', value: 'type'},
        {text: '状态', iconCls: 'f-mt mt-team', value: 'balance'}
      ]
    },
    // {xtype: 'boxtotal'}
  ],
  userCls: 'x-ui-list',
  itemCls: 'x-ui-listitem-ranking',
  itemTpl: [
    '<div class="x-ui-objects">',
    '<p>{time:date("Y-m-d H:i:s")}</p>',
    // '<p>{objects_tip}</p>',
    '</div>',
    '<tpl switch="_field">',
      // =====================================================================================全部
      '<tpl case="all">',
        '<tpl switch="menu">',
          // ===================================================交易类型
          '<tpl case="type">',
            '<div class="x-ui-explain">',
              '<p><b class="x-ui-text-white">{direction:returnTransferType}</b></p>',
            '</div>',
            '<div class="x-ui-right">',
              '<label>对方账户</label>',
              '<b>{transfer:stringInteger}</b>',
            '</div>',
          // ===================================================金额
          '<tpl case="balance">',
            '<div class="x-ui-explain">',
              '<p><b class="x-ui-text-grey">转前：{before_balance:usMoney}</b></p>',
              '<p><b class="x-ui-text-green">转后：{after_balance:usMoney}</b></p>',
              '<p><b class="x-ui-text-red">金额：{balance:usMoney}</b></p>',
            '</div>',
            '<div class="x-ui-right">',
              '<label>注释：</label>',
              '<b>{explain}</b>',
            '</div>',
        '</tpl>',
      // =====================================================================================已拒绝
      '<tpl case="reject">',
        '<tpl switch="menu">',
          // ===================================================交易类型
          '<tpl case="type">',
            '<div class="x-ui-explain">',
              '<p><b class="x-ui-text-white">{direction:returnTransferType}</b></p>',
            '</div>',
            '<div class="x-ui-right">',
              '<label>对方账户</label>',
              '<b>{transfer:stringInteger}</b>',
            '</div>',
          // ===================================================金额
          '<tpl case="balance">',
            '<div class="x-ui-explain">',
              '<p><b class="x-ui-text-grey">转前：{before_balance:usMoney}</b></p>',
              '<p><b class="x-ui-text-green">转后：{after_balance:usMoney}</b></p>',
              '<p><b class="x-ui-text-red">金额：{balance:usMoney}</b></p>',
            '</div>',
            '<div class="x-ui-right">',
              '<label>注释：</label>',
              '<b>{explain}</b>',
            '</div>',
        '</tpl>',
      // =====================================================================================已完成
      '<tpl case="complete">',
        '<tpl switch="menu">',
          // ===================================================交易类型
          '<tpl case="type">',
            '<div class="x-ui-explain">',
              '<p><b class="x-ui-text-white">{direction:returnTransferType}</b></p>',
            '</div>',
            '<div class="x-ui-right">',
              '<label>对方账户</label>',
              '<b>{transfer:stringInteger}</b>',
            '</div>',
          // ===================================================金额
          '<tpl case="balance">',
            '<div class="x-ui-explain">',
              '<p><b class="x-ui-text-grey">转前：{before_balance:usMoney}</b></p>',
              '<p><b class="x-ui-text-green">转后：{after_balance:usMoney}</b></p>',
              '<p><b class="x-ui-text-red">金额：{balance:usMoney}</b></p>',
            '</div>',
            '<div class="x-ui-right">',
              '<label>注释：</label>',
              '<b>{explain}</b>',
            '</div>',
        '</tpl>',
      // =====================================================================================处理中
      '<tpl case="pending">',
        '<tpl switch="menu">',
          // ===================================================交易类型
          '<tpl case="type">',
            '<div class="x-ui-explain">',
              '<p><b class="x-ui-text-white">{direction:returnTransferType}</b></p>',
            '</div>',
            '<div class="x-ui-right">',
              '<label>对方账户</label>',
              '<b>{transfer:stringInteger}</b>',
            '</div>',
          // ===================================================金额
          '<tpl case="balance">',
            '<div class="x-ui-explain">',
              '<p><b class="x-ui-text-grey">转前：{before_balance:usMoney}</b></p>',
              '<p><b class="x-ui-text-green">转后：{after_balance:usMoney}</b></p>',
              '<p><b class="x-ui-text-red">金额：{balance:usMoney}</b></p>',
            '</div>',
            '<div class="x-ui-right">',
              '<label>注释：</label>',
              '<b>{explain}</b>',
            '</div>',
        '</tpl>',
    '</tpl>'
  ],
  listeners: {
    // itemtap: 'onObjectsItemtap'
  }
});
