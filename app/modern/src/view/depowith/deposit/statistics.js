Ext.define('APP.view.depowith.deposit.statistics', {
  extend: 'Ext.List',
  xtype: 'depowithDepositStatistics',
  controller: 'depowith',
  store: {
    type: 'analysis.trade.trend',
    autoLoad: false,
    proxy: {
      extraParams: {
        datepart: 'month',
        startdate: Ext.Date.format(new Date(2016, 0), 'Y-m'),
        enddate: Ext.Date.format(new Date(2018, 0), 'Y-m')
      }
    }
  },
  viewModel: {data: {parameter: {_field: 'funds_deposit'}}},
  items: [
    {
      xtype: 'navbar'
    },
    {xtype: 'boxdatepart'},
    {xtype: 'piechart'},
    {
      xtype: 'segmentedtab', ui: 'tab', name: '_field', bind: {value: '{parameter._field}'},
      items: [
        {text: '入金统计', value: 'funds_deposit', iconCls: 'f-mt mt-field-account'}
      ]
    },
    {xtype: 'boxtotal'}
  ],
  userCls: 'x-ui-list',
  itemTpl: [
    '<div>',
      '<b>{objects}</b>',
    '</div>',
    '<div class="x-ui-float-right">',
      '<tpl switch="_field">',
        // =====================================================================================入金统计
        '<tpl case="funds_deposit">',
          '<b class="x-ui-text-green">{funds_deposit:usMoney} | </b><b class="x-ui-grey">{funds_deposit_count:stringInteger} 笔</b>',
      '</tpl>',
    '</div>'
  ]
});
