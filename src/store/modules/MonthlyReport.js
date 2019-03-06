import { getMonthlyReportData } from '@/api/MonthlyReport'
import { GETMONTHLYREPORTDATALIST } from '../types'
const state = {
  dataList: []
}
const getters = {
  MonthlyReportDataList (state) {
    return state.dataList
  }
}
const actions = {
  getMonthlyReportDataList ({ commit, state }) {
    getMonthlyReportData().then(resp => {
      commit(GETMONTHLYREPORTDATALIST, resp)
    }).catch(err => {
      console.log(err)
    })
  }
}
const mutations = {
  [GETMONTHLYREPORTDATALIST] (state, data) {
    state.dataList = data
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
