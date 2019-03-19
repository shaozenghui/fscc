import Vue from 'vue'
import Router from 'vue-router'
import routes from './router'
import { setTitle, getToken } from '@/lib/util'
import store from '@/store'
import MenuList from '@/views/home/menuList'
import iView from 'iview'
Vue.use(Router)
const router = new Router({
  // mode: process.env.NODE_ENV === 'production' ? 'history' : 'hash',
  routes
})

const setSuperuser = (list, arr) => {
  return list.filter((item, index) => {
    if (arr[item.title]) {
      if (item.children) item.children = setSuperuser(item.children, arr)
      return false
    } else return true
  })
}
router.beforeEach((to, from, next) => {
  let superuser = getToken('superuser')
  if (superuser === 'false') {
    let MenuLists = setSuperuser(MenuList, store.state.accountNumber.SuperuserList)
    store.commit('setSuperuser', MenuLists)
  }
  iView.LoadingBar.start()
  to.meta && setTitle(to.meta.title)
  const token = getToken()
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (token) {
      if (to.name !== 'login') next()
      else next({ name: '/' })
    } else {
      if (to.name !== 'login') next({ name: 'login' })
      else next()
    }
  } else next()
})

router.afterEach((to, from) => {
  // 结束Loading
  iView.LoadingBar.finish()
})
export default router
