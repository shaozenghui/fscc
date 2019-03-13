import axios from './index'

export const getMonthlyReportData = () => {
  return axios.request({
    url: '/getMonthlyReportData',
    method: 'post',
    data: {}
  })
}
