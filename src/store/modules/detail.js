import { getDetailData } from '@/api/detail'
import { GETDETAILDATALIST } from '../types'
const state = {
  dataList: []
}
const getters = {
  DetailDataList (state) {
    return state.dataList
  }
}
const actions = {
  getDetailDataList ({ commit, state }) {
    getDetailData().then(resp => {
      commit(GETDETAILDATALIST, resp)
    }).catch(err => {
      console.log(err)
    })
  }
}
const mutations = {
  [GETDETAILDATALIST] (state, data) {
    state.dataList = data
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
