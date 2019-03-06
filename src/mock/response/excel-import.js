import Mock from 'mockjs'
import { doCustomTimes } from '@/lib/tools'
export const getExcelData = (options) => {
  // console.log(options)
  const template = {
    'serialNumber|+1': 1,
    'dataState|1': true,
    'errorMsg|1-10': 'error',
    'scalePremium|1-100000.2-3': 0,
    'OccupationalFeeIncrease|1-100000.2-3': 0,
    'AdditionalInvestment|1-100000.2-3': 0,
    'annualPremiumEquivalent|1-100000.2-3': 0,
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
