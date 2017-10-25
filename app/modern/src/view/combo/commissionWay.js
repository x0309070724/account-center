Ext.define('APP.view.combo.commissionWay', {
  extend: 'Ext.form.field.ComboBox',
  xtype: 'comboCommissionWay',
  store: {
    fields: ['value', 'display'],
    data: [
      ['deposit', '储蓄卡'],
      ['credit', '信用卡'],
      ['APP', 'APP支付']
    ]
  },
  readOnly: true,
  emptyText: '入金方式...',
  name: 'commission',
  valueField: 'value',
  displayField: 'display',
  forceSelection: false,
  listConfig: {
    getInnerTpl: function () {
      return '<span class="x-ui-text-grey">hahaha</span>'
    }
  },
  listeners: {
    select: function (combo) {
      var form = combo.up('formpanel'),
        xtype = form.down('comboBank');
      console.log(xtype);
    }
    // combo.on("select",function(comboBox){
    // var value=comboBox.getValue();
    // store2.load({params:{id:value}});
    // //可以用params：{}传参
  }
});
