Ext.define('APP.proxy.cross', {
  extend: 'Ext.data.proxy.JsonP',
  alias: 'proxy.cross',
  noCache: false,
  timeout: 60000,
  ecacheString: '_',
  //simpleGroupMode:true,
  //simpleSortMode:true,
  reader: {type: 'json', rootProperty: 'plant', totalProperty: 'totalProperty'},
  listeners: {
    exception: function (proxy, request, operation, eOpts) {
      Mate.showTask('<h6>应用程序错误</h6>错误代码：HTTP ERROR', true)
    }
//		metachange:function(proxy,request,operation,eOpts){
//			console.log(222,proxy,meta, eOpts)
//		}
  }
//    constructor:function(config){
//        config=config||{};
//		//console.log(444,config)
//        this.callParent([config]);
//    }
});
