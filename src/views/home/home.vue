<template>
<div class="layout">
  <Layout style="height:100%">
    <Header class="logo">
      财务结算系统
       <i-button class="loginOut" type='primary' @click="loginOut">退出登录</i-button>
    </Header>
    <Layout>
      <Sider hide-trigger>
        <Menu ref='side_menu'
        :active-name="activeName"
        :open-names="openNames"
        theme='dark'
        class="menu"
        width="auto"
        accordion
       >
            <template v-for="(v, k) in MenuList">
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
import { mapActions, mapState } from 'vuex'
import './home.less'
export default {
  data(){
    return {
      // 侧边栏菜单列表
      MenuList:[],
      // 侧边菜单的选中项
      activeName:'',
      // 侧边菜单的展开项
      openNames:[]
    }
  },
  components: {
    menuList
  },
  methods: {
    ...mapActions([
      'getLogOut'
    ]),
    // 退出登录
    loginOut(){
      this.getLogOut().then(() => {
        this.$Message.success('退出登录成功！')
        this.$router.push({name:'login'})
      }).catch(err => {
        this.$Message.error('退出登录失败！')
      })
    }
  },
  mounted(){
    // 挂载后渲染，得到的是经过权限判断处理的菜单列表
    this.MenuList = this.$store.state.accountNumber.MenuLists
    // 根据路由设置动态菜单列表
    let path = this.$route.path
    this.activeName = path.split('/')[1]
    this.MenuList.forEach(item => {
      item.children.forEach(item2 => {
        if (item2.name === this.activeName) {
          this.openNames.push(item.name)
        }
      })
    })
    this.$nextTick(() => {
        this.$refs.side_menu.updateOpened();
        this.$refs.side_menu.updateActiveName();
    });
  }
}
</script>
<style lang="less">
.loginOut{
  float: right;
  margin-top:15px
}
</style>
