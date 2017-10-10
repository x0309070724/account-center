Ext.define('APP.view.account.statistics.order', {
  extend: 'Ext.List',
  xtype: 'accountStatisticsOrder',
  controller: 'account',
  grouped: true,
  store: {
    type: 'rdTradeHistory',
    autoLoad: false,
    grouper: {
      groupFn: function (record) {
        return Ext.Date.format(record.data.close_time, 'Y-m-d')
      },
      property: 'close_time',
      direction: 'DESC'
    },
    proxy: {extraParams: {menu: 'order'}}
  },
  plugins: [
    {type: 'pullrefresh'},
    {type: 'listpaging'}
  ],
  userCls: 'x-ui-list',
  itemCls: 'x-ui-list-trade',
  itemTpl: [
    '<div class="x-ui-explain">',
      '<p><b>{symbol} </b><b class="x-ui-text-blue">{cmd:tradeCmd} {volume:stringNumeral(2)}</b></p>',
      '<p>{open_price} → {close_price}</p>',
    '</div>',
    '<div class="x-ui-right">',
      '<label>{open_time:date("Y-m-d H:i:s")}</label>',
      '<label>{close_time:date("Y-m-d H:i:s")}</label>',
      '<b>{profit:money}</b>',
    '</div>'
  ],
  listeners: {
    initialize: 'onApplyStoreLoad'
    // initialize: 'onDetailOrderInitialize'
  }
});
