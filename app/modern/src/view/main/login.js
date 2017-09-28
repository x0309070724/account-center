Ext.define('APP.view.main.login', {
  extend: 'Ext.Panel',
  xtype: 'login',
  userCls: 'x-ui-login',
  controller: 'navigation',
  layout: 'card',
  // items: [
  //   // {xtype: 'loginForm'},
  //   {xtype: 'bindForm'}
  // ],
  listeners: {
    initialize: 'onLoginInitialize'
  }
});
