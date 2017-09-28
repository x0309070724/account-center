Ext.define('APP.view.sd.account.detail.positions', {
  extend: 'Ext.List',
  xtype: 'sdAccountDetailPositions',
  controller: 'sd.account',
  grouped: true,
  store: {
    sorters: [{property: 'open_time', direction: 'ASC'}],
    grouper: {
      groupFn: function (record) {
        return Ext.Date.format(record.data.open_time, 'Y-m-d')
      },
      property: 'open_time',
      direction: 'DESC'
    },
    fields: [
      {name: 'open_time', type: 'date', dateFormat: 'timestamp'}
    ]
  },
  userCls: 'x-ui-list',
  itemCls: 'x-ui-list-trade',
  itemTpl: [
    '<div class="x-ui-explain">',
      '<p><b>{symbol} </b><b class="x-ui-text-blue">{cmd:tradeCmd} {volume:stringNumeral(2)}</b></p>',
      '<p>{open_price} → {close_price}</p>',
    '</div>',
    '<div class="x-ui-right">',
      '<label>{open_time:date("Y-m-d H:i:s")}</label>',
      '<b>{profit:money}</b>',
    '</div>'
  ],
  listeners: {
    initialize: 'onDetailPositionsInitialize'
  }
});
