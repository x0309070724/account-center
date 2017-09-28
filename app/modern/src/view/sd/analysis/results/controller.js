Ext.define('APP.view.sd.analysis.results.controller', {
  extend: 'APP.view.sd.analysis.controller',
  alias: 'controller.sd.analysis.results',
  /*************************************************  业绩 按对象统计  *************************************************/
  onObjectsItemtap: function (list, idx, el, record) {
    var navigation = list.up('navigationview'),
      store = list.getStore(),
      title,
      parameter = Ext.apply({}, store.getProxy().getExtraParams());
    // console.log(navigation);
    console.log(parameter);
    parameter.field = '';
    switch (parameter.menu) {
      case 'staff': {
        parameter.staffid = record.data.id;
      }
        break;
      default: {
        parameter.teamid = record.data.id;
      }
        break;
    }
    title = record.data.objects + ' ';
    if (parameter.startdate === parameter.enddate) {
      title += '<b>' + parameter.enddate + '<b>'
    } else {
      title += 'From <b>' + parameter.startdate + '</b> To <b>' + parameter.enddate + '</b>'
    }
    var view = Ext.create({
      xtype: 'sdAnalysisResultsDetail',
      title: title,
      parameter: parameter
    });
    navigation.push(view);
  },

  // =====================================================================================================LIST 按时间统计
  onTimeItemtap: function (list, idx, el, record) {
    // console.log(111);
    var navigation = list.up('navigationview'),
      store = list.getStore(),
      title,
      parameter = Ext.apply({}, store.getProxy().getExtraParams())
    parameter.field = '';
    parameter.startdate = record.data.objects;
    parameter.enddate = record.data.objects;
    switch (parameter.datepart) {
      case 'day': {
        var wName = '周' + new Array('日', '一', '二', '三', '四', '五', '六')[new Date(record.data.objects).getDay()];
        title = '业绩日报 · ' + record.data.objects + ' ' + wName;
      }
        break;
      case 'week': {
        title = '业绩周报 · ' + record.data.objects;
      }
        break;
      case 'month': {
        title = '业绩月报 · ' + record.data.objects;
      }
        break;
    }
    var view = Ext.create({
      xtype: 'sdAnalysisResultsDetail',
      title: title,
      parameter: parameter
    });
    navigation.push(view);
  }

});
