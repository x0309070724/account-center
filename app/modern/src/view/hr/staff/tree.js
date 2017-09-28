Ext.define('APP.view.hr.staff.tree', {
  extend: 'Ext.Container',
  xtype: 'hrStaffTree',
  controller: 'hr.staff',
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
        {text: 'NAME', xtype: 'treecolumn', dataIndex: 'name', renderer: 'returnRootName', flex: .7},
        // {text:'COUNT',dataIndex:'count',align:'right',flex:.3},
        {text: 'MANAGER', dataIndex: 'info', align: 'right', flex: .3}
      ],
      listeners: {
        initialize: 'onStaffInitialize',
        itemtap: 'onContactsItemtap'
      }
    }
  ]
});
