import { SaveExcel } from '@/api/excel-import'

const state = {
  dataList: []
}
const getters = {
  ExcelDataList (state) {
    return state.dataList
  }
}
const actions = {
  getSaveExcel ({ commit, state }, data) {
    return new Promise((resolve, reject) => {
      SaveExcel(data).then(res => {
        console.log(res)
        if (res.code === '200') {
          resolve()
        } else reject(res)
      }).catch(err => {
        reject(err)
      })
    })
  }
}
const mutations = {

}

export default {
  state,
  getters,
  actions,
  mutations
}
