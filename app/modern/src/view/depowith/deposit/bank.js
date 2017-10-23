Ext.define('APP.view.depowith.deposit.bank', {
  extend: 'Ext.List',
  controller: 'depowith',
  store: {
    type: 'depowith.payAisle',
    autoLoad: true,
    proxy: {
      extraParams: {
        payAisle: 'bank'
      }
    }
  },
  items: [
    {
      xtype: 'navbar', menu: [
      {xtype: 'spacer'}
    ]
    },
  ],
  userCls: 'x-ui-list',
  itemCls: 'x-ui-list-report',
  itemTpl: [
    '<div class="x-ui-left x-ui-objects">',
      '<span id="haha" class="x-ui-bank-icon {code} bank-icon"></span>',
    '</div>',
    '<div class="x-ui-explain">',
      '<p>{namecn}</p>',
    '</div>'
    // '<tpl switch="_field">',
    //   // =====================================================================================交易类型
    //   '<tpl case="idxkey">',
    //     '<div class="x-ui-explain">',
    //       '<p><b class="x-ui-text-green">时间：{t_day}</b></p>',
    //       // '<p><label>交易类型：</label><b class="x-ui-text-red">{idxkey:stringInteger}</b></p>',
    //     '</div>',
    //     '<div class="x-ui-right">',
    //       '<p><label>交易类型：</label><b class="x-ui-text-purple">{idxkey}</b></p>',
    //     '</div>',
    //   // =====================================================================================金额
    //   '<tpl case="profit">',
    //     '<div class="x-ui-right">',
    //       '<p><label>金　额：</label><b class="x-ui-text-red">{profit:money}</b></p>',
    //     '</div>',
    // '</tpl>'
  ],
  listeners: {
    itemtap: 'onRecordItemtap'
  }
});
