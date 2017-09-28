Ext.define('APP.model.account.funds', {
  extend: 'Ext.data.Model',
  idProperty: 'id',
  fields: [
    {name: 'id', type: 'int'},
    {name: 'login', type: 'int'},
    {name: 'orderno', type: 'string'}, {name: 'order', type: 'string'}, {name: 'certificate', type: 'string'},
    {name: 'cmd', type: 'int'}, {name: 'direction', type: 'int'},
    {name: 'groupid', type: 'int'}, {name: 'groupname', type: 'string'},
    {name: 'pay', type: 'string'}, {name: 'merchantno', type: 'string'},
    {name: 'amount_usd', type: 'number'}, {name: 'amount', type: 'number'}, {name: 'rate', type: 'number'},
    {name: 'transfer', type: 'int'},
    {name: 'bank_currency', type: 'string'}, {name: 'bank_icon', type: 'string'}, {
      name: 'bank_name',
      type: 'string'
    }, {name: 'bank_branch', type: 'string'}, {name: 'bank_username', type: 'string'}, {
      name: 'bank_cardno',
      type: 'string'
    }, {name: 'bank_address', type: 'string'}, {name: 'bank_swiftcode', type: 'string'},
    {name: 'audit', type: 'int'},
    {name: 'audit_time', type: 'date'},
    {name: 'audit_explain', type: 'string'},
    {name: 'complete_time', type: 'date'},
    {name: 'expiration', type: 'date'},
    {name: 'time', type: 'date'},
    {name: 'before_balance', type: 'number'}, {name: 'after_balance', type: 'number'},
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
    {name: 'account_balance', type: 'number'}, {name: 'account_credit', type: 'number'}, {
      name: 'account_equity',
      type: 'number'
    }, {name: 'account_margin', type: 'number'}, {
      name: 'account_margin_free',
      type: 'number'
    }, {name: 'account_margin_level', type: 'number'},
    {name: 'funds_deposit', type: 'number'}, {name: 'funds_deposit_count', type: 'int'},
    {name: 'funds_withdrawal', type: 'number'}, {name: 'funds_withdrawal_count', type: 'int'},
    {name: 'funds_net_deposit', type: 'number'},
    {name: 'trade_profit', type: 'number'}, {name: 'trade_count', type: 'int'}, {name: 'trade_volume', type: 'number'}
  ]
});
