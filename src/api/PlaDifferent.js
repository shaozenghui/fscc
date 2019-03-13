import axios from './index'

export const getPlaDifferentData = () => {
  return axios.request({
    url: '/getPlaDifferentData',
    method: 'post',
    data: {}
  })
}
