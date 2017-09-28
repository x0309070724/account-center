Ext.define('APP.view.sd.account.detail.info',{
	extend:'Ext.Container',
	xtype:'sdAccountDetailInfo',
	controller:'sd.account',
	scrollable:true,
	tpl:[
		'<div class="x-ui-part">',
			'<div class="x-ui-grid">',
				'<h3>账户信息</h3>',
				'<div class="x-ui-grid-inner">',
					'<dl><dt>账号</dt><dd><b>{login}</b></dd></dl>',
					'<dl><dt>类型</dt><dd>{type}</dd></dl>',
					'<dl><dt>杠杆</dt><dd>1:{leverage}</dd></dl>',
					'<dl>',
            '<dt>销售</dt>',
            '<dd>',
              '<tpl if="salesmanid">',
                '{salesman_namecn} <s>{salesman_name}</s>　{salesman_team_name}',
                '<tpl if="salesman2id">',
                  '<br/>',
                  '{salesman2_namecn} <s>{salesman2_name}</s>　{salesman2_team_name}',
                '</tpl>',
              '<tpl else>',
                '<b class="x-ui-text-red">N/A</b>',
              '</tpl>',
					  '</dd>',
          '</dl>',
					'<tpl if="same_identity_count">',
						'<dl><dt>同名账户</dt><dd>{same_identity_count} 个</dd></dl>',
					'</tpl>',
					'<dl>',
            '<dt>开户日期</dt>',
            '<dd>',
              '<span class="x-ui-text-green">北京：{regdate:date("Y-m-d H:i A")}</span><br/>',
              '<span class="x-ui-text-blue">伦敦：{regdate:utcDate("Y-m-d H:i A")}</span>',
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
					'<dl><dt>QQ</dt><dd>{qq}　<span class="x-ui-icon"><a href="{qq:qqHref}" class="f-mt mt-qq"></a></span></dd></dl>',
					'<dl><dt>证件</dt><dd>{identity_country} {identity_cardno}</dd></dl>',
				'</div>',
			'</div>',
		'</div>',

		'<div class="x-ui-part">',
			'<div class="x-ui-grid">',
				'<h3>交易统计</h3>',
				'<div class="x-ui-grid-inner">',
					'<dl><dt>入金</dt><dd><b class="x-ui-text-green">{funds_deposit:usMoney}</b></dd></dl>',
					'<dl><dt>出金</dt><dd><b class="x-ui-text-red">{funds_withdrawal:usMoney}</b></dd></dl>',
					'<dl><dt>净入金</dt><dd><b class="x-ui-text-blue">{funds_net_deposit:usMoney}</b></dd></dl>',
					'<dl><dt>交易量</dt><dd><b class="x-ui-text-black">{trade_volume:stringNumeral(2)}</b></dd></dl>',
				'</div>',
			'</div>',
		'</div>',

		'<tpl if="typeid==2">',
			'<div class="x-ui-part">',
				'<div class="x-ui-grid">',
					'<h3>代理佣金</h3>',
					'<div class="x-ui-grid-inner">',
						'<dl><dt>下线账户</dt><dd><b class="x-ui-text-green">{agent_subordinate:stringInteger}</b></dd></dl>',
						'<dl><dt>佣金</dt><dd><b class="x-ui-text-blue">{agent_commission:usMoney}</b></dd></dl>',
						'<dl><dt>交易量</dt><dd><b class="x-ui-text-black">{agent_volume:stringNumeral(2)}</b></dd></dl>',
					'</div>',
				'</div>',
			'</div>',
		'</tpl>',

		'<div class="x-ui-part">',
			'<div class="x-ui-grid">',
				'<h3>账户资产</h3>',
				'<div class="x-ui-grid-inner">',
					'<dl><dt>余额</dt><dd><b class="x-ui-text-green">{mt4Data.balance:usMoney}</b></dd></dl>',
					'<dl><dt>信用</dt><dd><b class="x-ui-text-black">{mt4Data.credit:usMoney}</b></dd></dl>',
					'<dl><dt>净值</dt><dd><b class="x-ui-text-blue">{mt4Data.equity:usMoney}</b></dd></dl>',
					'<dl><dt>已用</dt><dd><b class="x-ui-text-black">{mt4Data.margin:usMoney}</b></dd></dl>',
					'<dl><dt>可用</dt><dd><b class="x-ui-text-red">{mt4Data.margin_free:usMoney}</b></dd></dl>',
					'<tpl if="mt4Data.margin_level">',
						'<dl><dt>可用比例</dt><dd>{mt4Data.margin_level:stringNumeral(2)} %</dd></dl>',
					'</tpl>',
				'</div>',
			'</div>',
		'</div>'
	],
	listeners:{
		initialize:'onDetailInfoInitialize'
	}
});











