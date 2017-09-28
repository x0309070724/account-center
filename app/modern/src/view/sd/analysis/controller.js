Ext.define('APP.view.sd.analysis.controller', {
  extend: 'APP.view.controller',
  alias: 'controller.sd.analysis',
  /***************************************************  报表详情  *****************************************************/
  onDetailInitialize: function (view) {
    view.setMasked({xtype: 'loadmask'});
    var url = '';
    if (view.parameter.menu) {
      url = '/super/getStatistics.do';
    } else {
      url = '/super/getTrend.do';
    }
    Mate.ajax({
      url: Boot.appUrl(url),
      params: view.parameter,
      success: function (json, opts) {
        view.unmask();
        if (json.plant[0]) {
          view.setData(json.plant[0]);
        } else {
          Mate.showTask('<h6>信息提示</h6>所查询的数据不存在');
        }
      },
      failure: function (response, opts) {
        view.unmask();
        return false;
      }
    });
  }
});
