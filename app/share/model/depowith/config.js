Ext.define('APP.model.account.config', {
  extend: 'Ext.data.Model',
  fields: [
    {
      name: 'bank_last4', type: 'string', convert: function (v, record) {
      var data = record.data, len = data.cardno.length;
      return data.name + ' ( ' + data.cardno.substring(len - 4, len) + ' ) '
    }
    }]
});
