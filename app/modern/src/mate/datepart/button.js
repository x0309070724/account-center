Ext.define('APP.mate.datepart.button', {
  extend: 'Ext.Button',
  alias: 'widget.datepartbutton',
  ui: 'border green',
  iconCls: 'f-mt mt-report-month-2',
  // Initialize configuration for this class.
  config: {
    handler: function (button) {
      var view = this.up('list');
      var store = view.getStore(),
        params = store.getProxy().getExtraParams();
      //if(!view.form){
//				view.add({
//					xtype:'datePackForm',
//					hidden:true,
//					hideDatepart:button.hideDatepart||false,
//					view:view,
//					store:store
//				}).show();
      //}
      //view.form.show();

      //			if(!this.actionsheet){
//				this.actionsheet=Ext.create({
//					xtype:'actionsheet',
//					title:'查询时间段',
//					side:'bottom',
//					cover:true,
//					displayed:false,
//					items:[
//						{xtype:'datePackForm',view:view,store:store,hideDatepart:button.hideDatepart||false}
//					]
//				});
//			}
//			this.actionsheet.setDisplayed(!this.actionsheet.getDisplayed());
//       console.log(this.menu);
      var menu = this.menu || Ext.create({
        xtype: 'actionsheet',
        title: '查询时间段',
        side: 'bottom',
        cover: true,
        displayed: false,
        items: [
          {xtype: 'datePackForm', view: view, store: store, hideDatepart: button.hideDatepart || false}
        ]
      });
      menu.setDisplayed(!menu.getDisplayed());
    }
  }
});
