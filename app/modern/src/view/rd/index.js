Ext.define('APP.view.rd.index', {
  extend: 'Ext.Container',
  xtype: 'rdIndex',
  controller: 'rd',
  scrollable: true,
  defaults: {scrollable: false},
  items: [
    {
      // Provides an indicator while toggling between child items to let the user know where they are in the card stack.
      xtype: 'carousel', userCls: 'x-ui-color-panel', indicator: false, height: 228, activeItem: 0,
      items: [
        {
          xtype: 'box',
          data: ['盘面', 0, 0, 0, 0],
          tpl: [
            '<div class="x-ui-access">',
              '<h1>{0}</h1>',
              '<div class="x-ui-item">',
                '<span>全部账户</span>',
                '<b>{1:stringInteger}</b>',
              '</div>',
              '<div class="x-ui-item">',
                '<span>在线账户</span>',
                '<b>{2:stringInteger}</b>',
              '</div>',
              '<div class="x-ui-item">',
                '<span>余额</span>',
                '<b>{3:moneyK(0)}</b>',
              '</div>',
              '<div class="x-ui-item">',
                '<span>净值</span>',
                '<b>{4:moneyK(0)}</b>',
              '</div>',
            '</div>'
          ]
        },
        {
          xtype: 'box',
          data: ['持仓', 0, 0, 0, 0],
          tpl: [
            '<div class="x-ui-access">',
              '<h1>{0}</h1>',
              '<div class="x-ui-item">',
                '<span>订单量</span>',
                '<b>{1:stringInteger}</b>',
              '</div>',
              '<div class="x-ui-item">',
                '<span>成交量</span>',
                '<b>{2:stringInteger}</b>',
              '</div>',
              '<div class="x-ui-item">',
                '<span>交易浮亏</span>',
                '<b>{3:stringInteger}</b>',
              '</div>',
              '<div class="x-ui-item">',
                '<span>净浮亏</span>',
                '<b>{4:stringInteger}</b>',
              '</div>',
            '</div>'
          ]
        }
      ]
    },
    // {xtype: 'navList', type: 'box', navigation: 2002, hideTitle: false},
    // {xtype: 'navList', type: 'box', navigation: 2003, hideTitle: false},
    {xtype: 'navList', type: 'box', navigation: 2004, hideTitle: false},
    {xtype: 'navList', type: 'box', navigation: 2005, hideTitle: false},
    {xtype: 'navList', userCls: 'x-ui-nav x-ui-mini', navigation: 2008}
  ],
  listeners: {
    activate: 'onIndexActivate'
  }
});
