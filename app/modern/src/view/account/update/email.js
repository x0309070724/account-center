Ext.define('APP.view.account.update.email', {
  extend: 'Ext.form.Panel',
  xtype: 'updateEmail',
  controller: 'account',
  items: [
    {
      xtype: 'fieldset', name: 'mateNow', title: '当前',
      items: [
        {xtype: 'textfield', name: 'login', label: '账号', readOnly: true, bind: {value: '{account.login}'}},
        {xtype: 'emailfield', name: 'oldValue', label: 'Email', readOnly: true, bind: {value: '{account.email}'}}
      ]
    },
    {xtype: 'fieldset', name: 'mateNew'},
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
      mateNow = me.down('fieldset[name=mateNow]'),
      mateNew = me.down('fieldset[name=mateNew]');

    if (account === '') {
      button.setText('绑定');
      mateNow.hide();
      mateNew.setTitle('绑定Email');
      mateNew.setItems([
        {xtype: 'emailfield', inputType: 'email', name: 'newValue', label: 'Email', placeholder: 'eg. name@domain.com'}
      ]);
    } else {
      button.setText('确认更换');
      mateNow.show();
      mateNew.setTitle('更换为');
      mateNew.setItems([
        {
          xtype: 'emailfield',
          inputType: 'email',
          name: 'newValue',
          label: '新 Email',
          placeholder: 'eg. name@domain.com'
        }
      ]);
    }
  }
});
