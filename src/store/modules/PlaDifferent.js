import { getPlaDifferentData, QuaDifferentUpdatePlatform } from '@/api/PlaDifferent'
import { GETPLADIFFERENTDATALIST } from '../types'
const state = {
  dataList: []
}
const getters = {
  PlaDifferentDataList (state) {
    return state.dataList
  }
}
const actions = {
  getPlaDifferentDataList ({ commit, state }, data) {
    return new Promise((resolve, reject) => {
      getPlaDifferentData(data).then(res => {
        resolve()
        commit(GETPLADIFFERENTDATALIST, res.result)
      }).catch(err => {
        reject(err)
      })
    })
  },
  getQuaDifferentUpdatePlatform ({ commit, state }, data) {
    return new Promise((resolve, reject) => {
      QuaDifferentUpdatePlatform(data).then(res => {
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
  [GETPLADIFFERENTDATALIST] (state, data) {
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
