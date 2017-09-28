Ext.define('APP.view.sd.funds.record',{
	extend:'Ext.List',
	xtype:'sdFundsRecord',
	controller:'sd.funds',	
	grouped:true,
	masked:{xtype:'loadmask'},
	store:{
		type:'funds.manager',
		autoLoad:false
	},
	plugins:[
		{type:'pullrefresh'},
		{type:'listpaging'}
	],
	viewModel:{data:{parameter:{menu:''}}},
	items:[
		{xtype:'navbar'},
		{xtype:'searchbar',component:{pattern:'[0-9]*'}},
		{xtype:'segmentedtab',ui:'tab',name:'menu',bind:{value:'{parameter.menu}'},
			items:[
				{text:'入金',iconCls:'f-mt mt-money-manage',value:'deposit'},
				{text:'出金',iconCls:'f-mt mt-entry-manage',value:'withdrawal'},
				//{text:'信用',iconCls:'f-mt mt-dollar-3',value:'credit'},
				{text:'转账',iconCls:'f-mt mt-trading',value:'transfer'},
				{text:'全部',iconCls:'f-mt mt-menu-all2',value:''}
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
					'<p class="x-ui-first"><span class="icon-bank {bank_icon}">{bank_name}</span></p>',
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
			'<p><label>时间：</label>{audit_time:date("H:i A")}</p>',
		'</div>'
	],
	listeners:{
		itemtap:'onRecordItemtap'
	}
});
