import axios from './index'

export const getPerPerfSummaryData = (data) => {
  var url = '/finance/reportForm/ach/search'
  if (data) {
    url = `finance/reportForm/ach/search/?seller=${data.seller}&start_date=${data.start_date}&end_date=${data.end_date}`
  }
  return axios.request({
    url: url,
    method: 'get',
    data
  })
}

export const DownloadPerPerfSummary = (data) => {
  var url = '/finance/reportForm/ach/download'
  if (data) {
    url = `finance/reportForm/ach/download/?seller=${data.seller}&start_date=${data.start_date}&end_date=${data.end_date}`
  }
  return axios.request({
    url: url,
    method: 'get',
    data
  })
}
