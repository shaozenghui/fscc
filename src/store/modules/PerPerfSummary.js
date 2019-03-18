import { getPerPerfSummaryData, DownloadPerPerfSummary } from '@/api/PerPerfSummary'
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
  getPerPerfSummaryDataList ({ commit, state }, data) {
    return new Promise((resolve, reject) => {
      getPerPerfSummaryData(data).then(resp => {
        console.log(resp.result)
        resolve()
        commit(GETPERPERFSUMMARYDATALIST, resp.result)
      }).catch(err => {
        reject(err)
      })
    })
  },
  getDownloadPerPerfSummary ({ commit, state }, data) {
    return new Promise((resolve, reject) => {
      DownloadPerPerfSummary(data).then(resp => {
        console.log(resp)
        if (resp.code === '200') {
          resolve(resp.url)
        } else reject(resp)
      }).catch(err => {
        reject(err)
      })
    })
  }
}
const mutations = {
  [GETPERPERFSUMMARYDATALIST] (state, data) {
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

