<template>
<div class="layout">
  <Layout style="height:100%">
    <Header class="logo">
      财务结算系统
        <Dropdown class="HeaderDown">
          <span>
              张三
          </span>
          <DropdownMenu slot="list">
              <DropdownItem>
                 <a href="javascript:;" @click="loginOut">退出登录</a>
              </DropdownItem>
          </DropdownMenu>
        </Dropdown>
    </Header>
    <Layout>
      <Sider hide-trigger>
        <Menu active-name="1" theme='dark' class="menu" width="auto" accordion>
            <template v-for="(v, k) in menuList">
                <MenuItem :name="v.name" :key="`MenuList_item${k}`" v-if='!v.children' >
                  <router-link :to='v.path'>
                    <Icon :type="v.icon" />
                    {{v.title}}
                  </router-link>
                </MenuItem>
                <menuList :item="v"  :key="`MenuList_item${k}`" v-else></menuList>
            </template>
        </Menu>
      </Sider>
      <Content class="content">
          <router-view />
      </Content>
    </Layout>
  </Layout>
</div>
</template>
<script>
import menuList from '_c/menuList'
import { setToken } from '@/lib/util'
import { mapActions } from 'vuex'
import './home.less'
export default {
  data(){
    return {
      menuList: [
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
            },
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
            },
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
            },
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
    }
  },
  components: {
    menuList
  },
  methods: {
    ...mapActions([
      'getLogOut'
    ]),
    loginOut(){
      this.getLogOut().then(() => {
        this.$Message.success('退出登录成功！')
        this.$router.push({name:'login'})
      }).catch(err => {
        this.$Message.error('退出登录失败！')
      })
    }
  }
}
</script>
