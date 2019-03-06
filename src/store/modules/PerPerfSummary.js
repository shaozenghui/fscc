import { getPerPerfSummaryData } from '@/api/PerPerfSummary'
import { GETPERPERFSUMMARYDATALIST } from '../types'
const state = {
  dataList: []
}
const getters = {
  PerPerfSummaryDataList (state) {
    return state.dataList
  }
}
const actions = {
  getPerPerfSummaryDataList ({ commit, state }) {
    getPerPerfSummaryData().then(resp => {
      commit(GETPERPERFSUMMARYDATALIST, resp)
    }).catch(err => {
      console.log(err)
    })
  }
}
const mutations = {
  [GETPERPERFSUMMARYDATALIST] (state, data) {
    state.dataList = data
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
