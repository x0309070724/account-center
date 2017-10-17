Ext.define('APP.view.account.asset.record', {
  extend: 'Ext.List',
  xtype: 'accountAssetRecord',
  controller: 'account',
  store: {
    type: 'account.asset',
    autoLoad: false
    // super: true,
    // sorters: [{property: 'objects', direction: 'ASC'}]
  },
  // plugins: [
  //   {type: 'pullrefresh'}
  // ],
  viewModel: {data: {parameter: {_field: 'balance'}}},
  items: [
    {xtype: 'navbar'},
    {xtype: 'boxdatepart'},
    {xtype: 'boxchart'},
    {
      xtype: 'segmentedtab', ui: 'tab', name: '_field', bind: {value: '{parameter._field}'},
      items: [
        {text: '余额', value: 'balance', iconCls: 'f-mt mt-field-account'},
        {text: '净值', value: 'equity', iconCls: 'f-mt mt-field-funds'}
      ]
    },
    {xtype: 'boxtotal'}
  ],
  userCls: 'x-ui-list',
  itemTpl: [
    '<div>',
      // '<b>{objects:ledgerDay}</b>',
      '<b>{time}</b>',
    '</div>',
    '<div class="x-ui-float-right">',
      '<tpl switch="_field">',
        // =====================================================================================余额
        '<tpl case="balance">',
          '<b>{balance:stringInteger}</b>',
        // =====================================================================================净值
        '<tpl case="equity">',
          '<b class="{equity:moneyColor}">{equity:money}</b>',
      '</tpl>',
    '</div>'
  ]
});
