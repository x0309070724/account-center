Ext.define('APP.view.depowith.accountDeposit', {
  extend: 'Ext.List',
  controller: 'depowith',
  items: [
    {
      xtype: 'depowithTab', ui: 'tab', name: '_field', bind: {value: '{parameter._field}'},
      items: [
        {
          text: '储蓄卡',
          iconCls: 'f-mt mt-field-clear',
          value: 'deposit_card',
          // sorter: {property: 'trade_clear', direction: 'DESC'}
        },
        {
          text: '信用卡',
          iconCls: 'f-mt mt-field-clear',
          value: 'credit_card',
          // sorter: {property: 'trade_clear', direction: 'DESC'}
        },
        {
          text: 'APP支付',
          iconCls: 'f-mt mt-field-clear',
          value: '',
          // sorter: {property: 'trade_clear', direction: 'DESC'}
        }
      ]
    }
    // {xtype: 'boxtotal'}
  ],
  /*listeners: {
    // Fires when the value changes.
    change: function (segmented, value) {
      var view = segmented.up('list'),
        store = view.getStore(),
        button = segmented.down('button[pressed=true]'),
        params = view.parameter || {};
      // console.log(params);
      // console.log(value);
      // console.log(segmented.name);
      // console.log(store);
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
      // console.log(Ext.Date.format(new Date(), 'Y-m-d'));
      // console.log(store);
      // Loads a given 'page' of data by setting the start and limit values appropriately. Internally this just causes
      // a normal load operation, passing in calculated 'start' and 'limit' params.
      store.loadPage(1, {
        callback: function (records, operation, success) {
          var params = store.getProxy().getExtraParams(),
            boxDatepart = view.down('boxdatepart'),
            boxTotal = view.down('boxtotal'),
            cartesian = view.down('cartesian'),
            polar = view.down('polar');
          // console.log(records);
          // console.log(store.chartData);
          if (polar) {
            // console.log(1111);
            console.log(store.chartData);
            polar.getStore().setData(store.chartData);
            polar.setHidden(false);
          }
          if (cartesian) {
            // console.log(1111);
            // console.log(store.chartData);
            cartesian.getStore().setData(store.chartData);
            cartesian.setHidden(false);
          }
          if (boxDatepart) {
            // console.log(params);
            boxDatepart.setHidden(!params.startdate);
            var html = '';
            // console.log(params.startdate);
            if (params.startdate === params.enddate) {
              // console.log(111);
              // html = '<b>' + params.enddate + '<b>'
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
  }*/
});
