Ext.define('APP.view.sd.account.detail.total',{
	extend:'Ext.Container',
	xtype:'sdAccountDetailTotal',
	controller:'sd.account',
	scrollable:true,
	tpl:[
		'<div class="x-ui-part">',
			'<div class="x-ui-grid">',
				'<h3>交易统计</h3>',
				'<div class="x-ui-grid-inner">',
					'<dl><dt>入金</dt><dd><b class="x-ui-text-green">{funds_deposit:usMoney}</b></dd></dl>',
					'<dl><dt>出金</dt><dd><b class="x-ui-text-red">{funds_withdrawal:usMoney}</b></dd></dl>',
					'<dl><dt>净入金</dt><dd><b class="x-ui-text-blue">{funds_net_deposit:usMoney}</b></dd></dl>',
					'<dl><dt>交易量</dt><dd><b class="x-ui-text-black">{trade_volume:stringNumeral(2)}</b></dd></dl>',
				'</div>',
			'</div>',
		'</div>',

		'<div class="x-ui-part">',
			'<div class="x-ui-grid">',
				'<h3>账户资产</h3>',
				'<div class="x-ui-grid-inner">',
					'<dl><dt>余额</dt><dd><b class="x-ui-text-green">{assets.balance:usMoney}</b></dd></dl>',
					'<dl><dt>信用</dt><dd><b class="x-ui-text-black">{assets.credit:usMoney}</b></dd></dl>',
					'<dl><dt>净值</dt><dd><b class="x-ui-text-blue">{assets.equity:usMoney}</b></dd></dl>',
					'<dl><dt>已用</dt><dd><b class="x-ui-text-black">{assets.margin:usMoney}</b></dd></dl>',
					'<dl><dt>可用</dt><dd><b class="x-ui-text-red">{assets.margin_free:usMoney}</b></dd></dl>',
					'<tpl if="assets.margin_level">',
						'<dl><dt>可用比例</dt><dd>{assets.margin_level:stringNumeral(2)} %</dd></dl>',
					'</tpl>',
				'</div>',
			'</div>',
		'</div>'
	
	
//		
//		'<tpl if="audit==0">',
//			'<div class="x-ui-part">',
//				'<div class="x-ui-shadow">',
//					'<h2 class="x-ui-propertygrid-title">银行卡</h2>',
//					'<table class="x-ui-propertygrid"><tbody>',
//						'<tr><td>币种：</td><td><b>{bank_currency}</b></td></tr>',
//						'<tr><td>开户行：</td><td><span class="icon-bank {bank_icon}">{bank_name}</span></td></tr>',
//						'<tr><td>分行：</td><td>{bank_branch}<r>{bank_city}</r></td></tr>',
//						'<tr><td>卡号：</td><td>{bank_cardno}</td></tr>',
//					'</tbody></table>',
//				'</div>',
//			'</div>',
//		'</tpl>',
//		
////		
////		'<tpl if="audit==1">',
////			'<div class="x-ui-part">',
////				'<div class="x-ui-shadow">',
////					'<h2 class="x-ui-propertygrid-title">账户资产</h2>',
////					'<table class="x-ui-propertygrid"><tbody>',
////						'<tr><td>余额：</td><td><b class="x-ui-text-green">{assets.balance:usMoney}</b></td></tr>',
////						'<tr><td>信用：</td><td><b class="x-ui-text-black">{assets.credit:usMoney}</b></td></tr>',
////						'<tr><td>净值：</td><td><b class="x-ui-text-blue">{assets.equity:usMoney}</b></td></tr>',
////						'<tr><td>已用：</td><td><b class="x-ui-text-black">{assets.margin:usMoney}</b></td></tr>',
////						'<tr><td>可用：</td><td>',
////							'<b class="x-ui-text-red">{assets.margin_free:usMoney}</b>',
////							'<tpl if="assets.margin_level">',
////								'<r>{assets.margin_level:stringNumeral(2)} %</r>',
////							'</tpl>',
////						'</td></tr>',
////					'</tbody></table>',
////				'</div>',
////			'</div>',
////		'</tpl>',
//		
		
	]
});











