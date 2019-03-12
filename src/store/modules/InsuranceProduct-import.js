import { InsuranceProductData, InsuranceProductUpdate, InsuranceProductAdd } from '@/api/InsuranceProduct-import'
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
    InsuranceProductData().then(resp => {
      commit(GETINSURANCEPRODUCTDATALIST, resp.result)
    }).catch(err => {
      console.log(err)
    })
  },
  getInsuranceProductDataExcel ({ commit, state }, data) {
    commit(GETINSURANCEPRODUCTDATALIST, data)
  },
  getInsuranceProductUpdate ({ commit, state }, data) {
    return new Promise((resolve, reject) => {
      InsuranceProductUpdate(data).then(resp => {
        resolve(resp)
      }).catch(err => {
        reject(err)
      })
    })
  },
  getInsuranceProductAdd ({ commit, state }, data) {
    return new Promise((resolve, reject) => {
      InsuranceProductAdd(data).then(resp => {
        if (resp.code === '200') {
          resolve(resp)
        } else reject(resp.message)
      }).catch(err => {
        reject(err)
      })
    })
  }
}
const mutations = {
  [GETINSURANCEPRODUCTDATALIST] (state, data) {
    data.map((item, index) => {
      item.serialNumber = index + 1
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
