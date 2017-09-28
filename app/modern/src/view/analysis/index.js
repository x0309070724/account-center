Ext.define('APP.view.analysis.index', {
  extend: 'Ext.Container',
  xtype: 'analysisIndex',
  controller: 'analysis',
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
    {xtype: 'navList', type: 'list', navigation: 5001, hideTitle: true},
    {xtype: 'navList', type: 'list', navigation: 5002},
    {xtype: 'navList', type: 'list', navigation: 5003},
    {xtype: 'navList', type: 'list', navigation: 5004}
  ],
  listeners: {
    // Fires whenever item within the Container is activated.
    activate: 'onIndexActivate'
  }
});
