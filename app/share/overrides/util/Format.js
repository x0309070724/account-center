Ext.define('Override.util.Format', {
  override: 'Ext.util.Format',
  date: function (value, format) {
    if (!value) {
      return '';
    }
    if (!Ext.isDate(value)) {
      // console.log(format);// Y-m-d H:i A
      value = new Date(value);
    }
    return Ext.Date.dateFormat(value, format || Ext.Date.defaultFormat);
  },
  stringify: function (json) {
    return JSON.stringify(json);
  },
  oss: function (src) {
    return src ? '//' + Boot.ossDomain + src : '';
  },

  image: function (value) {
    if (!value || value == '') {
      return '/resources/images/user.png';
    } else {
      return value;
    }


  },
  nullToNA: function (value) {
    if (!value || value == null || value == '') {
      value = '<s>N/A</s>';
    }
    return value;
  },
  // ===============================================================================================================金额
  money: function (value, digits) {
    value = Number(value) || 0;
    return this.number(value, '0,0.00')
  },
  usMoney: function (value, digits) {
    value = Number(value) || 0;
    digits = digits ? digits : 2;
    var sign = '$';
    return this.currency(value, sign, digits);
  },
  cnyMoney: function (value, digits) {
    var value = Number(value) || 0,
      sign = '¥',
      digits = digits ? digits : 2;
    return this.currency(value, sign, digits)
  },
  moneyK: function (value, digits) {
    value = Number(value) * 0.001;
    return this.number(value, '0,0 K')
  },
  // ===============================================================================================================整数
  int: function (value) {
    return Ext.isNumeric(value) ? parseInt(value) : 0
  },
  integer: function (value) {
    return Ext.isNumeric(value) ? parseInt(value) : 0
  },
  stringInt: function (value) {
    var value = Number(value) || 0;
    return Ext.util.Format.number(value, '0,0')
  },
  stringInteger: function (value) {
    value = Number(value) || 0;
    return Ext.util.Format.number(value, '0,0')
  },
  // ===============================================================================================================小数
  numeral: function (value) {
    return Ext.isNumeric(value) ? parseFloat(value) : 0
  },
  stringNumber: function (value, digits) {
    var value = parseFloat(value) || 0,
      digits = digits || 2,
      tmp = Ext.String.format('{0}', '#,' + 1 / Math.pow(10, digits));
    return this.number(value, tmp);
  },
  stringNumeral: function (value, digits) {
    value = parseFloat(value) || 0;
    digits = digits || 2;
    // pow() 方法可返回 x 的 y 次幂的值。
    // 如果结果是虚数或负数，则该方法将返回 NaN。如果由于指数过大而引起浮点溢出，则该方法将返回 Infinity。
    var tmp = Ext.String.format('{0}', '#,' + 1 / Math.pow(10, digits));
    // console.log(tmp);
    // console.log(this.number(value,tmp));
    // Formats the passed number according to the passed format string.
    return this.number(value, tmp);
  },
  array: function (value) {
    var arr = value.split(',');
    return arr;
  },
  //===================================================================================================耗时
  timeConsuming: function (starttime, endtime) {
    var startTime = new Date(starttime).getTime(),
      endTime = new Date(endtime).getTime(),
      s = (endTime - startTime) / 1000,
      m = parseInt(s / 60),
      h = parseInt(m / 60),
      d = parseInt(h / 24),
      text = '即时';
    s = s < 0 ? 0 : s;
    if (s) {
      text = s + ' S';
      text = m > 0 ? m + ' M' : text;
      text = h > 0 ? h + ' H' : text;
      text = d > 0 ? d + ' D' : text;
    }
    return text;
  },
  utc: function (value) {
    var date = Ext.Date.add(new Date(value), Ext.Date.HOUR, -7);
    return date;
  },
  utcDate: function (value, format) {
    var date = this.utc(value);
    return Ext.Date.format(date, format);
  },
  utcToDate: function (value, format) {
    var date = new Date(value);
    return Ext.Date.format(date, format);
  },
  //===================================================================================================优先输出
  stringPriority: function (v1, v2) {
    switch (APP.app.getAppData('crm/basis/priority')) {
      case 'cn': {
        var v = v1 != '' ? v1 : v2;
      }
        ;
        break;
      default: {
        var v = v2 != '' ? v2 : v1;
      }
        ;
        break;
    }
    return v;
  },
  //===================================================================================================合并输出
  stringMerge: function (v1, v2, x) {
    var v1 = v1 || '',
      v2 = v2 || '',
      str = '';
    if (v1 != '') {
      str += v1;
    }
    if (v1 != '' && v2 != '') {
      str += x ? x : ' ';
    }
    if (v2 != '') {
      str += v2;
    }
    return str;
  },
  //===================================================================================================整型解析为IP地址
  intToIp: function (num) {
    if (Ext.isNumeric(num)) {
      var str;
      var tt = new Array();
      tt[0] = (num >>> 24) >>> 0;
      tt[1] = ((num << 8) >>> 24) >>> 0;
      tt[2] = (num << 16) >>> 24;
      tt[3] = (num << 24) >>> 24;
      str = tt[3].toString() + '.' + tt[2].toString() + '.' + tt[1].toString() + '.' + tt[0].toString();
      return str;
    } else {
      return num;
    }
  },
  timeFilter: function (secdons, cn) {
    var second = secdons || 0,
      minute = 0,
      hour = 0;
    if (second > 60) {
      minute = parseInt(second / 60);
      second = parseInt(second % 60);
      if (minute > 60) {
        hour = parseInt(minute / 60);
        minute = parseInt(minute % 60);
      }
    }
    if (cn) {
      var rlt = '';
      rlt += parseInt(hour) > 0 ? hour + '小时 ' : '';
      rlt += parseInt(minute) > 0 ? minute + '分钟 ' : '';
      rlt += parseInt(second) > 0 ? second + '秒' : '';
      return rlt;
    } else {
      second = Ext.util.Format.leftPad(parseInt(second), 2, '0');
      minute = Ext.util.Format.leftPad(parseInt(minute), 2, '0');
      hour = Ext.util.Format.leftPad(parseInt(hour), 2, '0');
      return hour + ':' + minute + ':' + second;
    }

  },

  //===========================过滤数组中的重复元素
  uniqueArray: function (data) {
    data = data || [];
    var a = {};
    for (var i = 0; i < data.length; i++) {
      var v = data[i];
      if (typeof(a[v]) == 'undefined') {
        a[v] = 1;
      }
    }
    ;
    data.length = 0;
    for (var i in a) {
      data[data.length] = i;
    }
    return data;
  },

  moneyColor: function (v) {
    if (v > 0) {
      return 'x-ui-text-green'
    } else if (v < 0) {
      return 'x-ui-text-red'
    } else {
      return 'x-ui-text-black'
    }
  },

  resizeWxImg: function (url, a, b) {
    return url.replace(a, b);
  },
  ledgerDay: function (value) {
    value = value.toString();
    switch (value.length) {
      case 10: {
        var weekDays = '日一二三四五六';
        return Ext.Date.format(new Date(value), 'm-d') + '<r>周' + weekDays.charAt(new Date(value).getDay()) + '</r>'
      }
        break;
      case 7: {
        return value;
      }
        break;
      default: {
        return value;
      }
        break;
    }
  },
  pinyin: function (value, type) {
    if (!value) {
      return;
    }
    type = type ? type : '11';
    var nameX = Dic.toPinyin(value.substr(0, 1)),
      nameM = Dic.toPinyin(value.substr(1, value.length));
    // console.log(nameX);
    // console.log(nameX.substr(1, nameX.length).replace(' ', '')+'ha');
    // console.log(nameX.substr(1, nameX.length)+'ha');
    var X, M, XM, newXM, arrXM;
    switch (type) {
      case '11': {
        X = nameX.substr(0, 1).toUpperCase() + nameX.substr(1, nameX.length).replace(' ', '');
        M = nameM.substr(0, 1).toUpperCase() + nameM.substr(1, nameM.length).replace(' ', '');
        return X + ' ' + M;
      }
        break;
      case '12': {
        X = nameX.substr(0, 1).toUpperCase() + nameX.substr(1, nameX.length);
        M = nameM.substr(0, 1).toUpperCase() + nameM.substr(1, nameM.length);
        XM = X + ' ' + M;
        arrXM = XM.split(' ');
        newXM = '';
        for (var i = 0; i < arrXM.length; i++) {
          newXM += arrXM[i].substr(0, 1).toUpperCase() + arrXM[i].substr(1, arrXM[i].length) + ' ';
        }
        return newXM;
      }
        break;
      case '13': {
        X = nameX.toUpperCase().replace(' ', '');
        M = nameM.toUpperCase().replace(' ', '');
        return X + ' ' + M;
      }
        break;
      case '14': {
        X = nameX.toUpperCase();
        M = nameM.toUpperCase();
        return X + ' ' + M;
      }
        break;
      case '21': {
        X = nameX.substr(0, 1).toUpperCase() + nameX.substr(1, nameX.length).replace(' ', '');
        M = nameM.substr(0, 1).toUpperCase() + nameM.substr(1, nameM.length).replace(' ', '');
        return M + ' ' + X;
      }
        break;
      case '22': {
        X = nameX.substr(0, 1).toUpperCase() + nameX.substr(1, nameX.length);
        M = nameM.substr(0, 1).toUpperCase() + nameM.substr(1, nameM.length);
        XM = M + ' ' + X;
        arrXM = XM.split(' ');
        newXM = '';
        for (i = 0; i < arrXM.length; i++) {
          newXM += arrXM[i].substr(0, 1).toUpperCase() + arrXM[i].substr(1, arrXM[i].length) + ' ';
        }
        return newXM;
      }
        break;
      case '23': {
        X = nameX.toUpperCase().replace(' ', '');
        M = nameM.toUpperCase().replace(' ', '');
        return M + ' ' + X;
      }
        break;
      case '24': {
        X = nameX.toUpperCase();
        M = nameM.toUpperCase();
        return M + ' ' + X;
      }
        break;
      case '31': {
        X = nameX.toUpperCase();
        M = nameM.substr(0, 1).toUpperCase() + nameM.substr(1, nameM.length).replace(' ', '');
        return X + ' ' + M;
      }
        break;
      default: {
        X = nameX.substr(0, 1).toUpperCase() + nameX.substr(1, nameX.length).replace(' ', '');
        M = nameM.substr(0, 1).toUpperCase() + nameM.substr(1, nameM.length).replace(' ', '');
        return X + ' ' + M;
      }
        break;
    }
  },
  strAudit: function (value, isIcon) {
    var icon = '',
      text = '';
    switch (parseInt(value)) {
      case 1: {
        icon = '<span class="x-ui-text-green f-mt mt-solid-state-yes"></span>';
        text = '<span class="x-ui-label x-ui-bg-green"><icon class="f-mt mt-hollow-state-yes"></icon> 已通过</span>';
      }
        break;
      case -1: {
        icon = '<span class="x-ui-text-red f-mt mt-solid-state-no"></span>';
        text = '<span class="x-ui-label x-ui-bg-red"><icon class="f-mt mt-hollow-state-no"></icon> 已拒绝</span>';
      }
        break;
      default: {
        icon = '<span class="x-ui-text-blue f-mt mt-solid-state-wait"></span>';
        text = '<span class="x-ui-label x-ui-bg-blue"><icon class="f-mt mt-hollow-state-wait"></icon> 处理中</span>';
      }
        break;
    }
    return isIcon ? icon : text;
  },
  strTrackStatus: function (value) {
    switch (parseInt(value)) {
      case -100: {
        return '<span class="x-ui-text-blue"">无效</span>'
      }
        break;
      case -1: {
        return '<span class="x-ui-text-red">无意向</span>'
      }
        break;
      case 1: {
        return '<span class="x-ui-text-green">待跟进</span>'
      }
        break;
      default: {
        return ''
      }
        break;
    }
  },


  datepartName: function (value) {
    switch (value) {
      //iOS|Android|WebOS|BlackBerry|MacOS|Windows|Linux|Other
      case 'day': {
        return '日期';
      }
        break;
      case 'week': {
        return '周';
      }
        break;
      case 'month': {
        return '月份';
      }
        break;
      case 'year': {
        return '年';
      }
        break;
      default: {
        return '时间';
      }
        break;
    }
  },

  objectsName: function (value) {
    switch (value) {
      //iOS|Android|WebOS|BlackBerry|MacOS|Windows|Linux|Other
      case 'staff': {
        return '员工';
      }
        break;
      case 't1': {
        return '团队';
      }
        break;
      case 't2': {
        return '团队';
      }
        break;
      case 'team': {
        return '团队';
      }
        break;
      case 'branch': {
        return '网点';
      }
        break;
      case 'no': {
        return '号码';
      }
        break;
      default: {
        return '对象';
      }
        break;
    }
  },

  teamIcon: function (value) {
    var id = value + '';
    if (id.substr(3, 9) == '000000000') {
      return 'f-mt mt-department x-ui-text-red'
    } else if (id.substr(6, 6) == '000000') {
      return 'f-mt mt-branch x-ui-text-orange'
    } else if (id.substr(9, 3) == '000') {
      return 'f-mt mt-team x-ui-text-green'
    }
  },

  qqFace: function (uin) {
    uin = this.integer(uin);
    return '//q.qlogo.cn/headimg_dl?bs=qq&dst_uin=' + uin + '&spec=100';
  },
  qqHref: function (uin) {
    // console.log(uin);//null
    uin = this.integer(uin);
    // console.log(uin);//0
    var href = '';
    switch (Ext.os.name) {
      // iOS|Android|WebOS|BlackBerry|MacOS|Windows|Linux|Other
      case 'iOS': {
        href = 'mqq://im/chat?chat_type=wpa&uin=' + uin + '&version=1&src_type=web';
      }
        break;
      case 'Android': {
        href = 'mqqwpa://im/chat?chat_type=wpa&uin=' + uin;
      }
        break;
      default: {
        href = 'tencent://message/?uin=' + uin + '&site=&menu=yes';
      }
        break;
    }
    return uin ? href : '#';
  },
  qqLink: function (uin) {
    uin = this.integer(uin);
    return Ext.String.format(
      '<a href="{1}" data-qtip="QQ：{0}"><img src="{2}"/></a>',
      uin ? uin : 'N/A',
      this.qqHref(uin),
      this.qqFace(uin)
    );
  },

  wechatFace: function (src, w) {
    //有0、46、64、96、132数值可选，0代表640*640正方形头像
    var src = src != '' ? src : '/resources/images/userface.png',
      w = w ? w : 16,
      src = src.replace('/0', '/46'),
      userIcon = '<img src="' + src + '" width="' + w + '"/>';
    return userIcon;
  },

  qunFace: function (uin) {
    return '//p.qlogo.cn/gh/' + uin + '/' + uin + '/';
  },
  qunHref: function (uin) {
    return 'mqqapi://card/show_pslcard?src_type=internal&version=1&uin=' + uin + '&card_type=group&source=qrcode';
  },


  spaceMobile: function (value) {
    if (value) {
      return value.substr(0, 3) + ' ' + value.substr(3, 4) + ' ' + value.substr(value.length - 4, 4)
    }
  },
  safeMobile: function (value) {
    if (value) {
      return value.substr(0, 3) + '****' + value.substr(value.length - 4, 4)
    }
  },
  spaceBankCard: function (value) {
    if (value) {
      value = value.replace(/(\d{4})/g, '$1 ').replace(/\s*$/, '');
      return value
    }
  },
  safeBankCard: function (value) {
    if (value) {
      return value.substr(0, 4) + ' **** **** ' + value.substr(value.length - 4, 4)
    }
  },
  // =========================================================================================================TRADE CMD
  tradeCmd: function (cmd) {
    var cmdText = '';
    switch (cmd) {
      case 0: {
        cmdText = 'BUY';
      }
        break;
      case 1: {
        cmdText = 'SELL';
      }
        break;
      case 2: {
        cmdText = 'BUY LIMIT';
      }
        break;
      case 3: {
        cmdText = 'SELL LIMIT';
      }
        break;
      case 4: {
        cmdText = 'BUY STOP';
      }
        break;
      case 5: {
        cmdText = 'SELL STOP';
      }
        break;
      case 6: {
        cmdText = 'BALANCE';
      }
        break;
      case 7: {
        cmdText = 'CREDIT';
      }
        break;
    }
    return cmdText;
  },
  //-------------------------------------------------------------------------------------------------------------交易字段计算
  tradeVal: function (field, rec, total) {
    var prefix = '', v = 0;
    if (total) {
      prefix = 'trade_'
    }
    switch (field) {
      case 'clear': {
        v = (rec[prefix + 'commission'] + rec[prefix + 'taxes'] + rec[prefix + 'storage'] + rec[prefix + 'profit'] + rec[prefix + 'commission_agent'])
      }
        break;
      case 'clear_average': {
        //v=(rec[prefix+'clear'])/(rec[prefix+'volume'])
        v = (rec[prefix + 'commission'] + rec[prefix + 'taxes'] + rec[prefix + 'storage'] + rec[prefix + 'profit'] + rec[prefix + 'commission_agent']) / (rec[prefix + 'volume'])

      }
        break;
      case 'profit_total': {
        v = (rec[prefix + 'commission'] + rec[prefix + 'taxes'] + rec[prefix + 'storage'] + rec[prefix + 'profit'])
      }
        break;
    }
    return v;
  }


});





























