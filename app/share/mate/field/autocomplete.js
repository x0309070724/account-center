Ext.define('APP.mate.field.autoComplete',{
	extend:'Ext.Component',
	alias:[
		'widget.autocomplete',
		'widget.autocompletefield'
	],
	hidden:false,
	html:'<input type="text" style="display:non;width:0px;height:0px;position:absolute;left:-9999em;"/><input type="password" style="display:non;width:0px;height:0px;position:absolute;left:-9999em;"/>'
});