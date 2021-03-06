import axios from './index'

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
    data: {}
  })
}

export const usernameChange = (data) => {
  return axios.request({
    url: '/finance/profileManagement/home',
    method: data ? 'post' : 'get',
    data
  })
}

export const passwordChange = (data) => {
  return axios.request({
    url: '/finance/profileManagement/password_change',
    method: 'post',
    data
  })
}

export const sendCode = (data) => {
  return axios.request({
    url: '/finance/forgotPassword/sendCode',
    method: 'post',
    data: {
      'email': data
    }
  })
}

export const retrievePassword = (data) => {
  return axios.request({
    url: '/finance/forgotPassword/retrievePassword',
    method: 'post',
    data
  })
}
