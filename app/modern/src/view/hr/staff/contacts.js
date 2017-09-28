Ext.define('APP.view.hr.staff.contacts', {
  extend: 'Ext.List',
  xtype: 'hrStaffContacts',
  controller: 'hr.staff',
  // true to render an alphabet IndexBar docked on the right
  indexBar: true,
  // shadow: true,
  grouped: true,
  // pinHeaders: true,
  // masked: {xtype: 'loadmask'},
  store: {
    grouper: {
      groupFn: function (record) {
        var pinyin = record.data.name_pinyin;
        return pinyin[0].toUpperCase();
      }
    }
  },
  userCls: 'x-ui-list',
  itemTpl: [
    '{namecn}　<s>{name}</s>'
  ],
  listeners: {
    initialize: 'onContactsInitialize',
    itemtap: 'onContactsItemtap'
  }
});
