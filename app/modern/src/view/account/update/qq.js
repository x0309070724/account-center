Ext.define('APP.view.account.update.qq', {
  extend: 'Ext.form.Panel',
  xtype: 'updateQq',
  controller: 'account',
  items: [
    {
      xtype: 'fieldset', name: 'mateNow', title: '当前',
      items: [
        {xtype: 'textfield', name: 'login', label: '账号', readOnly: true, bind: {value: '{account.login}'}},
        {xtype: 'textfield', name: 'oldValue', label: 'QQ', readOnly: true, bind: {value: '{account.qq}'}}
      ]
    },
    {xtype: 'fieldset', name: 'mateNew'},
    {xtype: 'field', name: 'field', value: 'qq', hidden: true},
    {xtype: 'field', name: 'fieldName', value: 'QQ', hidden: true},
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

    if (account.qq === '') {
      button.setText('绑定');
      mateNow.hide();
      mateNew.setTitle('绑定QQ');
      mateNew.setItems([
        {xtype: 'numberfield', name: 'newValue', label: 'QQ'}
      ]);
    } else {
      button.setText('确认更换');
      mateNow.show();
      mateNew.setTitle('更换为');
      mateNew.setItems([
        {xtype: 'numberfield', name: 'newValue', label: '新QQ'}
      ]);
    }
  }
});
