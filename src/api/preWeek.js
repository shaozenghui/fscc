import axios from './index'

export const SearchPreWeekData = (data) => {
  return axios.request({
    url: `/finance/reportForm/weekly/search/${data}`,
    method: 'get',
    data: {}
  })
}

export const DownloadPreWeek = (data) => {
  return axios.request({
    url: `/finance/reportForm/weekly/download/${data}`,
    method: 'get',
    data: {}
  })
}

