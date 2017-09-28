Ext.define('APP.mate.searchBar', {
  extend: 'Ext.Toolbar',
  alias: 'widget.searchbar',
  docked: 'top',
  // The ui or uis to be used on this Component。When a ui is configured, CSS class names are added to the element,
  // created by appending the ui name(s) to each classCls and/or baseCls.
  ui: 'search',
  border: true,
  // Allows addition of behavior to the rendering phase.
  initialize: function () {
    this.callParent();
    var me = this;
    // console.log(me.component);
    this.setItems([
      {
        xtype: 'searchfield', ui: 'faded', name: 'query', flex: 1, margin: '5 0',
        placeholder: 'Search',
        // labelIconAlign:'center',
        // textAlign:'center',
        inputType: 'text',
        // inputType:me.inputType||'search',
        component: me.component || {},
        listeners: {
          initialize: function (field) {
            window.setTimeout(function () {
              // console.log(field);
              var input = Ext.getDom(field.getFocusEl().id);
              // console.log(field.getFocusEl().id);
              input.pattern = field.component.pattern
              // console.log(input.pattern);
            }, 1000)
          },
          // focus: function (field) {
          //   field.setTextAlign('left');
          // },
          blur: function (field) {
            var store = field.up('list').getStore(),
              params = store.getProxy().getExtraParams();
            // field.setTextAlign('center');
            if (field.getValue() && field.getValue() !== '') {
              Ext.apply(params, {query: field.getValue()});
              // Loads a given 'page' of data by setting the start and limit values appropriately. Internally this just
              // causes a normal load operation, passing in calculated 'start' and 'limit' params.
              // page :  Number
              // The number of the page to load.
              store.loadPage(1);
            }
          },
          // 我觉得这个方法的逻辑有问题
          clearicontap: function (button, field) {
            var store = button.up('list').getStore(),
              params = store.getProxy().getExtraParams();
            field.setTextAlign('center');
            if (!params.query || params.query !== '') {
              Ext.apply(params, {query: ''});
              store.loadPage(1);
            }
          }
        }
      }
    ]);
  }
});
