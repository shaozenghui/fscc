import axios from './index'
import { getToken } from '@/lib/util'
export const TeamListData = () => {
  return axios.request({
    url: '/finance/teamUser/team/index',
    method: 'get',
    data: {},
    headers: {
      'Authorization': `Token ${getToken()}`
    }
  })
}

export const TeamListUserList = () => {
  return axios.request({
    url: '/finance/teamUser/team/add',
    method: 'get',
    data: {},
    headers: {
      'Authorization': `Token ${getToken()}`
    }
  })
}

export const TeamListAdd = (data) => {
  return axios.request({
    url: '/finance/teamUser/team/add',
    method: 'post',
    data,
    headers: {
      'Authorization': `Token ${getToken()}`
    }
  })
}

export const TeamListUpdate = ({ id, data }) => {
  return axios.request({
    url: `/finance/teamUser/team/update/${id}`,
    method: data ? 'post' : 'get',
    data,
    headers: {
      'Authorization': `Token ${getToken()}`
    }
  })
}

export const TeamListDelete = (id) => {
  return axios.request({
    url: `/finance/teamUser/team/delete/${id}`,
    method: 'get',
    data: {},
    headers: {
      'Authorization': `Token ${getToken()}`
    }
  })
}
