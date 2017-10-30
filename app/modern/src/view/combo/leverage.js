Ext.define('APP.view.combo.leverage', {
  extend: 'Ext.form.field.ComboBox',
  xtype: 'comboLeverage',
  store: {
    fields: ['value', 'display'],
    data: [
      ['100', '1:100'],
      ['150', '1:150'],
      ['300', '1:300'],
      ['400', '1:400']
    ]
  },
  readOnly: true,
  emptyText: '杠杆...',
  name: 'leverage',
  valueField: 'value',
  displayField: 'display',
  // true to restrict the selected value to one of the values in the list, false to allow the user to set arbitrary text
  // into the field.
  forceSelection: true,
  // listConfig: {
  //   getInnerTpl: function () {
  //     return '<span class="x-ui-text-grey">hahaha</span>'
  //   }
  // },
  listeners: {
    select: function (combo) {
      // var form = combo.up('formpanel'),
      //   comboBank = form.down('comboBank'),
      //   value = combo.getValue(),
      //   storeBank = comboBank.getStore();
      // comboBank.setValue('');
      // Ext.apply(storeBank.proxy.extraParams, {payAisle: value});
      // storeBank.load();
    }
  }
});
