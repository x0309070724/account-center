Ext.define('APP.view.sd.funds.applyRecord',{
	extend:'Ext.List',
	xtype:'sdFundsApplyRecord',
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
	viewModel:{data:{parameter:{audit:''}}},
	items:[
		{xtype:'navbar'},
		{xtype:'searchbar',component:{pattern:'[0-9]*'}},
		{xtype:'segmentedtab',ui:'tab',name:'audit',bind:{value:'{parameter.audit}'},
			items:[
				{text:'处理中',iconCls:'f-mt mt-hollow-state-wait',value:0},
				{text:'已通过',iconCls:'f-mt mt-hollow-state-yes',value:1},
				{text:'已拒绝',iconCls:'f-mt mt-hollow-state-no',value:-1},
				{text:'全部',iconCls:'f-mt mt-hollow-state-all',value:''}
			]
		}
	],
	userCls:'x-ui-list',
	itemCls:'x-ui-list-funds',
	itemTpl:[
		'<tpl switch="cmd">',
			//=====================================================================================出入金
			'<tpl case="1">',
				'<div class="x-ui-bank">',
					'<p><span class="icon-bank {bank_icon}">{bank_name}</span></p>',
					'<tpl if="direction==1">',
						'<p><span class="x-ui-box-label x-ui-text-green"><label>入金：</label><b class="x-ui-font-number">{money:usMoney}</b></span></p>',
					'<tpl else>',
						'<p><span class="x-ui-box-label x-ui-text-red"><label>出金：</label><b class="x-ui-font-number">{money:usMoney}</b></span></p>',
					'</tpl>',
				'</div>',
			//=====================================================================================信用
			'<tpl case="2">',
				'<div class="x-ui-bank">',
					'<p><span class="icon-bank {bank_icon}">信用</span></p>',
					'<tpl if="direction==1">',
						'<p><span class="x-ui-box-label x-ui-text-green"><label>借款：</label><b class="x-ui-font-number">{money:usMoney}</b></span></p>',
					'<tpl else>',
						'<p><span class="x-ui-box-label x-ui-text-red"><label>还款：</label><b class="x-ui-font-number">{money:usMoney}</b></span></p>',
					'</tpl>',
				'</div>',
			'<tpl case="3">',
				'<div class="x-ui-bank">',
					'<p><span class="icon-bank {bank_icon}">对方：{transfer}</span></p>',
					'<tpl if="direction==1">',
						'<p><span class="x-ui-box-label x-ui-text-green"><label>转入：</label><b class="x-ui-font-number">{money:usMoney}</b></span></p>',
					'<tpl else>',
						'<p><span class="x-ui-box-label x-ui-text-red"><label>转出：</label><b class="x-ui-font-number">{money:usMoney}</b></span></p>',
					'</tpl>',
					'<p></p>',
				'</div>',
		'</tpl>',
		'<div class="x-ui-explain">',
			'<p class="x-ui-first"><span class="x-ui-label x-ui-bg-black">{login}</span> <span class="x-ui-label x-ui-bg-black">{account_namecn}</span> <span class="x-ui-label x-ui-bg-black">{account_type}</span></p>',
			'<p><label>销售：</label>{salesman_namecn} {salesman2_namecn}</p>',
			'<tpl if="agent&&agent!=login">',
				'<p><label>代理：</label>{agent} <s>{agent_namecn}</s></p>',
			'</tpl>',
			'<p><label>时间：</label>{time:date("H:i A")}</p>',
			'<p class="x-ui-state">{audit:strAudit}</p>',
			'<p class="x-ui-icon">{audit:strAudit(true)}</p>',
		'</div>'
	],
	listeners:{
		itemtap:'onRecordItemtap'
	}
});
