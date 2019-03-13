import axios from './index'

export const getQuaDifferentData = () => {
  return axios.request({
    url: '/getQuaDifferentData',
    method: 'post',
    data: {}
  })
}
