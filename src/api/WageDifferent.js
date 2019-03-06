import axios from './index'

export const getWageDifferentData = () => {
  return axios.request({
    url: '/getWageDifferentData',
    method: 'post',
    data: {

    }
  })
}
