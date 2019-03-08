import { getMemberInformationData } from '@/api/MemberInformation'
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
    getMemberInformationData().then(resp => {
      console.log(resp)
      commit(GETMEBERINFORMATIONDATALIST, resp)
    }).catch(err => {
      console.log(err)
    })
  }
}
const mutations = {
  [GETMEBERINFORMATIONDATALIST] (state, data) {
    state.dataList = data
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
