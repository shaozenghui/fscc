import axios from './index'
export const WageDifferentData = () => {
  return axios.request({
    url: '/finance/compare/pay',
    method: 'get',
    data: {}
  })
}
