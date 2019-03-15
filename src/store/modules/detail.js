import { DetailData, SearchDetailData, PolicyUserData, PolicyUserAdd } from '@/api/detail'
import { GETDETAILDATALIST } from '../types'
const state = {
  dataList: [],
  policyUserList: [
    {
      'division_number': 'SHN20181029000314731',
      'user_id': '刘贤哲',
      'rate': 0.1,
      'id': 29
    }
  ],
  UserList: [
    [1, '刘贤哲'],
    [2, '严岚'],
    [3, '许刚']
  ]
}
const getters = {
  DetailDataList (state) {
    return state.dataList
  },
  policyUserList (state) {
    return state.policyUserList
  },
  UserList (state) {
    return state.UserList
  }
}
const actions = {
  getDetailDataList ({ commit, state }) {
    DetailData().then(res => {
      console.log(res)
      commit(GETDETAILDATALIST, res.result)
    }).catch(err => {
      console.log(err)
    })
  },
  getSearchDetailData ({ commit, state }, data) {
    return new Promise((resolve, reject) => {
      SearchDetailData(data).then(res => {
        console.log(res)
        // commit(GETDETAILDATALIST, resp)
      }).catch(err => {
        console.log(err)
      })
    })
  },
  getPolicyUserData ({ commit, state }) {
    return new Promise((resolve, reject) => {
      PolicyUserData().then(res => {
        console.log(res)
        // commit(GETDETAILDATALIST, resp)
      }).catch(err => {
        console.log(err)
      })
    })
  },
  getPolicyUserAdd ({ commit, state }, data) {
    return new Promise((resolve, reject) => {
      PolicyUserAdd(data).then(res => {
        console.log(res)
        // commit(GETDETAILDATALIST, resp)
      }).catch(err => {
        console.log(err)
      })
    })
  }
}
const mutations = {
  [GETDETAILDATALIST] (state, data) {
    state.dataList = data
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
