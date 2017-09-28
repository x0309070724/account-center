Ext.define('APP.store.cross', {
  extend: 'Ext.data.Store',
  alias: 'store.cross',
  autoLoad: false,
  remoteSort: false,
  pageSize: 30,
//	config:{pageSize:30},
//	scope:this,
  loadEvent: {
    mt4Sync: false,
    selectFirstRow: false
  },
  proxy: {
    type: 'jsonp',
    noCache: false,
    timeout: 60000,
    // ecacheString?????
    ecacheString: '_',
    //simpleGroupMode:true,
    //simpleSortMode:true,
    // totalProperty:Name of the property from which to retrieve the total number of records in the dataset.
    reader: {type: 'json', rootProperty: 'plant', totalProperty: 'totalProperty'},
    listeners: {
      exception: function (proxy, request, operation, eOpts) {
        Mate.showTask('<h6>应用程序错误</h6>错误代码：HTTP ERROR', true)
      }
      //		metachange:function(proxy,request,operation,eOpts){
      //			console.log(222,proxy,meta, eOpts)
      //		}
    },
    extraParams: {}
  },
  mt4Sync: function (records) {
    var store = this,
      loadEvent = store.loadEvent,
      runMt4Sync = function () {
        return false
      };
    if (!loadEvent.mt4Sync) {
      return false
    }
    PushService.ready(function () {
      var buffers = PushService.getBuffer();
      // var sync, task;
      // console.log(buffers);
      // console.log(loadEvent.mt4Sync.tag);
      switch (loadEvent.mt4Sync.tag) {
        case 'account': {
          runMt4Sync = function () {
            Ext.Array.each(records, function (record, i) {
              // console.log(record.data.login)
              var mt4Record = buffers.getUser(record.data.login);
              // if (mt4Record && i < 50) {
              //   record.data.account_balance = mt4Record.balance
              // }
              if (mt4Record && i < 50) {
                record.set({
                  // agent:mt4Record.agent_account,
                  account_enable: mt4Record.enable,
                  account_enable_change_password: mt4Record.enable_change_password,
                  account_enable_read_only: mt4Record.enable_read_only,
                  account_group: mt4Record.group,
                  account_lastdate: mt4Record.lastdate * 1000,
                  account_leverage: mt4Record.leverage,
                  account_balance: mt4Record.balance,
                  account_credit: mt4Record.credit,
                  account_equity: mt4Record.equity,
                  account_margin: mt4Record.margin,
                  account_margin_free: mt4Record.margin_free,
                  account_margin_level: mt4Record.margin_level
                });
              }
            });
          }
        }
          break;
        default: {
          runMt4Sync = function () {
            // console.log(records);
            Ext.Array.each(records, function (record, i) {
              var mt4Record = buffers.getUser(record.data.login);
              // console.log(mt4Record);
              if (mt4Record) {
                mt4Record.agent = mt4Record.agent_account;
                mt4Record.lastdate = mt4Record.lastdate * 1000;
                record.set(mt4Record);
              }
            });
          }
        }
          break;
      }
      runMt4Sync();
      // if (mt4.interval) {
      //   Ext.TaskManager.stop(task || false);
      //   task = Ext.TaskManager.start({
      //     run: function () {
      //       console.log(11111111)
      //       sync();
      //     },
      //     interval: mt4.interval
      //   })
      // }
    });
  },
  constructor: function (config) {
    config = config || {};
    this.callParent([config]);

    var proxy = this.proxy || {};
    // console.log('pageSize',this.pageSize);
    // console.log('super', this.super);
    // =====================================================pageSze=false时，移除分页参数
    if (!this.pageSize) {
      proxy.pageParam = false;
      proxy.limitParam = false;
      proxy.startParam = false;
    }
    // console.log(this, config.super, config.proxy)
    if (this.super) {
      proxy.url = proxy.url.replace('/analysis/', '/super/');
    }
    // beforeload(store, operation, eOpts);
    // add(store, records, index, eOpts);
    // metachange(this, meta, eOpts);
    // this.addListener('prefetch', function (store, records, eOpts) {
    //   var me = this;
    //   console.log(store, records, eOpts);
    // });
    // =====================================================错误检查
    this.addListener('load', function (store, records, success, eOpts) {
      var me = this;
      if (success) {
        // console.log('load', eOpts._response);
        var rlt = eOpts._response;
        if (!rlt.success) {
          Mate.checkErrCode(rlt, function () {
            store.load();
          });
        } else {
          var loadEvent = store.loadEvent;
          if (loadEvent.mt4Sync) {
            store.mt4Sync(records);
          }
          if (loadEvent.selectFirstRow) {
            console.log(me);
          }
        }
      }
    });
  }
});
//agent_account:1237820
//balance:0
//credit:0
//enable:1
//enable_change_password:1
//enable_read_only:0
//equity:0
//group:"IBA"
//interestrate:0
//lastdate:1501220433
//leverage:100
//login:97890432
//margin:0
//margin_free:0
//margin_level:0
//name:"Shuqing Li"
//objects:97890432
//prevbalance:0
//prevequity:0
//prevmonthbalance:0
//prevmonthequity:0
//profit:0
//taxes:0
//timestamp:0

//						record.set({
//							balance:rec.balance,
//							credit:rec.credit,
//							equity:rec.equity,
//
//							enable:rec.enable,
//							enable_change_password:rec.enable_change_password,
//							enable_read_only:rec.enable_read_only,
//							group:rec.group,
//							lastdate:rec.lastdate,
//							leverage:rec.leverage,
//							mt4_balance:rec.balance,
//							mt4_credit:rec.credit,
//							mt4_equity:rec.equity,
//							mt4_margin:rec.margin,
//							mt4_margin_free:rec.margin_free,
//							mt4_margin_level:rec.margin_level,
//						});
