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
    data: {},
    headers: {
      'Authorization': `Token ${getToken()}`
    }
  })
}

export const usernameChange = (data = {}) => {
  return axios.request({
    url: '/finance/profileManagement/home',
    method: 'get',
    data,
    headers: {
      'Authorization': `Token ${getToken()}`
    }
  })
}

export const passwordChange = (data) => {
  return axios.request({
    url: '/finance/profileManagement/password_change',
    method: 'post',
    data,
    headers: {
      'Authorization': `Token ${getToken()}`
    }
  })
}

