Ext.define('APP.view.depowith.withdrawal.statistics', {
  extend: 'Ext.List',
  xtype: 'depowithWithdrawalStatistics',
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
      '<b>{objects}</b>',
    '</div>',
    '<div class="x-ui-float-right">',
      '<tpl switch="_field">',
        // =====================================================================================出金统计
        '<tpl case="funds_withdrawal">',
          '<b class="x-ui-text-red">{funds_withdrawal:usMoney} | <b class="x-ui-grey">{funds_withdrawal_count:stringInteger} 笔</b></b>',
      '</tpl>',
    '</div>'
  ]
});
