import { MemberInformationData, AddStaff, ChangeStaff } from '@/api/MemberInformation'
import { GETMEBERINFORMATIONDATALIST } from '../types'
const state = {
  dataList: []
}
const getters = {
  MemberInformationDataList (state) {
    return state.dataList
  }
}
const actions = {
  getMemberInformationDataList ({ commit, state }) {
    MemberInformationData().then(resp => {
      commit(GETMEBERINFORMATIONDATALIST, resp.result)
    }).catch(err => {
      console.log(err)
    })
  },
  getAddStaff ({ commit, state }, data) {
    return new Promise((resolve, reject) => {
      AddStaff(data).then(resp => {
        if (resp.code === '200') {
          resolve()
        } else reject(resp)
      }).catch(err => {
        reject(err)
      })
    })
  },
  getChangeStaff ({ commit, state }, data) {
    return new Promise((resolve, reject) => {
      ChangeStaff(data).then(resp => {
        console.log(resp)
        resolve(resp)
        if (resp.code && resp.code === '200') {
          resolve()
        } else reject(resp)
      }).catch(err => {
        reject(err)
      })
    })
  }
}
const mutations = {
  [GETMEBERINFORMATIONDATALIST] (state, data) {
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
