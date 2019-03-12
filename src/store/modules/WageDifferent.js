import { WageDifferentData } from '@/api/WageDifferent'
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
  getWageDifferentDataList ({ commit, state }) {
    WageDifferentData().then(resp => {
      console.log(resp)
      commit(GETWAGEDIFFERENTDATALIST, resp.result)
    }).catch(err => {
      console.log(err)
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

