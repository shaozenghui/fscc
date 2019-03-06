import axios from './index'
import { getToken } from '@/lib/util'
export const Login = ({ username, password }) => {
  return axios.request({
    url: '/finance/login',
    method: 'post',
    data: {
      username,
      password
    }
  })
}

export const LogOut = () => {
  return axios.request({
    url: '/finance/logout',
    method: 'get',
    data: {

    },
    headers: {
      'Authorization': `Token ${getToken()}`
    }
  })
}
