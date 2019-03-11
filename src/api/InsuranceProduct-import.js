import axios from './index'
import { getToken } from '@/lib/util'
export const InsuranceProductData = () => {
  return axios.request({
    url: 'finance/insurance/index',
    method: 'get',
    data: {

    },
    headers: {
      'Authorization': `Token ${getToken()}`
    }
  })
}

export const InsuranceProductAdd = ( data ) => {
  return axios.request({
    url: 'finance/insurance/add',
    method: 'post',
    data,
    headers: {
      'Authorization': `Token ${getToken()}`
    }
  })
}

export const InsuranceProductUpdate = ({ id, data }) => {
  return axios.request({
    url: `finance/insurance/update/${id}`,
    method: data ? 'post' : 'get',
    data,
    headers: {
      'Authorization': `Token ${getToken()}`
    }
  })
}

