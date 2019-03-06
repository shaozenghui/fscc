import Mock from 'mockjs'
import { doCustomTimes } from '@/lib/tools'
const Random = Mock.Random
export const getPreWeekData = (options) => {
  const template = {
    'serialNumber|+1': 1,
    cname: Random.cname(),
    'team|1-2': '团队1',
    'premium|1-100000.2-3': 0,
    'Fyc|1-100': 0,
    'StandardNumber|1-10000': 0
  }
  let arr = []
  doCustomTimes(100, () => {
    arr.push(Mock.mock(template))
  })
  return arr
}
