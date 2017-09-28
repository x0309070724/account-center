Ext.define('APP.view.sd.sales.call.analysis.statistics',{
	extend:'Ext.List',
	xtype:'sdSalesCallAnalysisStatistics',
	controller:'sd.sales.call',	
	store:{
		type:'sdSalesCallStatistics',
		sorters:[{property:'duration',direction:'DESC'}],
		proxy:{
			extraParams:{
				datepart:'month',
				field:'duration',
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
		{xtype:'segmentedtab',ui:'tab',name:'menu',bind:{value:'{parameter.menu}'},
			items:[
				{text:'顾问',iconCls:'f-mt mt-staff',value:'staff'},
				{text:'团队',iconCls:'f-mt mt-team',value:'t2'},
				{text:'部门',iconCls:'f-mt mt-department',value:'t1'}
			]
		},
		{xtype:'boxtotal'}
	],
	userCls:'x-ui-list',
	itemCls:'x-ui-listitem-ranking',
	itemTpl:[
		'<tpl switch="menu">',
			//=====================================================================================员工
			'<tpl case="staff">',
				'<div class="x-ui-no x-ui-mini">',
					'{ranking}',
				'</div>',
				'<div class="x-ui-userface">',
					'<img src="{wx_userface:resizeWxImg("/0","/64")}" alt="" onerror="this.src=\'/resources/images/userface.png\'"/>',
				'</div>',
				'<div class="x-ui-name">',
					'<p>{namecn} {name}</p>',
					'<p>{team_name}{[this.postName(values)]}</p>',
				'</div>',
			//=====================================================================================团队
			'<tpl default>',
				'<div class="x-ui-no x-ui-no-{ranking}">',
					'{ranking}',
				'</div>',
				'<div class="x-ui-name">',
					'<p>{objects}</p>',
					'<p>{manager_namecn} <span>{manager_name}</span></p>',
				'</div>',
		'</tpl>',
		'<div class="x-ui-value">',
			'<label>通话时长</label>',
			'<b>{duration:timeFilter}</b>',
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
		initialize:'onApplyStoreLoad'
	}
});

