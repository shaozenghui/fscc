import { MemberListData, MemberAdd, MemberUpdate, MemberDelete } from '@/api/MemberList'
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
    MemberListData().then(resp => {
      commit(GETMEBERLISTDATALIST, resp.result)
    }).catch(err => {
      console.log(err)
    })
  },
  getMemberAdd ({ commit, state }, data) {
    return new Promise((resolve, reject) => {
      MemberAdd(data).then(resp => {
        if (resp.code === '200') {
          resolve(resp)
        } else reject(resp)
      }).catch(err => {
        reject(err)
      })
    })
  },
  getMemberUpdate ({ commit, state }, data) {
    return new Promise((resolve, reject) => {
      MemberUpdate(data).then(resp => {
        if (resp.code && resp.code === '200') {
          resolve(resp)
        }
        resolve(resp)
      }).catch(err => {
        reject(err)
      })
    })
  },
  getMemberDelete ({ commit, state }, data) {
    return new Promise((resolve, reject) => {
      MemberDelete(data).then(resp => {
        if (resp.code && resp.code === '200') {
          resolve(resp)
        }
        resolve(resp)
      }).catch(err => {
        reject(err)
      })
    })
  }
}
const mutations = {
  [GETMEBERLISTDATALIST] (state, data) {
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
