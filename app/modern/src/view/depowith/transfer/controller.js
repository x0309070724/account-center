Ext.define('APP.view.depowith.transfer.controller', {
  extend: 'APP.view.depowith.controller',
  alias: 'controller.depowith.transfer',
  // =====================================================================================================LIST ITEM 点击
  onRecordItemtap: function (list, idx, el, record) {
    var navigation = list.up('navigationview');
    var view = Ext.create({
      xtype: 'depowithTransferDetail',
      title: '转账详情'
    });
    console.log(666);
    view.setData(record.data);
    // console.log(record.data);
    navigation.push(view);
  }
});
