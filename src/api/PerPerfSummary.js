import axios from './index'

export const getPerPerfSummaryData = () => {
  return axios.request({
    url: '/getPerPerfSummaryData',
    method: 'post',
    data: {

    }
  })
}
