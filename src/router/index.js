import Vue from 'vue'
import Router from 'vue-router'
import routes from './router'
import { setTitle, getToken } from '@/lib/util'

Vue.use(Router)
const router = new Router({
  mode: process.env.NODE_ENV === 'production' ? 'history' : 'hash',
  routes
})

router.beforeEach((to, from, next) => {
  to.meta && setTitle(to.meta.title)
  const token = getToken()
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (to.name !== 'login') {
      if (token) next()
      else next({ name: 'login' })
    } else {
      if (token) next({ name: '/' })
      else next()
    }
  } else next()
})

router.afterEach((to, from) => {
  // 结束Loading

})
export default router
