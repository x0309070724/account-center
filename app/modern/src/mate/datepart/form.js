Ext.define('APP.mate.datePack.form', {
  extend: 'Ext.form.Panel',
  xtype: 'datePackForm',
  padding: 0,
//	modal:true,
  //autoDestroy:false,
  //shadow:true,
//	border:true,
//	closable:true,
  //closeAction:'hide',
//	hideOnMaskTap:true,
//	showAnimation:{type:'popIn',duration:250,easing:'ease-out'},
//	hideAnimation:{type:'popOut',duration:250,easing:'ease-out'},
//	centered:true,
//	width:'80%',
//	scrollable:true,
//	header:{
//		titleAlign:'left',
//		title:'查询时间段'
//	},
  onChangeDatePart: function (segmented, value) {
    var formpanel = this.up('formpanel'),
      params = formpanel.store.getProxy().getExtraParams(),
      startField = formpanel.down('field[name=startdate]'),
      endField = formpanel.down('field[name=enddate]'),
      type, format;
    switch (value) {
      case 'day': {
        type = 'date';
        format = 'Y-m-d';
      }
        break;
      case 'week': {
        type = 'week';
        format = 'Y-m-d';
      }
        break;
      case 'month': {
        type = 'month';
        format = 'Y-m';
      }
        break;
    }
    //console.log(formpanel.hideDatepart)
    //console.log(params.startdate)
    startField.setInputType(type);
    startField.setValue(params.startdate);
    endField.setInputType(type);
    endField.setValue(params.enddate);
    segmented.setHidden(formpanel.hideDatepart);
  },
  onFieldSubmit: function (field, e) {
    var button = field.next('button');
    this.onSearch(button);
  },
  onSearch: function (button) {
    //console.log(button.type,button.getValue())
    var form = button.up('formpanel'),
      startdate = form.down('field[name=startdate]'),
      enddate = form.down('field[name=enddate]'),
      view = form.view;
    store = form.store;
//        if(!form.validate()){
//            Ext.toast('Form is invalid, please correct the errors.');
//			return false;
//        }
    if (startdate.getValue() == '' || startdate.getValue() == null) {
      return false
    }
    if (enddate.getValue() == '') {
      enddate.setValue(startdate.getValue())
    }
    if (startdate.getValue() > enddate.getValue()) {
      startdate.setValue(enddate.getValue())
    }
    //console.log(startdate.getValue(),enddate.getValue(),form.getValues())
    Ext.apply(store.getProxy().getExtraParams(), form.getValues());
    //form.hide();
    form.up('actionsheet').setDisplayed(false);
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
          boxDatepart.setHidden(!params.startdate);
          if (params.startdate == params.enddate) {
            var html = '<b>' + params.enddate + '<b>'
          } else {
            var html = 'From <b>' + params.startdate + '</b> To <b>' + params.enddate + '</b>'
          }
          boxDatepart.setHtml(html);
        }
        if (boxTotal) {
          boxTotal.setHidden(!store.totalValue);
          boxTotal.setHtml(store.totalValueString);
        }
      }
    });
  },
  initialize: function () {
    this.callParent();
    var me = this,
      store = me.store,
      params = store.getProxy().getExtraParams(),
      fieldset;
    // console.log(store);
    // console.log(params);

    fieldset = {
      xtype: 'fieldset',
      defaults: {
        xtype: 'textfield',
        labelAlign: 'placeholder',
        required: true,
        component: {type: 'month'}
      },
      items: [
        {xtype: 'hiddenfield', name: 'datepart', value: params.datepart, bind: {value: '{datepart.value}'}},
        {
          xtype: 'segmentedbutton',
          defaults: {flex: 1},
          bind: {value: params.datepart},
          margin: '0 0 10 0',
          reference: 'datepart',
          publishes: 'value',
          items: [
            {text: '日', value: 'day'},
            {text: '周', value: 'week'},
            {text: '月', value: 'month'}
          ],
          listeners: {
            change: this.onChangeDatePart
          }
        },
        {label: '开始', name: 'startdate'},
        {label: '结束', name: 'enddate'},
        {xtype: 'button', ui: 'medium border red', text: 'OK', margin: '20 0 0 0', handler: this.onSearch}
      ]
    };
    me.setItems(fieldset);
  }
});














