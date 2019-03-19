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
        active-name='1-1'
        :open-names="['1']"
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
      MenuList:[]
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
    },
    // onSelect(name){
    //   this.$store.commit('activeName',name)
    //   this.$refs.side_menu.updateOpened()
    //   this.$refs.side_menu.updateActiveName()
    // },
    // onOpenChange(name){
    //   // console.log(name)
    //   // this.$store.commit('openNames',name)
    // }
  },
  mounted(){
    this.MenuList = this.$store.state.accountNumber.MenuLists
  }

}
</script>
<style lang="less">
.loginOut{
  float: right;
  margin-top:15px
}
</style>
