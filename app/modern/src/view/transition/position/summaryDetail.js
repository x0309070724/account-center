Ext.define('APP.view.transition.position.summaryDetail', {
  extend: 'Ext.Container',
  xtype: 'transitionPositionSummaryDetail',
  controller: 'transition.position',
  scrollable: true,
  tpl:[
		'<div class="x-ui-part">',
			'<div class="x-ui-grid">',
				'<h3>仓位汇总</h3>',
				'<div class="x-ui-grid-inner">',
					'<dl><dt>交易商品</dt><dd><b class="x-ui-text-black">{objects}</b></dd></dl>',
					'<dl><dt>买入</dt><dd><b class="x-ui-text-green">{buy_volume:money} &nbsp;&nbsp; </b><b class="x-ui-grey">{buy_profit:usMoney}</b></dd></dl>',
					'<dl><dt>卖出</dt><dd><b class="x-ui-text-red">{sell_volume:money} &nbsp;&nbsp; </b><b class="x-ui-grey">{sell_profit:usMoney}</b></dd></dl>',
					'<dl><dt>净头寸</dt><dd><b class="x-ui-text-blue">{position_volume:money}</b></dd></dl>',
					'<dl><dt>手续费</dt><dd><b class="x-ui-text-black">{commission:usMoney}</b></dd></dl>',
					'<dl><dt>库存费</dt><dd><b class="x-ui-text-black">{storage:usMoney}</b></dd></dl>',
          '<tpl if="clear &lt; 0">',
            '<dl><dt>交易盈亏</dt><dd><b class="x-ui-text-red">{clear:usMoney}</b></dd></dl>',
          '<tpl else>',
            '<dl><dt>交易盈亏</dt><dd><b class="x-ui-text-green">{clear:usMoney}</b></dd></dl>',
          '</tpl>',
				'</div>',
			'</div>',
		'</div>'
	],
  listeners: {
    // initialize: 'onDetailInitialize'
  }
});
