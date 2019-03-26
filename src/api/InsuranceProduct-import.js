import axios from './index'

export const InsuranceProductData = (data) => {
  let url = 'finance/insurance/index'
  if (data) {
    url = `finance/insurance/index/?product_id=${data}`
  }
  return axios.request({
    url,
    method: 'get',
    data: {}
  })
}

export const InsuranceProductAdd = (data) => {
  return axios.request({
    url: 'finance/insurance/add',
    method: 'post',
    data
  })
}

export const InsuranceProductUpdate = ({ id, data }) => {
  return axios.request({
    url: `finance/insurance/update/${id}`,
    method: data ? 'post' : 'get',
    data
  })
}
