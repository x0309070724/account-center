Ext.define('APP.view.account.update.leverage', {
  extend: 'Ext.form.Panel',
  xtype: 'updateLeverage',
  controller: 'account',
  items: [
    {
      xtype: 'fieldset', name: 'mateNow', title: '当前',
      items: [
        {xtype: 'textfield', name: 'login', label: '账号', readOnly: true, bind: {value: '{account.login}'}}
      ]
    },
    {xtype: 'field', label: '杠杆', readOnly: true},
    {xtype: 'button', name: 'oldValue', ui: 'border background small', width: '60', readOnly: true},
    {xtype: 'fieldset', name: 'mateNew', column: 4},
    {xtype: 'field', name: 'field', value: 'email', hidden: true},
    {xtype: 'field', name: 'fieldName', value: 'Email', hidden: true},
    {xtype: 'button', name: 'submit', ui: 'border background red large', margin: 20, handler: 'onSubmitAccountUpdate'}
  ],


  listeners: {
    activate: function (me) {
      me.setFieldset();
    }
  },
  setFieldset: function () {
    var me = this;
    var account = APP.app.getAppData('account'),
      button = me.down('button[name=submit]'),
      btnOldValue = me.down('button[name=oldValue]'),
      mateNow = me.down('fieldset[name=mateNow]'),
      mateNew = me.down('fieldset[name=mateNew]');

    if (account === '') {
      // button.setText('绑定');
      // mateNow.hide();
      // mateNew.setTitle('绑定Email');
      // mateNew.setItems([
      //   {xtype: 'emailfield', inputType: 'email', name: 'newValue', label: 'Email', placeholder: 'eg. name@domain.com'}
      // ]);
    } else {
      button.setText('确认更换');
      btnOldValue.setText('1:' + account.leverage);
      mateNow.show();
      mateNew.setTitle('更换为');
      mateNew.setItems([
        {
          xtype: 'button',
          name: 'oneHundred',
          text: '1:100',
          value: '1:100',
          ui: 'border background small',
          width: '60'
        },
        {
          xtype: 'button',
          name: 'oneHundred',
          text: '1:150',
          value: '1:150',
          ui: 'border background small',
          width: '60'
        },
        {
          xtype: 'button',
          name: 'oneHundred',
          text: '1:300',
          value: '1:300',
          ui: 'border background small',
          width: '60'
        },
        {
          xtype: 'button',
          name: 'oneHundred',
          text: '1:400',
          value: '1:400',
          ui: 'border background small',
          width: '60'
        }
      ]);
    }
  }
});
