import axios from './index'

export const MemberInformationData = () => {
  return axios.request({
    url: '/finance/auth/user',
    method: 'get',
    data: {}
  })
}

export const AddStaff = (data) => {
  return axios.request({
    url: '/finance/auth/user/add',
    method: 'post',
    data
  })
}

export const ChangeStaff = ({ id, data }) => {
  return axios.request({
    url: `/finance/auth/user/update/${id}`,
    method: data ? 'post' : 'get',
    data
  })
}
