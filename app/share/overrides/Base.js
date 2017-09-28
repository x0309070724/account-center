Ext.define('Override.data.field.Date',{
    override:'Ext.data.field.Date',
	dateFormat:'time'
});

Ext.define('Override.data.proxy.Ajax',{
    override:'Ext.data.proxy.Ajax',
	config:{
		actionMethods:{create:'POST',read:'POST',update:'POST',destroy:'POST'},
		extraParams:{}
	}
});

Ext.define('Override.draw.Container',{
    override:'Ext.draw.Container',
	config:{
		//downloadServerUrl:'//svg.sencha.io',
		downloadServerUrl:'/'
	}
});








Ext.define('Override.data.Store',{
    override:'Ext.data.Store',
//	autoLoad:false,
//	remoteSort:false,
	pageSize:30,
	config:{
		pageSize:30,
		autoLoad:false,
		remoteSort:false
	},
//	listeners:{
//		beforeload:function(store,operation,eOpts){
//			//console.log(store.getPageSize())
//			if(!store.getPageSize()){
//				var proxy=operation.getProxy();
//				if(proxy.type=='ajax'||proxy.type=='jsonp'){
//					proxy.setConfig('pageParam',false);
//					proxy.setConfig('limitParam',false);
//					proxy.setConfig('startParam',false);
//					proxy.setConfig('noCache',false);
//				}
//			}
//		}
//	},
	onProxyLoad:function(operation){
		var me=this,resultSet=operation.getResultSet(),records=operation.getRecords(),successful=operation.wasSuccessful();if(me.destroyed){return}if(resultSet){me.totalCount=resultSet.getTotal()}if(successful){records=me.processAssociation(records);me.loadRecords(records,operation.getAddRecords()?{addRecords:true}:undefined)}else{me.loading=false}if(me.hasListeners.load){me.fireEvent('load',me,records,successful,operation)}me.callObservers('AfterLoad',[records,successful,operation]);
		//=======================================================扩展
		if(operation.request){
			//console.log(operation.getProxy())
			if(operation.error){
//				if(operation._response){
//					Mate.showTask('<h6>应用程序错误</h6>错误代码：' + operation._response.status + '　' + operation._response.statusText,true)
//				}else{
//					Mate.showTask('<h6>应用程序错误</h6>错误代码：HTTP ERROR',true)
//				}
			}else{
				var rlt=operation._response;
				if(!rlt.success){
					Mate.checkErrCode(rlt,function(){
						me.load();
					});
				}
			}
		}
	}
});


















