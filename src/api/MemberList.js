import axios from './index'
import { getToken } from '@/lib/util'
export const MemberListData = () => {
  return axios.request({
    url: '/finance/teamUser/user/index',
    method: 'get',
    data: {},
    headers: {
      'Authorization': `Token ${getToken()}`
    }
  })
}

export const MemberAdd = (data) => {
  return axios.request({
    url: '/finance/teamUser/user/add',
    method: 'post',
    data,
    headers: {
      'Authorization': `Token ${getToken()}`
    }
  })
}

export const MemberUpdate = ({ id, data }) => {
  return axios.request({
    url: `/finance/teamUser/user/update/${id}`,
    method: data ? 'post' : 'get',
    data,
    headers: {
      'Authorization': `Token ${getToken()}`
    }
  })
}

export const MemberDelete = (id) => {
  return axios.request({
    url: `/finance/teamUser/user/delete/${id}`,
    method: 'get',
    data: {},
    headers: {
      'Authorization': `Token ${getToken()}`
    }
  })
}
