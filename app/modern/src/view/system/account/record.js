Ext.define('APP.view.system.account.record', {
  extend: 'Ext.List',
  xtype: 'systemAccountRecord',
  controller: 'system.account',
  // grouped: true,
  // masked:{xtype:'loadmask'},
  // viewModel: {data: {parameter: {menu: ''}}},
  store: {
    type: 'account.record',
    autoLoad: true
    // grouper: {
    //   groupFn: function (record) {
    //     return Ext.Date.format(record.data.regdate, 'Y-m-d')
    //   }, property: 'regdate', direction: 'DESC'
    // }
  },
  // plugins: [
  //   {type: 'pullrefresh'},
  //   {type: 'listpaging'}
  // ],
  items: [
    {xtype: 'navbar'}
    // {xtype: 'searchbar', component: {pattern: '[0-9]*'}},
    // {
    //   xtype: 'segmentedtab', ui: 'tab', name: 'app', bind: {value: '{parameter.app}'},
    //   items: [
    //     {text: '交易账户', iconCls: 'f-mt mt-user-3', value: 'real'},
    //     {text: '代理账户', iconCls: 'f-mt mt-users', value: 'agent'},
    //     {text: '全部', iconCls: 'f-mt mt-menu-all2', value: ''}
    //   ]
    // }
  ],
  userCls: 'x-ui-list',
  itemCls: 'x-ui-list-account',
  itemTpl: [
    '<div class="x-ui-left">',
    '<p>{account.login}</p>',
    '<p>{account.namecn}<br/>{account.name}</p>',
    '</div>',
    '<div class="x-ui-explain">',
      '<p class="x-ui-first">',
        '<span class="x-ui-label x-ui-bg-black">{account.regdate:date("Y-m-d")}</span><span class="x-ui-label x-ui-bg-black">{account.type}</span>',
      '</p>',
      // '<p><label>销售：</label>{salesman_namecn} {salesman2_namecn}</p>',
      '<tpl if="agent">',
        '<p><label>代理：</label>{account.agent} {account.agent_volume}</p>',
      '</tpl>',
      '<p>',
        '<label>入金：</label>',
        //'<b class="x-ui-text-green">{funds_deposit:stringNumeral(2)}</b><y></y>',
        //'<b class="x-ui-text-red">{funds_withdrawal:stringNumeral(2)}</b><y></y>',
        '<b class="x-ui-text-blue">{account.funds_net_deposit:money}</b>',
      '</p>',
      '<p>',
        '<label>交易：</label>',
        '<b>{account.trade_volume:stringNumeral(2)}</b>',
        //'<y></y>{trade_count:stringInteger} 笔',
      '</p>',
      '<p><label>余额：</label><b class="x-ui-text-green">{account.balance:money}</b></p>',
    '</div>'
  ],
  listeners: {
    itemtap: 'onRecordItemtap'
    // painted: function (me) {
    //   var account = APP.app.getAppData('account');
    //   console.log(account);
    // }
  }
});
