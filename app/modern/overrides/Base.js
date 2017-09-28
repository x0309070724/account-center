//Ext.define('Override.field.Number',{
//	override:'Ext.field.Number',
//	applyValue:function(value){
//		var minValue=this.getMinValue(),
//			maxValue=this.getMaxValue(),
//			decimal=this.decimalPrecision;
//		if(Ext.isNumber(minValue)&&Ext.isNumber(value)){value=Math.max(value,minValue)}
//		if(Ext.isNumber(maxValue)&&Ext.isNumber(value)){value=Math.min(value,maxValue)}
//		return(isNaN(value))?'':value
//	}
//});
Ext.define('Override.MessageBox',{
    override:'Ext.MessageBox',
	config:{
		scrollable:false,
		shadow:false,
		collapsible:false,
		maximizable:false,
		closable:true,
		closeAction:'hide',
		width:'80%',
		//hideOnMaskTap:true,
		buttonToolbar:{defaults:{flex:1}},
		showAnimation:{type:'popIn',duration:250,easing:'ease-out'},
		hideAnimation:{type:'popOut',duration:250,easing:'ease-out'}
	}
});

Ext.define('Override.form.Panel',{
	override:'Ext.form.Panel',
	layout:'vbox',
	border:false
});

Ext.define('Override.form.FieldSet',{
	override:'Ext.form.FieldSet',
	layout:'vbox',
	border:false
});

//
//Ext.define('Override.field.Select',{
//	override:'Ext.field.Select',
//	usePicker:true
//});

//Ext.define('Override.picker.Date',{
//	override:'Ext.picker.Date',
//	config:{
//		cancelButton:'取消',
//		doneButton:'完成',
//		border:true,
//		toolbar:{border:true},
//		hideOnMaskTap:true,
//		slotOrder:['year','month','day']
//	}
//});
//



//Ext.define('Ext.theme.material.dataview.pullrefresh.PullRefresh', {
//    override: 'Ext.dataview.pullrefresh.PullRefresh',
//    config: {
//        overlay: false,
//        widget: {
//            xtype: 'pullrefreshbar'
//        }
//    }
//});

//Ext.define('Override.plugin.PullRefresh',{
//	//override:'Ext.dataview.pullrefresh.PullRefresh',
//	override:'Ext.dataview.pullrefresh.PullRefresh',
//	config:{
//		widget:{xtype:'pullrefreshbar'},
//		overlay:false,
//		autoSnapBack:true,
//		snappingAnimationDuration:500,
//		pullText:'下拉刷新...',
//		releaseText:'放开以刷新...',
//		loadingText:'正在加载...',
//		loadedText:'加载成功...',
//		lastUpdatedText:'上次更新：',
//		lastUpdatedDateFormat:'Y-m-d h:i:s A'
//	}
//});


Ext.define('Override.plugin.PullRefresh',{
	override:'Ext.plugin.PullRefresh',
	config:{
		widget:'pullrefreshbar',
		overlay:false,
		autoSnapBack:true,
		snappingAnimationDuration:500,
		pullText:'下拉刷新...',
		releaseText:'放开以刷新...',
		loadingText:'正在加载...',
		loadedText:'加载成功...',
		lastUpdatedText:'上次更新：',
		lastUpdatedDateFormat:'Y-m-d h:i:s A'
	}
});

Ext.define('Override.plugin.ListPaging',{
	override:'Ext.plugin.ListPaging',
	config:{
		autoPaging:true,
		loadMoreText:'查看更多',
		noMoreRecordsText:'我是有底线的',
		noMoreRecordsText:''
	}
});

Ext.define('Override.dataview.List',{
	override:'Ext.dataview.List',
	config:{
		focusCls:false,
		focusableContainer:false,
		//ripple:false,
		//itemRipple:false,
		pinHeaders:false,
		disableSelection:true,
		emptyText:'<div class="x-view-empty"><icon class="f-mt mt-amazing"></icon>No Records</div>'
	}
});


Ext.define('Override.LoadMask',{
	override:'Ext.LoadMask',
	getTemplate: function() {
		var prefix = Ext.baseCSSPrefix;

		return [
			{
				reference: 'innerElement',
				cls: prefix + 'mask-inner',
				children: [
					//the elements required for the CSS loading {@link #indicator}
					{
						reference:'indicatorElement',
						cls:'x-ui-processing',
						children: [
							{ tag: 'span'},{ tag: 'span'},{ tag: 'span'}
						]
					},
					//the element used to display the {@link #message}
					{
						reference: 'messageElement'
					}
				]
			}
		];
	}	
});






