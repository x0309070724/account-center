Ext.define('APP.view.depowith.transfer.account', {
  extend: 'Ext.form.Panel',
  xtype: 'transferAccount',
  controller: 'depowith',
  store: {
    // type: 'depowith.transfer.account',
    autoLoad: false,
    proxy: {
      extraParams: {}
    }
  },
  items: [
    {
      xtype: 'fieldset', name: 'mateNow', title: '账户转账',
      items: [
        {xtype: 'textfield', name: 'login', label: '转出账号', readOnly: true, bind: {value: '{account.login}'}},
        {xtype: 'field', label: '转入账号'},
        {xtype: 'comboAccount'}
      ]
    },
    {xtype: 'fieldset', name: 'mateNew'},
    {xtype: 'field', name: 'field', value: 'email', hidden: true},
    {xtype: 'field', name: 'fieldName', value: 'Email', hidden: true},
    {xtype: 'button', name: 'submit', ui: 'border background red large', margin: 20, handler: 'onSubmitAccountUpdate'}
  ],
  listeners: {
    activate: function (me) {
      console.log(APP.app.getAppData('crm'));
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
      button.setText('确认并提交');
      mateNow.show();
      // mateNew.setTitle('更换为');
      mateNew.setItems([
        {
          xtype: 'textfield',
          name: 'newValue',
          label: '金额（$）',
          // placeholder: 'eg. name@domain.com'
        }
      ]);
    }
  }
});
