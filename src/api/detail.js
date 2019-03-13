import axios from './index'

export const DetailData = () => {
  return axios.request({
    url: '/finance/reportForm/detail/search/?page_no=1',
    method: 'get',
    data: {}
  })
}
