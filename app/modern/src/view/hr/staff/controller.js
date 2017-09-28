Ext.define('APP.view.hr.staff.controller', {
  extend: 'APP.view.hr.controller',
  alias: 'controller.hr.staff',

  returnRootName: function (value, record) {
    if (record.data.leaf) {
      return Ext.String.format(
        '{0} {1}',
        record.data.namecn,
        record.data.name
      );
    } else {
      return Ext.String.format(
        '{0}',
        record.data.name
      );
    }
  },
  // =============================================================================================================通讯录
  onContactsInitialize: function (view) {
    var store = view.getStore(),
      data = APP.app.getAppData('company/staff'),
      newData = [];
    Ext.Array.each(data, function (record) {
      // 为何Ext.util.Format可以调用pinyin这个方法？父类可以调用子类的方法？
      record.name_pinyin = Ext.util.Format.pinyin(record.namecn);
      newData.push(record);
    });
    // Loads an array of data straight into the Store.
    store.loadData(newData);
    // store.sort('name_pinyin', 'ASC');
  },
  onContactsItemtap: function (list, idx, el, record) {
    var navigation = list.up('navigationview');
    var view = Ext.widget('hrStaffContactsDetail', {
      title: record.data.namecn + ' ' + record.data.name,
      parameter: {id: record.data.id}
      // viewModel: {data: {staff: record.data}}
    });
    navigation.push(view);
    // console.log(view.getViewModel().getData());
    // view.setViewModel({data: record.data});
    // view.setRecord(record);
  },
  onContactsDetailInitialize: function (view) {
    // console.log(view.parameter.id);
    Mate.ajax({
      url: Boot.appUrl('/hr/staff/profile/getInfo.do'),
      params: {id: view.parameter.id},
      success: function (json, opts) {
        if (json.plant[0]) {
          // console.log(json);
          // view.setViewModel({data: {staff: json.plant[0]}});
          // view.getViewModel().set('staff', json.plant[0]);
          var record = json.plant[0];
          view.down('container[name=contact]').setData(record);
          view.down('container[name=info]').setData(record);
        } else {
          Mate.showTask('No Record', true);
        }
      },
      failure: function (json, opts) {
        APP.app.getViewport().unmask();
      }
    });
  }
});
