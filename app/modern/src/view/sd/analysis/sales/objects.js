Ext.define('APP.view.sd.analysis.sales.objects',{
	extend:'Ext.List',
	controller:'sd.analysis.sales',	
	store:{
		type:'analysis.sales.statistics',
		super:true,
		proxy:{
			extraParams:{
				datepart:'month',
				startdate:Ext.Date.format(new Date(),'Y-m'),
				enddate:Ext.Date.format(new Date(),'Y-m')
			}
		}
	},
	plugins:[
		{type:'pullrefresh'}
	],
	items:[
		{xtype:'navbar',menu:[
			{xtype:'spacer'},
			{xtype:'datepartbutton'}
		]},
		{xtype:'boxdatepart'},
		{xtype:'segmentedtab',ui:'tab',name:'field',bind:{value:'{parameter.field}'},
			items:[
				{text:'电资销售',value:'resources',iconCls:'f-mt mt-field-resources',sorter:{property:'resources',direction:'DESC'}},
				{text:'客户维护',value:'care',iconCls:'f-mt mt-field-care',sorter:{property:'care',direction:'DESC'}},
				{text:'通话记录',value:'call',iconCls:'f-mt mt-field-call',sorter:{property:'call_duration',direction:'DESC'}}
			]
		},
		{xtype:'boxtotal'}
	],
	userCls:'x-ui-list',
	itemCls:'x-ui-listitem-ranking',
	itemTpl:[
		'<tpl switch="menu">',
			//=====================================================================================销售
			'<tpl case="staff">',
				'<div class="x-ui-no x-ui-no-{ranking}">',
					'<b>{ranking}</b>',
				'</div>',
				'<div class="x-ui-userface">',
					'<img src="{objects_icon:resizeWxImg("/0","/64")}" alt="" onerror="this.src=\'/resources/images/userface.png\'"/>',
				'</div>',
				'<div class="x-ui-name">',
					'<p>{objects}</p>',
					'<p>{objects_tip}{[this.postName(values)]}</p>',
				'</div>',
			//=====================================================================================团队
			'<tpl default>',
				'<div class="x-ui-no x-ui-no-{ranking}">',
					'<b>{ranking}</b>',
				'</div>',
				'<div class="x-ui-name">',
					'<p>{objects}</p>',
					'<p>{manager_namecn} <span>{manager_name}</span></p>',
				'</div>',
		'</tpl>',

		'<div class="x-ui-value">',
			'<tpl switch="field">',
				//=====================================================================================电资销售
				'<tpl case="resources">',
					'<label>销售对象</label>',
					'<b>{resources:stringInteger}</b>',
				//=====================================================================================客户维护
				'<tpl case="care">',
					'<label>维护对象</label>',
					'<b>{care:stringInteger}</b>',
				//=====================================================================================通话记录
				'<tpl case="call">',
					'<label>通话时长</label>',
					'<b>{call_duration:timeFilter}</b>',
			'</tpl>',
		'</div>',
		{postName:function(record){
			if(record.id==record.managerid&&record.teamid.toString().substr(9,3)=='000'){
				return '·经理'
			}else if(record.id==record.managerid){
				return '·主管'
			}
		}}
	],
	listeners:{
		itemtap:'onObjectsItemtap'
	}
});

