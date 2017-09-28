Ext.define('APP.view.sd.account.applyRecord', {
  extend: 'Ext.List',
  xtype: 'sdAccountApplyRecord',
  controller: 'sd.account',
  grouped: true,
  // masked:{xtype:'loadmask'},
  store: {
    type: 'account.apply',
    proxy: {extraParams: {}}
  },
  plugins: [
    {type: 'pullrefresh'},
    // Adds a Load More button at the bottom of the list. When the user presses this button, the next page of data will
    // be loaded into the store and appended to the List.
    {type: 'listpaging'}
  ],
  viewModel: {data: {parameter: {audit: ''}}},
  items: [
    {xtype: 'navbar'},
    {xtype: 'searchbar'},
    {
      xtype: 'segmentedtab', ui: 'tab', name: 'audit', bind: {value: '{parameter.audit}'},
      items: [
        {text: '处理中', iconCls: 'f-mt mt-hollow-state-wait', value: 0},
        {text: '已通过', iconCls: 'f-mt mt-hollow-state-yes', value: 1},
        {text: '已拒绝', iconCls: 'f-mt mt-hollow-state-no', value: -1},
        {text: '全部', iconCls: 'f-mt mt-hollow-state-all', value: ''},
        {text: '哼哼', iconCls: 'f-mt mt-hollow-state-all', value: ''}
      ]
    }
  ],
  userCls: 'x-ui-list',
  itemCls: 'x-ui-list-account',
  itemTpl: [
    // '<div class="x-ui-left">',
    //   '<tpl if="login">',
    //     '<p>{login}</p>',
    //   '<tpl else>',
    //     '<p>N/A</p>',
    //   '</tpl>',
    //   '<p>{namecn}<br/>{name}</p>',
    // '</div>',
    // '<div class="x-ui-explain">',
    //   '<p class="x-ui-first"><span class="x-ui-label x-ui-bg-black">{time:date("H:i A")}</span> <span class="x-ui-label x-ui-bg-black">{type}</span></p>',
    //   '<p><label>类型：</label>{type}</p>',
    //   '<p><label>销售：</label>{salesman_namecn} {salesman2_namecn}</p>',
    //   '<tpl if="agent&&agent!=login">',
    //     '<p><label>代理：</label>{agent} {agent_namecn}</p>',
    //   '</tpl>',
    //   '<p class="x-ui-state">{audit:strAudit}</p>',
    //   '<p class="x-ui-icon">{audit:strAudit(true)}</p>',
    // '</div>'
    '<div class="x-ui-left">',
      '<p>申请记录</p>',
      '<p>{namecn}<br/>{identity_cardno}</p>',
    '</div>',
    '<div class="x-ui-explain">',
      '<p class="x-ui-first"><span class="x-ui-label">{time:date("H:i A")}</span></p>',
    '</div>'
  ],
  listeners: {
    itemtap: 'onApplyRecordItemtap'
  }
});
