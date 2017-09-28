Ext.define('APP.view.account.update.wechat', {
  extend: 'Ext.form.Panel',
  xtype: 'updateWechat',
  controller: 'account',
  items: [
    {
      xtype: 'fieldset', name: 'mateNow', title: '当前',
      items: [
        {xtype: 'textfield', name: 'login', label: '账号', readOnly: true, bind: {value: '{account.login}'}},
        {xtype: 'textfield', name: 'oldValue', label: '微信号', readOnly: true, bind: {value: '{account.wx_openid}'}}
      ]
    },
    {
      xtype: 'fieldset', name: 'mateNew', title: '更改为',
      items: [
        {xtype: 'textfield', name: 'weixinNew', label: '新微信号'}
      ]
    },
    {xtype: 'field', name: 'field', value: 'weixin', hidden: true},
    {xtype: 'field', name: 'fieldName', value: '微信号', hidden: true},
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

    if (account.wx_openid === '') {
      button.setText('绑定');
      mateNow.hide();
      mateNew.setTitle('绑定微信号');
      mateNew.setItems([
        {xtype: 'textfield', name: 'newValue', label: '微信号'}
      ]);
    } else {
      button.setText('确认更换');
      mateNow.show();
      mateNew.setTitle('更换为');
      mateNew.setItems([
        {xtype: 'textfield', name: 'newValue', label: '新微信号'}
      ]);
    }
  }
});
