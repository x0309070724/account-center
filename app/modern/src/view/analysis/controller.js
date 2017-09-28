Ext.define('APP.view.analysis.controller', {
  extend: 'APP.view.controller',
  alias: 'controller.analysis',
  // =============================================================================================================INDEX
  getIndexData: function (callback) {
    Mate.ajax({
      url: Boot.appUrl('/super/getTrend.do'),
      params: {
        sp: 'SP_ANALYSIS_RESULTS',
        date: Ext.util.Format.utcDate(new Date(), 'Y-m-d')
      },
      success: function (json, opts) {
        var data = json.plant[0];
        return callback(data);
      }
    });
  },
  onIndexActivate: function (view) {
    var me = this,
      carousel = view.down('carousel'),
      // Retrieves all descendant components which match the passed selector.
      boxs = carousel.query('box');
    // direction = 'next';
    // console.log(this.task);
    if (this.task) {
      Ext.TaskManager.destroy(this.task)
    }
    this.task = Ext.TaskManager.start({
      run: function () {
        if (view.isHidden()) {
          Ext.TaskManager.destroy(me.task);
          return false;
        }
        me.getIndexData(function (data) {
          var day = '今日业绩,' + data.day,
            week = '本周业绩,' + data.week,
            month = '本月业绩,' + data.month;
          // console.log(day.split(','));
          boxs[0].setData(day.split(','));
          boxs[1].setData(week.split(','));
          boxs[2].setData(month.split(','));
        });
      },
      interval: 1000 * 60 * 3
    });
  },
  // =====================================================================================================业绩 按对象统计
  onObjectsItemtap: function (list, idx, el, record) {
    var menu = this.menu || Ext.create({
      xtype: 'actionsheet',
      title: 'N/A',
      side: 'bottom',
      cover: true,
      defaults: {scope: this, height: 40, textAlign: 'left', ui: 'border blue', handler: 'onObjectsMenuItemClick'},
      items: [
        {text: '月报表', datepart: 'month', iconCls: 'f-mt mt-month'},
        {text: '周报表', datepart: 'week', iconCls: 'f-mt mt-week'},
        // {text:'日报表',datepart:'day',iconCls:'f-mt mt-day'},
        {xtype: 'component', height: 10},
        {text: '业绩详情', iconCls: 'f-mt mt-month', ui: 'border orange', handler: 'onObjectsDetailShow'}
      ]
    });
    menu.setTitle(record.data.objects);
    menu.setRecord(record);
    menu.setDisplayed(!menu.getDisplayed());
  },
  // =======================================================================================LIST MENU ITEM DATEPART 点击
  onObjectsMenuItemClick: function (button) {
    // Ext.Viewport.hideMenu('bottom');
    button.up('actionsheet').setDisplayed(false);
    var navigation = this.getView().up('navigationview'),
      list = navigation.down('list'),
      store = list.getStore(),
      params = store.getProxy().getExtraParams(),
      record = button.up('actionsheet').getRecord();
    var title = record.data.objects,
      parameter = {
        datepart: button.datepart,
        field: params.field,
        startdate: Ext.Date.format(Ext.Date.add(new Date(), Ext.Date.MONTH, -5), 'Y-m'),
        enddate: Ext.Date.format(new Date(), 'Y-m')
      };
    switch (params.menu) {
      case 'staff': {
        title = record.data.team_name + ' ' + record.data.objects;
        parameter.staffid = record.data.id;
      }
        break;
      case 't2': {
        parameter.teamid = record.data.id;
      }
        break;
      case 't1': {
        parameter.teamid = record.data.id.toString().substr(0, 9) + '000';
      }
        break;
      case 'branch': {
        parameter.teamid = record.data.id.toString().substr(0, 6) + '000000';
      }
        break;
    }
    if (params.menu === 'staff') {
      var startDate = record.data.startdate,
        endDate = record.data.enddate || new Date();
      switch (params.datepart) {
        case 'day': {
          parameter.startdate = Ext.Date.format(startDate, 'Y-m-d');
          parameter.enddate = Ext.Date.format(endDate, 'Y-m-d');
        }
          break;
        case 'week': {
          parameter.startdate = Ext.Date.format(startDate, 'Y-m');
          parameter.enddate = Ext.Date.format(endDate, 'Y-m');
        }
          break;
        case 'month': {
          parameter.startdate = Ext.Date.format(startDate, 'Y-m');
          parameter.enddate = Ext.Date.format(endDate, 'Y-m');
        }
          break;
      }
    } else {
      switch (params.datepart) {
        case 'day': {
          parameter.startdate = Ext.Date.format(Ext.Date.add(new Date(), Ext.Date.MONTH, -1), 'Y-m-d');
          parameter.enddate = Ext.Date.format(new Date(), 'Y-m-d');
        }
          break;
        case 'week': {
          parameter.startdate = Ext.Date.format(Ext.Date.add(new Date(), Ext.Date.MONTH, -3), 'Y-m');
          parameter.enddate = Ext.Date.format(new Date(), 'Y-m');
        }
          break;
        case 'month': {
          parameter.startdate = Ext.Date.format(Ext.Date.add(new Date(), Ext.Date.MONTH, -5), 'Y-m');
          parameter.enddate = Ext.Date.format(new Date(), 'Y-m');
        }
          break;
      }
    }
    var widget = list.name === 'operations' ? 'analysisOperationsObjectsTime' : 'analysisResultsObjectsTime',
      view = Ext.create({
        xtype: widget,
        title: title,
        parameter: parameter,
        viewModel: {data: {parameter: parameter}}
      });
    navigation.push(view);
  },
  //===============================================================LIST MENU ITEM 详情
  onObjectsDetailShow: function (button) {
    Ext.Viewport.hideMenu('bottom');

    var navigation = this.getView().up('navigationview'),
      list = navigation.down('list'),
      store = list.getStore(),
      params = store.getProxy().getExtraParams(),
      menu = button.up('actionsheet'),
      record = menu.getRecord();

    var title,
      parameter = {
        menu: params.menu,
        datepart: params.datepart,
        startdate: params.startdate,
        enddate: params.enddate
      };

    switch (params.menu) {
      case 'staff': {
        parameter.staffid = record.data.id;
      }
        break;
      case 't2': {
        parameter.teamid = record.data.id;
      }
        break;
      case 't1': {
        parameter.teamid = record.data.id.toString().substr(0, 9) + '000';
      }
        break;
      case 'branch': {
        parameter.teamid = record.data.id.toString().substr(0, 6) + '000000';
      }
        break;
    }

    title = record.data.objects + ' '
    if (params.startdate == params.enddate) {
      title += '<b>' + params.enddate + '<b>'
    } else {
      title += 'From <b>' + params.startdate + '</b> To <b>' + params.enddate + '</b>'
    }
    var view = Ext.create({
      xtype: 'analysisResultsDetail',
      title: title,
      parameter: parameter
    });
    navigation.push(view);
  },
  // =====================================================================================================LIST 按时间统计
  onTimeItemtap: function (list, idx, el, record) {
    var navigation = list.up('navigationview'),
      store = list.getStore(),
      title,
      parameter = Ext.apply({}, store.getProxy().getExtraParams());
    parameter.field = '';
    parameter.startdate = record.data.objects;
    parameter.enddate = record.data.objects;
    switch (parameter.datepart) {
      case 'day': {
        // var wName = '周' + new Array('日', '一', '二', '三', '四', '五', '六')[new Date(record.data.objects).getDay()];
        var wName = '周' + ['日', '一', '二', '三', '四', '五', '六'][new Date(record.data.objects).getDay()];
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
      xtype: 'analysisResultsDetail',
      title: title,
      parameter: parameter
    });
    navigation.push(view);
  },
  // ============================================================================================================报表详情
  onDetailInitialize: function (view) {
    view.setMasked({xtype: 'loadmask'});
    var url = '';
    if (view.parameter.menu) {
      view.parameter.sp = 'SP_SD_RESULTS_STATISTICS';
      url = '/super/getStatistics.do';
    } else {
      view.parameter.sp = 'SP_SD_RESULTS_TREND';
      url = '/super/getTrend.do';
    }
    Mate.ajax({
      url: Boot.appUrl(url),
      params: view.parameter,
      success: function (json, opts) {
        view.unmask();
        if (json.plant[0]) {
          view.setData(json.plant[0]);
        } else {
          Mate.showTask('<h6>信息提示</h6>所查询的数据不存在');
        }
      },
      failure: function (response, opts) {
        view.unmask();
        return false;
      }
    });
  }
});
