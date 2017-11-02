Ext.define('APP.view.transition.position.controller', {
  extend: 'APP.view.transition.controller',
  alias: 'controller.transition.position',
  // ===========================================================================================================持仓详情
  onOrderItemtap: function (list, idx, el, record) {
    var navigation = list.up('navigationview');
    var view = Ext.create({
      xtype: 'transitionPositionDetail',
      title: '持仓详情'
    });
    view.setData(record.data);
    navigation.push(view);
  },
  // ========================================================================================================仓位汇总详情
  onSummaryItemtap: function (list, idx, el, record) {
    var navigation = list.up('navigationview');
    var view = Ext.create({
      xtype: 'transitionPositionSummaryDetail',
      title: '仓位详情'
    });
    view.setData(record.data);
    navigation.push(view);
  }
});
