import { getInsuranceProductData } from '@/api/InsuranceProduct-import'
import { GETINSURANCEPRODUCTDATALIST } from '../types'
const state = {
  dataList: []
}
const getters = {
  InsuranceProductDataList (state) {
    return state.dataList
  }
}
const actions = {
  getInsuranceProductDataList ({ commit, state }) {
    getInsuranceProductData().then(resp => {
      commit(GETINSURANCEPRODUCTDATALIST, resp)
    }).catch(err => {
      console.log(err)
    })
  }
}
const mutations = {
  [GETINSURANCEPRODUCTDATALIST] (state, data) {
    state.dataList = data
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
