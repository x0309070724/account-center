Ext.define('APP.view.sd.analysis.sales.time',{
	extend:'Ext.List',
	controller:'sd.analysis.sales',	
	store:{
		type:'sales.analysis.sales',
		sorters:[{property:'objects',direction:'DESC'}]
	},
	plugins:[
		{type:'pullrefresh'}
	],
	items:[
		{xtype:'navbar',menu:[
			{xtype:'spacer'},
			{xtype:'datepartbutton',hideDatepart:true}
		]},
		{xtype:'boxdatepart'},
		{xtype:'segmentedtab',ui:'tab',name:'field',bind:{value:'{parameter.field}'},
			items:[
				{text:'电资销售',value:'resources',iconCls:'f-mt mt-field-resources'},
				{text:'客户维护',value:'care',iconCls:'f-mt mt-field-care'},
				{text:'通话记录',value:'call',iconCls:'f-mt mt-field-call'}
			]
		},
		{xtype:'boxtotal'}
	],
	userCls:'x-ui-list',
	itemTpl:[
		'<div class="x-ui-left x-ui-block">',
			'{objects:ledgerDay}',
		'</div>',
		'<tpl switch="field">',
			//=====================================================================================电资销售
			'<tpl case="resources">',
				'<div class="x-ui-explain">',
					'<p><label>无　效：</label>{resources_invalid:stringInteger}</p>',
					'<p class="x-ui-text-red"><label>无意向：</label>{resources_no:stringInteger}</p>',
					'<p class="x-ui-text-green"><label>待跟进：</label>{resources_yes:stringInteger}</p>',
				'</div>',
				'<div class="x-ui-right">',
					'<label>销售对象</label>',
					'<b>{resources:stringInteger}</b>',
				'</div>',
			//=====================================================================================客户维护
			'<tpl case="care">',
				'<div class="x-ui-explain">',
					'<p><label>无　效：</label>{resources_invalid:stringInteger}</p>',
					'<p class="x-ui-text-red"><label>无意向：</label>{resources_no:stringInteger}</p>',
					'<p class="x-ui-text-green"><label>待跟进：</label>{resources_yes:stringInteger}</p>',
				'</div>',
				'<div class="x-ui-right">',
					'<label>客户维护</label>',
					'<b>{care:stringInteger}</b>',
				'</div>',
			//=====================================================================================通话记录
			'<tpl case="call">',
				'<div class="x-ui-explain">',
					'<p><label>通话次数：</label>{call_count:stringInteger}</p>',
					'<p class="x-ui-text-green"><label>平均时长：</label>{call_duration_average:timeFilter}</p>',
				'</div>',
				'<div class="x-ui-right">',
					'<label>通话时长</label>',
					'<b>{call_duration:timeFilter}</b>',
				'</div>',
		'</tpl>'
	],
	listeners:{
		itemtap:'onTimeItemtap'
	}
});

