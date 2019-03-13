import axios from './index'
export const TeamListData = () => {
  return axios.request({
    url: '/finance/teamUser/team/index',
    method: 'get',
    data: {}
  })
}

export const TeamListUserList = () => {
  return axios.request({
    url: '/finance/teamUser/team/add',
    method: 'get',
    data: {}
  })
}

export const TeamListAdd = (data) => {
  return axios.request({
    url: '/finance/teamUser/team/add',
    method: 'post',
    data
  })
}

export const TeamListUpdate = ({ id, data }) => {
  return axios.request({
    url: `/finance/teamUser/team/update/${id}`,
    method: data ? 'post' : 'get',
    data
  })
}

export const TeamListDelete = (id) => {
  return axios.request({
    url: `/finance/teamUser/team/delete/${id}`,
    method: 'get',
    data: {}
  })
}
