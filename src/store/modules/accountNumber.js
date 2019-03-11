import { Login, LogOut, passwordChange, usernameChange, sendCode } from '@/api/accountNumber'
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
  },
  getusernameChange ({ commit, state }, data) {
    return new Promise((resolve, reject) => {
      usernameChange(data).then(res => {
        resolve(res)
      }).catch(err => {
        reject(err)
      })
    })
  },
  getsendCode ({ commit, state }, data) {
    return new Promise((resolve, reject) => {
      sendCode(data).then(res => {
        console.log(res)
        // if (res.code === '200') {
        //   setToken('')
        //   resolve()
        // } else reject(res.code)
      }).catch(err => {
        reject(err)
      })
    })
  },
  getPasswordChange ({ commit, state }, data) {
    return new Promise((resolve, reject) => {
      passwordChange(data).then(res => {
        if (res.code === '200') {
          setToken('')
          resolve()
        } else reject(res.code)
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
