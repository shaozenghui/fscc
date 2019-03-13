import axios from './index'

export const InsuranceProductData = () => {
  return axios.request({
    url: 'finance/insurance/index',
    method: 'get',
    data: {}
  })
}

export const InsuranceProductAdd = ( data ) => {
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
