import axios from './index'
import { getToken } from '@/lib/util'
export const WageDifferentData = () => {
  return axios.request({
    url: '/finance/compare/pay',
    method: 'get',
    data: {},
    headers: {
      'Authorization': `Token ${getToken()}`
    }
  })
}
