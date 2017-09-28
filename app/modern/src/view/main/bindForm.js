Ext.define('APP.view.main.bindForm',{
	extend:'Ext.form.Panel',
    xtype:'bindForm',
	viewModel:{data:{type:{value:'login'}}},
	bodyPadding:25,
	items:[
		{xtype:'field',name:'cmd',value:'bind',hidden:true},
		{xtype:'container',name:'logo',userCls:'x-ui-bind-icon',layout:{type:'hbox',pack:'center'},margin:'20 0 40 0',items:[
			{xtype:'image',bind:{src:'{account.wx_userface}'},alt:''},
			{xtype:'image',src:'/resources/images/bind-logo.png',alt:'',margin:'0 0 0 80'}
		]},
		{xtype:'segmentedbutton',layout:{type:'hbox',align:'middle',pack:'center'},defaults:{flex:1,iconAlign:'center'},
			reference:'type',publishes:'value',
			items:[
				{text:'账号校验',iconCls:'f-mt mt-user',value:'login',pressed:true},
				{text:'手机校验',iconCls:'f-mt mt-mobile',value:'mobile'}
			]
		},
		{xtype:'field',name:'type',bind:{value:'{type.value}'},hidden:true},
		{xtype:'fieldset',
			bind:{hidden:'{type.value!="login"}',disabled:'{type.value!="login"}'},
			defaults:{labelWidth:60,autoComplete:false,clearable:false,require:true},
			items:[
				{label:'Login',labelCls:'f-mt mt-user',xtype:'numberfield',component:{pattern:'[0-9]*'},name:'login',placeholder:'Login',value:Mate.getCache('loginData/login')},
				{label:'password',labelCls:'f-mt mt-password',xtype:'passwordfield',name:'password',placeholder:'Password',listeners:{xblur:'onLoginFormEnterSubmit'}}
			]
		},
		{xtype:'fieldset',hidden:true,
			bind:{hidden:'{type.value!="mobile"}',disabled:'{type.value!="mobile"}'},
			defaults:{labelWidth:60,autoComplete:false,clearable:false,require:true},
			items:[
				{label:'Mobile',labelCls:'f-mt mt-mobile',xtype:'numberfield',component:{pattern:'[0-9]*'},name:'mobile',placeholder:'Mobile',value:Mate.getCache('loginData/mobile')},
				{label:'VerifyCode',labelCls:'f-mt mt-lock',xtype:'passwordfield',name:'password',placeholder:'VerifyCode'}
			]
		},
		{xtype:'button',text:'绑定账户',name:'submit',ui:'blue large',border:false,iconCls:'f-mt mt-account-audit',iconAlign:'center',handler:'onLoginFormSubmit'}
//		{xtype:'container',layout:{type:'hbox',align:'middle',pack:'center'},margin:'20 0 0 0',items:[
//			{xtype:'button',text:'绑定账户',name:'submit',ui:'blue large',border:false,iconCls:'f-mt mt-account-audit',iconAlign:'center',minWidth:220,handler:'onLoginFormSubmit',flex:1},
//			//{xtype:'button',border:true,ui:'red',text:'忘记密码?',margin:'0 0 0 20',value:'mobile',reference:'bindType',publishes:'value'}
//		]}
	],
	listeners:{
		initialize:'onBindFormInitialize'
	}
});