Ext.define('APP.mate.mate', {
  alternateClassName: 'Mate',
  statics: {
    settings: {
      successMessage: '<h6>操作成功</h6>恭喜，指令已成功执行完毕...'
    },
    proxyType: function () {
      return window.location.host !== Boot.appDomain ? 'jsonp' : 'ajax';
      // return 'ajax';
    },
    ajax: function (opts) {
      // console.log(opts);
      // console.log(Mate.proxyType());
      switch (Mate.proxyType()) {
        case 'jsonp': {
          Ext.data.JsonP.request({
            method: opts.method || 'GET',
            url: opts.url,
            params: opts.params || false,
            // timeout:opts.timeout||180*1000,
            callback: function (success, response) {
              // console.log(success,response)
              var rlt = response;
              if (success) {
                if (rlt.success) {
                  return opts.success ? opts.success(rlt) : false;
                } else {
                  Mate.checkErrCode(rlt, opts.failure);
                  return opts.failure ? opts.failure(rlt) : false;
                }
              } else {
                var message = '<h6>应用程序错误</h6>错误代码：HTTP ERROR';
                Mate.showTask(message, true);
                return opts.failure ? opts.failure({message: message}) : false;
              }
            }
            // success:opts.success||false,
            // failure:opts.failure||false
          });
        }
          break;
        default: {
          Ext.Ajax.request({
            method: opts.method || 'POST',
            url: opts.url,
            params: opts.params || false,
            //timeout:opts.timeout||180*1000,
            callback: function (options, success, response) {
              //console.log(success,response)
              var rlt = Ext.decode(response.responseText);
              if (success) {
                if (rlt.success) {
                  return opts.success ? opts.success(rlt) : false;
                } else {
                  Mate.checkErrCode(rlt, opts.failure);
                  return opts.failure ? opts.failure(rlt) : false;
                }
              } else {
                Mate.showTask('<h6>应用程序错误</h6>错误代码：' + rlt.status + '　' + rlt.statusText, true)
                return opts.failure ? opts.failure(rlt) : false;
              }
            }
            //success:opts.success||false,
            //failure:opts.failure||false
          });
        }
          break;
      }
    },
    //============================================================================验证 MATE 数据
    checkErrCode: function (rlt, callback) {
      if (rlt.success) {
        return false
      }
      //console.log('checkErrCode',rlt)
      switch (rlt.errCode) {
        case '-9999': {
          Mate.showTask('<h6>系统繁忙</h6>请稍后重试...', true);
        }
          break;
        case '-1000': {
          //========================会话过期 重新登陆
          APP.app.reLogin(callback);
        }
          break;
        case '-1001': {
          //========================会话过期 重新登陆
          APP.app.reLogin(callback);
        }
          break;
        case '-1002': {
          Mate.showTask('<h6>账户权限不足</h6>请联络管理员核实...', true);
        }
          break;
        case '-2001': {
          Mate.showTask('<h6>验证未通过</h6>安全密码有误...', true);
        }
          ;
          break;


        case '-100001': {
          Mate.showTask('<h6>验证未通过</h6>账户名无效...', true);
        }
          ;
          break;
        case '-100002': {
          Mate.showTask('<h6>验证未通过</h6>账户登陆密码有误...', true);
        }
          ;
          break;
        case '-100003': {
          Mate.showTask('<h6>验证未通过</h6>账号已被锁定...', true);
        }
          ;
          break;
        case '-100004': {
          Mate.showTask('<h6>验证未通过</h6>账号已失效...', true);
        }
          ;
          break;
        case '-100005': {
          Mate.showTask('<h6>异地登陆</h6>当前账户未在常用地区登陆，请获取验证码后继续...', true);
        }
          ;
          break;
        case '-100006': {
          Mate.showTask('<h6>验证码错误</h6>注意：请以最后所获取到的验证码为准...', true);
        }
          ;
          break;
        case '-100007': {
          Mate.showTask('<h6>验证码错误</h6>注意：请以最后所获取到的验证码为准...', true);
        }
          ;
          break;
        case '-100011': {
          Mate.showTask('<h6>密码异常</h6>抱歉！您输入的密码错误次数过多，请联系管理员解除异常！', true);
        }
          ;
          break;


        case '-200001': {
          Mate.showTask('<h6>验证未通过</h6>原值与新值一致...', true);
        }
          ;
          break;
        case '-200002': {
          Mate.showTask('<h6>验证未通过</h6>原密码有误...', true);
        }
          ;
          break;
        case '-200003': {
          Mate.showTask('<h6>验证未通过</h6>2次输入的密码不一致...', true);
        }
          ;
          break;
        case '-200010': {
          Mate.showTask('<h6>执行资料更新对接 失败</h6>请联络管理员核实...', true);
        }
          ;
          break;
        default: {
          if (!Ext.touch) {
            var msg = rlt.message || '参数错误，未定义的错误代码...';
            Mate.showTask('<h6>错误提示</h6>' + msg, true);
          }
        }
          break;
      }
    },


    // ============================================================================================Local Storage 本地存储
    storage: 'OA:',
    setStorage: function (key, value) {
      window.localStorage.setItem(Mate.storage + key, value);
    },
    getStorage: function (key) {
      var data = window.localStorage.getItem(Mate.storage + key);
      // console.log(data);
      return data !== 'undefined' && data !== null ? data : '';
    },
    removeStorage: function (key) {
      window.localStorage.removeItem(Mate.storage + key);
    },
    clearStorage: function () {
      window.localStorage.clear();
    },
    setJsonStorage: function (key, value) {
      Mate.setStorage(key, JSON.stringify(value));
    },
    getJsonStorage: function (key) {
      var data = Mate.getStorage(key);
      // console.log(data);
      return data !== '' ? JSON.parse(data) : false;
    },


    // ====================================================================================================Storage Cache
    getCache: function (key, cache) {
      cache = cache ? cache : 'CACHE';
      // console.log(cache);
      var storage = Mate.getJsonStorage(cache);
      if (!storage) {
        return false;
      }
      // console.log(storage);
      if (key) {
        var arrKey = key.split('/');
        if (arrKey.length > 1) {
          Ext.Array.each(arrKey, function (item) {
            if (!storage) {
              return false;
            }
            storage = storage[item] || false;
          });
          // console.log(storage);
          return storage;
        } else {
          return storage[key];
        }
      } else {
        return storage;
      }
    },
    setCache: function (key, data, cache) {
      var cache = cache ? cache : 'CACHE',
        storage = Mate.getJsonStorage(cache) || {};
      if (Ext.isObject(data)) {
        var tmp = storage[key] || {};
        storage[key] = Ext.apply(tmp, data);
      } else {
        storage[key] = data;
      }
      Mate.setJsonStorage(cache, storage);
    },
    updateCache: function (key, data, cache) {
      cache = cache ? cache : 'CACHE';
      var storage = Mate.getJsonStorage(cache) || {};
      if (Ext.isObject(data)) {
        var tmp = storage[key] || {};
        // console.log(tmp);
        storage[key] = Ext.apply(tmp, data);
        // console.log(storage[key]);
      } else {
        storage[key] = data;
      }
      Mate.setJsonStorage(cache, storage);
    },
    removeCache: function (key, cache) {
      var cache = cache ? cache : 'CACHE',
        storage = Mate.getJsonStorage(cache) || {};
      delete storage[key];
      Mate.setJsonStorage(cache, storage);
    },
    clearCache: function (cache) {
      var cache = cache ? cache : 'CACHE';
      Mate.removeStorage(cache);
    },


    //======================================================================================================查找 管理员
    findManager: function (teamid) {
      var team = Ext.Array.findBy(APP.app.getAppData('company/team'), function (item, index) {
        return item.id == teamid
      });
      return team || {};
    },


    getWinId: function (me, key) {
      return 'WIN-' + me._id + '-' + key;
    },
    openWin: function (url) {
      window.open(url);
      return false;
    },


    // ====================================================================================================各类提醒 START
    showTask: function (message, warning, callback, times) {
      var cls = warning ? 'mt-warning' : 'mt-notice';
      // console.log(Ext.touch); //true
      if (Ext.touch) {
        Ext.toast({
          //userCls:'x-ui-task',
          message: '<div class="x-ui-task"><span class="f-mt ' + cls + '"></span><div>' + message + '</div></div>',
          //showAnimation:{type:'popIn',duration:8000,easing:'ease-out'},
          //hideAnimation:{type:'popOut',duration:250,easing:'ease-out'},
          timeout: 3000
        });
      } else {
        function createBox(s) {
          Ext.get('x-ui-task').update('');
          return '<div class="x-ui-task"><span class="f-mt ' + cls + '"></span><div>' + s + '</div></div>'
        }
        if (!Ext.get('x-ui-task')) {
          var msgCt = Ext.DomHelper.insertFirst(document.body, {id: 'x-ui-task'}, true)
        }
        var el = Ext.DomHelper.append(msgCt, createBox(message), true);
        el.animate({duration: 300, to: {y: 30}});
        window.setTimeout(function () {
          el.animate({
            duration: 300,
            to: {y: -100, opacity: 0},
            remove: true,
            callback: callback ? callback : false
          });
        }, times ? times : 3000);
      }
    },
    toast: function (message) {
      Ext.toast({
        minWidth: 400,
        html: message,
        title: '消息提示',
        align: 't'
      });
    },
    alert: function (message, fn, scope) {
      if (message.indexOf('</h6>') < 0) {
        message = '<h6>温馨提示</h6>' + message;
      }
      var msgBox = Ext.Msg.show({
        title: '温馨提示',
        message: message,
        fn: fn,
        scope: scope,
        iconCls: 'f-mt mt-alert-title x-ui-text-green',
        buttons: Ext.MessageBox.OK
      });
      if (!Ext.touch) {
        msgBox.setPosition(false, 0).animate({to: {y: 200}});
      }
    },
    info: function (message, fn, scope) {
      if (message.indexOf('</h6>') < 0) {
        message = '<h6>温馨提示</h6>' + message;
      }
      var msgBox = Ext.Msg.show({
        title: '温馨提示',
        message: message,
        fn: fn,
        scope: scope,
        iconCls: 'f-mt mt-alert-title x-ui-text-green',
        buttons: Ext.MessageBox.OK
      });
      if (!Ext.touch) {
        msgBox.setPosition(false, 0).animate({to: {y: 200}});
      }
    },
    warning: function (message, fn, scope) {
      if (message.indexOf('</h6>') < 0) {
        message = '<h6>警告</h6>' + message;
      }
      var msgBox = Ext.Msg.show({
        title: '警告',
        message: message,
        fn: fn,
        scope: scope,
        icon: 'f-mt mt-warning-icon',
        iconCls: 'f-mt mt-warning-title',
        buttons: Ext.MessageBox.OK
      });
      if (!Ext.touch) {
        msgBox.setPosition(false, 0).animate({to: {y: 200}});
      }
    },
    error: function (message, fn, scope) {
      if (message.indexOf('</h6>') < 0) {
        message = '<h6>错误提示</h6>' + message;
      }
      var msgBox = Ext.Msg.show({
        title: '错误提示',
        message: message,
        fn: fn,
        scope: scope,
        icon: 'f-mt mt-error-icon x-ui-text-red',
        iconCls: 'f-mt mt-error-title x-ui-text-red',
        buttons: Ext.MessageBox.OK
      });
      if (!Ext.touch) {
        msgBox.setPosition(false, 0).animate({to: {y: 200}});
      }
    },
    confirm: function (message, fn, scope) {
      if (message.indexOf('</h6>') < 0) {
        message = '<h6>信息确认</h6>' + message;
      }
      var msgBox = Ext.Msg.show({
        title: '信息确认',
        message: message,
        fn: fn,
        scope: scope,
        icon: 'f-mt mt-confirm-icon',
        iconCls: 'f-mt mt-question-title x-ui-text-blue',
        buttons: Ext.MessageBox.YESNO
      });
      if (!Ext.touch) {
        msgBox.setPosition(false, 0).animate({to: {y: 200}});
      }
    },
    question: function (message, fn, scope, multiline, value) {
      //if(message.indexOf('</h6>')<0){message='<h6>信息确认</h6>'+message;}
      var msgBox = Ext.Msg.show({
        title: '信息确认',
        message: message,
        prompt: true,
        callback: fn,
        scope: scope,
        icon: 'f-mt mt-question-icon',
        iconCls: 'f-mt mt-question-title',
        buttons: Ext.MessageBox.OKCANCEL
      });
      if (!Ext.touch) {
        msgBox.setPosition(false, 0).animate({to: {y: 200}});
      }
    },
    waiting: function (message, config) {
      Ext.Msg.show({
        title: '等待',
        message: message,
        minWidth: 480,
        closable: true,
        wait: true,
        modal: true,
        iconCls: 'f-mt mt-waiting-title',
        waitConfig: {text: 'Processing...', interval: 150}
      });
    }
    //========================================================================================================================================各类提醒 END


  }

});
