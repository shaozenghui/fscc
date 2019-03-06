import { getTeamListData } from '@/api/teamList'
import { GETTEAMLISTDATALIST } from '../types'
const state = {
  dataList: []
}
const getters = {
  TeamListDataList (state) {
    return state.dataList
  }
}
const actions = {
  getTeamListDataList ({ commit, state }) {
    getTeamListData().then(resp => {
      commit(GETTEAMLISTDATALIST, resp)
    }).catch(err => {
      console.log(err)
    })
  }
}
const mutations = {
  [GETTEAMLISTDATALIST] (state, data) {
    state.dataList = data
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
