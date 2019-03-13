import axios from './index'

export const MemberListData = () => {
  return axios.request({
    url: '/finance/teamUser/user/index',
    method: 'get',
    data: {}
  })
}

export const MemberAdd = (data) => {
  return axios.request({
    url: '/finance/teamUser/user/add',
    method: 'post',
    data
  })
}

export const MemberUpdate = ({ id, data }) => {
  return axios.request({
    url: `/finance/teamUser/user/update/${id}`,
    method: data ? 'post' : 'get',
    data
  })
}

export const MemberDelete = (id) => {
  return axios.request({
    url: `/finance/teamUser/user/delete/${id}`,
    method: 'get',
    data: {}
  })
}
