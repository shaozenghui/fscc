import axios from './index'

export const getMemberListData = () => {
  return axios.request({
    url: '/getMemberListData',
    method: 'post',
    data: {
      
    }
  })
}
