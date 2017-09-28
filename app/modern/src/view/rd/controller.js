Ext.define('APP.view.rd.controller', {
  extend: 'APP.view.controller',
  alias: 'controller.rd',
  onIndexActivate: function (view) {
    var me = this,
      carousel = view.down('carousel'),
      boxs = carousel.query('box');
    // direction = 'next';
    PushService.ready(function () {
      var buffers = PushService.getBuffer();
      // console.log(buffers);
      if (this.task) {
        Ext.TaskManager.destroy(this.task);
      }
      // console.log(buffers.getSummary());
      this.task = Ext.TaskManager.start({
        run: function () {
          if (view.isHidden()) {
            Ext.TaskManager.destroy(me.task);
            return false;
          }
          // var trades = buffers.getTrades(),
          var summary = buffers.getSummary();
          boxs[0].setData([
            '盘面',
            summary.account.count,
            summary.account.online_count,
            summary.assets.balance,
            summary.assets.equity
          ]);
          boxs[1].setData([
            '持仓',
            summary.trade.market_count,
            summary.trade.market_volume,
            summary.trade.profit,
            summary.trade.clear
          ]);
        },
        // The frequency in milliseconds with which the task should be invoked.
        interval: 5000
      });
//			Ext.TaskManager.start({
//				run:function(){
//					if(view.isHidden()){
//						Ext.TaskManager.destroy(this||false);
//						return false;
//					}
//					var index=carousel.getActiveIndex(),
//						total=boxs.length-1;
//					if(index==0){direction='next';}
//					if(index==total){direction='previous';}
//					if(direction=='next'){
//						carousel.next();
//					}else if(direction=='previous'){
//						carousel.previous();
//					}
//				},
//				interval:15000
//			});
    });
  }
});
