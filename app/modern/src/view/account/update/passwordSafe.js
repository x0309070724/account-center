Ext.define('APP.view.account.update.passwordSafe', {
  extend: 'Ext.form.Panel',
  xtype: 'updatePasswordSafe',
  controller: 'account',
  items: [
    {
      xtype: 'fieldset', name: 'mateNew',
      items: [
        {xtype: 'textfield', name: 'oldValue', hidden: true},
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
    {xtype: 'field', name: 'fieldName', value: '安全密码', hidden: true},
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
    if (account.password_safe === '') {
      button.setText('设置');
      mateNew.setTitle('设置安全密码');
    } else {
      button.setText('更换安全密码');
      mateNew.setTitle('更换为');
    }
  }
});
