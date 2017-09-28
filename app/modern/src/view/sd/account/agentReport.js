Ext.define('APP.view.sd.account.agentReport', {
  extend: 'Ext.List',
  controller: 'sd.account',
  store: {
    type: 'analysis.trade.statistics',
    autoLoad: false,
    proxy: {
      extraParams: {
        menu: 'agent',
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
          text: '开户量',
          iconCls: 'f-mt mt-field-account',
          value: 'account',
          sorter: {property: 'account_new_count', direction: 'DESC'}
        },
        {
          text: '净入金',
          iconCls: 'f-mt mt-field-funds',
          value: 'funds',
          sorter: {property: 'funds_net_deposit', direction: 'DESC'}
        },
        {
          text: '佣金',
          iconCls: 'f-mt mt-field-agent',
          value: 'agent',
          sorter: {property: 'trade_commission_agent', direction: 'DESC'}
        }
      ]
    },
    {xtype: 'boxtotal'}
  ],
  userCls: 'x-ui-list',
  itemCls: 'x-ui-mini x-ui-list-report',
  itemTpl: [
    '<div class="x-ui-objects">',
      '<p>{objects}</p>',
      '<p>{objects_tip}</p>',
    '</div>',
    '<tpl switch="field">',
    // =====================================================================================开户量
      '<tpl case="account">',
        '<div class="x-ui-explain">',
          '<p><label>持有量：</label>{account_count:stringInteger}</p>',
          '<p><label>活跃量：</label>{account_active_count:stringInteger}</p>',
        '</div>',
        '<div class="x-ui-right">',
          '<label>开户量</label>',
          '<b>{account_new_count:stringInteger}</b>',
        '</div>',
    // =====================================================================================净入金
      '<tpl case="funds">',
        '<div class="x-ui-explain">',
          '<p><label>入金：</label><b class="x-ui-text-green">{funds_deposit:money}</b></p>',
          '<p><label>出金：</label><b class="x-ui-text-red">{funds_withdrawal:money}</b></p>',
        '</div>',
        '<div class="x-ui-right">',
          '<label>净入金</label>',
          '<b>{funds_net_deposit:money}</b>',
        '</div>',
    // =====================================================================================交易量
      '<tpl case="agent">',
        '<div class="x-ui-explain">',
          '<p><label>交易量：</label><b class="x-ui-text-green">{trade_volume_ib:stringNumeral(2)}</b></p>',
          '<p><label>佣　金：</label><b class="x-ui-text-red">{trade_commission_agent:money}</b></p>',
        '</div>',
        '<div class="x-ui-right">',
          '<label>佣金</label>',
          '<b>{trade_commission_agent:money}</b>',
        '</div>',
    '</tpl>'
  ],
  listeners: {
    itemtap: 'onRecordItemtap'
  }
});
