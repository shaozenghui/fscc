import axios from './index'

export const DetailData = () => {
  return axios.request({
    url: '/finance/reportForm/detail/search',
    method: 'get',
    data: {}
  })
}

export const SearchDetailData = (data) => {
  return axios.request({
    url: `finance/reportForm/detail/search/?&division_number=${data.division_number}&seller=${data.seller}&refer_date=${data.refer_date}&policy_holder=${data.policy_holder}&recognizee=${data.recognizee}`,
    method: 'get',
    data: {}
  })
}

export const PolicyUserData = (data) => {
  return axios.request({
    url: '/finance/policyUser/index',
    method: 'post',
    data
  })
}

export const PolicyUserAdd = (data) => {
  return axios.request({
    url: '/finance/policyUser/add',
    method: data ? 'post' : 'get',
    data
  })
}

export const PolicyUserUpdate = ({ id, data }) => {
  return axios.request({
    url: `/finance/policyUser/update/${id}`,
    method: data ? 'post' : 'get',
    data
  })
}

export const PolicyUserDelete = (id) => {
  return axios.request({
    url: `/finance/policyUser/delete/${id}`,
    method: 'get'

  })
}

export const DownloadDetail = (data) => {
  let url = '/finance/reportForm/detail/download/'
  if (data) {
    url = `/finance/reportForm/detail/download/?division_number=${data.division_number}&seller=${data.seller}&refer_date=${data.refer_date}&policy_holder=${data.policy_holder}&recognizee=${data.recognizee}`
  }
  return axios.request({
    url,
    method: 'get',
    data: {}
  })
}
