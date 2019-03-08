import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'
import accountNumber from './modules/accountNumber'
import excelImport from './modules/excel-import'
import InsuranceProductImport from './modules/InsuranceProduct-import'
import preWeek from './modules/preWeek'
import detail from './modules/detail'
import MonthlyReport from './modules/MonthlyReport'
import PerPerfSummary from './modules/PerPerfSummary'
import WageDifferent from './modules/WageDifferent'
import QuaDifferent from './modules/QuaDifferent'
import PlaDifferent from './modules/PlaDifferent'
import MemberInformation from './modules/MemberInformation'
import TeamList from './modules/teamList'
import MemberList from './modules/MemberList'
import { saveLocal } from './plugin/saveLocal'
Vue.use(Vuex)

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  modules: {
    accountNumber,
    excelImport,
    InsuranceProductImport,
    preWeek,
    detail,
    MonthlyReport,
    PerPerfSummary,
    WageDifferent,
    QuaDifferent,
    PlaDifferent,
    MemberInformation,
    TeamList,
    MemberList
  },
  plugins: [ saveLocal ]
})
