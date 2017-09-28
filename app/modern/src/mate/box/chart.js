Ext.define('APP.mate.box.chart', {
  extend: 'Ext.chart.CartesianChart',
  alias: 'widget.boxchart',
  docked: 'top',
  // Whether or not this Component is hidden (its CSS display property is set to none).
  hidden: true,
  height: 200,
  insetPadding: 10,
  store: {
    pageSize: 10,
    sorters: [{property: 'label', direction: 'ASC'}]
  },
  interactions: [{type: 'crosshair', enabled: true}],
  series: [
    {
      type: 'bar',
      xField: 'label',
      yField: 'value',
      label: {field: 'value', display: 'over', fontSize: 8, color: '#000'}
    }
  ],
  axes: [
    {type: 'category', position: 'bottom', grid: false, label: {fontSize: 8, rotate: -45}}
  ]
});



