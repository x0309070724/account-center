Ext.define('APP.view.sd.sales.call.no.package',{
	extend:'Ext.List',
	xtype:'sdSalesCallNoPackage',
	controller:'sd.sales.call',	
	store:{
		type:'call.package',
		autoLoad:true,
		pageSize:30,
		proxy:{
			extraParams:{month:Ext.Date.format(new Date(),'Y-m')}
		}
	},
	plugins:[
		{type:'pullrefresh'},
		{type:'listpaging'}
	],
	items:[
		{xtype:'navbar'},
		{xtype:'searchbar',component:{pattern:'[0-9]*'}}
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
		//initialize:'onApplyStoreLoad'
		//itemtap:'onContactsItemtap'
	}
});
