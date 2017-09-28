Ext.define('APP.view.sd.account.detail.funds',{
	extend:'Ext.List',
	xtype:'sdAccountDetailFunds',
	controller:'sd.funds',
	grouped:true,
	store:{
		type:'funds.apply',
		autoLoad:false
	},
	plugins:[
		{type:'pullrefresh'},
		{type:'listpaging'}
	],
	userCls:'x-ui-list',
	itemTpl:[
		'<div class="x-ui-left x-ui-block">',
			'{time:date("H:i A")}',
		'</div>',
		'<div class="x-ui-explain">',
			'<tpl if="cmd==3">',
				'<p><label>对方：</label>{transfer}</p>',
			'<tpl else>',
				'<p><label>银行：</label>{bank_name}</p>',
			'</tpl>',
			'<p class="x-ui-state">{audit:strAudit}</p>',
		'</div>',
		'<div class="x-ui-right">',
			'<tpl switch="cmd">',
				// ====================================================================================出入金
				'<tpl case="1">',
					'<tpl if="direction==1">',
						'<label>入金</label><b class="x-ui-font-number x-ui-text-green">{money:usMoney}</b>',
					'<tpl else>',
						'<label>出金</label><b class="x-ui-font-number x-ui-text-red">{money:usMoney}</b>',
					'</tpl>',
				// =====================================================================================信用
				'<tpl case="2">',
					'<tpl if="direction==1">',
						'<label>借款</label><b class="x-ui-font-number x-ui-text-green">{money:usMoney}</b>',
					'<tpl else>',
						'<label>还款</label><b class="x-ui-font-number x-ui-text-red">{money:usMoney}</b>',
					'</tpl>',
				'<tpl case="3">',
					'<tpl if="direction==1">',
						'<label>转入</label><b class="x-ui-font-number x-ui-text-green">{money:usMoney}</b>',
					'<tpl else>',
						'<label>转出</label><b class="x-ui-font-number x-ui-text-red">{money:usMoney}</b>',
					'</tpl>',
			'</tpl>',
		'</div>'
	],
	listeners:{
		initialize:'onApplyStoreLoad',
		itemtap:'onRecordItemtap'
	}
});
