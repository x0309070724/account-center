Ext.define('APP.view.account.update.password', {
  extend: 'Ext.form.Panel',
  xtype: 'updatePassword',
  controller: 'account',
  items: [
    {
      xtype: 'fieldset', name: 'mateNew', title: '更换主密码',
      items: [
        {xtype: 'field', label: '提示：主密码用于网页以及所有客户端的登陆'},
        {xtype: 'textfield', name: 'login', label: '账号', readOnly: true, bind: {value: '{account.login}'}},
        {xtype: 'textfield', name: 'oldValue', hidden: true},
        {xtype: 'passwordfield', name: 'newValue', label: '新密码', placeholder: '请使用字母加数字组合'},
        {xtype: 'passwordfield', name: 'newValue2', label: '重复一次'}
      ]
    },
    {xtype: 'field', name: 'field', value: 'password', hidden: true},
    {xtype: 'field', name: 'fieldName', value: '主密码', hidden: true},
    {
      xtype: 'button',
      text: '确认更换',
      name: 'submit',
      ui: 'border background red large',
      margin: 20,
      handler: 'onSubmitAccountUpdate'
    }
  ]
});
