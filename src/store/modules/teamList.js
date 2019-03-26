import { TeamListData, TeamListUserList, TeamListAdd, TeamListUpdate, TeamListDelete } from '@/api/teamList'
import { GETTEAMLISTDATALIST, GETUSERLIST } from '../types'

const state = {
  dataList: [],
  user_list: []
}
const getters = {
  TeamListDataList (state) {
    return state.dataList
  },
  UserList (state) {
    return state.user_list
  }
}
const actions = {
  getTeamListDataList ({ commit, state }) {
    TeamListData().then(resp => {
      commit(GETTEAMLISTDATALIST, resp.result)
    }).catch(err => {
      console.log(err)
    })
  },
  getTeamListUserList ({ commit, state }) {
    TeamListUserList().then(resp => {
      commit(GETUSERLIST, resp.user_list)
    }).catch(err => {
      console.log(err)
    })
  },
  getTeamListAdd ({ commit, state }, data) {
    return new Promise((resolve, reject) => {
      TeamListAdd(data).then(resp => {
        if (resp.code === '200') {
          resolve(resp)
        } else reject(resp)
      }).catch(err => {
        reject(err)
      })
    })
  },
  getTeamListUpdate ({ commit, state }, data) {
    return new Promise((resolve, reject) => {
      TeamListUpdate(data).then(resp => {
        if (resp.code) {
          if (resp.code === '200') {
            resolve(resp)
          } else reject(resp)
        } else {
          resolve(resp)
        }
      }).catch(err => {
        reject(err)
      })
    })
  },
  getTeamListDelete ({ commit, state }, id) {
    return new Promise((resolve, reject) => {
      TeamListDelete(id).then(resp => {
        if (resp.code === '200') {
          resolve()
        } else reject(resp)
      }).catch(err => {
        reject(err)
      })
    })
  }
}
const mutations = {
  [GETTEAMLISTDATALIST] (state, data) {
    data.map((item, index) => {
      item.serialNumber = index + 1
    })
    state.dataList = data
  },
  [GETUSERLIST] (state, data) {
    state.user_list = data
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
