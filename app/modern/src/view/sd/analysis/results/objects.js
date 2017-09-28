Ext.define('APP.view.sd.analysis.results.objects', {
  extend: 'Ext.List',
  controller: 'sd.analysis.results',
  store: {
    type: 'analysis.results.statistics',
    count: 10,
    proxy: {
      extraParams: {
        datepart: 'month',
        startdate: Ext.Date.format(new Date(), 'Y-m'),
        enddate: Ext.Date.format(new Date(), 'Y-m')
      }
    }
  },
  items: [
    {
      xtype: 'navbar', menu: [
      {xtype: 'spacer'},
      {xtype: 'datepartbutton'}
    ]
    },
    {xtype: 'boxdatepart'},
    {
      xtype: 'segmentedtab', ui: 'tab', name: 'field', bind: {value: '{parameter.field}'},
      items: [
        {
          text: '开户量',
          value: 'account',
          iconCls: 'f-mt mt-field-account',
          sorter: {property: 'account_new_count', direction: 'DESC'}
        },
        {
          text: '净入金',
          value: 'funds',
          iconCls: 'f-mt mt-field-funds',
          sorter: {property: 'funds_net_deposit', direction: 'DESC'}
        }
      ]
    }
  ],
  itemCls: 'x-ui-listitem-ranking',
  itemTpl: [
    '<tpl switch="menu">',
    //=====================================================================================销售
    '<tpl case="staff">',
    '<div class="x-ui-no x-ui-no-{ranking}">',
    '<b>{ranking}</b>',
    '</div>',
    '<div class="x-ui-userface">',
    '<img src="{objects_icon:resizeWxImg("/0","/64")}" alt="" onerror="this.src=\'/resources/images/userface.png\'"/>',
    '</div>',
    '<div class="x-ui-name">',
    '<p>{objects}</p>',
    '<p>{objects_tip}{[this.postName(values)]}</p>',
    '</div>',
    //=====================================================================================团队
    '<tpl default>',
    '<div class="x-ui-no x-ui-no-{ranking}">',
    '<b>{ranking}</b>',
    '</div>',
    '<div class="x-ui-name">',
    '<p>{objects}</p>',
    '<p>{manager_namecn} <span>{manager_name}</span></p>',
    '</div>',
    '</tpl>',
    '<div class="x-ui-value">',
    '<tpl switch="field">',
    //=====================================================================================开户量
    '<tpl case="account">',
    '<label>开户量</label>',
    '<b>{account_new_count:stringInteger}</b>',
    //=====================================================================================净入金
    '<tpl case="funds">',
    '<label>净入金</label>',
    '<b>{funds_net_deposit:money}</b>',
    //=====================================================================================交易量
    '<tpl case="volume">',
    '<label>交易量</label>',
    '<b>{trade_volume:stringNumeral(3)}</b>',
    '</tpl>',
    '</div>',
    {
      postName: function (record) {
        if (record.id === record.managerid && record.teamid.toString().substr(9, 3) === '000') {
          return '·经理'
        } else if (record.id === record.managerid) {
          return '·主管'
        }
      }
    }
  ],
  listeners: {
    itemtap: 'onObjectsItemtap'
  }
});

