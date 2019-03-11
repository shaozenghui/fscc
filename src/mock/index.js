import Mock from 'mockjs'
import { getExcelData } from './response/excel-import'
import { getInsuranceProductData } from './response/InsuranceProduct-import'
import { getDetailData } from './response/detail'
import { getPreWeekData } from './response/preWeek'
import { getMonthlyReportData } from './response/MonthlyReport'
import { getPerPerfSummaryData } from './response/PerPerfSummary'
import { getWageDifferentData } from './response/WageDifferent'
import { getQuaDifferentData } from './response/QuaDifferent'
import { getPlaDifferentData } from './response/PlaDifferent'
import { getMemberInformationData } from './response/MemberInformation'
import { getTeamListData } from './response/teamList'
import { getMemberListData } from './response/MemberList'
Mock.mock(/\/getExcelData/, 'post', getExcelData)
Mock.mock(/\/getInsuranceProductData/, 'post', getInsuranceProductData)
Mock.mock(/\/getDetailData/, 'post', getDetailData)
Mock.mock(/\/getPreWeekData/, 'post', getPreWeekData)
Mock.mock(/\/getMonthlyReportData/, 'post', getMonthlyReportData)
Mock.mock(/\/getPerPerfSummaryData/, 'post', getPerPerfSummaryData)
Mock.mock(/\/getWageDifferentData/, 'post', getWageDifferentData)
Mock.mock(/\/getQuaDifferentData/, 'post', getQuaDifferentData)
Mock.mock(/\/getPlaDifferentData/, 'post', getPlaDifferentData)
Mock.mock(/\/getMemberInformationData/, 'post', getMemberInformationData)
Mock.mock(/\/getTeamListData/, 'post', getTeamListData)
Mock.mock(/\/getMemberListData/, 'post', getMemberListData)

// Mock.setup({
//   timeout: 5000
// })
// Mock.setup({
//   timeout: '100-600'
// })
export default Mock
