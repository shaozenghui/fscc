import axios from './index'

export const getMemberInformationData = () => {
  return axios.request({
    url: '/getMemberInformationData',
    method: 'post',
    data: {

    }
  })
}
