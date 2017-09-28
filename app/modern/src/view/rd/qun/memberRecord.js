Ext.define('APP.view.rd.qun.memberRecord', {
  extend: 'Ext.List',
  xtype: 'rdQunMemberRecord',
  controller: 'rd.qun',
  grouped: true,
  // masked:{xtype:'loadmask'},
  store: {
    type: 'rdShoutingQunMember',
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
      '<img src="{uin:qqFace}" alt="">',
    '</div>',
    '<div class="x-ui-explain">',
      '<p class="x-ui-first">',
        '<span class="x-ui-label x-ui-bg-black">{uin}</span> <span class="x-ui-label x-ui-bg-black">{nick}</span>',
      '</p>',
      '<p><label>群号：</label>{gc}</p>',
      '<p><label>群名：</label>{gn}</p>',
      '<p><label>发言：</label>{last_speak_time:date("Y-m-d H:i A")}</p>',
      '<p class="x-ui-icon"><a href="{uin:qqHref}"><span class="f-mt mt-qq"></span></a></p>',
    '</div>'
  ]
});
