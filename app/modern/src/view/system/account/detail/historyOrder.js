Ext.define('APP.view.system.account.detail.historyOrder', {
  extend: 'Ext.Container',
  xtype: 'systemAccountHistoryOrder',
  controller: 'system.account',
  padding: 5,
  scrollable: true,
  tpl: [
    '<div class="x-ui-part">',
      '<div class="x-ui-grid">',
      '<h3>账户信息</h3>',
        '<div class="x-ui-grid-inner">',
          '<dl><dt>账号</dt><dd><b>{account.login}</b></dd></dl>',
          '<dl><dt>类型</dt><dd>{account.type}</dd></dl>',
          '<dl><dt>杠杆</dt><dd>1:{account.leverage}</dd></dl>',
          '<dl>',
            '<dt>推广链接</dt>',
            '<dd>',
              '<a href="http://192.168.31.103:4003/#/account/index.html">http://192.168.31.103:4003/#/account/index.html</a>',
            '</dd>',
          '</dl>',
        '</div>',
      '</div>',
    '</div>'
  ],
  listeners:{
    // initialize:'onDetailInfoInitialize'
  }
});
