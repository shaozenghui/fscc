import Home from '@/views/home'
export default [
  {
    path: '/',
    component: Home,
    meta: {
      title: '首页'
    },
    children: [
      {
        path: 'excel-import',
        name: 'excel-import',
        component: () => import('@/views/excel-import.vue'),
        meta: {
          title: 'Excel导入'
        }
      },
      {
        path: '',
        redirect: 'excel-import'
      },
      {
        path: 'InsuranceProduct-import',
        name: 'InsuranceProduct',
        component: () => import('@/views/InsuranceProduct-import.vue'),
        meta: {
          title: '保险产品导入'
        }
      },
      {
        path: 'AddInsuranceProduct',
        name: 'AddInsuranceProduct',
        component: () => import('@/views/AddInsuranceProduct.vue'),
        meta: {
          title: '添加保险产品'
        }
      },
      {
        path: 'detail',
        name: 'detail',
        component: () => import('@/views/detail.vue'),
        meta: {
          title: '详情表'
        }
      },
      {
        path: 'perWeek',
        name: 'perWeek',
        component: () => import('@/views/perWeek.vue'),
        meta: {
          title: '业绩周报表'
        }
      },
      {
        path: 'MonthlyReport',
        name: 'MonthlyReport',
        component: () => import('@/views/MonthlyReport.vue'),
        meta: {
          title: '业绩月报表'
        }
      },
      {
        path: 'PerPerfSummary',
        name: 'PerPerfSummary',
        component: () => import('@/views/PerPerfSummary.vue'),
        meta: {
          title: '个人业绩汇总表'
        }
      },
      {
        path: 'WageDifferent',
        name: 'WageDifferent',
        component: () => import('@/views/WageDifferent.vue'),
        meta: {
          title: '工资差异表'
        }
      },
      {
        path: 'QuaDifferent',
        name: 'QuaDifferent',
        component: () => import('@/views/QuaDifferent.vue'),
        meta: {
          title: '季度奖差异表'
        }
      },
      {
        path: 'PlaDifferent',
        name: 'PlaDifferent',
        component: () => import('@/views/PlaDifferent.vue'),
        meta: {
          title: '平台奖差异表'
        }
      },
      {
        path: 'teamList',
        name: 'teamList',
        component: () => import('@/views/teamList.vue'),
        meta: {
          title: '团队列表'
        }
      },
      {
        path: 'MemberList',
        name: 'MemberList',
        component: () => import('@/views/MemberList.vue'),
        meta: {
          title: '成员列表'
        }
      },
      {
        path: 'ProductCommissionRate',
        name: 'ProductCommissionRate',
        component: () => import('@/views/ProductCommissionRate.vue'),
        meta: {
          title: '产品佣金率设置'
        }
      },
      {
        path: 'MemberInformation',
        name: 'MemberInformation',
        component: () => import('@/views/MemberInformation.vue'),
        meta: {
          title: '员工信息'
        }
      },
      {
        path: 'PersonalSet',
        name: 'PersonalSet',
        component: () => import('@/views/PersonalSet.vue'),
        meta: {
          title: '个人设置'
        }
      }

    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login.vue'),
    meta: {
      title: '登录'
    }
  },
  {
    path: '/RetrievePassword',
    name: 'RetrievePassword',
    component: () => import('@/views/RetrievePassword.vue'),
    meta: {
      title: '找回密码'
    }
  }
]
