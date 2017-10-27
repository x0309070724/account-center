﻿Ext.define('APP.view.depowith.controller', {
  extend: 'APP.view.controller',
  alias: 'controller.depowith',

  onSubmitAccountUpdate: function (button) {
    Mate.info('暂不开放.', true);
    return false;
    var navigation = button.up('navigationview'),
      form = button.up('formpanel'),
      field = form.down('field[name=field]').getValue(),
      fieldName = form.down('field[name=fieldName]').getValue(),
      oldValue = form.down('field[name=oldValue]').getValue(),
      newValue = form.down('field[name=newValue]').getValue();
    if (newValue === '') {
      Mate.showTask('请填写输入项', true);
      return false;
    }
    // ===================================表单验证
    // switch (field) {
    //   case 'mt4_leverage': {
    //     var newValue = form.down('field[name=newValue]').getGroupValue();
    //   }
    //     ;
    //     break;
    //   case 'mobile': {
    //     if (!Mate.regEx.mobile.test(newValue)) {
    //       Mate.showTask(Mate.regEx.mobileText, true);
    //       return false;
    //     }
    //     if (newValue == Mate.getCache('account').mobile) {
    //       Mate.showTask('待更新的手机号与原手机一致', true);
    //       return false;
    //     }
    //   }
    //     ;
    //     break;
    //   case 'email': {
    //     if (!Mate.regEx.email.test(newValue)) {
    //       Mate.showTask(Mate.regEx.emailText, true);
    //       return false;
    //     }
    //     if (newValue == Mate.getCache('account').email) {
    //       Mate.showTask('待更新的Email与原 Email一致', true);
    //       return false;
    //     }
    //   }
    //     ;
    //     break;
    //   case 'qq': {
    //     if (!Mate.regEx.isInt.test(newValue)) {
    //       Mate.showTask('QQ号格式错误，应为数字输入', true);
    //       return false;
    //     }
    //     if (newValue == Mate.getCache('account').qq) {
    //       Mate.showTask('待更新的QQ号与原QQ号一致', true);
    //       return false;
    //     }
    //   }
    //     ;
    //     break;
    //   case 'weixin': {
    //     if (newValue == Mate.getCache('account').wx_openid) {
    //       Mate.showTask('待更新的微信号与原微信号一致', true);
    //       return false;
    //     }
    //   }
    //     ;
    //     break;
    //   case 'password':
    //   case 'password_investor': {
    //     var newValue2 = form.down('[name=newValue2]').getValue();
    //     if (newValue != newValue2) {
    //       Mate.showTask('两次所输入的密码不一致', true);
    //       return false;
    //     }
    //     if (!Mate.regEx.password.test(newValue)) {
    //       Mate.showTask(Mate.regEx.passwordText, true);
    //       return false;
    //     }
    //   }
    //     ;
    //     break;
    //   case 'password_safe': {
    //     var newValue2 = form.down('[name=newValue2]').getValue();
    //     if (!Mate.regEx.isInt.test(newValue) || newValue.length != 6) {
    //       Mate.showTask('安全密码格式应为 6 位纯数字', true);
    //       return false;
    //     }
    //     if (newValue != newValue2) {
    //       Mate.showTask('两次所输入的密码不一致', true);
    //       return false;
    //     }
    //   }
    //     ;
    //     break;
    // }

    doFormSubmit();

    function doFormSubmit() {
      form.setMasked({xtype: 'loadmask', message: '处理中...'});
      Mate.ajax({
        url: Boot.appUrl('/account/updateAccount.do'),
        params: form.getValues(),
        success: function (result) {
          //===================================结果返回 处理
          var newData = {};
          newData[field] = result.newValue;
          Mate.updateCache('account', newData);

          //===================================消息推送
          form.getMasked().setCls('x-sending').setMessage('消息推送中');
          window.setTimeout(function () {
            form.getMasked().setCls('x-success').setMessage('操作成功');
            //===================================返回主界面
            window.setTimeout(function () {
              //Ext.getStore('navigation').updateValue(5002);
              form.unmask();
              //form.destroy();
              navigation.pop(1);
              //console.log(navigation.getViewModel().getData().account.qq)
              //console.log(form.getViewModel().getData().account.qq)
            }, 1500)
          }, 1500);
        },
        failure: function (result) {
          form.unmask();
          Mate.showTask(result.message, true);
        }
      });
    }
  },

  // ==========================================================================================================item tap
  onRecordItemtap: function (list, idx, el, record) {
    // Mate.alert('此功能正在开发中……');
    // return false;
    var navigation = list.up('navigationview');
    // console.log(record);
    var token = Ext.util.History.getToken();
    token = token.substring(0, token.length - 2);
    var store = Ext.getStore('nav'),
      node = store.findNode('id', token);

    // console.log(node.data.children[1].text);
    // console.log(record.data.namecn);
    Ext.util.History.add(token);
    navigation.pop(1);
    node.data.children[1].text = record.data.namecn;
    // store.setData(node);
    // store.load();

    // var login = record.data.objects ? record.data.objects : record.data.login;
    // login = parseInt(login) || 0;
    // var view = Ext.create({
    //   xtype: 'sdAccountDetailIndex',
    //   title: login.toString(),
    //   items: [
    //     {xtype: 'sdAccountDetailInfo', title: '档案', iconCls: 'f-mt mt-account-strate', parameter: {login: login}},
    //     {xtype: 'sdAccountDetailFunds', title: '出入金', iconCls: 'f-mt mt-trading', parameter: {login: login}},
    //     {xtype: 'sdAccountDetailPositions', title: '持仓订单', iconCls: 'f-mt mt-premium-chart', parameter: {login: login}},
    //     {xtype: 'sdAccountDetailOrder', title: '历史订单', iconCls: 'f-mt mt-check-order', parameter: {login: login}}
    //   ]
    // });
    // navigation.push(view);

    // Ext.util.History.add('main')

  },

  onNavigationPop: function (button) {
    var token = Ext.util.History.getToken();
    token = token.substring(0, token.length - 2);
    Ext.util.History.add(token);
    var navigation = button.up('navigationview');
    navigation.pop(1);
  },

  onIndexActivate: function (view) {
    var me = this,
      carousel = view.down('carousel'),
      // Retrieves all descendant components which match the passed selector.
      boxs = carousel.query('box');
    // direction = 'next';
    console.log(444);
    PushService.ready(function () {
      var buffers = PushService.getBuffer();
      if (this.task) {
        Ext.TaskManager.destroy(this.task)
      }
      // console.log(buffers.getOnline());
      // console.log(buffers.getOnlines());
      // console.log(buffers.getOnlinesRef());
      // console.log(buffers.getQuotes());
      // console.log(buffers.getSummaryByAgentLogin());
      // console.log(buffers.getSummaryRef());
      // console.log(buffers.getSummaryWithAgent());
      // console.log(buffers.getSummaryWithSymbol());
      // console.log(buffers.getSummaryWithUser());
      // console.log(buffers.getSymbol());
      // console.log(buffers.getSymbols());
      // console.log(buffers.getSymbolsRef());
      // console.log(buffers.getTradeByOrder());
      // console.log(buffers.getTradesByLogin());
      // console.log(buffers.getUsers());
      // this.task = Ext.TaskManager.start({
      //   run: function () {
      //     if (view.isHidden()) {
      //       Ext.TaskManager.destroy(me.task);
      //       return false;
      //     }
      //     me.getIndexData(function (data) {
      //       var day = '今日业绩,' + data.day,
      //         week = '本周业绩,' + data.week,
      //         month = '本月业绩,' + data.month;
      //       // console.log(day.split(','));
      //       boxs[0].setData(day.split(','));
      //       boxs[1].setData(week.split(','));
      //       boxs[2].setData(month.split(','));
      //     });
      //   },
      //   interval: 1000 * 60 * 3
      // });
    });
  },

  getIndexData: function (callback) {
    Mate.ajax({
      url: Boot.appUrl('/super/getTrend.do'),
      params: {
        sp: 'SP_ANALYSIS_RESULTS',
        date: Ext.util.Format.utcDate(new Date(), 'Y-m-d')
      },
      success: function (json, opts) {
        var data = json.plant[0];
        return callback(data);
      }
    });
  }
});
