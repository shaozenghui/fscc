import Mock from 'mockjs'
import { doCustomTimes } from '@/lib/tools'
const Random = Mock.Random
export const getQuaDifferentData = (options) => {
  const template = {
    'Serial number|+1': 1,
    'operation|1': true,
    'name': Random.cname(),
    'Job number|1-200': 0,
    'Minya|1-10000': 0,
    'Policy number|1-10000': 0,
    'Insurance company|1-2': '保险公司',
    'Product name|1-2': '产品名称',
    'Date of presentation': Random.date('yyyy-MM-dd'),
    'achievement|1-200000': 0

  }
  let arr = []
  doCustomTimes(100, () => {
    arr.push(Mock.mock(template))
  })
  return arr
}
