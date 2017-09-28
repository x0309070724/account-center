Ext.define('APP.view.rd.analysis.controller', {
  extend: 'APP.view.rd.controller',
  alias: 'controller.rd.analysis',
  // ===========================================================================================================账户详情
  onRecordItemtap: function (list, idx, el, record) {
    var navigation = list.up('navigationview');
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
  }
});
