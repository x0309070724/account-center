Ext.define('APP.view.analysis.operations.objects', {
  extend: 'Ext.List',
  xtype: 'analysisOperationsObjects',
  controller: 'analysis',
  name: 'operations',
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
        defaults: {minWidth: 80, iconAlign: 'left'},
        items: [
          {text: '佣金', value: 'commission', sorter: {property: 'trade_commission_agent', direction: 'ASC'}},
          {text: '盈亏', value: 'profit', sorter: {property: 'trade_profit', direction: 'ASC'}},
          {text: '净盈亏', value: 'clear', sorter: {property: 'trade_clear', direction: 'ASC'}}
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
      // =====================================================================================佣金
        '<tpl case="commission">',
          '<label>佣金</label>',
          '<b>{trade_commission_agent:money}</b>',
      // =====================================================================================盈亏
        '<tpl case="profit">',
          '<label>盈亏</label>',
          '<b>{trade_profit:money}</b>',
      // =====================================================================================净盈亏
        '<tpl case="clear">',
          '<label>净盈亏</label>',
          '<b>{trade_clear:money}</b>',
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

