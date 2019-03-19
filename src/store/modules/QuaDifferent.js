import { getQuaDifferentData, QuaDifferentUpdateQuarter } from '@/api/QuaDifferent'
import { GETQUADIFFERENTDATALIST } from '../types'
const state = {
  dataList: []
}
const getters = {
  QuaDifferentDataList (state) {
    return state.dataList
  }
}
const actions = {
  getQuaDifferentDataList ({ commit, state }, data) {
    return new Promise((resolve, reject) => {
      getQuaDifferentData().then(res => {
        resolve()
        commit(GETQUADIFFERENTDATALIST, res.result)
      }).catch(err => {
        reject(err)
      })
    })
  },
  getQuaDifferentUpdateQuarter ({ commit, state }, data) {
    return new Promise((resolve, reject) => {
      QuaDifferentUpdateQuarter(data).then(res => {
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
  [GETQUADIFFERENTDATALIST] (state, data) {
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
