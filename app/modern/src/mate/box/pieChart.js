Ext.define('APP.mate.box.pieChart', {
  extend: 'Ext.chart.CartesianChart',
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
  interactions: [{type: 'crosshair', enabled: true}],
  series: [
    {




      // label:{
      //   display:"name",
      //   contrast:true,
      // },

      type: 'pie',
      angleField:"data",
      donut:true,
      showInLegend: true,
      xField: 'label',
      yField: 'value',
      label: {display: 'objects', contrast: true, fontSize: 8, color: '#000'}
    }
  ],
  axes: [
    {type: 'category', position: 'bottom', grid: false, label: {fontSize: 8, rotate: -45}}
  ]
});



