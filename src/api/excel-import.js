import axios from './index'

export const getExcelData = () => {
  return axios.request({
    url: '/getExcelData',
    method: 'post',
    data: {
     
    }
  })
}
