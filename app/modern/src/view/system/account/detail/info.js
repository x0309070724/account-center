Ext.define('APP.view.system.account.detail.info', {
  extend: 'Ext.Container',
  xtype: 'systemAccountDetailInfo',
  controller: 'system.account',
  scrollable: true,
  tpl: [
    '<div class="x-ui-part">',
			'<div class="x-ui-grid">',
				'<h3>账户信息</h3>',
				'<div class="x-ui-grid-inner">',
					'<dl><dt>账号</dt><dd><b>{login}</b></dd></dl>',
					'<dl><dt>账户性质</dt><dd>{type}</dd></dl>',
					'<dl><dt>杠杆</dt><dd>1:{leverage}</dd></dl>',
          '<dl>',
            '<dt>开户日期</dt>',
            '<dd>',
              '<span class="x-ui-text-green">北京：{regdate:date("Y-m-d H:i A")}</span><br/>',
              '<span class="x-ui-text-blue">伦敦：{regdate:utcDate("Y-m-d H:i A")}</span>',
            '</dd>',
          '</dl>',
          '<dl>',
            '<dt>推广链接</dt>',
            '<dd>',
              '<a href="http://192.168.31.103:4003/#/account/index.html">http://192.168.31.103:4003/#/account/index.html</a>',
            '</dd>',
          '</dl>',
				'</div>',
			'</div>',
		'</div>',

		'<div class="x-ui-part">',
			'<div class="x-ui-grid">',
				'<h3>申请人档案</h3>',
				'<div class="x-ui-grid-inner">',
					'<dl><dt>姓名</dt><dd>{namecn} <s>{name}</s></dd></dl>',
					'<dl><dt>手机</dt><dd>{mobile}　<span class="x-ui-icon"><a href="tel:{mobile}" class="f-mt mt-mobile"></a></span></dd></dl>',
					'<dl><dt>Email</dt><dd>{email}　<span class="x-ui-icon"><a href="mailto:{email}" class="f-mt mt-email"></a></span></dd></dl>',
					'<dl><dt>证件</dt><dd>{identity_country} {identity_cardno}</dd></dl>',
				'</div>',
			'</div>',
		'</div>',

		'<div class="x-ui-part">',
			'<div class="x-ui-grid">',
				'<h3>账户资产</h3>',
				'<div class="x-ui-grid-inner">',
					'<dl><dt>余额</dt><dd><b class="x-ui-text-green">{balance:usMoney}</b></dd></dl>',
					'<dl><dt>信用</dt><dd><b class="x-ui-text-black">{credit:usMoney}</b></dd></dl>',
					'<dl><dt>净值</dt><dd><b class="x-ui-text-blue">{mt4Data.equity:usMoney}</b></dd></dl>',
					'<dl><dt>已用</dt><dd><b class="x-ui-text-black">{mt4Data.margin:usMoney}</b></dd></dl>',
					'<dl><dt>可用</dt><dd><b class="x-ui-text-blue">{mt4Data.margin_free:usMoney}</b></dd></dl>',
				'</div>',
			'</div>',
		'</div>'
  ],
  listeners:{
    initialize:'onDetailInfoInitialize'
  }
});
