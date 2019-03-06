import { getExcelData } from '@/api/excel-import'
import { GETEXCELDATALIST } from '../types'
const state = {
  dataList: []
}
const getters = {
  ExcelDataList (state) {
    return state.dataList
  }
}
const actions = {
  getExcelDataList ({ commit, state }) {
    getExcelData().then(resp => {
      commit(GETEXCELDATALIST, resp)
    }).catch(err => {
      console.log(err)
    })
  }
}
const mutations = {
  [GETEXCELDATALIST] (state, data) {
    state.dataList = data
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
