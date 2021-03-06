Ext.define('APP.view.account.statistics.accountStatistics', {
  extend: 'Ext.Container',
  xtype: 'accountStatisticsAccountStatistics',
  controller: 'account',
  scrollable: true,
  tpl: [
    '<div class="x-ui-part">',
			'<div class="x-ui-grid">',
				'<h3>账户统计</h3>',
				'<div class="x-ui-grid-inner">',
					'<dl><dt>入金：{funds_deposit:usMoney}</dt><dd><b></b>{funds_deposit_count} 笔</dd></dl>',
					'<dl><dt>出金：{funds_withdrawal:usMoney}</dt><dd>{funds_withdrawal_count} 笔</dd></dl>',
					'<dl><dt>信用：{funds_credit:usMoney}</dt><dd>{funds_credit_count} 笔</dd></dl>',
					'<dl><dt>合计：{funds_total:usMoney}</dt><dd</dd></dl>',
				'</div>',
			'</div>',
		'</div>',

		'<div class="x-ui-part">',
			'<div class="x-ui-grid">',
				'<h3>交易</h3>',
				'<div class="x-ui-grid-inner">',
					'<dl><dt>盈亏：{trade_profit:usMoney}</dt><dd>{trade_count} 笔 | {trade_count} 手</dd></dl>',
					'<dl><dt>手续费：{trade_commission:usMoney}</dt><dd></dd></dl>',
					'<dl><dt>税金：{trade_taxes:usMoney}</dt><dd></dd></dl>',
					'<dl><dt>合计：{trade_total:usMoney}</dt><dd></dd></dl>',
				'</div>',
			'</div>',
		'</div>',

		'<div class="x-ui-part">',
			'<div class="x-ui-grid">',
				'<h3>账户资产</h3>',
				'<div class="x-ui-grid-inner">',
					'<dl><dt>余额</dt><dd><b class="x-ui-text-green">{balance:usMoney}</b></dd></dl>',
					'<dl><dt>信用</dt><dd><b class="x-ui-text-black">{credit:usMoney}</b></dd></dl>',
					'<dl><dt>净值</dt><dd><b class="x-ui-text-blue">{mt4Data.equity:usMoney}</b></dd></dl>',
					'<dl><dt>已用</dt><dd><b class="x-ui-text-black">{mt4Data.margin:usMoney}</b></dd></dl>',
					'<dl><dt>可用</dt><dd><b class="x-ui-text-blue">{mt4Data.margin_free:usMoney}</b></dd></dl>',
				'</div>',
			'</div>',
		'</div>'
  ],
  listeners: {
    initialize: 'onDetailInfoInitialize'
  }
});
