Ext.define('APP.view.agent.account.manage', {
  extend: 'Ext.List',
  xtype: 'agentAccountManage',
  controller: 'agent.account',
  viewModel: {data: {parameter: {_field: 'account'}}},
  store: {
    type: 'agent.account',
    autoLoad: false,
    proxy: {
      extraParams: {
        // login: this.getCmp(searchbar).getValue()
      }
    }
  },
  items: [
    {xtype: 'navbar'},
    {xtype: 'searchbar', component: {pattern: '[0-9]*'}},
    {
      xtype: 'segmentedtab', ui: 'tab', name: '_field', bind: {value: '{parameter._field}'},
      items: [
        {text: '账户', iconCls: 'f-mt mt-user-3', value: 'account'}
      ]
    }
  ],
  userCls: 'x-ui-list',
  itemCls: 'x-ui-list-account',
  itemTpl: [
    '<div class="x-ui-left">',
      '<p>{login}</p>',
      '<p>{property_name}</p>',
    '</div>',
    '<div class="x-ui-explain">',
      // '<p class="x-ui-first">',
      //   '<span class="x-ui-label x-ui-bg-black">{regdate:date("Y-m-d")}</span><span class="x-ui-label x-ui-bg-black">{type}</span>',
      // '</p>',
      // '<p><label>销售：</label>{salesman_namecn} {salesman2_namecn}</p>',
      // '<tpl if="agent">',
      //   '<p><label>代理：</label>{agent} {agent_namecn}</p>',
      // '</tpl>',
      '<p>',
        '<label>入金：</label>',
        '<b class="x-ui-text-blue">{funds_deposit:money} <r>{trade_count} 笔</r></b></br>',
        '<label>出金：</label>',
        '<b class="x-ui-text-blue">{funds_withdrawal:money}</b></br>',
      '</p>',
      '<p>',
        '<label>成交量：</label>',
        '<b>{trade_volume:stringNumeral(2)}</b></br>',
        '<label> 佣金：</label>',
        '<b>{trade_commission:usMoney}</b></br>',
      '</p>',
      '<p>',
        '<label>余额：</label><b class="x-ui-text-green">{balance:usMoney}</b></br>',
        '<label> 净值：</label><b class="x-ui-text-green">{roleid:usMoney}</b></br>',
      '</p>',
    '</div>'
  ],
  listeners: {
    // itemtap: 'onRecordItemtap'
  }
});
