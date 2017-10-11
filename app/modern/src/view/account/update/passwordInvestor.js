Ext.define('APP.view.account.update.passwordInvestor', {
  extend: 'Ext.form.Panel',
  xtype: 'updatepasswordInvestor',
  controller: 'account',
  items: [
    {
      xtype: 'fieldset', name: 'mateNew',
      items: [
        {xtype: 'textfield', name: 'oldValue', hidden: true},
        {xtype: 'field', label: '提示：投资人密码用于交易客户端的登陆（仅限数据查看）'},
        {xtype: 'textfield', name: 'login', label: '账号', readOnly: true, bind: {value: '{account.login}'}},
        {
          xtype: 'passwordfield',
          name: 'newValue',
          component: {pattern: '[0-9]*'},
          label: '新密码',
          maxLength: 6,
          placeholder: '请输入6位纯数字'
        },
        {xtype: 'passwordfield', name: 'newValue2', component: {pattern: '[0-9]*'}, label: '重复一次', maxLength: 6}
      ]
    },
    {xtype: 'field', name: 'field', value: 'password_safe', hidden: true},
    {xtype: 'field', name: 'fieldName', value: '投资人密码', hidden: true},
    {
      xtype: 'button',
      text: '确认更换',
      name: 'submit',
      ui: 'border background red large',
      margin: 20,
      handler: 'onSubmitAccountUpdate'
    }
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
      mateNew = me.down('fieldset[name=mateNew]');
    if (account.password_investor === '') {
      button.setText('设置');
      mateNew.setTitle('设置安全密码');
    } else {
      button.setText('确认更换');
      mateNew.setTitle('更换为');
    }
  }
});
