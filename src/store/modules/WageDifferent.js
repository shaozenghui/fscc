import { getWageDifferentData } from '@/api/WageDifferent'
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
    getWageDifferentData().then(resp => {
      commit(GETWAGEDIFFERENTDATALIST, resp)
    }).catch(err => {
      console.log(err)
    })
  }
}
const mutations = {
  [GETWAGEDIFFERENTDATALIST] (state, data) {
    state.dataList = data
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
