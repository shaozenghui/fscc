import { getPlaDifferentData } from '@/api/PlaDifferent'
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
  getPlaDifferentDataList ({ commit, state }) {
    getPlaDifferentData().then(resp => {
      commit(GETPLADIFFERENTDATALIST, resp)
    }).catch(err => {
      console.log(err)
    })
  }
}
const mutations = {
  [GETPLADIFFERENTDATALIST] (state, data) {
    state.dataList = data
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
