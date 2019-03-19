import axios from './index'

export const getQuaDifferentData = (data) => {
  return axios.request({
    url: '/finance/compare/quarter',
    method: data ? 'post' : 'get',
    data
  })
}

export const QuaDifferentUpdateQuarter = (data) => {
  return axios.request({
    url: '/finance/compare/updateQuarter',
    method: 'post',
    data
  })
}
