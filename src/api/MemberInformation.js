import axios from './index'
import { getToken } from '@/lib/util'
export const getMemberInformationData = () => {
  return axios.request({
    url: '/finance/auth/user',
    method: 'get',
    data: {},
    headers: {
      'Authorization': `Token ${getToken()}`
    }
  })
}
