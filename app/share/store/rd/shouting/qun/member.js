Ext.define('APP.store.rd.shouting.qun.member', {
  extend: 'APP.store.cross',
  alias: 'store.rdShoutingQunMember',
  fields: [
    {name: 'id', type: 'int'},
    {name: 'card', type: 'string'},
    {name: 'flag', type: 'int'},
    {name: 'g', type: 'int'},
    {name: 'join_time', type: 'date'},
    {name: 'last_speak_time', type: 'date'},
    {name: 'lv_level', type: 'int'},
    {name: 'lv_point', type: 'int'},
    {name: 'nick', type: 'string'},
    {name: 'qage', type: 'int'},
    {name: 'role', type: 'int'},
    {name: 'tags', type: 'int'},
    {name: 'uin', type: 'int'},
    {name: 'gc', type: 'int'},
    {name: 'retreat_time', type: 'date'},
    {name: 'gn', type: 'string'},
    {name: 'qun_owner', type: 'int'},
    {name: 'login_count', type: 'int'},
    {name: 'login', type: 'int'},
    {name: 'salesmanid', type: 'int'}, {name: 'salesman_name', type: 'string'}, {
      name: 'salesman_namecn',
      type: 'string'
    },
    {name: 'salesman2id', type: 'int'}, {name: 'salesman2_name', type: 'string'}, {
      name: 'salesman2_namecn',
      type: 'string'
    },
    {name: 'account_typeid', type: 'int'}, {name: 'account_namecn', type: 'string'}, {
      name: 'account_name',
      type: 'string'
    }, {name: 'account_mobile', type: 'string'}, {name: 'account_email', type: 'string'},
    {name: 'agent', type: 'int'}, {name: 'agent_name', type: 'string'}, {name: 'agent_namecn', type: 'string'},
    {name: 'balance', type: 'number'},
    {name: 'prevequity', type: 'number'},
    {name: 'lastdate', type: 'date'},
    {name: 'funds_deposit', type: 'number'}, {name: 'funds_deposit_count', type: 'int'},
    {name: 'funds_withdrawal', type: 'number'}, {name: 'funds_withdrawal_count', type: 'int'},
    {name: 'funds_net_deposit', type: 'number'},
    {name: 'trade_profit', type: 'number'}, {name: 'trade_count', type: 'int'}, {name: 'trade_volume', type: 'number'}
  ],
  remoteSort: true,
  sorters: [{property: 'join_time', direction: 'DESC'}, {property: 'id', direction: 'DESC'}],
  grouper: {
    groupFn: function (record) {
      return Ext.Date.format(record.data.join_time, 'Y-m-d')
    }, property: 'join_time', direction: 'DESC'
  },
  proxy: {
    url: Boot.appUrl('/rd/shouting/qun/getMember.do')
  }
});

