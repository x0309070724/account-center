Ext.define('APP.view.rd.qun.record', {
  extend: 'Ext.List',
  xtype: 'rdQunRecord',
  controller: 'rd.qun',
  // grouped:true,
  // masked:{xtype:'loadmask'},
  store: {
    type: 'rdShoutingQunGroup',
    pageSize: 30,
    autoLoad: true
  },
  plugins: [
    {type: 'pullrefresh'},
    {type: 'listpaging'}
  ],
  items: [
    {xtype: 'navbar'},
    {xtype: 'searchbar', component: {pattern: '[0-9]*'}}
  ],
  userCls: 'x-ui-list',
  itemCls: 'x-ui-list-qun',
  itemTpl: [
    '<div class="x-ui-userface">',
      '<img src="{gc:qunFace}" alt="">',
    '</div>',
    '<div class="x-ui-explain">',
      '<p class="x-ui-first">',
        '<span class="x-ui-label x-ui-bg-black">{gc}</span><span class="x-ui-label x-ui-bg-black">{gn}</span>',
      '</p>',
      '<p><label>成员数：</label>{count}/{max_count}</p>',
      '<p><label>发言率：</label>{speak_month_count}%</p>',
    //'<p><label>销售团队：</label>{sd_team_name} {sd_user_namecn}</p>',
    //'<p><label>交易团队：</label>{rd_team_name} {rd_user_namecn}</p>',
      '<p class="x-ui-icon"><a href="{gc:qunHref}"><span class="f-mt mt-users-2"></span></a></p>',
    '</div>'
  ],
  listeners: {
    // initialize:'onRecordInitialize',
    // itemtap:'onRecordItemtap'
  }
});
