import { getPreWeekData } from '@/api/preWeek'
import { GETPREWEEkDATALIST } from '../types'
const state = {
  dataList: []
}
const getters = {
  PreWeekDataList (state) {
    return state.dataList
  }
}
const actions = {
  getPreWeekDataList ({ commit, state }) {
    getPreWeekData().then(resp => {
      commit(GETPREWEEkDATALIST, resp)
    }).catch(err => {
      console.log(err)
    })
  }
}
const mutations = {
  [GETPREWEEkDATALIST] (state, data) {
    state.dataList = data
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
