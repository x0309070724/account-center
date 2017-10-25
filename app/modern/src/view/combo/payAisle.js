Ext.define('APP.view.combo.payAisle', {
  extend: 'Ext.form.field.ComboBox',
  xtype: 'comboBank',
  store: {
    type: 'depowith.payAisle',
    autoLoad: true,
    proxy: {
      extraParams: {
        payAisle: 'bank'
      }
    }
  },
  readOnly: true,
  emptyText: '请选择支付通道...',
  name: 'payAisle',
  valueField: 'code',
  displayField: 'namecn',
  forceSelection: false,
  listConfig: {
    getInnerTpl: function () {
      return '<span class="x-ui-text-grey">{login}</span>'
    }
  },
  // initComponent: function () {
  //   this.callParent();
  //   var combo = this,
  //     data = APP.app.getAppData('pay');
  //   combo.getStore().setData(data);
  // },

  listeners: {
    // beforerender: function (combo) {
    active: function (combo) {
      console.log('hahha');
      // Returns true if the Store has been loaded.
      if (!combo.getStore().isLoaded()) {
        console.log(111);
        combo.setReadOnly(true);
        combo.getStore().load({
          callback: function () {
            combo.setValue(combo.getValue());
            combo.setReadOnly(false);
            combo.forceSelection = true;
          }
        })
      } else {
        console.log(222);
        combo.forceSelection = true;
      }
    }
  }
});
