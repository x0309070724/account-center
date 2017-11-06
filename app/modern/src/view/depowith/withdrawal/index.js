Ext.define('APP.view.depowith.withdrawal.index', {
  extend: 'Ext.form.Panel',
  xtype: 'depowithWithdrawalIndex',
  controller: 'depowith.withdrawal',
  store: {
    type: 'cross',
    autoLoad: true,
    proxy: {
      url: Boot.appUrl('/withdrawal/getConfig.do')
    }
  },
  items: [
    {
      xtype: 'fieldset', name: 'mateOld', title: '账户出金', items: [
      {
        xtype: 'container', items: [{xtype: 'field', label: '出金到银行卡：'}, {
        xtype: 'button', text: '民生银行（2051）', name: 'bank'
      }]
      }
    ]
    },
    {
      xtype: 'fieldset', name: 'mateNew', title: '出金金额', items: [
      {
        xtype: 'container', items: [
        {
          xtype: 'textfield',
          name: 'newValue',
          label: '金额（$）',
          placeholder: '入金金额至少0.01（$）'
        },
        {
          xtype: 'button',
          name: 'balance',
          text: '账户余额（$）'
        }
      ]
      }
    ]
    },
    {
      xtype: 'button', name: 'submit',
      text: '确认并提交',
      ui: 'border background red large', margin: 20, handler: 'onSubmitAccountUpdate'
    }
  ],
  listeners: {
    painted: function (me) {
      // console.log(me.getStore());
      console.log(me);
      me.load(1);
    }
    // painted: function (me) {
    //   // console.log(me.getView().getStore());
    //   console.log(me);
    //   me.load(1);
    //   var bank = me.down('button[name=bank]');
    //   console.log(bank);
    // }
  }
});
