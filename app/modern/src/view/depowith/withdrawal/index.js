Ext.define('APP.view.depowith.withdrawal.index', {
  extend: 'Ext.form.Panel',
  xtype: 'depowithWithdrawalIndex',
  controller: 'depowith',
  // scrollable: true,
  // defaults: {scrollable: false},
  items: [
    {
      xtype: 'fieldset', name: 'mateOld', title: '账户出金', items: [
      {xtype: 'field', label: '出金到银行卡：'},
      {
        xtype: 'button', text: '民生银行(2051)', badgeText: '2'
      }
    ]
    },
    {
      xtype: 'fieldset', name: 'mateNew', title: '入金金额', items: [
      {
        xtype: 'textfield',
        name: 'newValue',
        label: '金额（$）',
        placeholder: '入金金额至少0.01（$）'
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
