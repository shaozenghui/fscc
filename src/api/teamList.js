import axios from './index'

export const getTeamListData = () => {
  return axios.request({
    url: '/getTeamListData',
    method: 'post',
    data: {

    }
  })
}
