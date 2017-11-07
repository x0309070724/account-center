Ext.define('APP.view.combo.accountBank', {
  extend: 'Ext.field.ComboBox',
  xtype: 'comboAccountBank',
  store: {
    type: 'depowith.config',
    autoLoad: false
  },
  readOnly: true,
  emptyText: '提取余额到银行卡...',
  value: '123456',
  // The field's name. Used by form panels to gather data to be submitted.
  name: 'accountBank',
  valueField: 'cardno',
  displayField: 'bank_last4',
  // Set to true to restrict the selected value to one of the values in the list, or false to allow the user to set
  // arbitrary text into the field.
  forceSelection: true,
  listeners: {
    // afterRender: function (combo) {
    // activate: function (combo) {
    //   console.log('hahha');
    //   // Returns true if the Store has been loaded.
    // //   if (!combo.getStore().isLoaded()) {
    // //     console.log(111);
    // //     combo.setReadOnly(true);
    // //     combo.getStore().load({
    // //       callback: function () {
    // //         combo.setValue(combo.getValue());
    // //         combo.setReadOnly(false);
    // //         combo.forceSelection = true;
    // //       }
    // //     })
    // //   } else {
    // //     console.log(222);
    // //     combo.forceSelection = true;
    // //   }
    // }
    // afterRender: function(combo) {
    painted: function(combo) {
      // console.log(111111111);
      // console.log(combo.getStore());
      // console.log(combo.getStore().totalCount);
      combo.getStore().load(function () {
        var test2 = combo.getStore().getAt(0);
        console.log(test2.data.name);
        combo.setValue(test2);


      });
      // var test = combo.getStore().data.items;
      // var test2 = combo.getStore().getAt(0);
      // console.log(test);
      // console.log(test2);
      // combo.setValue(firstValue);//同时下拉框会将与name为firstValue值对应的 text显示
    }
  }
});
