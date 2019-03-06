import Mock from 'mockjs'
import { doCustomTimes } from '@/lib/tools'
const Random = Mock.Random
export const getPerPerfSummaryData = (options) => {
  const template = {
    'Scale premium|1-100000.2-3': 0,
    'Standard number|1-100000': 0,
    'Insurance products|1-2': '保险产品',
    'Payment method': '期交/年',
    'Payment period|1-100': 0,
    'Salesman': Random.cname(),
    'Date of presentation': Random.date('yyyy-MM-dd'),
    'entry-into-force time': Random.date('yyyy-MM-dd'),
    'Policy status': '正式投保单',
    'Policy-holder': Random.cname(),
    'Insured person': Random.cname()
  }
  let arr = []
  doCustomTimes(100, () => {
    arr.push(Mock.mock(template))
  })
  return arr
}
