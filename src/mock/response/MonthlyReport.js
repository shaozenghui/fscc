import Mock from 'mockjs'
import { doCustomTimes } from '@/lib/tools'
const Random = Mock.Random
export const getMonthlyReportData = (options) => {
  const template = {
    'Serial number|+1': 1,
    cname: Random.cname(),
    'team|1-3': '团队一',
    'Receipt has been signed|1-100000.2-3': 0,
    'Waiting for receipt|1-100000.2-3': 0,
    'Underwriting|1-100000.2-3': 0,
    'Other|1-100000.2-3': 0,
    'Subtotal|1-10000': 0
  }
  let arr = []
  doCustomTimes(100, () => {
    arr.push(Mock.mock(template))
  })
  return arr
}
