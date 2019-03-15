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

export const PolicyUserData = () => {
  return axios.request({
    url: '/finance/policyUser/index',
    method: 'get',
    data: {}
  })
}

export const PolicyUserAdd = (data) => {
  return axios.request({
    url: '/finance/policyUser/add',
    method: data ? 'post' : 'get',
    data: {}
  })
}
