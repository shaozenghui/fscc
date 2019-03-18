import { SearchPreWeekData, DownloadPreWeek } from '@/api/preWeek'
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
  getSearchPreWeekList ({ commit, state }, data) {
    return new Promise((resolve, reject) => {
      SearchPreWeekData(data).then(resp => {
        resolve()
        commit(GETPREWEEkDATALIST, resp.result)
      }).catch(err => {
        reject(err)
      })
    })
  },
  getDownloadPreWeek ({ commit, state }, data) {
    return new Promise((resolve, reject) => {
      DownloadPreWeek(data).then(res => {
        if (res.code === '200') {
          resolve(res.url)
        } else reject(res.code)
      }).catch(err => {
        reject(err)
      })
    })
  }
}
const mutations = {
  [GETPREWEEkDATALIST] (state, data) {
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
