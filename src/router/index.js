import Vue from 'vue'
import Router from 'vue-router'
import routes from './router'
import { setTitle } from '@/lib/util'

Vue.use(Router)
const router = new Router({
  // mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {

  to.meta && setTitle(to.meta.title)
  next()
  // 加载Loading
  // console.log(localStorage.flag && JSON.parse(localStorage.flag))
  if (to.name !== 'login') {
    if (to.name === 'RetrievePassword') {
      next()
    } else if (localStorage.flag === 'true') next()
    else next({ name: 'login' })
  } else {
    if (localStorage.flag === 'true') next({ name: '/' })
    else next()
  }
})

router.afterEach((to, from) => {
  // 结束Loading

})
export default router
