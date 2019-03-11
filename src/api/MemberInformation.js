import axios from './index'
import { getToken } from '@/lib/util'
export const MemberInformationData = () => {
  return axios.request({
    url: '/finance/auth/user',
    method: 'get',
    data: {},
    headers: {
      'Authorization': `Token ${getToken()}`
    }
  })
}

export const AddStaff = (data) => {
  return axios.request({
    url: '/finance/auth/user/add',
    method: 'post',
    data,
    headers: {
      'Authorization': `Token ${getToken()}`
    }
  })
}

export const ChangeStaff = ({ id, data }) => {
  return axios.request({
    url: `/finance/auth/user/update/${id}`,
    method: data ? 'post' : 'get',
    data,
    headers: {
      'Authorization': `Token ${getToken()}`
    }
  })
}
