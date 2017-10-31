Ext.define('APP.view.depowith.withdrawal.withdrawal', {
  extend: 'Ext.List',
  controller: 'depowith',
  grouped: true,
  store: {
    type: 'depowith.record',
    autoLoad: false,
    proxy: {
      extraParams: {}
    }
  },
  viewModel: {data: {parameter: {_field: 'all'}}},
  items: [
    {
      xtype: 'navbar'
    },
    {
      xtype: 'segmentedtab', ui: 'tab', name: '_field', bind: {value: '{parameter._field}'},
      items: [
        {
          text: '已拒绝',
          iconCls: 'f-mt mt-field-clear',
          value: 'reject'
        },
        {
          text: '已完成',
          iconCls: 'f-mt mt-field-clear',
          value: 'complete'
        },
        {
          text: '已取消',
          iconCls: 'f-mt mt-field-clear',
          value: 'cancel'
        },
        {
          text: '处理中',
          iconCls: 'f-mt mt-field-clear',
          value: 'pending'
        },
        {
          text: '全部',
          iconCls: 'f-mt mt-field-funds',
          value: 'all'
        }
      ]
    }
  ],
  userCls: 'x-ui-list',
  itemCls: 'x-ui-list-report',
  itemTpl:[
    '<tpl switch="cmd">',
      // =====================================================================================出入金
      '<tpl case="1">',
        '<div class="x-ui-bank">',
          '<p><span class="icon-bank {bank_icon}">{bank_name}</span></p>',
          '<tpl if="direction==1">',
            '<p><span class="x-ui-box-label x-ui-text-green"><label>入金：</label><b class="x-ui-font-number">{amount_usd:usMoney}</b></span></p>',
          '<tpl else>',
            '<p><span class="x-ui-box-label x-ui-text-red"><label>出金：</label><b class="x-ui-font-number">{amount_usd:usMoney}</b></span></p>',
          '</tpl>',
        '</div>',
      // =====================================================================================信用
      '<tpl case="2">',
        '<div class="x-ui-bank">',
          '<p><span class="icon-bank {bank_icon}">信用</span></p>',
          '<tpl if="direction==1">',
            '<p><span class="x-ui-box-label x-ui-text-green"><label>借款：</label><b class="x-ui-font-number">{money:usMoney}</b></span></p>',
          '<tpl else>',
            '<p><span class="x-ui-box-label x-ui-text-red"><label>还款：</label><b class="x-ui-font-number">{money:usMoney}</b></span></p>',
          '</tpl>',
        '</div>',
      '<tpl case="3">',
        '<div class="x-ui-bank">',
          '<p><span class="icon-bank {bank_icon}">对方：{transfer}</span></p>',
          '<tpl if="direction==1">',
            '<p><span class="x-ui-box-label x-ui-text-green"><label>转入：</label><b class="x-ui-font-number">{money:usMoney}</b></span></p>',
          '<tpl else>',
            '<p><span class="x-ui-box-label x-ui-text-red"><label>转出：</label><b class="x-ui-font-number">{money:usMoney}</b></span></p>',
          '</tpl>',
          '<p></p>',
        '</div>',
    '</tpl>',
    '<div class="x-ui-explain">',
      '<p class="x-ui-first">',
        '<span class="x-ui-label x-ui-bg-blue">{bank_currency}</span>',
        '<span class="x-ui-label x-ui-bg-red">{groupname}</span>',
      '</p>',
      '<p><label>出金金额：</label><span class="x-ui-box-label x-ui-text-red">{amount_usd:usMoney}</span></p>',
      '<p><label>余额:</label><span>{balance:usMoney}</span></p>',
      '<p><label>处理时间：</label>{time:date("h:m:s")}</p>',
      '<p><label>交易凭证：</label>{orderno}</p>',
      '<tpl if="audit_explain">',
        '<p><label>错误原因：</label><span class="x-ui-label x-ui-bg-red">{audit_explain}</span></p>',
      '</tpl>',
    '</div>'
  ],
  listeners: {
    // initialize:'onApplyStoreLoad',
    // itemtap:'onRecordItemtap'
  }
});

