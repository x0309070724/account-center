Ext.define('APP.view.analysis.results.time', {
  extend: 'Ext.List',
  xtype: 'analysisResultsTime',
  controller: 'analysis',
  store: {
    type: 'analysis.results.trend',
    autoLoad: false,
    super: true,
    sorters: [{property: 'objects', direction: 'ASC'}]
  },
  plugins: [
    // This plugin adds pull to refresh functionality to the List.
    {type: 'pullrefresh'}
  ],
  items: [
    {
      xtype: 'navbar', menu: [
      {xtype: 'spacer'}
      // {xtype: 'datepartbutton'}
    ]
    },
    {xtype: 'boxdatepart'},
    {xtype: 'boxchart'},
    {
      xtype: 'segmentedtab', ui: 'tab', name: 'field', bind: {value: '{parameter.field}'},
      items: [
        {text: '开户量', value: 'account', iconCls: 'f-mt mt-field-account'},
        {text: '净入金', value: 'funds', iconCls: 'f-mt mt-field-funds'},
        {text: '交易量', value: 'volume', iconCls: 'f-mt mt-field-volume'}
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
    // ===========================================================================================================开户量
      '<tpl case="account">',
        '<div class="x-ui-explain">',
          '<p><label>散户：</label>{account_new_count_sh:stringInteger}</p>',
          '<p><label>代理：</label>{account_new_count_agent:stringInteger}</p>',
        '</div>',
        '<div class="x-ui-right">',
          '<label>开户量</label>',
          '<b>{account_new_count:stringInteger}</b>',
        '</div>',
    // ===========================================================================================================净入金
      '<tpl case="funds">',
        '<div class="x-ui-explain">',
          '<p class="x-ui-text-green"><label>入金：</label>{funds_deposit:money}</p>',
          '<p class="x-ui-text-red"><label>出金：</label>{funds_withdrawal:money}</p>',
        '</div>',
        '<div class="x-ui-right">',
          '<label>净入金</label>',
          '<b>{funds_net_deposit:money}</b>',
        '</div>',
    // ===========================================================================================================交易量
      '<tpl case="volume">',
        '<div class="x-ui-explain">',
          '<p><label>散户：</label>{trade_volume_sh:stringNumeral(2)}</p>',
          '<p><label>代理：</label>{trade_volume_ib:stringNumeral(2)}</p>',
        '</div>',
        '<div class="x-ui-right">',
          '<label>交易量</label>',
          '<b>{trade_volume:stringNumeral(2)}</b>',
        '</div>',
    '</tpl>'
  ],
  listeners: {
    itemtap: 'onTimeItemtap'
  }
});

