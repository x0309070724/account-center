Ext.define('APP.view.analysis.results.objectsTime', {
  extend: 'Ext.List',
  xtype: 'analysisResultsObjectsTime',
  controller: 'analysis',
  store: {
    type: 'analysis.results.trend',
    autoLoad: false,
    super: true,
    sorters: [{property: 'objects', direction: 'ASC'}]
  },
  // plugins: [
  //   {type: 'pullrefresh'}
  // ],
  items: [
    {xtype: 'navbar'},
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
    '<div>',
      '<b>{objects:ledgerDay}</b>',
    '</div>',
    '<div class="x-ui-float-right">',
      '<tpl switch="field">',
        // =====================================================================================开户量
        '<tpl case="account">',
          '<b>{account_new_count:stringInteger}</b>',
        // =====================================================================================净入金
        '<tpl case="funds">',
          '<b class="{funds_net_deposit:moneyColor}">{funds_net_deposit:money}</b>',
        // =====================================================================================交易量
        '<tpl case="volume">',
          '<b>{trade_volume:stringNumeral(2)}</b>',
      '</tpl>',
    '</div>'
  ]
});
