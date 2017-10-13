Ext.define('APP.mate.box.pieChart', {
  extend: 'Ext.chart.PolarChart',
  alias: 'widget.piechart',
  docked: 'top',
  // Whether or not this Component is hidden (its CSS display property is set to none).
  hidden: true,
  height: 200,
  insetPadding: 10,
  store: {
    pageSize: 10,
    sorters: [{property: 'label', direction: 'ASC'}]
  },
  name: 'pie',
  series: [
    {
      type: 'pie',
      angleField: "value",
      // tooltip: {renderer: 'rendererSeriesTooltip'},
      donut: true,
      showInLegend: true,
      label: {field: 'label',contrast: true, fontSize: 8, color: '#000'}
    }
  ]
});
