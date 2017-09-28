Ext.define('APP.view.account.controller', {
  extend: 'APP.view.controller',
  alias: 'controller.account',
  // ===========================================================================================================退出系统
  onLogoutTap: function (button) {
    Mate.confirm('<h6>确定要退出系统？</h6>退出后，将清空当前登录用户的缓存信息并返回至登录界面...',
      function (button) {
        if (button === 'yes') {
          APP.app.getViewport().setMasked({xtype: 'loadmask', message: 'Exiting...'});
          // Mate.waiting('<h6>正在安全退出系统</h6>请等待指令执行完成...');
          Mate.ajax({
            url: Boot.appUrl('/outLogin.do'),
            success: function (data, opts) {
              APP.app.getViewport().unmask();
              window.location.reload();
            },
            failure: function (data, opts) {
              APP.app.getViewport().unmask();
              Mate.showTask(data.message, true);
            }
          });
        }
      }
    );
  },

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
  }
});
