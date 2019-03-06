import { Login, LogOut } from '@/api/login'
import { setToken } from '@/lib/util'
// import { GETLOGIN } from '../types'
const state = {

}

const getters = {

}

const actions = {
  getLogin ({ commit, state }, data) {
    return new Promise((resolve, reject) => {
      Login(data).then(res => {
        if (res.code === '200' && res.token) {
          setToken(res.token)
          resolve()
        } else reject(new Error('Error'))
      }).catch(err => {
        reject(err)
      })
    })
  },
  getLogOut ({ commit, state }) {
    return new Promise((resolve, reject) => {
      LogOut().then(res => {
        if (res.code === '200') {
          setToken('')
          resolve()
        } else reject(new Error('Error'))
      }).catch(err => {
        reject(err)
      })
    })
  }
}

const mutations = {

}

export default {
  state,
  getters,
  actions,
  mutations
}
