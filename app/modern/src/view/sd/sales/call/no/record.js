Ext.define('APP.view.sd.sales.call.no.record',{
	extend:'Ext.List',
	xtype:'sdSalesCallNoRecord',
	controller:'sd.sales.call',	
	store:{
		type:'call.mobile',
		groupField:'staffdate',
		groupDir:'DESC',
		autoLoad:false,
		proxy:{
			extraParams:{allot:1}
		}
	},
	plugins:[
		{type:'pullrefresh'},
		{type:'listpaging'}
	],
	viewModel:{data:{parameter:{invalid:0}}},
	items:[
		{xtype:'navbar'},
		{xtype:'searchbar',component:{pattern:'[0-9]*'}},
		{xtype:'segmentedtab',ui:'tab',name:'invalid',bind:{value:'{parameter.invalid}'},
			items:[
				{text:'使用中',iconCls:'f-mt mt-hollow-state-yes',value:0},
				{text:'已弃用',iconCls:'f-mt mt-hollow-state-no',value:1},
				{text:'全部',iconCls:'f-mt mt-hollow-state-all',value:''}
			]
		}
	],
	userCls:'x-ui-list',
	itemCls:'x-ui-mini x-ui-list-call',
	itemTpl:[
		'<div class="x-ui-objects">',
			'<p>{no}<p>',
			'<p>{team_name}<p>',
			'<p>{namecn} {name}<p>',
		'</div>',
		'<div class="x-ui-explain">',
			//'<p class="x-ui-first"><span class="x-ui-label x-ui-bg-green">{namecn}</span> <span class="x-ui-label x-ui-bg-green">{name}</span></p>',
			//'<p>{team_name}</p>',
			'<p><label>总量：</label><b>{voice_addupupper}</b> Min</p>',
			'<p><label>已用：</label><b class="x-ui-text-blue">{voice_used}</b> Min</p>',
			'<p><label>剩余：</label><b class="x-ui-text-red">{voice_canuse}</b> Min</p>',
		'</div>',
		'<div class="x-ui-right">',
			'<label>总通话时长</label>',
			'<b>{duration:timeFilter}</b>',
		'</div>'
	],
	listeners:{
		initialize:'onApplyStoreLoad'
		//itemtap:'onContactsItemtap'
	}
});
