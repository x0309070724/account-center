Ext.define('APP.mate.navbar', {
  extend: 'Ext.Toolbar',
  alias: 'widget.navbar',
  docked: 'top',
  // The ui or uis to be used on this Component
  ui: 'nav',
  title: '',
  border: true,
  height: 40,
  initialize: function () {
    this.callParent();
    var items = [];
    items.push(
      {
        xtype: 'button',
        text: 'Back',
        ui: 'back',
        iconCls: 'f-mt mt-chevron-left',
        iconAlign: 'center',
        handler: 'onNavigationPop'
      }
    );
    // console.log(this.menu);
    Ext.Array.each(this.menu || {}, function (item) {
      items.push(item);
    });
    this.setItems(items);
  }
});
