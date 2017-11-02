Ext.define('APP.view.depowith.transfer.detail', {
  extend: 'Ext.Container',
  xtype: 'depowithTransferDetail',
  controller: 'depowith.transfer',
  scrollable: true,
  tpl:[
		'<div class="x-ui-part">',
			'<div class="x-ui-grid">',
				'<h3>转账详情</h3>',
				'<div class="x-ui-grid-inner">',
					'<dl><dt>时间</dt><dd><b class="x-ui-text-black">{time:date("Y-m-d")} </b><b class="x-ui-grey">{time:date("H:i:s")}</b></dd></dl>',
					'<dl><dt>类型</dt><dd><b class="x-ui-text-white">{direction:returnTransferType}</b></dd></dl>',
					'<dl><dt>对方账户</dt><dd><b class="x-ui-text-red">{transfer}</dd></dl>',
					'<dl>',
            '<dt>金额</dt>',
            '<dd>',
              '<b class="x-ui-text-grey">转前：{before_balance:usMoney}</b></br>',
              '<b class="x-ui-text-green">转后：{after_balance:usMoney}</b></br>',
              '<b class="x-ui-text-red">金额：{balance:usMoney}</b>',
            '</dd>',
          '</dl>',
					'<dl><dt>注释</dt><dd><b class="x-ui-text-black">{explain}</b></dd></dl>',
				'</div>',
			'</div>',
		'</div>'
	],
  listeners: {
    // initialize: 'onDetailInitialize'
  }
});
