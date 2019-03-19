import axios from './index'

export const getPlaDifferentData = (data) => {
  return axios.request({
    url: '/finance/compare/platform',
    method: data ? 'post' : 'get',
    data
  })
}

export const QuaDifferentUpdatePlatform = (data) => {
  return axios.request({
    url: '/finance/compare/updatePlatform',
    method: 'post',
    data
  })
}

