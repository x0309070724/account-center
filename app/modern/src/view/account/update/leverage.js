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
    {xtype: 'textfield', name: 'oldLeverage', label: '杠杆', readOnly: true, bind: {value: '1：{account.leverage}'}},
    {xtype: 'fieldset', name: 'mateNew', column: 4, title:'更换为'},
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
      // button.setText('绑定');
      // mateNow.hide();
      // mateNew.setTitle('绑定Email');
      // mateNew.setItems([
      //   {xtype: 'emailfield', inputType: 'email', name: 'newValue', label: 'Email', placeholder: 'eg. name@domain.com'}
      // ]);
    } else {
      button.setText('确认更换');
      mateNow.show();
      mateNew.setItems([
        {
          xtype: 'comboLeverage',
          name: 'newLeverage'
        }
      ]);
    }
  }
});
