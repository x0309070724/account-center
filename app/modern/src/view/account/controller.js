Ext.define('APP.view.account.controller', {
  extend: 'APP.view.controller',
  alias: 'controller.account',
  // // ===========================================================================================================退出系统
  // onLogoutTap: function (button) {
  //   Mate.confirm('<h6>确定要退出系统？</h6>退出后，将清空当前登录用户的缓存信息并返回至登录界面...',
  //     function (button) {
  //       if (button === 'yes') {
  //         // A configuration to allow you to mask this container. You can optionally pass an object block with and xtype
  //         // of loadmask, and an optional message value to display
  //         APP.app.getViewport().setMasked({xtype: 'loadmask', message: 'Exiting...'});
  //         // Mate.waiting('<h6>正在安全退出系统</h6>请等待指令执行完成...');
  //         Mate.ajax({
  //           url: Boot.appUrl('/outLogin.do'),
  //           success: function (data, opts) {
  //             APP.app.getViewport().unmask();
  //             // console.log(window.location);
  //             // 重新加载文档
  //             window.location.reload();
  //           },
  //           failure: function (data, opts) {
  //             APP.app.getViewport().unmask();
  //             Mate.showTask(data.message, true);
  //           }
  //         });
  //       }
  //     }
  //   );
  // },

  onSubmitAccountUpdate: function (button) {
    Mate.info('暂不开放.', true);
    return false;
    var navigation = button.up('navigationview'),
      form = button.up('formpanel'),
      field = form.down('field[name=field]').getValue(),
      fieldName = form.down('field[name=fieldName]').getValue(),
      oldValue = form.down('field[name=oldValue]').getValue(),
      newValue = form.down('field[name=newValue]').getValue();
    console.log(111);
    if (newValue == '') {
      Mate.showTask('请填写输入项', true);
      return false;
    }
    //===================================表单验证
    switch (field) {
      case 'mt4_leverage': {
        var newValue = form.down('field[name=newValue]').getGroupValue();
      }
        ;
        break;
      case 'mobile': {
        if (!Mate.regEx.mobile.test(newValue)) {
          Mate.showTask(Mate.regEx.mobileText, true);
          return false;
        }
        if (newValue == Mate.getCache('account').mobile) {
          Mate.showTask('待更新的手机号与原手机一致', true);
          return false;
        }
      }
        ;
        break;
      case 'email': {
        if (!Mate.regEx.email.test(newValue)) {
          Mate.showTask(Mate.regEx.emailText, true);
          return false;
        }
        if (newValue == Mate.getCache('account').email) {
          Mate.showTask('待更新的Email与原 Email一致', true);
          return false;
        }
      }
        ;
        break;
      case 'qq': {
        if (!Mate.regEx.isInt.test(newValue)) {
          Mate.showTask('QQ号格式错误，应为数字输入', true);
          return false;
        }
        if (newValue == Mate.getCache('account').qq) {
          Mate.showTask('待更新的QQ号与原QQ号一致', true);
          return false;
        }
      }
        ;
        break;
      case 'weixin': {
        if (newValue == Mate.getCache('account').wx_openid) {
          Mate.showTask('待更新的微信号与原微信号一致', true);
          return false;
        }
      }
        ;
        break;
      case 'password':
      case 'password_investor': {
        var newValue2 = form.down('[name=newValue2]').getValue();
        if (newValue != newValue2) {
          Mate.showTask('两次所输入的密码不一致', true);
          return false;
        }
        if (!Mate.regEx.password.test(newValue)) {
          Mate.showTask(Mate.regEx.passwordText, true);
          return false;
        }
      }
        ;
        break;
      case 'password_safe': {
        var newValue2 = form.down('[name=newValue2]').getValue();
        if (!Mate.regEx.isInt.test(newValue) || newValue.length != 6) {
          Mate.showTask('安全密码格式应为 6 位纯数字', true);
          return false;
        }
        if (newValue != newValue2) {
          Mate.showTask('两次所输入的密码不一致', true);
          return false;
        }
      }
        ;
        break;
    }

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
  // ====================================================================================================账户申请记录详情
  onApplyRecordItemtap: function (list, idx, el, record) {
    var navigation = list.up('navigationview');
    var view = Ext.create({
      xtype: 'sdAccountDetailApply',
      title: '申请详情信息==> ' + record.data.namecn
    });
    navigation.push(view);
    // console.log(record);
    view.setRecord(record);
  },

  /*// ===========================================================================================================账户详情
  onRecordItemtap: function (list, idx, el, record) {
    var navigation = list.up('navigationview');
    // console.log(record);
    var login = record.data.objects ? record.data.objects : record.data.login;
    login = parseInt(login) || 0;
    var view = Ext.create({
      xtype: 'sdAccountDetailIndex',
      title: login.toString(),
      items: [
        {xtype: 'sdAccountDetailInfo', title: '档案', iconCls: 'f-mt mt-account-strate', parameter: {login: login}},
        {xtype: 'sdAccountDetailFunds', title: '出入金', iconCls: 'f-mt mt-trading', parameter: {login: login}},
        {xtype: 'sdAccountDetailPositions', title: '持仓订单', iconCls: 'f-mt mt-premium-chart', parameter: {login: login}},
        {xtype: 'sdAccountDetailOrder', title: '历史订单', iconCls: 'f-mt mt-check-order', parameter: {login: login}}
      ]
    });
    navigation.push(view);
  },*/

  // ===========================================================================================================账户详情
  onRecordItemtap: function (list, idx, el, record) {
    Mate.alert('此功能正在开发中……');
    return false;
    // var navigation = list.up('navigationview');
    // // console.log(record);
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
  },

  // =============================================================================================================详情页
  onDetailInfoInitialize: function (view) {
    view.setMasked({xtype: 'loadmask'});
    // var parameter = view.parameter;
    // console.log(parameter);
    var account = APP.app.getAppData('account');
    account.funds_total = account.funds_deposit + account.funds_withdrawal + account.funds_credit;
    account.trade_total = account.trade_profit + account.trade_storage + account.trade_commission_agent;
    view.setData(account);
    view.unmask();
    // Mate.ajax({
    //   // url:Boot.appUrl('/sd/account/checkMt4Login.do'),
    //   // url: Boot.appUrl('/sd/account/manager/getRecord.do'),
    //   url: Boot.appUrl('/mate.do'),
    //   params: {login: parameter.login},
    //   success: function (json, opts) {
    //     console.log(json);
    //     PushService.ready(function () {
    //       console.log(111);
    //       var buffers = PushService.getBuffer(),
    //         mt4Data = buffers.getUser(parameter.login);
    //       var data = json.plant[0];
    //       data.mt4Data = mt4Data;
    //       //console.log(parameter.login,data)
    //       view.setData(data);
    //       view.unmask();
    //     });
    //     // view.setData(json);
    //     // view.unmask();
    //   },
    //   failure: function (json, opts) {
    //     view.unmask();
    //     return false;
    //   }
    // });
  },
  // =============================================================================================================出入金
  // onDetailFundsInitialize: function (list) {
  //   var store = list.getStore(),
  //     parameter = list.parameter || {};
  //   Ext.apply(store.getProxy().getExtraParams(), parameter);
  //   store.loadPage(1);
  // },
  onDetailPositionsInitialize: function (list) {
    var store = list.getStore(),
      parameter = list.parameter || {};
    PushService.ready(function () {
      var buffers = PushService.getBuffer(),
        data = buffers.getTradesByLogin(parameter.login);
      // console.log(data);
      // console.log(buffers);
      store.setData(data);
      // list.unmask();
    });
  }
});
