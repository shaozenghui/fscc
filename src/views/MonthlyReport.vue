<template>
  <div>
    <Row :gutter='10'>
      <i-col span='8'>
        <Row :gutter='10'>
            <i-col span="12">
                  <DatePicker type="month" placeholder="结束日期" v-model="endDate"></DatePicker>
            </i-col>
        </Row>
      </i-col>
      <i-col span='4' offset='2'>
        <i-button type='primary' icon='ios-search' @click="search">查询</i-button>
      </i-col>
      <i-col span='4'  push='8'>
        <i-button type='primary' icon='ios-cloud-upload' @click="Download">导出</i-button>
      </i-col>
    </Row>
    <tablePage :columns="columns" :dataList="MonthlyReportDataList" ></tablePage>
  </div>
</template>
<script>
import tablePage from '_c/tablePage'
import { mapGetters, mapActions } from 'vuex'
import { formatDate } from '@/lib/tools'
import { baseURL2 } from '@/config'
export default {
  name:'MonthlyReport',
  data(){
    return{
      columns:[
        {
          key: 'SerialNumber',
          title: '序号',
        },
        {
          key: 'seller',
          title: '姓名',

        },
        {
          key: 'name',
          title: '团队',
          width:170
        },
        {
          key: 'fyc_formal',
          title: '回执已签（正式保单）',
          sortable: true,
          width:180
        },
        {
          key: 'fyc_wait',
          title: '等待回执',
          sortable: true
        },
        {
          key: 'fyc_delivery',
          title: '核保中（正式投保单）',
          sortable: true,
          width:180
        },
        {
          key: 'total',
          title: '小计',
          sortable: true
        },
      ],
      endDate:''
    }
  },
  computed:{
    ...mapGetters([
      "MonthlyReportDataList"
    ]),
    formatDates(){
      return formatDate(this.endDate)
    }
  },
  methods:{
    ...mapActions([
      'getSearchMonthlyReportList',
      'getDownloadMonthlyReport'
    ]),
    search(){
      this.getSearchMonthlyReportList(this.formatDates).then(() => {
        this.$Message.success('查询成功!')
      }).catch(err => {
        this.$Message.error('查询失败!')
      })
    },
    Download(){
      this.getDownloadMonthlyReport(this.formatDates).then(res => {
        let url = `${baseURL2}${res}`
        window.open(url)
      }).catch(err => {
        this.$Message.error('导出失败!')
      })
    }
  },
  components:{
    tablePage
  },
  mounted(){

  }
}
</script>

