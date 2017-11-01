Ext.define('APP.view.transition.history.controller', {
  extend: 'APP.view.transition.controller',
  alias: 'controller.transition.history',
  // ===========================================================================================================账户详情
  onRecordItemtap: function (list, idx, el, record) {
    var navigation = list.up('navigationview');
    var view = Ext.create({
      xtype: 'transitionHistoryDetail',
      title: '订单详情'
    });
    view.setData(record.data);
    navigation.push(view);
  }
});
