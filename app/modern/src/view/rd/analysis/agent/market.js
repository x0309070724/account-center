Ext.define('APP.view.rd.analysis.agent.market', {
  extend: 'Ext.List',
  controller: 'rd.analysis',
  store: 'mt4TradeGroupByAgent',
  userCls: 'x-ui-list',
  itemCls: 'x-ui-list-report',
  itemTpl: [
    '<div class="x-ui-objects">',
      '<p>{objects}</p>',
      '<p>{objects_tip}</p>',
    '</div>',
    '<div class="x-ui-explain">',
      '<p><label>交易笔数：</label><b class="x-ui-text-green">{market_count:stringInteger}</b></p>',
      '<p><label>　交易量：</label><b class="x-ui-text-red">{market_volume:stringNumeral(2)}</b></p>',
    '</div>',
    '<div class="x-ui-right">',
      '<label>浮亏</label>',
      '<b>{profit:money}</b>',
    '</div>'
  ],
  listeners: {
    itemtap: 'onRecordItemtap'
  }
});
