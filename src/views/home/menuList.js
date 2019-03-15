export default [
  {
    title: 'Excel导入',
    name: '1',
    icon: 'md-alarm',
    path: '/excel-import'
  },
  {
    title: '保险产品',
    name: '2',
    icon: 'md-alarm',
    children: [
      {
        title: '保险产品导入',
        name: '2-1',
        icon: 'md-alarm',
        path: '/InsuranceProduct-import'
      },
      {
        title: '添加保险产品',
        name: '2-2',
        icon: 'md-alarm',
        path: '/AddInsuranceProduct'
      }
    ]
  },
  {
    title: '详情表',
    name: '3',
    icon: 'md-alarm',
    path: '/detail'
  },
  {
    title: '业绩报表',
    name: '4',
    icon: 'md-alarm',
    children: [
      {
        title: '业绩周报表',
        name: '4-1',
        icon: 'md-alarm',
        path: '/perWeek'
      },
      {
        title: '业绩月报表',
        name: '4-2',
        icon: 'md-alarm',
        path: '/MonthlyReport'
      },
      {
        title: '个人业绩汇总表',
        name: '4-3',
        icon: 'md-alarm',
        path: '/PerPerfSummary'
      }
    ]
  },
  {
    title: '差异表',
    name: '5',
    icon: 'md-alarm',
    children: [
      {
        title: '工资差异表',
        name: '5-1',
        icon: 'md-alarm',
        path: '/WageDifferent'
      },
      {
        title: '季度奖差异表',
        name: '5-2',
        icon: 'md-alarm',
        path: '/QuaDifferent'
      },
      {
        title: '平台奖差异表',
        name: '5-3',
        icon: 'md-alarm',
        path: '/PlaDifferent'
      }
    ]
  },
  {
    title: '团队',
    name: '6',
    icon: 'md-alarm',
    children: [
      {
        title: '团队列表',
        name: '6-1',
        icon: 'md-alarm',
        path: '/teamList'
      },
      {
        title: '成员列表',
        name: '6-2',
        icon: 'md-alarm',
        path: '/MemberList'
      }
    ]
  },
  {
    title: '设置',
    name: '7',
    icon: 'md-alarm',
    children: [
      {
        title: '员工信息',
        name: '7-2',
        icon: 'md-alarm',
        path: '/MemberInformation'
      },
      {
        title: '个人设置',
        name: '7-3',
        icon: 'md-alarm',
        path: '/PersonalSet'
      }
    ]
  }
]
