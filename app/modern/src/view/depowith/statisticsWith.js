Ext.define('APP.view.depowith.statisticsWith', {
  extend: 'Ext.List',
  xtype: 'depowithStatisticsWith',
  controller: 'depowith',
  store: {
    type: 'analysis.trade.trend',
    autoLoad: false,
    // super: true,
    proxy: {
      extraParams: {
        // menu: 'account',
        datepart: 'month',
        startdate: Ext.Date.format(new Date(2016, 0), 'Y-m'),
        enddate: Ext.Date.format(new Date(2018, 0), 'Y-m')
      }
    }
  },
  viewModel: {data: {parameter: {_field: 'funds_withdrawal'}}},
  items: [
    {
      xtype: 'navbar'
    },
    {xtype: 'boxdatepart'},
    {xtype: 'piechart'},
    {
      xtype: 'segmentedtab', ui: 'tab', name: '_field', bind: {value: '{parameter._field}'},
      items: [
        {text: '出金统计', value: 'funds_withdrawal', iconCls: 'f-mt mt-field-account'}
      ]
    },
    {xtype: 'boxtotal'}
  ],
  userCls: 'x-ui-list',
  itemTpl: [
    '<div>',
      // '<b>{objects:ledgerDay}</b>',
      '<b>{objects}</b>',
    '</div>',
    '<div class="x-ui-float-right">',
      '<tpl switch="_field">',
        // =====================================================================================出金统计
        '<tpl case="funds_withdrawal">',
          '<b>{funds_withdrawal:money} | {funds_withdrawal_count:stringInteger} 笔</b>',
      '</tpl>',
    '</div>'
  ]
});
