Ext.define('APP.model.account.record', {
  extend: 'Ext.data.Model',
  idProperty: 'login',
  fields: [
    {name: 'id', type: 'int'},
    {name: 'login', type: 'int'},
    {name: 'typeid', type: 'int'}, {name: 'roleid', type: 'int'},
    //{name:'password',type:'string'},{name:'password_investor',type:'string'},{name:'password_phone',type:'string'},{name:'password_safe',type:'string'},
    {name: 'namecn', type: 'string'}, {name: 'name', type: 'string'},
    {name: 'gender', type: 'string'}, {name: 'birthday', type: 'string'},
    {name: 'identity_type', type: 'string'}, {name: 'identity_country', type: 'string'},
    {name: 'identity_address', type: 'string'}, {name: 'identity_cardno', type: 'string'}, {
      name: 'identity_image',
      type: 'string'
    },
    {name: 'mobile', type: 'string'}, {name: 'email', type: 'string'}, {name: 'qq', type: 'string'},
    {name: 'explain', type: 'string'},
    {name: 'tested', type: 'int'},
    {name: 'regdate', type: 'date'},
    {name: 'group', type: 'string'},
    {name: 'enable', type: 'int'},
    {name: 'enable_change_password', type: 'int'},
    {name: 'enable_read_only', type: 'int'},
    {name: 'send_reports', type: 'int'},
    {name: 'state', type: 'int'},
    {name: 'status', type: 'int'},
    {
      name: 'leverage', type: 'int', convert: function (v, record) {
      return v === 0 ? '' : v
    }
    },
    {name: 'taxes', type: 'number'},
    {
      name: 'user_color', type: 'string', convert: function (v, record) {
      return v && v.length < 8 ? '#000000' : v;
    }
    },
    {name: 'last_ip', type: 'string'},
    {name: 'lastdate', type: 'date'},
    {name: 'confirm', type: 'int'},
    {name: 'confirm_time', type: 'date'},
    {name: 'salesmanid', type: 'int'}, {name: 'salesman_name', type: 'string'}, {
      name: 'salesman_namecn',
      type: 'string'
    },
    {name: 'salesman2id', type: 'int'}, {name: 'salesman2_name', type: 'string'}, {
      name: 'salesman2_namecn',
      type: 'string'
    },
    {
      name: 'agent', type: 'int', convert: function (v, record) {
      return v === 0 ? '' : v
    }
    },
    {name: 'agent_namecn', type: 'string'}, {name: 'agent_name', type: 'string'},
    {
      name: 'agent_names', type: 'string', convert: function (v, record) {
      return Ext.util.Format.stringPriority(record.data.agent_namecn, record.data.agent_name)
    }
    },
    {name: 'agent_subordinate', type: 'int'},
    {name: 'agent_commission', type: 'number'},
    {name: 'agent_volume', type: 'number'},
    {name: 'roleid', type: 'int'}, {name: 'roleid_name', type: 'string'},
    {name: 'propertyid', type: 'int'}, {name: 'property_name', type: 'string'},
    {name: 'iblevel', type: 'int'}, {name: 'ibname', type: 'string'},
    {name: 'ibscale', type: 'number'}, {name: 'ibdate', type: 'date', dateFormat: 'Y-m-d'},
    {name: 'same_identity_count', type: 'int'},
    {name: 'funds_deposit', type: 'number'}, {name: 'funds_deposit_count', type: 'int'},
    {name: 'funds_withdrawal', type: 'number'}, {name: 'funds_withdrawal_count', type: 'int'},
    {name: 'funds_net_deposit', type: 'number'},
    {name: 'funds_credit', type: 'number'}, {name: 'funds_credit_count', type: 'int'},
    {name: 'trade_profit', type: 'number'}, {name: 'trade_count', type: 'int'},
    {name: 'trade_volume', type: 'number'},
    {name: 'trade_commission', type: 'number'},
    {name: 'trade_commission_agent', type: 'number'},
    {name: 'trade_volume', type: 'number'},
    {name: 'trade_taxes', type: 'number'},
    {name: 'trade_storage', type: 'number'},
    {name: 'trade_clear', type: 'number'},
    {name: 'pending_volume', type: 'number'},
    {name: 'pending_count', type: 'int'},
    {name: 'balance', type: 'number'},
    {name: 'credit', type: 'number'},
    {name: 'equity', type: 'number'},
    {name: 'margin', type: 'number'},
    {name: 'margin_free', type: 'number'},
    {name: 'margin_level', type: 'number'}
  ]
});
