import axios from './index'
export const SearchMonthlyReportData = (data) => {
  return axios.request({
    url: `/finance/reportForm/monthly/search/${data}`,
    method: 'get',
    data: {}
  })
}

export const DownloadMonthlyReport = (data) => {
  return axios.request({
    url: `/finance/reportForm/monthly/download/${data}`,
    method: 'get',
    data: {}
  })
}
