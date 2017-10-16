Ext.define('APP.view.transition.history.record', {
  extend: 'Ext.List',
  controller: 'transition.history',
  store: {
    type: 'history.record',
    autoLoad: false,
    // pageSize: 30,
    // super: true,
    proxy: {
      extraParams: {
        // app: 'deposit',
        // datepart参数必传，否则datepartbutton组件会出异常
        datepart: 'day',
        startdate: Ext.Date.format(new Date(new Date().getFullYear()-1,new Date().getMonth()+1,new Date().getDate()), 'Y-m-d'),
        enddate: Ext.Date.format(new Date(), 'Y-m-d')
      }
    }
  },
  // plugins: [
  //   {type: 'pullrefresh'}
  // ],
  viewModel: {data: {parameter: {field: 'idxkey'}}},
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
          text: '交易类型',
          iconCls: 'f-mt mt-field-funds',
          value: 'idxkey',
          // sorter: {property: 'funds_net_deposit', direction: 'DESC'}
        },
        {
          text: '金额',
          iconCls: 'f-mt mt-field-volume',
          value: 'profit',
          // sorter: {property: 'trade_volume', direction: 'DESC'}
        }
      ]
    },
    {xtype: 'boxtotal'}
  ],
  userCls: 'x-ui-list',
  itemCls: 'x-ui-list-report',
  itemTpl: [
    '<div class="x-ui-objects">',
      '<p>#{order}</p>',
      // '<p>{objects_tip}</p>',
    '</div>',
    '<tpl switch="field">',
      // =====================================================================================交易类型
      '<tpl case="idxkey">',
        '<div class="x-ui-explain">',
          '<p><b class="x-ui-text-green">时间：{t_day}</b></p>',
          // '<p><label>交易类型：</label><b class="x-ui-text-red">{idxkey:stringInteger}</b></p>',
        '</div>',
        '<div class="x-ui-right">',
          '<p><label>交易类型：</label><b class="x-ui-text-purple">{idxkey}</b></p>',
        '</div>',
      // =====================================================================================金额
      '<tpl case="profit">',
        '<div class="x-ui-right">',
          '<p><label>金　额：</label><b class="x-ui-text-red">{profit:money}</b></p>',
        '</div>',
    '</tpl>'
  ],
  listeners: {
    // itemtap: 'onRecordItemtap'
  }
});
