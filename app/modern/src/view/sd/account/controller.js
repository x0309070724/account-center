Ext.define('APP.view.sd.account.controller', {
  extend: 'APP.view.sd.controller',
  alias: 'controller.sd.account',
  // ====================================================================================================账户申请记录 详情
  onApplyRecordItemtap: function (list, idx, el, record) {
    var navigation = list.up('navigationview');
    var view = Ext.create({
      xtype: 'sdAccountDetailApply',
      title: '申请详情信息==> ' + record.data.namecn
    });
    navigation.push(view);
    // console.log(record);
    view.setRecord(record);
  },

  // ===========================================================================================================账户详情
  onRecordItemtap: function (list, idx, el, record) {
    var navigation = list.up('navigationview');
    // console.log(record);
    var login = record.data.objects ? record.data.objects : record.data.login;
    login = parseInt(login) || 0;
    var view = Ext.create({
      xtype: 'sdAccountDetailIndex',
      title: login.toString(),
      items: [
        {xtype: 'sdAccountDetailInfo', title: '档案', iconCls: 'f-mt mt-account-strate', parameter: {login: login}},
        {xtype: 'sdAccountDetailFunds', title: '出入金', iconCls: 'f-mt mt-trading', parameter: {login: login}},
        {xtype: 'sdAccountDetailPositions', title: '持仓订单', iconCls: 'f-mt mt-premium-chart', parameter: {login: login}},
        {xtype: 'sdAccountDetailOrder', title: '历史订单', iconCls: 'f-mt mt-check-order', parameter: {login: login}}
      ]
    });
    navigation.push(view);
  },

  // =============================================================================================================详情页
  onDetailInfoInitialize: function (view) {
    view.setMasked({xtype: 'loadmask'});
    var parameter = view.parameter;
    // console.log(parameter);
    Mate.ajax({
      // url:Boot.appUrl('/sd/account/checkMt4Login.do'),
      url: Boot.appUrl('/sd/account/manager/getRecord.do'),
      params: {login: parameter.login},
      success: function (json, opts) {
        PushService.ready(function () {
          var buffers = PushService.getBuffer(),
            mt4Data = buffers.getUser(parameter.login);
          var data = json.plant[0];
          data.mt4Data = mt4Data;
          //console.log(parameter.login,data)
          view.setData(data);
          view.unmask();
        });
      },
      failure: function (json, opts) {
        view.unmask();
        return false;
      }
    });
  },
  // =============================================================================================================出入金
  // onDetailFundsInitialize: function (list) {
  //   var store = list.getStore(),
  //     parameter = list.parameter || {};
  //   Ext.apply(store.getProxy().getExtraParams(), parameter);
  //   store.loadPage(1);
  // },
  onDetailPositionsInitialize: function (list) {
    var store = list.getStore(),
      parameter = list.parameter || {};
    PushService.ready(function () {
      var buffers = PushService.getBuffer(),
        data = buffers.getTradesByLogin(parameter.login);
      // console.log(data);
      // console.log(buffers);
      store.setData(data);
      // list.unmask();
    });
  }
});
