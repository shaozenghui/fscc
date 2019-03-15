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
        <Menu
        :active-name='activeName'
        :open-names="openNames"
        theme='dark'
        class="menu"
        width="auto"
        accordion
        @on-select='onSelect'
        @on-open-change='onOpenChange'>
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
  computed: {
    ...mapState({
      activeName: state => state.activeName,
      openNames: state => {
        let arr = []
        arr.push(state.openNames)
         return arr
      }
    })
  },
  methods: {
    ...mapActions([
      'getLogOut'
    ]),
    loginOut(){
      this.getLogOut().then(() => {
        this.$Message.success('退出登录成功！')
        this.$router.push({name:'login'})
      }).catch(err => {    -
        this.$Message.error('退出登录失败！')
      })
    },
    onSelect(name){
      this.$store.commit('activeName',name)
    },
    onOpenChange(name){
      // console.log(name)
    }
  },
  mounted(){
    this.MenuList = this.$store.state.accountNumber.MenuLists
  }

}
</script>
