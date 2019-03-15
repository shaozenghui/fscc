import axios from './index'

export const SaveExcel = (data) => {
  return axios.request({
    url: `finance/importExcel/${data}Save`,
    method: 'get',
    data: {}
  })
}

