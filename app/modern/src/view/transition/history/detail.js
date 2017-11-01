Ext.define('APP.view.transition.history.detail', {
  extend: 'Ext.Container',
  xtype: 'transitionHistoryDetail',
  controller: 'transition.history',
  scrollable: true,
  tpl:[
		'<div class="x-ui-part">',
			'<div class="x-ui-grid">',
				'<h3>订单详情</h3>',
				'<div class="x-ui-grid-inner">',
					'<dl><dt>订单</dt><dd><b class="x-ui-text-black">#{order}</b></dd></dl>',
					'<dl><dt>时间</dt><dd><b class="x-ui-text-black">{open_time:date("Y-m-d h:m:s")}</b></dd></dl>',
					'<dl><dt>交易类型</dt><dd><b class="x-ui-text-grey">{idxkey}</b></dd></dl>',
          '<tpl if="idxkey==\'DEPOSIT\'">',
					  '<dl><dt>金额</dt><dd><b class="x-ui-text-green">{clear:usMoney}</b></dd></dl>',
          '</tpl>',
          '<tpl if="idxkey==\'WITHDRAWAL\'">',
            '<dl><dt>金额</dt><dd><b class="x-ui-text-red">{clear:usMoney}</b></dd></dl>',
          '</tpl>',
          '<tpl if="idxkey==\'CREDIT IN\'">',
            '<tpl if="clear &gt;= 0">',
              '<dl><dt>金额</dt><dd><b class="x-ui-text-green">{clear:usMoney}</b></dd></dl>',
            '<tpl else>',
              '<dl><dt>金额</dt><dd><b class="x-ui-text-red">{clear:usMoney}</b></dd></dl>',
            '</tpl>',
          '</tpl>',
					'<dl><dt>注释</dt><dd><b class="x-ui-text-grey">{comment}</b></dd></dl>',
				'</div>',
			'</div>',
		'</div>'
	],
  listeners: {
    // initialize: 'onDetailInitialize'
  }
});
