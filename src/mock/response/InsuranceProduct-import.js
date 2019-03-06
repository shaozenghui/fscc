import Mock from 'mockjs'
import { doCustomTimes } from '@/lib/tools'
export const getInsuranceProductData = (options) => {
  // console.log(options)
  const template = {
    'serialNumber|+1': 1,
    'company|1-2': '公司一',
    'apellation|1-2': '名称',
    'Payment fee|1-100000.2-3': 0,
    'First year commission rate|1-100000.2-3': 0,
    'Tow year commission rate|1-100000.2-3': 0,
    'Three year commission rate|1-100000.2-3': 0,
    'Fore year commission rate|1-100000.2-3': 0,
    'Five year commission rate|1-100000.2-3': 0
  }
  let arr = []
  doCustomTimes(100, () => {
    arr.push(Mock.mock(template))
  })
  return arr
}
