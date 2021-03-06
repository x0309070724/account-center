Ext.define('APP.data.oaNav', {
  alternateClassName: 'oaNav',
  statics: {
    navigation: [
// 			{id:9999,iconCls:'f-mt mt-dollar-4',text:'CRM',view:'sd.index',
// 				children:[
// 					{leaf:true,id:1,view:'main'},
// 					{leaf:true,id:2,view:'main.login'}
// 				]
// 			},
// 			{id:103001,iconCls:'f-mt mt-dollar-4',text:'CRM',view:'sd.main.sales',
// 				children:[
// 					{id:10300101,iconCls:'f-mt mt-out-audit',text:'销售报表',expanded:true,children:[
// 						{leaf:true,id:1030010101,iconCls:'f-mt mt-staff',text:'销售员',view:'sd.analysis.sales.objects',parameter:{menu:'staff',datepart:'month',field:'resources'}},
// 						{leaf:true,id:1030010102,iconCls:'f-mt mt-department',text:'部门',view:'sd.analysis.sales.objects',parameter:{menu:'t1',datepart:'month',field:'resources'}},
// 						{leaf:true,id:1030010103,iconCls:'f-mt mt-team',text:'网点',view:'sd.analysis.sales.objects',parameter:{menu:'branch',datepart:'month',field:'resources'}},
// 						{leaf:true,id:1030010104,iconCls:'f-mt mt-day',text:'日报',view:'sd.analysis.sales.time',parameter:{datepart:'day',field:'resources'}},
// 						{leaf:true,id:1030010105,iconCls:'f-mt mt-week',text:'周报',view:'sd.analysis.sales.time',parameter:{datepart:'week',field:'resources'}},
// 						{leaf:true,id:1030010106,iconCls:'f-mt mt-month',text:'月报',view:'sd.analysis.sales.time',parameter:{datepart:'month',field:'resources'}}
// 					]}
// 				]
// 			},
// 			{id:103002,iconCls:'f-mt mt-dollar-4',text:'CRM',view:'sd.main.results',
// 				children:[
// 					{id:10300201,iconCls:'f-mt mt-out-audit',text:'业绩报表',expanded:true,children:[
// 						{leaf:true,id:1030020101,iconCls:'f-mt mt-staff',text:'销售员',view:'sd.analysis.results.objects',parameter:{menu:'staff',datepart:'month',field:'funds'}},
// 						{leaf:true,id:1030020102,iconCls:'f-mt mt-department',text:'部门',view:'sd.analysis.results.objects',parameter:{menu:'t1',datepart:'month',field:'funds'}},
// 						{leaf:true,id:1030020103,iconCls:'f-mt mt-team',text:'网点',view:'sd.analysis.results.objects',parameter:{menu:'branch',datepart:'month',field:'funds'}},
// 						{leaf:true,id:1030020104,iconCls:'f-mt mt-day',text:'日报',view:'sd.analysis.results.time',parameter:{datepart:'day',field:'funds'}},
// 						{leaf:true,id:1030020105,iconCls:'f-mt mt-week',text:'周报',view:'sd.analysis.results.time',parameter:{datepart:'week',field:'funds'}},
// 						{leaf:true,id:1030020106,iconCls:'f-mt mt-month',text:'月报',view:'sd.analysis.results.time',parameter:{datepart:'month',field:'funds'}}
// 					]},
// 					{id:10300202,iconCls:'f-mt mt-out-audit',text:'账户',expanded:true,children:[
// 						{leaf:true,id:1030020201,iconCls:'f-mt mt-account-strate',text:'申请记录',description:'查询账户申请的处理结果',view:'sd.account.applyRecord'},
// 						{leaf:true,id:1030020202,iconCls:'f-mt mt-fulltime',text:'账户查询',description:'查询账户详细信息',view:'sd.account.record'},
// 						{leaf:true,id:1030020203,iconCls:'f-mt mt-customer',text:'账户报表',description:'交易账户数据统计',view:'sd.account.accountReport',parameter:{field:'funds'}},
// 						{leaf:true,id:1030020204,iconCls:'f-mt mt-additve',text:'代理报表',description:'代理账户数据统计',view:'sd.account.agentReport',parameter:{field:'agent'}}
// 					]},
// 					{id:10300203,iconCls:'f-mt mt-out-audit',text:'出入金',expanded:true,children:[
// 						{leaf:true,id:1030020301,iconCls:'f-mt mt-access-gold-1',text:'申请记录',description:'查询账户出入金的处理结果',view:'sd.funds.applyRecord'},
// 						{leaf:true,id:1030020302,iconCls:'f-mt mt-parttime-job',text:'出入金查询',description:'查询账户历史出入金记录',view:'sd.funds.record'}
// 					]}
// 				]
// 			},
			{id:1000,iconCls:'f-mt mt-dollar-4',text:'代理专区',view:'agent.index',
				children:[
					{id:1001,iconCls:'f-mt mt-out-audit',text:'账户相关',expanded:true,children:[
						{leaf:true,id:100101,iconCls:'f-mt mt-staff',text:'申请记录',view:'agent.account.record'},
						{leaf:true,id:100102,iconCls:'f-mt mt-department',text:'账户管理',view:'agent.account.manage'},
						{leaf:true,id:100103,iconCls:'f-mt mt-team',text:'仓位总结',view:'agent.account.statistics'}
					]},
					{id:1002,iconCls:'f-mt mt-out-audit',text:'账户佣金',expanded:true,children:[
						{leaf:true,id:100201,iconCls:'f-mt mt-staff',text:'佣金明细',view:'agent.commission.detail'},
						{leaf:true,id:100202,iconCls:'f-mt mt-department',text:'佣金统计',view:'agent.commission.statistics'}
					]}
				]
			},
      {
        id: 2000, iconCls: 'f-mt mt-dollar-4', text: '交易', view: 'transition.index',
        children: [
          {
            id: 2004, iconCls: 'f-mt mt-out-audit', text: '交易报表', expanded: true, children: [
            {
              leaf: true,
              id: 200401,
              iconCls: 'f-mt mt-customer',
              text: '交易报表（日、周、月）',
              view: 'transition.report.report',
              // parameter: {field: 'funds'}
            }
          ]
          },
          {
            id: 2005, iconCls: 'f-mt mt-out-audit', text: '交易分析', expanded: true, children: [
            {
              leaf: true,
              id: 200501,
              iconCls: 'f-mt mt-customer',
              text: '综合分析',
              view: 'transition.analysis.complex',
              // parameter: {field: 'funds'}
            },
            {
              leaf: true,
              id: 200502,
              iconCls: 'f-mt mt-customer',
              text: '商品',
              view: 'transition.analysis.symbol',
              // parameter: {field: 'funds'}
            }
          ]
          },
          {
            id: 2006, iconCls: 'f-mt mt-out-audit', text: '历史交易', expanded: true, children: [
            {
              leaf: true,
              id: 200604,
              iconCls: 'f-mt mt-customer',
              text: '入金记录',
              view: 'transition.history.record',
              parameter: {app: 'deposit'}
            },
            {
              leaf: true,
              id: 200605,
              iconCls: 'f-mt mt-customer',
              text: '出金记录',
              view: 'transition.history.record',
              parameter: {app: 'withdrawal'}
            },
            {
              leaf: true,
              id: 200606,
              iconCls: 'f-mt mt-customer',
              text: '信用记录',
              view: 'transition.history.record',
              parameter: {app: 'credit'}
            }
          ]
          }
        ]
      },

      {
        id: 2007, iconCls: 'f-mt mt-out-audit', text: '持仓交易', expanded: true, children: [
        {
          leaf: true,
          id: 200701,
          iconCls: 'f-mt mt-customer',
          text: '持仓订单',
          view: 'transition.position.order',
          // parameter: {app: 'deposit'}
        },
        {
          leaf: true,
          id: 200702,
          iconCls: 'f-mt mt-customer',
          text: '仓位汇总',
          view: 'transition.position.summary',
          // parameter: {app: 'withdrawal'}
        }
      ]
      },
      {
        id: 3000, iconCls: 'f-mt mt-dollar-4', text: '出入金', view: 'deopwith.index',
        children: [
          {
            id: 3001, iconCls: 'f-mt mt-out-audit', text: '入金相关', expanded: true, children: [
            {
              leaf: true,
              id: 300101,
              iconCls: 'f-mt mt-tree-3',
              text: '账户入金',
              view: 'depowith.deposit.index'
            },
            {
              leaf: true,
              id: 300102,
              iconCls: 'f-mt mt-tree-2',
              text: '入金记录',
              view: 'depowith.deposit.deposit',
              parameter: {app: 'deposit'}
            },
            {
              leaf: true, id: 300103, iconCls: 'f-mt mt-tree-2', text: '入金统计',
              view: 'depowith.deposit.statistics',
              parameter: {field: 'deposit'}
            }
          ]
          },
          {
            id: 3002, iconCls: 'f-mt mt-out-audit', text: '出金相关', expanded: true, children: [
            {leaf: true, id: 300201, iconCls: 'f-mt mt-tree-3', text: '账户出金', view: 'depowith.withdrawal.index'},
            {
              leaf: true, id: 300202, iconCls: 'f-mt mt-tree-2', text: '出金记录',
              view: 'depowith.withdrawal.withdrawal',
              parameter: {app: 'withdrawal'}
            },
            {
              leaf: true, id: 300203, iconCls: 'f-mt mt-tree-2', text: '出金统计', view: 'depowith.withdrawal.statistics',
              parameter: {field: 'withdrawal'}
            }
            // {leaf: true, id: 300102, iconCls: 'f-mt mt-tree-2', text: '入金统计', view: 'hr.staff.tree'}
          ]
          },
          {
            id: 3003, iconCls: 'f-mt mt-out-audit', text: '转账相关', expanded: true, children: [
            {leaf: true, id: 300301, iconCls: 'f-mt mt-tree-3', text: '账户转账', view: 'depowith.transfer.account'},
            {leaf: true, id: 300302, iconCls: 'f-mt mt-tree-2', text: '转账记录', view: 'depowith.transfer.record'}
          ]
          }
        ]
      },
      {
        id: 8000, iconCls: 'f-mt mt-dollar-4', text: '系统主页', view: 'system.index',
        children: [
          {
            id: 8001, iconCls: 'f-mt mt-out-audit', text: '账户', expanded: true, children: [
            {
              leaf: true,
              id: 800101,
              iconCls: 'f-mt mt-management',
              text: '账户信息',
              description: '账户详情',
              view: 'system.account.record'
            }
          ]
          },
          {
            id: 8002, iconCls: 'f-mt mt-out-audit', text: '交易', expanded: true, children: [
            {leaf: true, id: 800201, iconCls: 'f-mt mt-tree-3', text: '历史订单', view: 'system.account.order'}
          ]
          },
          {
            id: 8004, iconCls: 'f-mt mt-out-audit', text: '订单', expanded: true, children: [
            {
              leaf: true,
              id: 800401,
              iconCls: 'f-mt mt-mobile',
              text: '持仓订单',
              value: '',
              view: 'system.account.position'
            }
          ]
          },
          {
            id: 8005, iconCls: 'f-mt mt-out-audit', text: '技术分析', expanded: true, children: [
            {
              leaf: true,
              id: 800501,
              iconCls: 'f-mt mt-password',
              text: '分析详情',
              value: '',
              // view: 'account.update.password'
            }
          ]
          }
        ]
      },
      {
        id: 7000, iconCls: 'f-mt mt-dollar-4', text: '账户管理', view: 'account.index',
        children: [
          {
            id: 7001, iconCls: 'f-mt mt-out-audit', text: '常用', expanded: true, children: [
            {
              leaf: true,
              id: 700101,
              iconCls: 'f-mt mt-dollar-4',
              text: '账户信息',
              description: '',
              view: 'account.info.index'
            },
            {
              leaf: true,
              id: 700102,
              iconCls: 'f-mt mt-results',
              text: '账户统计',
              description: '',
              view: 'account.statistics.index'
            },
            {
              leaf: true,
              id: 700103,
              iconCls: 'f-mt mt-dollar-1',
              text: '资产记录',
              description: '',
              view: 'account.asset.record'
            }
          ]
          },
          {
            id: 7002, iconCls: 'f-mt mt-out-audit', text: '资料更改', expanded: true, children: [
            {leaf: true, id: 700201, iconCls: 'f-mt mt-tree-3', text: '更改杠杆', view: 'account.update.leverage'},
            {leaf: true, id: 700202, iconCls: 'f-mt mt-mobile', text: '更换手机', view: 'account.update.mobile'},
            {leaf: true, id: 700203, iconCls: 'f-mt mt-email', text: '更换电邮', view: 'account.update.email'}
          ]
          },
          {
            id: 7003, iconCls: 'f-mt mt-out-audit', text: '安全设置', expanded: true, children: [
            {
              leaf: true,
              id: 700301,
              iconCls: 'f-mt mt-password',
              text: '主密码',
              value: '',
              view: 'account.update.password'
            },
            {
              leaf: true,
              id: 700302,
              iconCls: 'f-mt mt-password-safe',
              text: '投资人密码',
              value: '',
              view: 'account.update.passwordInvestor'
            }
          ]
          }
        ]
      }
    ]
  }
});
