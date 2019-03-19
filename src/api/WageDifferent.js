import axios from './index'
export const WageDifferentData = (data) => {
  return axios.request({
    url: '/finance/compare/pay',
    method: data ? 'post' : 'get',
    data
  })
}

export const WageDifferentUpdatePay = (data) => {
  return axios.request({
    url: '/finance/compare/updatePay',
    method: 'post',
    data
  })
}
