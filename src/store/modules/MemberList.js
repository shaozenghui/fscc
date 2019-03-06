import { getMemberListData } from '@/api/MemberList'
import { GETMEBERLISTDATALIST } from '../types'
const state = {
  dataList: []
}
const getters = {
  MemberListDataList (state) {
    return state.dataList
  }
}
const actions = {
  getMemberListDataList ({ commit, state }) {
    getMemberListData().then(resp => {
      commit(GETMEBERLISTDATALIST, resp)
    }).catch(err => {
      console.log(err)
    })
  }
}
const mutations = {
  [GETMEBERLISTDATALIST] (state, data) {
    state.dataList = data
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
