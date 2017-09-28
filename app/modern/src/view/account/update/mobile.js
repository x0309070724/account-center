Ext.define('APP.view.account.update.mobile', {
  extend: 'Ext.form.Panel',
  xtype: 'updateMobile',
  controller: 'account',
  // animation: {type: 'cover', direction: 'top'},
  // showAnimation: 'pop',
  // bodyPadding: '10 25',
  items: [
    {
      xtype: 'fieldset', name: 'mateNow', title: '当前',
      items: [
        {xtype: 'textfield', name: 'login', label: '账号', readOnly: true, bind: {value: '{account.login}'}},
        {xtype: 'numberfield', name: 'oldValue', label: '手机', readOnly: true, bind: {value: '{account.mobile}'}}
      ]
    },
    {xtype: 'fieldset', name: 'mateNew'},
    {xtype: 'field', name: 'field', value: 'mobile', hidden: true},
    {xtype: 'field', name: 'fieldName', value: '手机', hidden: true},
    {xtype: 'button', name: 'submit', ui: 'border background red large', margin: 20, handler: 'onSubmitAccountUpdate'}
  ],
  listeners: {
    activate: function (me) {
      // console.log(me);
      me.setFieldset();
    }
  },
  setFieldset: function () {
    var me = this,
      account = APP.app.getAppData('account');
    var button = me.down('button[name=submit]'),
      mateNow = me.down('fieldset[name=mateNow]'),
      mateNew = me.down('fieldset[name=mateNew]');
    // console.log(account);
    if (account.mobile === '') {
      button.setText('绑定');
      mateNow.hide();
      mateNew.setTitle('绑定手机');
      mateNew.setItems([
        {
          xtype: 'numberfield',
          inputType: 'tel',
          name: 'newValue',
          label: '手机',
          maxLength: 11,
          minLength: 11,
          placeholder: 'eg. 18688886666'
        }
      ]);
    } else {
      button.setText('确认更换');
      mateNow.show();
      mateNew.setTitle('更换为');
      mateNew.setItems([
        {
          xtype: 'numberfield',
          inputType: 'tel',
          name: 'newValue',
          label: '新手机号',
          maxLength: 11,
          minLength: 11,
          placeholder: 'eg. 18688886666'
        }
      ]);
    }
  }
});
