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
