import Mock from 'mockjs'
import { doCustomTimes } from '@/lib/tools'
const Random = Mock.Random
export const getMemberInformationData = (options) => {
  const template = {
    'Serial number|+1': 1,
    'Member name': Random.cname(),
    'Login name': Random.email(),
    'operation|1-200': 0

  }
  let arr = []
  doCustomTimes(100, () => {
    arr.push(Mock.mock(template))
  })
  return arr
}
