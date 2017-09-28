Ext.define('APP.view.analysis.results.objects', {
  extend: 'Ext.List',
  xtype: 'analysisResultsObjects',
  controller: 'analysis',
  name: 'results',
  store: {
    type: 'analysis.results.statistics',
    autoLoad: false,
    super: true,
    proxy: {
      extraParams: {
        datepart: 'month',
        startdate: Ext.Date.format(new Date(), 'Y-m'),
        enddate: Ext.Date.format(new Date(), 'Y-m')
      }
    }
  },
  plugins: [
    {type: 'pullrefresh'}
  ],
  items: [
    {
      xtype: 'navbar', hiddenTitle: true, menu: [
      {xtype: 'spacer'},
      {
        xtype: 'segmentedtab', ui: false, docked: false, name: 'field', bind: {value: '{parameter.field}'},
        defaults: {minWidth: 80, iconAlign: 'left', ripple: false},
        items: [
          {text: '开户量', value: 'account', sorter: {property: 'account_new_count', direction: 'DESC'}},
          {text: '净入金', value: 'funds', sorter: {property: 'funds_net_deposit', direction: 'DESC'}},
          {text: '交易量', value: 'volume', sorter: {property: 'trade_volume', direction: 'DESC'}}
        ]
      },
      {xtype: 'spacer'},
      {xtype: 'datepartbutton'}
    ]
    },
    {xtype: 'boxdatepart'},
    {
      xtype: 'segmentedtab', ui: 'tab', name: 'menu', bind: {value: '{parameter.menu}'},
      items: [
        {text: '顾问', iconCls: 'f-mt mt-staff', value: 'staff'},
        // {text:'团队',iconCls:'f-mt mt-team',value:'t2'},
        {text: '团队', iconCls: 'f-mt mt-team', value: 't1'},
        {text: '网点', iconCls: 'f-mt mt-branch', value: 'branch'}
      ]
    },
    {xtype: 'boxtotal'}
  ],
  userCls: 'x-ui-list',
  itemCls: 'x-ui-listitem-ranking',
  itemTpl: [
    '<tpl switch="menu">',
    // =====================================================================================销售
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
    // =====================================================================================团队
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
      // =====================================================================================开户量
        '<tpl case="account">',
          '<label>开户量</label>',
          '<b>{account_new_count:stringInteger}</b>',
      // =====================================================================================净入金
        '<tpl case="funds">',
          '<label>净入金</label>',
          '<b>{funds_net_deposit:money}</b>',
      // =====================================================================================交易量
        '<tpl case="volume">',
          '<label>交易量</label>',
          '<b>{trade_volume:stringNumeral(3)}</b>',
      '</tpl>',
    '</div>',
    {
      postName: function (record, a, b) {
        // console.log(record,this);
        if (record.id === record.managerid && record.teamid.toString().substr(9, 3) === '000') {
          return '·经理'
        } else if (record.id == record.managerid) {
          return '·主管'
        }
      }
    }
  ],
  listeners: {
    itemtap: 'onObjectsItemtap'
  }
});
