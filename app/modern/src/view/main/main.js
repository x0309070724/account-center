Ext.define('APP.view.main.main', {
  extend: 'Ext.tab.Panel',
  xtype: 'main',
  controller: 'baseController',
  defaults: {
    // If true, child items will be destroyed as soon as they are removed from this container.
    autoDestroy: true
    // layout: {animation: {type: 'cover', direction: 'left'}},
    // layout: {type: 'card', animation: {type: 'cover', direction: 'left'}},
    // layout: {type: 'card', animation: {type: 'flip'}},
  },
  // 满足安装向导、Tab选项卡等应用面板显示的需求
  layout: {type: 'card', animation: false},
  // 控制onMainInitialize方法里面的tabbar布局方式
  tabBar: {
    // pack:Controls how the child items of the container are packed together.
    layout: {pack: 'center', align: 'center'},
    docked: 'bottom', border: true,
    defaults: {iconAlign: 'top', flex: 1, handler: 'onMainTabChange'}
  },
  listeners: {
    initialize: 'onMainInitialize'
  }
});
