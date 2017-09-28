Ext.define('APP.store.summary', {
  extend: 'APP.store.cross',
  alias: 'store.summary',
  autoLoad: false,
  // true if the sorting should be performed on the server side, false if it is local only.
  remoteSort: false,
  pageSize: false,
  // The scope (this reference) in which the handler is executed if specified as a function instead of a named Controller
  // method. Defaults to the browser window.
  scope: this,
  summary: function (store, records, successful, operation, eOpts) {
    if (successful) {
      var params = store.getProxy().getExtraParams();
      // console.log(params);
      var totalField = params.field;
      switch (params.sp) {
        // =========================================================================================================销售
        case 'SP_SD_SALES_STATISTICS':
        case 'SP_SD_SALES_TREND': {
          switch (params.field) {
            case 'resources': {
              totalField = 'resources'
            }
              break;
            case 'care': {
              totalField = 'care';
            }
              break;
            case 'call': {
              totalField = 'call_duration';
            }
              break;
            // default:{totalField=params.field}break;
          }
        }
          break;
        // =========================================================================================================业绩
        case 'SP_SD_RESULTS_STATISTICS':
        case 'SP_SD_RESULTS_TREND':
        case 'SP_RD_TRADE_STATISTICS':
        case 'SP_RD_TRADE_TREND': {
          switch (params.field) {
            case 'account': {
              totalField = 'account_new_count'
            }
              break;
            case 'funds': {
              totalField = 'funds_net_deposit';
            }
              break;
            case 'volume': {
              totalField = 'trade_volume';
            }
              break;
            case 'commission': {
              totalField = 'trade_commission_agent';
            }
              break;
            case 'profit': {
              totalField = 'trade_profit';
            }
              break;
            case 'clear': {
              totalField = 'trade_clear';
            }
              break;
            case 'trade': {
              totalField = 'trade_clear';
            }
              break;
            // default:{totalField=params.field}break;
          }
        }
          break;
      }
      // console.log(params.sp, totalField);
      var chartData = [],
        totalValue = 0;
      var totalValueString;
      store.each(function (record, i) {
        record.set({
          menu: params.menu || '',
          field: params.field || '',
          ranking: i + 1
        });
        totalValue = totalValue + record.data[totalField];
        if (i < 10) {
          chartData.push({
            label: record.data.objects,
            value: record.data[totalField]
          });
        }
      });
      // 合计后 格式化值
      totalValueString = Ext.util.Format.money(totalValue);
      switch (params.sp) {
        // =========================================================================================================销售
        case 'SP_SD_RESULTS_STATISTICS':
        case 'SP_SD_RESULTS_TREND':
        case 'SP_RD_TRADE_STATISTICS':
        case 'SP_RD_TRADE_TREND': {
          switch (params.field) {
            case 'account': {
              totalValueString = Ext.util.Format.stringInteger(totalValue)
            }
              break;
            case 'volume': {
              totalValueString = Ext.util.Format.stringNumeral(totalValue, 2)
            }
              break;
          }
        }
          break;
        // =========================================================================================================业绩
        case 'SP_SD_SALES_STATISTICS':
        case 'SP_SD_SALES_TREND': {
          switch (params.field) {
            case 'call': {
              totalValueString = Ext.util.Format.timeFilter(totalValue)
            }
              break;
          }
        }
          break;
      }
      store.totalValue = totalValue;
      store.totalValueString = totalValueString;
      store.chartData = chartData;
    }
    // this is a function named count(),the next paragraphs just eq store.getCount();
    // console.log(store.count);
    if (store.count) {
      store.each(function (record, i) {
        if (i >= store.count) {
          store.remove(record);
        }
      })
    }
    // console.log(records);
    // console.log(store);
  }
});



