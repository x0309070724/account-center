Ext.define('APP.view.depowith.depowith', {
  extend: 'Ext.List',
  controller: 'depowith',
  // grouped:true,
  store: {
    type: 'depowith.record',
    autoLoad: false,
    // super: true,
    proxy: {
      extraParams: {
        app: 'withdraw',
        // datepart: 'day',
        // startdate: Ext.Date.format(new Date(new Date().getFullYear(),new Date().getMonth()-1,new Date().getDate()), 'Y-m-d'),
        // enddate: Ext.Date.format(new Date(), 'Y-m-d')
      }
    }
  },
  // 用了plugins,会报isWidget of null 的错
  // plugins: [
  //   {type: 'pullrefresh'}
  // ],
  viewModel: {data: {parameter: {field: 'reject'}}},
  items: [
    {
      xtype: 'navbar' /*, menu: [
      {xtype: 'spacer'},
      {xtype: 'datepartbutton'}]*/
    },
    {
      xtype: 'segmentedtab', ui: 'tab', name: 'field', bind: {value: '{parameter.field}'},
      items: [
        {
          text: '已拒绝',
          iconCls: 'f-mt mt-field-clear',
          value: 'reject',
          // sorter: {property: 'trade_clear', direction: 'DESC'}
        },
        {
          text: '已完成',
          iconCls: 'f-mt mt-field-clear',
          value: 'complete',
          // sorter: {property: 'trade_clear', direction: 'DESC'}
        },
        {
          text: '处理中',
          iconCls: 'f-mt mt-field-clear',
          value: 'processing',
          // sorter: {property: 'trade_clear', direction: 'DESC'}
        },
        {
          text: '全部',
          iconCls: 'f-mt mt-field-funds',
          value: 'all',
          // sorter: {property: 'funds_net_deposit', direction: 'DESC'}
        }
      ]
    }
    // {xtype: 'boxtotal'}
  ],
  userCls:'x-ui-list',
  itemCls: 'x-ui-list-report',
  itemTpl:[
    /*'<div class="x-ui-left x-ui-block">',
          // '{time:date("H:i A")}',
          'hehe',
        '</div>',*/
    '<tpl switch="field">',
      '<tpl case="reject">',
        // ====================================================================================出入金
        '<tpl if="audit==-1">',
          '<div class="x-ui-left x-ui-block">',
            '{time:date("H:i A")}',
          '</div>',
          '<tpl if="direction==1">',
            '<label>入金</label><b class="x-ui-font-number x-ui-text-green">{money:usMoney}</b>',
          '<tpl else>',
            '<label>出金</label><b class="x-ui-font-number x-ui-text-red">{money:usMoney}</b>',
          '</tpl>',
        '</tpl>',

        /*'<div class="x-ui-left x-ui-block">',
          // '{time:date("H:i A")}',
          'hehe',
        '</div>',*/
        /*'<div class="x-ui-explain">',
          '<tpl if="cmd==3">',
            '<p><label>对方：</label>{transfer}</p>',
          '<tpl else>',
            '<p><label>银行：</label>{bank_name}</p>',
          '</tpl>',
          '<p class="x-ui-state">{audit:strAudit}</p>',
        '</div>',*/
        /*'<div class="x-ui-right">',
          '<tpl switch="cmd">',
            // ====================================================================================出入金
            '<tpl case="1">',
              '<tpl if="direction==1">',
                  '<label>入金</label><b class="x-ui-font-number x-ui-text-green">{money:usMoney}</b>',
              '<tpl else>',
                  '<label>出金</label><b class="x-ui-font-number x-ui-text-red">{money:usMoney}</b>',
              '</tpl>',
            // =====================================================================================信用
            '<tpl case="2">',
              '<tpl if="direction==1">',
                  '<label>借款</label><b class="x-ui-font-number x-ui-text-green">{money:usMoney}</b>',
              '<tpl else>',
                  '<label>还款</label><b class="x-ui-font-number x-ui-text-red">{money:usMoney}</b>',
              '</tpl>',
            '<tpl case="3">',
              '<tpl if="direction==1">',
                  '<label>转入</label><b class="x-ui-font-number x-ui-text-green">{money:usMoney}</b>',
              '<tpl else>',
                  '<label>转出</label><b class="x-ui-font-number x-ui-text-red">{money:usMoney}</b>',
              '</tpl>',
          '</tpl>',
        '</div>',*/
    '</tpl>'
	],
  listeners:{
    // initialize:'onApplyStoreLoad',
    // itemtap:'onRecordItemtap'
  }
});

