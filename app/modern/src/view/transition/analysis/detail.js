Ext.define('APP.view.transition.analysis.detail', {
  extend: 'Ext.Container',
  xtype: 'transitionAnalysisDetail',
  controller: 'transition.analysis',
  scrollable: true,
  tpl:[
		'<div class="x-ui-part">',
			'<div class="x-ui-grid">',
				'<h3>综合分析</h3>',
				'<div class="x-ui-grid-inner">',
					'<dl><dt>交易商品</dt><dd><b class="x-ui-text-black">{objects}</b></dd></dl>',
					'<dl><dt>成交量</dt><dd><b class="x-ui-text-black">{trade_volume:money} </b> | <b class="x-ui-grey">{trade_count} 笔</b></dd></dl>',
					'<dl><dt>每手收益</dt><dd><b class="x-ui-text-grey">{trade_profit_average:usMoney}</b></dd></dl>',
					'<dl><dt>交易盈亏</dt><dd><b class="x-ui-text-green">{trade_profit:usMoney}</b></dd></dl>',
					'<dl><dt>手续费</dt><dd><b class="x-ui-text-blue">{trade_commission:usMoney}</b></dd></dl>',
					'<dl><dt>库存费</dt><dd><b class="x-ui-text-grey">{trade_storage:usMoney}</b></dd></dl>',
          '<tpl if="trade_profit_total &gt;= 0">',
            '<dl><dt>净盈亏</dt><dd><b class="x-ui-text-green">{trade_profit_total:usMoney}</b></dd></dl>',
          '<tpl else>',
            '<dl><dt>净盈亏</dt><dd><b class="x-ui-text-red">{trade_profit_total:usMoney}</b></dd></dl>',
          '</tpl>',
				'</div>',
			'</div>',
		'</div>'
	],
  listeners: {
    // initialize: 'onDetailInitialize'
  }
});
