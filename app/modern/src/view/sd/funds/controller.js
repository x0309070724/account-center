Ext.define('APP.view.sd.funds.controller', {
  extend: 'APP.view.sd.controller',
  alias: 'controller.sd.funds',

  onRecordItemtap: function (list, idx, el, record) {
    var navigation = list.up('navigationview');
    var view = Ext.create({
      xtype: 'sdFundsDetail',
      title: list.title + ' #' + record.data.login
    });
    navigation.push(view);
    view.setRecord(record);
    if (record.data.audit === 0 && !record.data.assets) {
      // view.setMasked({xtype:'loadmask'});
      Mate.ajax({
        url: Boot.appUrl('/sd/account/checkMt4Login.do'),
        params: {login: record.data.login},
        success: function (json, opts) {
          // view.unmask();
          record.set({assets: json.assets})
        },
        failure: function (response, opts) {
          // view.unmask();
          return false;
        }
      });
    }
  }
});
