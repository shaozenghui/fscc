import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import iView from 'iview'
import './plugins/iview.js'
import 'iview/dist/styles/iview.css'
if (process.env.NODE_ENV !== 'production') require('./mock')
Vue.config.productionTip = false
Vue.use(iView)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
