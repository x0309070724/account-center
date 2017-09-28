Ext.define('APP.data.oaNav',{
	alternateClassName:'oaNav',
	statics:{
		navigation:[
			{id:9999,iconCls:'f-mt mt-dollar-4',text:'CRM',view:'sd.index',
				children:[
					{leaf:true,id:1,view:'main'},
					{leaf:true,id:2,view:'main.login'}
				]
			},

			{id:103001,iconCls:'f-mt mt-dollar-4',text:'CRM',view:'sd.main.sales',
				children:[
					{id:10300101,iconCls:'f-mt mt-out-audit',text:'销售报表',expanded:true,children:[
						{leaf:true,id:1030010101,iconCls:'f-mt mt-staff',text:'销售员',view:'sd.analysis.sales.objects',parameter:{menu:'staff',datepart:'month',field:'resources'}},
						{leaf:true,id:1030010102,iconCls:'f-mt mt-department',text:'部门',view:'sd.analysis.sales.objects',parameter:{menu:'t1',datepart:'month',field:'resources'}},
						{leaf:true,id:1030010103,iconCls:'f-mt mt-team',text:'网点',view:'sd.analysis.sales.objects',parameter:{menu:'branch',datepart:'month',field:'resources'}},
						{leaf:true,id:1030010104,iconCls:'f-mt mt-day',text:'日报',view:'sd.analysis.sales.time',parameter:{datepart:'day',field:'resources'}},
						{leaf:true,id:1030010105,iconCls:'f-mt mt-week',text:'周报',view:'sd.analysis.sales.time',parameter:{datepart:'week',field:'resources'}},
						{leaf:true,id:1030010106,iconCls:'f-mt mt-month',text:'月报',view:'sd.analysis.sales.time',parameter:{datepart:'month',field:'resources'}}
					]}
				]
			},

			{id:103002,iconCls:'f-mt mt-dollar-4',text:'CRM',view:'sd.main.results',
				children:[
					{id:10300201,iconCls:'f-mt mt-out-audit',text:'业绩报表',expanded:true,children:[
						{leaf:true,id:1030020101,iconCls:'f-mt mt-staff',text:'销售员',view:'sd.analysis.results.objects',parameter:{menu:'staff',datepart:'month',field:'funds'}},
						{leaf:true,id:1030020102,iconCls:'f-mt mt-department',text:'部门',view:'sd.analysis.results.objects',parameter:{menu:'t1',datepart:'month',field:'funds'}},
						{leaf:true,id:1030020103,iconCls:'f-mt mt-team',text:'网点',view:'sd.analysis.results.objects',parameter:{menu:'branch',datepart:'month',field:'funds'}},
						{leaf:true,id:1030020104,iconCls:'f-mt mt-day',text:'日报',view:'sd.analysis.results.time',parameter:{datepart:'day',field:'funds'}},
						{leaf:true,id:1030020105,iconCls:'f-mt mt-week',text:'周报',view:'sd.analysis.results.time',parameter:{datepart:'week',field:'funds'}},
						{leaf:true,id:1030020106,iconCls:'f-mt mt-month',text:'月报',view:'sd.analysis.results.time',parameter:{datepart:'month',field:'funds'}}
					]},
					{id:10300202,iconCls:'f-mt mt-out-audit',text:'账户',expanded:true,children:[
						{leaf:true,id:1030020201,iconCls:'f-mt mt-account-strate',text:'申请记录',description:'查询账户申请的处理结果',view:'sd.account.applyRecord'},
						{leaf:true,id:1030020202,iconCls:'f-mt mt-fulltime',text:'账户查询',description:'查询账户详细信息',view:'sd.account.record'},
						{leaf:true,id:1030020203,iconCls:'f-mt mt-customer',text:'账户报表',description:'交易账户数据统计',view:'sd.account.accountReport',parameter:{field:'funds'}},
						{leaf:true,id:1030020204,iconCls:'f-mt mt-additve',text:'代理报表',description:'代理账户数据统计',view:'sd.account.agentReport',parameter:{field:'agent'}}
					]},
					{id:10300203,iconCls:'f-mt mt-out-audit',text:'出入金',expanded:true,children:[
						{leaf:true,id:1030020301,iconCls:'f-mt mt-access-gold-1',text:'申请记录',description:'查询账户出入金的处理结果',view:'sd.funds.applyRecord'},
						{leaf:true,id:1030020302,iconCls:'f-mt mt-parttime-job',text:'出入金查询',description:'查询账户历史出入金记录',view:'sd.funds.record'}
					]}
				]
			},

			{id:1000,iconCls:'f-mt mt-dollar-4',text:'CRM',view:'sd.index',
				children:[
//					{id:1001,iconCls:'f-mt mt-out-audit',text:'销售报表',expanded:true,children:[
//						{leaf:true,id:100101,iconCls:'f-mt mt-staff',text:'销售员',view:'sd.analysis.sales.objects',parameter:{menu:'staff',datepart:'month',field:'resources'}},
//						{leaf:true,id:100102,iconCls:'f-mt mt-department',text:'部门',view:'sd.analysis.sales.objects',parameter:{menu:'t1',datepart:'month',field:'resources'}},
//						{leaf:true,id:100103,iconCls:'f-mt mt-team',text:'网点',view:'sd.analysis.sales.objects',parameter:{menu:'branch',datepart:'month',field:'resources'}},
//						{leaf:true,id:100104,iconCls:'f-mt mt-day',text:'日报',view:'sd.analysis.sales.time',parameter:{datepart:'day',field:'resources'}},
//						{leaf:true,id:100105,iconCls:'f-mt mt-week',text:'周报',view:'sd.analysis.sales.time',parameter:{datepart:'week',field:'resources'}},
//						{leaf:true,id:100106,iconCls:'f-mt mt-month',text:'月报',view:'sd.analysis.sales.time',parameter:{datepart:'month',field:'resources'}}
//					]},
					{id:1002,iconCls:'f-mt mt-out-audit',text:'业绩报表',expanded:true,children:[
						{leaf:true,id:100201,iconCls:'f-mt mt-staff',text:'销售员',view:'sd.analysis.results.objects',parameter:{menu:'staff',datepart:'month',field:'funds'}},
						{leaf:true,id:100202,iconCls:'f-mt mt-department',text:'部门',view:'sd.analysis.results.objects',parameter:{menu:'t1',datepart:'month',field:'funds'}},
						{leaf:true,id:100203,iconCls:'f-mt mt-team',text:'网点',view:'sd.analysis.results.objects',parameter:{menu:'branch',datepart:'month',field:'funds'}},
						{leaf:true,id:100204,iconCls:'f-mt mt-day',text:'日报',view:'sd.analysis.results.time',parameter:{datepart:'day',field:'funds'}},
						{leaf:true,id:100205,iconCls:'f-mt mt-week',text:'周报',view:'sd.analysis.results.time',parameter:{datepart:'week',field:'funds'}},
						{leaf:true,id:100206,iconCls:'f-mt mt-month',text:'月报',view:'sd.analysis.results.time',parameter:{datepart:'month',field:'funds'}},
						{leaf:true,id:100207,iconCls:'f-mt mt-day',text:'测试',view:'sd.analysis.results.time',parameter:{datepart:'day',field:'funds'}},
						{leaf:true,id:100208,iconCls:'f-mt mt-week',text:'测试',view:'sd.analysis.results.time',parameter:{datepart:'week',field:'funds'}},
						{leaf:true,id:100209,iconCls:'f-mt mt-month',text:'测试',view:'sd.analysis.results.time',parameter:{datepart:'month',field:'funds'}}
					]},
					{id:1003,iconCls:'f-mt mt-out-audit',text:'账户',expanded:true,children:[
						{leaf:true,id:100301,iconCls:'f-mt mt-account-strate',text:'申请记录',description:'查询账户申请的处理结果',view:'sd.account.applyRecord',parameter:{audit:'1'}},
						{leaf:true,id:100302,iconCls:'f-mt mt-fulltime',text:'账户查询',description:'查询账户详细信息',view:'sd.account.record',parameter:{app:''}},
						{leaf:true,id:100303,iconCls:'f-mt mt-customer',text:'账户报表',description:'交易账户数据统计',view:'sd.account.accountReport',parameter:{field:'funds'}},
						{leaf:true,id:100304,iconCls:'f-mt mt-additve',text:'代理报表',description:'代理账户数据统计',view:'sd.account.agentReport',parameter:{field:'agent'}}
					]},
					{id:1004,iconCls:'f-mt mt-out-audit',text:'出入金',expanded:true,children:[
						{leaf:true,id:100401,iconCls:'f-mt mt-access-gold-1',text:'申请记录',description:'查询账户出入金的处理结果',view:'sd.funds.applyRecord',parameter:{audit:''}},
						{leaf:true,id:100402,iconCls:'f-mt mt-parttime-job',text:'出入金查询',description:'查询账户历史出入金记录',view:'sd.funds.record',parameter:{menu:''}}
					]}
				]
			},
			{id:2000,iconCls:'f-mt mt-dollar-4',text:'交易',view:'rd.index',
				children:[
					{id:2004,iconCls:'f-mt mt-out-audit',text:'交易报表',expanded:true,children:[
						{leaf:true,id:200401,iconCls:'f-mt mt-customer',text:'账户',view:'rd.analysis.account.report',parameter:{field:'funds'}},
						{leaf:true,id:200402,iconCls:'f-mt mt-additve',text:'代理',view:'rd.analysis.agent.report',parameter:{field:'agent'}},
						{leaf:true,id:200403,iconCls:'f-mt mt-additve',text:'商品',view:'rd.analysis.symbol.report',parameter:{field:'trade'}}
					]},
					{id:2005,iconCls:'f-mt mt-out-audit',text:'持仓报表',expanded:true,children:[
						{leaf:true,id:200501,iconCls:'f-mt mt-customer',text:'账户',view:'rd.analysis.account.market',parameter:{field:'funds'}},
						{leaf:true,id:200502,iconCls:'f-mt mt-additve',text:'代理',view:'rd.analysis.agent.market',parameter:{field:'agent'}},
						{leaf:true,id:200503,iconCls:'f-mt mt-additve',text:'商品',view:'rd.analysis.symbol.market',parameter:{field:'trade'}}
					]},
					{id:2008,iconCls:'f-mt mt-out-audit',text:'QQ 群',expanded:true,children:[
						{leaf:true,id:200801,iconCls:'f-mt mt-users',text:'群查询',view:'rd.qun.record'},
						{leaf:true,id:200802,iconCls:'f-mt mt-user-3',text:'成员查询',view:'rd.qun.memberRecord'}
					]}
				]
			},
			{id:3000,iconCls:'f-mt mt-dollar-4',text:'人事',view:'hr.index',
				children:[
					{id:3001,iconCls:'f-mt mt-out-audit',text:'公司',expanded:true,children:[
						{leaf:true,id:300101,iconCls:'f-mt mt-tree-3',text:'组织架构',view:'hr.team.tree'},
						{leaf:true,id:300102,iconCls:'f-mt mt-tree-2',text:'人员架构',view:'hr.staff.tree'}
					]}
	//				{id:3002,iconCls:'f-mt mt-out-audit',text:'电话管理',expanded:true,children:[
	//					{leaf:true,id:300201,iconCls:'f-mt mt-friends',text:'库存查询',view:'sd.sales.call.no.stock'},
	//					{leaf:true,id:300202,iconCls:'f-mt mt-friends',text:'号码查询',view:'sd.sales.call.no.record'},
	//					{leaf:true,id:300203,iconCls:'f-mt mt-friends',text:'余量查询',view:'sd.sales.call.no.package'},
	//					{leaf:true,id:300204,iconCls:'f-mt mt-friends',text:'通话记录',view:'sd.sales.call.no.list'},
	//					{leaf:true,id:300205,iconCls:'f-mt mt-report-day',text:'按时统计',view:'sd.sales.call.analysis.trend',parameter:{datepart:'month'}},
	//					{leaf:true,id:300206,iconCls:'f-mt mt-report-day',text:'按人统计',view:'sd.sales.call.analysis.statistics',parameter:{menu:'staff',field:'duration'}}
	//				]}
				]
			},
			{id:5000,iconCls:'f-mt mt-dollar-4',text:'分析',view:'analysis.index',
				children:[
					{id:5001,iconCls:'f-mt mt-out-audit',text:'盘面',expanded:true,children:[
						{leaf:true,id:500101,iconCls:'f-mt mt-dollar-1',text:'盘面资产',description:'记录每日盘余额与净值',view:'rd.analysis.assets'}
					]},
					{id:5002,iconCls:'f-mt mt-out-audit',text:'业绩报表',expanded:true,children:[
						{leaf:true,id:500201,iconCls:'f-mt mt-results',text:'按对象统计',description:'销售顾问、团队、部门',view:'analysis.results.objects',parameter:{datepart:'month',menu:'staff',field:'funds'}},
						{leaf:true,id:500202,iconCls:'f-mt mt-day',text:'按时间统计',description:'日报、周报、月报',view:'analysis.results.time',parameter:{datepart:'month',field:'funds'}}
					]},
					{id:5003,iconCls:'f-mt mt-out-audit',text:'运营报表',expanded:true,children:[
						{leaf:true,id:500301,iconCls:'f-mt mt-results',text:'按对象统计',description:'销售顾问、团队、部门',view:'analysis.operations.objects',parameter:{datepart:'month',menu:'staff',field:'clear'}},
						{leaf:true,id:500302,iconCls:'f-mt mt-day',text:'按时间统计',description:'日报、周报、月报',view:'analysis.operations.time',parameter:{datepart:'month',field:'clear'}}
					]}
				]
			},
			{id:8000,iconCls:'f-mt mt-dollar-4',text:'账户',view:'account.index',
				children:[
					{id:8001,iconCls:'f-mt mt-out-audit',text:'我',expanded:true,children:[
						{leaf:true,id:800101,iconCls:'f-mt mt-management',text:'通讯录',description:'企业内部员工通讯录',view:'hr.staff.contacts'}
					]},
					{id:8002,iconCls:'f-mt mt-out-audit',text:'公司',expanded:true,children:[
						{leaf:true,id:800201,iconCls:'f-mt mt-tree-3',text:'组织架构',view:'hr.team.tree'},
						{leaf:true,id:800202,iconCls:'f-mt mt-tree-2',text:'人员架构',view:'hr.staff.tree'}
					]},
					{id:8004,iconCls:'f-mt mt-out-audit',text:'档案更新',expanded:true,children:[
						{leaf:true,id:800401,iconCls:'f-mt mt-mobile',text:'手机',value:'',view:'account.update.mobile'},
						{leaf:true,id:800402,iconCls:'f-mt mt-email',text:'Email',value:'',view:'account.update.email'},
						{leaf:true,id:800403,iconCls:'f-mt mt-wechat',text:'微信',value:'',view:'account.update.wechat'},
						{leaf:true,id:800404,iconCls:'f-mt mt-qq',text:'QQ',value:'',view:'account.update.qq'}
					]},
					{id:8005,iconCls:'f-mt mt-out-audit',text:'账户安全',expanded:true,children:[
						{leaf:true,id:800501,iconCls:'f-mt mt-password',text:'登陆密码',value:'',view:'account.update.password'},
						{leaf:true,id:800502,iconCls:'f-mt mt-password-safe',text:'安全密码',value:'',view:'account.update.passwordSafe'}
					]}
				]
			}
		]
	}
})
