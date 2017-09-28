Ext.define('APP.view.main.navigation', {
  extend: 'Ext.NavigationView',
  xtype: 'mainNavigation',
  controller: 'navigation',
  reference: 'navigation',
  // scrollable:false,
  // fullscreen:true,
  // autoDestroy:true,
  fullscreen: true,
  navigationBar: false,
  layout: {type: 'card', animation: {type: 'cover'}},
  listeners: {
    // Fires when a view is pushed into this navigation view
    // 除了push进navvigation以外，还要触发onNavigationPush这个方法
    push: 'onNavigationPush',
    pop: 'onNavigationPop'
  }
});
