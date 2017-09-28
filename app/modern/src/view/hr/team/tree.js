Ext.define('APP.view.hr.team.tree', {
  extend: 'Ext.Container',
  xtype: 'hrTeamTree',
  controller: 'hr',
  layout: {type: 'fit'},
  items: [
    {
      xtype: 'tree',
      border: false,
      itemHeight: 40,
      hideHeaders: true,
      singleExpand: false,
      expanderOnly: false,
      columns: [
        {text: 'NAME', xtype: 'treecolumn', dataIndex: 'name', flex: .7},
        {text: 'MANAGER', dataIndex: 'info', align: 'right', flex: .3}
      ],
      listeners: {
        initialize: 'onTeamInitialize'
        // itemtap:''
      }
    }
  ]
});
