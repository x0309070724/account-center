Ext.define('APP.store.rd.shouting.qun.group', {
  extend: 'APP.store.cross',
  autoLoad: false,
  remoteSort: false,
  alias: 'store.rdShoutingQunGroup',
  fields: [
    {name: 'id', type: 'int'},
    {name: 'gc', type: 'int'},
    {name: 'gn', type: 'string'},
    {name: 'owner', type: 'int'},
    {name: 'adm_max', type: 'int'},
    {name: 'adm_num', type: 'int'},
    {name: 'count', type: 'int'},
    {name: 'ec', type: 'int'},
    {name: 'max_count', type: 'int'},
    {name: 'svr_time', type: 'date'},
    {name: 'vecsize', type: 'int'},
    {name: 'sd_teamid', type: 'int'},
    {name: 'rd_userid', type: 'int'},
    {name: 'explain', type: 'string'},
    {name: 'enddate', type: 'date'},
    {name: 'speak_count', type: 'int'},
    {name: 'speak_month_count', type: 'int'},
    {name: 'speak_month3_count', type: 'int'}
  ],
  sorters: [{property: 'gn', direction: 'DESC'}],
  proxy: {
    url: Boot.appUrl('/rd/shouting/qun/getGroup.do')
  }
});
