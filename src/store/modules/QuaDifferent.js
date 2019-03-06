import { getQuaDifferentData } from '@/api/QuaDifferent'
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
  getQuaDifferentDataList ({ commit, state }) {
    getQuaDifferentData().then(resp => {
      commit(GETQUADIFFERENTDATALIST, resp)
    }).catch(err => {
      console.log(err)
    })
  }
}
const mutations = {
  [GETQUADIFFERENTDATALIST] (state, data) {
    state.dataList = data
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
