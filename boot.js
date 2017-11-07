var Boot = Boot || {
  version: '1.9.7',
  wxAppid: 'wxb9c69c9ab1d9172f',
  ossDomain: 'oss.thjzchina.com',
  // appDomain: 'be.account.abc-123.co',
  appDomain: 'vms.abc.mt4mate.com',
  // appDomain: '120.77.47.118:2280/VMS',
  // appDomain: '192.168.31.101:8080/ABC_TRADE',
  apiDomain: 'api.thjzchina.com',
  // serviceDomain: 'websocket.mt4-dc.net:8888',
  serviceDomain: 'websocket.mt4-dc.net:9999',
  // serviceDomain:'192.168.31.188:81',
  appUrl: function (method) {
    return '//' + Boot.appDomain + method;
  },
  // extend: function (destination, source) {
  //   // for(var i =0,len=source.length;i<len;i++) {
  //   //   destination[i] = source[i];
  //   // }
  //   // js有对象自己的属性和原型属性，for in 会迭代原型属性，所以编译器会报一个hasOwnProperty() check的警告
  //   // 建议：
  //   // 1、不要用for in遍历数组，全部统一采用标准的for循环遍历数组(我们无法保证我们引入的js是否会采用prototype扩展原生的Array)
  //   // 2、如果要对js的原生类扩展的时候，不要采用prototype了
  //   for (var property in source) {
  //     destination[property] = source[property];
  //   }
  //   return destination;
  // },
  random: function () {
    return new Date().getTime();
  },
  loadJs: function (src, cdn) {
    src = !cdn ? src + '?_dc=' + Boot.random() : src;
    document.write('<' + 'script src="' + src + '"' + ' defer><' + '/script>');
  }
  // maintenance: function () {
  //   window.location.href = 'maintenance.html';
  // },
  // upgrade: function () {
  //   // Boot.maintenance();
  //   // return false;
  //   var version = window.localStorage.getItem('version');
  //   if (version !== Boot.version) {
  //     window.location.href = 'upgrade.html?_dc=' + Boot.random();
  //   }
  // }
};
