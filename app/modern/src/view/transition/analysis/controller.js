Ext.define('APP.view.transition.analysis.controller', {
  extend: 'APP.view.transition.controller',
  alias: 'controller.transition.analysis',
  // =====================================================================================================LIST ITEM 点击
  onRecordItemtap: function (list, idx, el, record) {
    var navigation = list.up('navigationview');
    var view = Ext.create({
      xtype: 'transitionAnalysisDetail',
      title: record.data.objects + ' 详情'
    });
    view.setData(record.data);
    // console.log(record.data);
    navigation.push(view);
  }
});
