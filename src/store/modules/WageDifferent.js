import { WageDifferentData, WageDifferentUpdatePay } from '@/api/WageDifferent'
import { GETWAGEDIFFERENTDATALIST } from '../types'
const state = {
  dataList: []
}
const getters = {
  WageDifferentDataList (state) {
    return state.dataList
  }
}
const actions = {
  getWageDifferentDataList ({ commit, state }, data) {
    return new Promise((resolve, reject) => {
      WageDifferentData(data).then(res => {
        resolve()
        commit(GETWAGEDIFFERENTDATALIST, res.result)
      }).catch(err => {
        reject(err)
      })
    })
  },
  getWageDifferentUpdatePay ({ commit, state }, data) {
    return new Promise((resolve, reject) => {
      WageDifferentUpdatePay(data).then(res => {
        if (res.code === '200') {
          resolve()
        } else reject(res.code)
      }).catch(err => {
        reject(err)
      })
    })
  }
}
const mutations = {
  [GETWAGEDIFFERENTDATALIST] (state, data) {
    data.map((item, index) => {
      item.SerialNumber = index + 1
    })
    state.dataList = data
  }
}
export default {
  state,
  getters,
  actions,
  mutations
}
