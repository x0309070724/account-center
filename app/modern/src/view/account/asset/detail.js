Ext.define('APP.view.account.asset.detail', {
  extend: 'Ext.Container',
  xtype: 'accountAssetDetail',
  controller: 'account',
  scrollable: true,
  tpl:[
		'<div class="x-ui-part">',
			'<div class="x-ui-grid">',
				'<h3>出入金</h3>',
				'<div class="x-ui-grid-inner">',
					'<dl><dt>入金</dt><dd><b class="x-ui-text-green">{funds_deposit:money}</b></dd></dl>',
					'<dl><dt>出金</dt><dd><b class="x-ui-text-red">{funds_withdrawal:money}</b></dd></dl>',
					'<dl><dt>净入金</dt><dd><b class="x-ui-text-blue">{funds_net_deposit:money}</b></dd></dl>',
				'</div>',
			'</div>',
		'</div>',

		'<div class="x-ui-part">',
			'<div class="x-ui-grid">',
				'<h3>交易盈亏</h3>',
				'<div class="x-ui-grid-inner">',
					'<dl><dt>交易盈亏</dt><dd>{trade_profit:money}</dd></dl>',
					'<dl><dt>浮动盈亏</dt><dd><b class="x-ui-text-green">{balance:money}</b></dd></dl>',
          '<dl><dt>余额</dt><dd><b class="x-ui-text-green">{balance:money}</b></dd></dl>',
          '<dl><dt>净值</dt><dd><b class="x-ui-text-red">{equity:money}</b></dd></dl>',
				'</div>',
			'</div>',
		'</div>'
	],
  listeners: {
    // initialize: 'onDetailInitialize'
  }
});
