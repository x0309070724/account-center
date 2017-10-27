Ext.define('APP.view.depowith.index', {
  extend: 'Ext.Container',
  xtype: 'depowithIndex',
  controller: 'depowith',
  scrollable: true,
  defaults: {scrollable: false},
  items: [
    {
      xtype: 'carousel', userCls: 'x-ui-color-panel', indicator: false, height: 228, activeItem: 2,
      defaults: {
        data: ['N/A', 0, 0, 0, 0],
        tpl: [
          '<div class="x-ui-access">',
            '<h1>{0}</h1>',
            '<div class="x-ui-item">',
              '<span>新开账户</span>',
              '<b>{1:stringInteger}</b>',
            '</div>',
            '<div class="x-ui-item">',
              '<span>净入金</span>',
              '<b>{2:stringInteger}</b>',
            '</div>',
            '<div class="x-ui-item">',
              '<span>交易量</span>',
              '<b>{3:stringInteger}</b>',
            '</div>',
            '<div class="x-ui-item">',
              '<span>净盈亏</span>',
              '<b>{4:stringInteger}</b>',
            '</div>',
          '</div>'
        ]
      },
      items: [
        {xtype: 'box'},
        {xtype: 'box'},
        {xtype: 'box'}
      ]
    },
    // {xtype: 'navList', type: 'box', userCls: 'x-ui-nav x-ui-mini', navigation: 2006},
    {xtype: 'navList', userCls: 'x-ui-nav x-ui-mini', navigation: 3001, hideTitle: false},
    {xtype: 'navList', userCls: 'x-ui-nav x-ui-mini', navigation: 3002, hideTitle: false},
    {xtype: 'navList', userCls: 'x-ui-nav x-ui-mini', navigation: 3003, hideTitle: false}
  ],
  listeners: {activate: 'onIndexActivate'}
});
