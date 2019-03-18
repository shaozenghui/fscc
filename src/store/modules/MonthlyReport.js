import { SearchMonthlyReportData, DownloadMonthlyReport } from '@/api/MonthlyReport'
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
  getSearchMonthlyReportList ({ commit, state }, data) {
    return new Promise((resolve, reject) => {
      SearchMonthlyReportData(data).then(resp => {
        console.log(resp)
        resolve()
        commit(GETMONTHLYREPORTDATALIST, resp.result)
      }).catch(err => {
        reject(err)
      })
    })
  },
  getDownloadMonthlyReport ({ commit, state }, data) {
    return new Promise((resolve, reject) => {
      DownloadMonthlyReport(data).then(res => {
        if (res.code === '200') {
          resolve(res.url)
        } else reject(res.code)
      }).catch(err => {
        reject(err)
      })
    })
  }
}
const mutations = {
  [GETMONTHLYREPORTDATALIST] (state, data) {
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
