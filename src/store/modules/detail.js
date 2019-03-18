import { DetailData, SearchDetailData, PolicyUserData, PolicyUserAdd, PolicyUserUpdate, PolicyUserDelete } from '@/api/detail'
import { GETDETAILDATALIST, GETPOLICYUSERLIST, GETPOLICYPERLIST } from '../types'
const state = {
  dataList: [],
  policyUserList: [],
  policyPerList: []
}
const getters = {
  DetailDataList (state) {
    return state.dataList
  },
  policyUserList (state) {
    return state.policyUserList
  },
  policyPerList (state) {
    return state.policyPerList
  }
}
const actions = {
  getDetailDataList ({ commit, state }) {
    DetailData().then(res => {
      commit(GETDETAILDATALIST, res.result)
    }).catch(err => {
      console.log(err)
    })
  },
  getSearchDetailData ({ commit, state }, data) {
    return new Promise((resolve, reject) => {
      SearchDetailData(data).then(res => {
        commit(GETDETAILDATALIST, res.result)
      }).catch(err => {
        reject(err)
      })
    })
  },
  getPolicyUserData ({ commit, state }, data) {
    return new Promise((resolve, reject) => {
      PolicyUserData(data).then(res => {
        commit(GETPOLICYUSERLIST, res.result)
      }).catch(err => {
        reject(err)
      })
    })
  },
  getPolicyUserAdd ({ commit, state }, data) {
    return new Promise((resolve, reject) => {
      PolicyUserAdd(data).then(res => {
        if (data) {
          if (res.code === '200') {
            resolve()
          } else reject(res.code)
        } else {
          commit(GETPOLICYPERLIST, res.user_list)
        }
      }).catch(err => {
        reject(err)
      })
    })
  },
  getPolicyUserUpdate ({ commit, state }, data) {
    return new Promise((resolve, reject) => {
      PolicyUserUpdate(data).then(res => {
        if (res.code) {
          if (res.code === '200') {
            resolve()
          } else reject(res)
        } else resolve(res)
      }).catch(err => {
        reject(err)
      })
    })
  },
  getPolicyUserDelete ({ commit, state }, data) {
    return new Promise((resolve, reject) => {
      PolicyUserDelete(data).then(res => {
        if (res.code === '200') {
          resolve()
        } else reject(res)
      }).catch(err => {
        reject(err)
      })
    })
  }
}
const mutations = {
  [GETDETAILDATALIST] (state, data) {
    state.dataList = data
  },
  [GETPOLICYUSERLIST] (state, data) {
    state.policyUserList = data
  },
  [GETPOLICYPERLIST] (state, data) {
    data.map(item => {
      item[0] = item[0].toString()
    })
    state.policyPerList = data
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
