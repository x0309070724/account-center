Ext.define('APP.mate.segmentedTab', {
  extend: 'Ext.SegmentedButton',
  alias: 'widget.segmentedtab',
  name: 'field',
  ui: 'tab',
  docked: 'bottom',
  defaults: {xtype: 'button', iconAlign: 'top', ripple: {color: 'blue'}, flex: 1},
  items: [
    // 貌似没啥用，干掉
    // {text: 'TEXT'},
    // {text: 'TEXT'},
    // {text: 'TEXT'},
    // {text: 'TEXT'}
  ],
  listeners: {
    // Fires when the value changes.
    change: function (segmented, value) {
      var view = segmented.up('list'),
        store = view.getStore(),
        button = segmented.down('button[pressed=true]'),
        params = view.parameter || {};
      // console.log(params);
      // console.log(value);
      if (params.datepart && !params.menu && !params.startdate) {
        var dt = new Date();
        switch (params.datepart) {
          case 'month': {
            params.startdate = Ext.Date.format(Ext.Date.add(dt, Ext.Date.MONTH, -5), 'Y-m'),
              params.enddate = Ext.Date.format(dt, 'Y-m')
          }
            break;
          case 'week': {
            params.startdate = Ext.Date.format(Ext.Date.add(dt, Ext.Date.MONTH, -2), 'Y-W')
            params.enddate = Ext.Date.format(dt, 'Y-W');
            params.startdate = params.startdate.replace('-', '-W');
            params.enddate = params.enddate.replace('-', '-W');
          }
            break;
          case 'day': {
            params.startdate = Ext.Date.format(Ext.Date.add(dt, Ext.Date.DAY, -15), 'Y-m-d')
            params.enddate = Ext.Date.format(dt, 'Y-m-d')
          }
            break;
        }
      }
      // if (button.sorter) {
      //   store.setSorters(button.sorter);
      // }
      params[segmented.name] = value;
      Ext.apply(store.proxy.extraParams, params);
      // console.log(store);
      // Loads a given 'page' of data by setting the start and limit values appropriately. Internally this just causes
      // a normal load operation, passing in calculated 'start' and 'limit' params.
      store.loadPage(1, {
        callback: function (records, operation, success) {
          var params = store.getProxy().getExtraParams(),
            boxDatepart = view.down('boxdatepart'),
            boxTotal = view.down('boxtotal'),
            cartesian = view.down('cartesian');
          if (cartesian) {
            cartesian.getStore().setData(store.chartData);
            cartesian.setHidden(false);
          }
          if (boxDatepart) {
            // console.log(params);
            boxDatepart.setHidden(!params.startdate);
            var html = '';
            if (params.startdate === params.enddate) {
              html = '<b>' + params.enddate + '<b>'
            } else {
              html = 'From <b>' + params.startdate + '</b> To <b>' + params.enddate + '</b>'
            }
            boxDatepart.setHtml(html);
          }
          if (boxTotal) {
            boxTotal.setHidden(!store.totalValue);
            boxTotal.setHtml(store.totalValueString);
          }
        }
      });
      if (button.sorter) {
        store.sort(button.sorter);
      }
    }
  }
});
