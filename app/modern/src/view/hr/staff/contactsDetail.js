Ext.define('APP.view.hr.staff.contactsDetail', {
  extend: 'Ext.Container',
  xtype: 'hrStaffContactsDetail',
  controller: 'hr.staff',
  // userCls:'x-ui-container',
  scrollable: true,
  layout: {type: 'vbox'},
  items: [
    {
      xtype: 'container', userCls: 'x-ui-contact', scrollable: false,
      name: 'contact',
      tpl: [
        '<div class="x-ui-userface">',
          '<tpl if="wx_userface"><img src="{wx_userface}" alt=""/></tpl>',
        '</div>',
        '<div class="x-ui-name">{namecn}</div>',
        '<div class="x-ui-contact-icons">',
          '<tpl if="mobile"><span class="x-ui-icon"><a href="tel:{mobile}" class="f-mt mt-mobile"></a></span></tpl>',
          '<tpl if="mobile"><span class="x-ui-icon"><a href="sms:{mobile}" class="f-mt mt-message"></a></span></tpl>',
          '<tpl if="qq"><span class="x-ui-icon"><a href="{qq:qqHref}" class="f-mt mt-qq"></a></span></tpl>',
          '<tpl if="wx_openid"><span class="x-ui-icon"><a href="wechat:{wx_openid}" class="f-mt mt-wechat"></a></span></tpl>',
          '<tpl if="email"><span class="x-ui-icon"><a href="mailto:{email}" class="f-mt mt-email"></a></span></tpl>',
        '</div>'
      ]
    },
    {
      xtype: 'container', flex: 1, scrollable: true,
      name: 'info',
      tpl: [
        '<div class="x-ui-part">',
          '<div class="x-ui-grid">',
              // '<h3>员工档案</h3>',
            '<div class="x-ui-grid-inner">',
              '<dl><dt>姓名</dt><dd>{namecn} <s>{name}</s></dd></dl>',
              '<dl><dt>团队</dt><dd>{team_name}</dd></dl>',
              '<dl><dt>手机</dt><dd>{mobile}　<span class="x-ui-icon"><a href="tel:{mobile}" class="f-mt mt-mobile"></a></span></dd></dl>',
              '<dl><dt>Email</dt><dd>{email}　<span class="x-ui-icon"><a href="mailto:{email}" class="f-mt mt-email"></a></span></dd></dl>',
              '<dl><dt>QQ</dt><dd>{qq}　<span class="x-ui-icon"><a href="{qq:qqHref}" class="f-mt mt-qq"></a></span></dd></dl>',
              '<dl><dt>住址</dt><dd>{address}</dd></dl>',
            '</div>',
          '</div>',
        '</div>'
      ]
    }
  ],
  listeners: {
    initialize: 'onContactsDetailInitialize'
  }
});
