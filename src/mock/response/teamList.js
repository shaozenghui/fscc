import Mock from 'mockjs'
import { doCustomTimes } from '@/lib/tools'
export const getTeamListData = (options) => {
  // console.log(options)
  const template = {
    'serialNumber|+1': 1,
    'teamName|1-2': '团队一',
    'Team leader|1-2': '@cname',
    'Team size|1-100000': 0,
    'createTime': '@datetime',
    'operation': 'deattime'

  }
  let arr = []
  doCustomTimes(100, () => {
    arr.push(Mock.mock(template))
  })
  return arr
}
