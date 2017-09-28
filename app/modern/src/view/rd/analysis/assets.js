Ext.define('APP.view.rd.analysis.assets', {
  extend: 'Ext.List',
  xtype: 'rdAnalysisSssets',
  controller: 'rd',
  store: {
    type: 'cross',
    autoLoad: true,
    pageSize: false,
    sorters: [{property: 'objects', direction: 'DESC'}],
    proxy: {
      url: Boot.appUrl('/rd/mt4/getAssets.do'),
      extraParams: {
        startdate: Ext.Date.format(Ext.Date.add(new Date(), Ext.Date.MONTH, -1), 'Y-m-d'),
        enddate: Ext.Date.format(new Date(), 'Y-m-d')
      }
    }
  },
  plugins: [
    {type: 'pullrefresh'}
  ],
  userCls: 'x-ui-list',
  itemTpl: [
    '<div class="x-ui-left x-ui-block">',
      '{objects:ledgerDay}',
    '</div>',
      '<div class="x-ui-explain">',
      '<p><label>账户：</label><b>{account_count:stringInteger}</b></p>',
      '<p><label>余额：</label><b class="x-ui-text-green">{balance:stringInteger}</b></p>',
      '<p><label>净值：</label><b class="x-ui-text-blue">{equity:stringInteger}</b></p>',
    '</div>',
    '<div class="x-ui-right">',
      '<label>盘面浮亏</label>',
      '<b>{profit:stringInteger}</b>',
    '</div>'
  ]
//	listeners:{
//		initialize:'',
//		itemtap:''
//	}
});

