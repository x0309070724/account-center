Ext.define('APP.model.analysis', {
  extend: 'Ext.data.Model',
  // The name of the field treated as this Model's unique id.
  idProperty: 'objects',
  fields: [
    {name: 'objects', type: 'string'}
  ]
});

