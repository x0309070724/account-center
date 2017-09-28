Ext.define('APP.view.sd.account.record', {
  extend: 'Ext.List',
  xtype: 'sdAccountRecord',
  controller: 'sd.account',
  grouped: true,
  // masked:{xtype:'loadmask'},
  // viewModel: {data: {parameter: {menu: ''}}},
  store: {
    type: 'account.manager',
    autoLoad: false
    // grouper: {
    //   groupFn: function (record) {
    //     return Ext.Date.format(record.data.regdate, 'Y-m-d')
    //   }, property: 'regdate', direction: 'DESC'
    // }
  },
  plugins: [
    {type: 'pullrefresh'},
    {type: 'listpaging'}
  ],
  items: [
    {xtype: 'navbar'},
    {xtype: 'searchbar', component: {pattern: '[0-9]*'}},
    {
      xtype: 'segmentedtab', ui: 'tab', name: 'app', bind: {value: '{parameter.app}'},
      items: [
        {text: '交易账户', iconCls: 'f-mt mt-user-3', value: 'real'},
        {text: '代理账户', iconCls: 'f-mt mt-users', value: 'agent'},
        {text: '全部', iconCls: 'f-mt mt-menu-all2', value: ''}
      ]
    }
  ],
  userCls: 'x-ui-list',
  itemCls: 'x-ui-list-account',
  itemTpl: [
    '<div class="x-ui-left">',
      '<p>{login}</p>',
      '<p>{namecn}<br/>{name}</p>',
    '</div>',
    '<div class="x-ui-explain">',
      '<p class="x-ui-first">',
        '<span class="x-ui-label x-ui-bg-black">{regdate:date("Y-m-d")}</span><span class="x-ui-label x-ui-bg-black">{type}</span>',
      '</p>',
      '<p><label>销售：</label>{salesman_namecn} {salesman2_namecn}</p>',
      '<tpl if="agent">',
        '<p><label>代理：</label>{agent} {agent_namecn}</p>',
      '</tpl>',
      '<p>',
        '<label>入金：</label>',
        //'<b class="x-ui-text-green">{funds_deposit:stringNumeral(2)}</b><y></y>',
        //'<b class="x-ui-text-red">{funds_withdrawal:stringNumeral(2)}</b><y></y>',
        '<b class="x-ui-text-blue">{funds_net_deposit:money}</b>',
      '</p>',
      '<p>',
        '<label>交易：</label>',
        '<b>{trade_volume:stringNumeral(2)}</b>',
        //'<y></y>{trade_count:stringInteger} 笔',
      '</p>',
      '<p><label>余额：</label><b class="x-ui-text-green">{balance:money}</b></p>',
    '</div>'
  ],
  listeners: {
    itemtap: 'onRecordItemtap'
  }
});
