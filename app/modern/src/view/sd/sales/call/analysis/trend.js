Ext.define('APP.view.sd.sales.call.analysis.trend',{
	extend:'Ext.List',
	xtype:'sdSalesCallAnalysisTrend',
	controller:'sd.sales.call',	
	store:{
		type:'sdSalesCallTrend',
		autoLoad:false,
		sorters:[{property:'objects',direction:'DESC'}]
	},
	plugins:[
		{type:'pullrefresh'}
	],
	items:[
		{xtype:'navbar',menu:[
			{xtype:'spacer'},
			{xtype:'datepartbutton'}
		]},
		{xtype:'segmentedtab',ui:'tab',name:'datepart',bind:{value:'{parameter.datepart}'},
			items:[
				{text:'日',value:'day',iconCls:'f-mt mt-day'},
				{text:'周',value:'week',iconCls:'f-mt mt-week'},
				{text:'月',value:'month',iconCls:'f-mt mt-month'}
			]
		}
	],
	userCls:'x-ui-list',
	itemTpl:[
		'<div class="x-ui-left x-ui-block">',
			'{objects:ledgerDay}',
		'</div>',
		'<div class="x-ui-explain">',
			'<p><label>主叫：</label>{duration_caller:timeFilter}</p>',
			'<p><label>被叫：</label>{duration_called:timeFilter}</p>',
			'<p><label>呼转：</label>{duration_transfer:timeFilter}</p>',
		'</div>',
		'<div class="x-ui-right">',
			'<label>通话时长</label>',
			'<b>{duration:timeFilter}</b>',
		'</div>'
	],
	listeners:{
		initialize:'onTrendInitialize',
		itemtap:'onTrendItemtap'
	}
});

