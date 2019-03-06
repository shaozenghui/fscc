import axios from './index'

export const getInsuranceProductData = () => {
  return axios.request({
    url: '/getInsuranceProductData',
    method: 'post',
    data: {

    }
  })
}
