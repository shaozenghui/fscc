import axios from './index'

export const getDetailData = () => {
  return axios.request({
    url: '/getDetailData',
    method: 'post',
    data: {
    }
  })
}
