Ext.define('APP.view.hr.controller', {
  extend: 'APP.view.controller',
  alias: 'controller.hr',
  onTeamInitialize: function (tree) {
    // console.log(tree);
    var data = APP.app.getTeamTreeData(),
      store = Ext.create('Ext.data.TreeStore', {
        rootVisible: false,
        root: {expanded: true, children: data}
      });
    // console.log(data);
    store.sort('sortnum', 'ASC');
    tree.setStore(store);
  },
  onStaffInitialize: function (tree) {
    // tree.setStore(store);
    this.onTeamInitialize(tree);
    var staffData = APP.app.getAppData('company/staff'),
      staffArr = {},
      staffTeamArr = [],
      staffStore = tree.getStore();
    // console.log(staffStore);
    // console.log(staffData);
    Ext.Array.each(staffData, function (record) {
      if (record.departmentid !== 106) {
        if (!staffArr[record.teamid]) {
          staffArr[record.teamid] = [];
          staffTeamArr.push(record.teamid);
        }
        staffArr[record.teamid].push({
          id: record.id,
          sortnum: record.postid,
          iconCls: 'f-mt mt-customer x-ui-text-blue',
          leaf: true,
          namecn: record.namecn,
          name: record.name,
          info: record.post_name
        });
      }
    });
    Ext.Array.each(staffTeamArr, function (teamid) {
      var node = staffStore.getNodeById(teamid);
      if (node) {
        node.appendChild(staffArr[teamid]);
        node.set({info: null, leaf: false});
        // Expands a record that is loaded in the view.
        node.expand();
      }
    });
    staffStore.sort('sortnum', 'ASC');
  }

//
//	onInitialize:function(view){
//		var store=view.getStore();
//		var typeTemp={},
//			typeRoot={expanded:true,children:[]},
//
//			arrData=APP.app.getAppData('company/staff');
//			//console.log(arrData)
//
//			Ext.Array.each(arrData,function(record,i){
//				if(!typeTemp[record.departmentid]){
//					typeTemp[record.departmentid]={
//						id:record.departmentid,
//						text:record.department_name,
//						iconCls:'f-mt mt-home',
//						children:[],
//						expanded:true
//					}
//					typeRoot.children.push(typeTemp[record.departmentid]);
//				}
//				if(record.teamid.toString().substr(6,6)!='000000'){
//					if(!typeTemp[record.departmentid][record.teamid]){
//						typeTemp[record.departmentid][record.teamid]={
//							id:record.teamid,
//							text:record.team_name,
//							iconCls:'f-mt mt-additve',
//							children:[],
//							expanded:true
//						}
//						typeTemp[record.departmentid].children.push(typeTemp[record.departmentid][record.teamid]);
//						//typeRoot.children.push(typeTemp[record.departmentid]);
//					}
//				}
//				var data={leaf:true,iconCls:'f-mt mt-customer',id:record.id,text:record.namecn,name:record.name}
//				if(typeTemp[record.departmentid][record.teamid]){
//					typeTemp[record.departmentid][record.teamid].children.push(data);
//				}else{
//					typeTemp[record.departmentid].children.push(data);
//				}
//			});
//			store.setRoot(typeRoot)
//	}
//

});
