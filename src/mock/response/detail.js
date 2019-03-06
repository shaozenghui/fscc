import Mock from 'mockjs'
import { doCustomTimes } from '@/lib/tools'
export const getDetailData = (options) => {
  // console.log(options)
  const template = {
    'operation|+1': 1,
    'Scale premium|1-100000': 0,
    'Occupational fee increase|1-100000': 0,
    'Additional investment|1-100000.2-3': 0,
    'annual premium equivalent|1-100000.2-3': 0,
    'StandardNumber|1-10000': 0,
    'Fyc|1-100': 0,
    'achievement|1-1000000': 0
  }
  let arr = []
  doCustomTimes(100, () => {
    arr.push(Mock.mock(template))
  })
  return arr
}
