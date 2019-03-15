import { Login, LogOut, passwordChange, usernameChange, sendCode, retrievePassword } from '@/api/accountNumber'
import { setToken } from '@/lib/util'
import MenuList from '@/views/home/menuList'
const state = {
  SuperuserList: {
    '团队': true,
    '团队列表': true,
    '员工信息': true,
    '成员列表': true
  },
  MenuLists: MenuList
}
const getters = {

}
const actions = {
  getLogin ({ commit, state }, data) {
    return new Promise((resolve, reject) => {
      Login(data).then(res => {
        if (res.code === '200' && res.token) {
          setToken(res.token)
          setToken(res.is_superuser, 'superuser')
          resolve(res)
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
          setToken('', 'superuser')
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
  },
  getsendCode ({ commit, state }, data) {
    return new Promise((resolve, reject) => {
      sendCode(data).then(res => {
        if (res.code === '200') {
          resolve()
        } else reject(res.code)
      }).catch(err => {
        reject(err)
      })
    })
  },
  getRetrievePassword ({ commit, state }, data) {
    return new Promise((resolve, reject) => {
      retrievePassword(data).then(res => {
        if (res.code === '200') {
          resolve(res)
        } else reject(res.code)
      }).catch(err => {
        reject(err)
      })
    })
  }
}

const mutations = {
  setSuperuser (state, data) {
    state.MenuLists = data
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
