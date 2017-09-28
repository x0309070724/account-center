Ext.define('APP.view.sd.analysis.sales.detail',{
	extend:'Ext.Container',
	xtype:'sdAnalysisSalesDetail',
	controller:'sd.analysis.sales',	
	scrollable:true,
	tpl:[
		'<div class="x-ui-part">',
			'<div class="x-ui-grid">',
				'<h3>电资销售</h3>',
				'<div class="x-ui-grid-inner">',
					'<dl><dt>无　效</dt><dd>{resources_invalid:stringInteger}</dd></dl>',
					'<dl><dt>无意向</dt><dd><b class="x-ui-text-red">{resources_no:stringInteger}</b></dd></dl>',
					'<dl><dt>待跟进</dt><dd><b class="x-ui-text-green">{resources_yes:stringInteger}</b></dd></dl>',
					'<dl><dt>小计</dt><dd><b class="x-ui-text-blue">{resources:stringInteger}</b></dd></dl>',
				'</div>',
			'</div>',
		'</div>',
		'<div class="x-ui-part">',
			'<div class="x-ui-grid">',
				'<h3>客户维护</h3>',
				'<div class="x-ui-grid-inner">',
					'<dl><dt>无　效</dt><dd>{resources_invalid:stringInteger}</dd></dl>',
					'<dl><dt>无意向</dt><dd><b class="x-ui-text-red">{resources_no:stringInteger}</b></dd></dl>',
					'<dl><dt>待跟进</dt><dd><b class="x-ui-text-green">{resources_yes:stringInteger}</b></dd></dl>',
					'<dl><dt>小计</dt><dd><b class="x-ui-text-blue">{resources:stringInteger}</b></dd></dl>',
				'</div>',
			'</div>',
		'</div>',
		'<div class="x-ui-part">',
			'<div class="x-ui-grid">',
				'<h3>通话记录</h3>',
				'<div class="x-ui-grid-inner">',
					'<dl><dt>通话次数</dt><dd><b class="x-ui-text-green">{call_count:stringInteger}</b></dd></dl>',
					'<dl><dt>平均时长</dt><dd><b class="x-ui-text-red">{call_duration_average:timeFilter}</b></dd></dl>',
					'<dl><dt>通话时长</dt><dd><b class="x-ui-text-blue">{call_duration:timeFilter}</b></dd></dl>',
				'</div>',
			'</div>',
		'</div>'
	],
	listeners:{
		initialize:'onDetailInitialize'
	}
});

