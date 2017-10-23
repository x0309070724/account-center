Ext.define('APP.view.depowith.deposit.index', {
  extend: 'Ext.form.Panel',
  xtype: 'depowithDepositIndex',
  controller: 'depowith',
  scrollable: true,
  defaults: {scrollable: false},
  // tpl: [
  //   '<div class="x-ui-nav-icon"><span class="{iconCls}">fdfdffdf</span></div>',
  // ],
  items: [
    {xtype: 'navList', userCls: 'x-ui-nav x-ui-mini', navigation: 300101, hideTitle: false},
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
    },
  ],
  listeners: {}
});
