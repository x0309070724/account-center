Ext.define('APP.view.depowith.deposit.index', {
  extend: 'Ext.form.Panel',
  xtype: 'depowithDepositIndex',
  controller: 'depowith',
  scrollable: true,
  defaults: {scrollable: false},
  items: [
    {xtype: 'field', label: '入金方式：'},
    {xtype: 'comboCommissionWay'},
    {xtype: 'field', label: '请选择支付方式：'},
    {xtype: 'comboBank'},
    {
      xtype: 'fieldset', name: 'mateNew', title: '入金金额', items: [
      {
        xtype: 'textfield',
        name: 'newValue',
        label: '金额（$）',
        // placeholder: 'eg. name@domain.com'
      }
    ]
    },
    {
      xtype: 'button', name: 'submit',
      text: '确认并提交',
      ui: 'border background red large', margin: 20, handler: 'onSubmitAccountUpdate'
    }
  ],
  listeners: {}
});
