import axios from './index'

export const getPreWeekData = () => {
  return axios.request({
    url: '/getPreWeekData',
    method: 'post',
    data: {

    }
  })
}
