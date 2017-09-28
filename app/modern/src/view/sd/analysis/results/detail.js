Ext.define('APP.view.sd.analysis.results.detail', {
  extend: 'Ext.Container',
  xtype: 'sdAnalysisResultsDetail',
  controller: 'sd.analysis.results',
  scrollable: true,
  tpl: [
    '<div class="x-ui-part">',
      '<div class="x-ui-grid">',
        '<h3>开户量</h3>',
        '<div class="x-ui-grid-inner">',
          '<dl><dt>IB</dt><dd>{account_new_count_ib:stringInteger}</dd></dl>',
          '<dl><dt>IBC</dt><dd>{account_new_count_ibc:stringInteger}</dd></dl>',
          '<dl><dt>SH</dt><dd>{account_new_count_sh:stringInteger}</dd></dl>',
          '<dl><dt>开户量</dt><dd><b class="x-ui-text-blue">{account_new_count:stringInteger}</b></dd></dl>',
        '</div>',
      '</div>',
    '</div>',
    '<div class="x-ui-part">',
      '<div class="x-ui-grid">',
        '<h3>出入金</h3>',
        '<div class="x-ui-grid-inner">',
          '<dl><dt>入金</dt><dd><b class="x-ui-text-green">{funds_deposit:money}</b></dd></dl>',
          '<dl><dt>出金</dt><dd><b class="x-ui-text-red">{funds_withdrawal:money}</b></dd></dl>',
          '<dl><dt>净入金</dt><dd><b class="x-ui-text-blue">{funds_net_deposit:money}</b></dd></dl>',
        '</div>',
      '</div>',
    '</div>'
  ],
  listeners: {
    initialize: 'onDetailInitialize'
  }
});

