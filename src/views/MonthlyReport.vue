<template>
  <div>
    <Row :gutter='10'>
      <i-col span='8'>
        <Row :gutter='10'>
            <i-col span="12">
                <DatePicker type="date" placeholder="开始日期" v-model="startDate"></DatePicker>
            </i-col>
            <i-col span="12">
                  <DatePicker type="date" placeholder="结束日期" v-model="endDate"></DatePicker>
            </i-col>
        </Row>
      </i-col>
      <i-col span='4' offset='2'>
        <i-button type='primary' icon='ios-search' @click="search">查询</i-button>
      </i-col>
      <i-col span='4'>
        <i-button type='primary' icon='ios-cloud-upload'>Excel导出</i-button>
      </i-col>
    </Row>
    <tablePage :columns="columns" :dataList="MonthlyReportDataList" ></tablePage>
  </div>
</template>
<script>
import tablePage from '_c/tablePage'
import { mapGetters, mapActions } from 'vuex'
export default {
  name:'MonthlyReport',
  data(){
    return{
      columns:[
        {
          key: 'Serial number',
          title: '序号',
        },
        {
          key: 'cname',
          title: '姓名',

        },
        {
          key: 'team',
          title: '团队',
          width:170
        },
        {
          key: 'Receipt has been signed',
          title: '回执已签（正式保单）',
          sortable: true,
          width:180
        },
        {
          key: 'Waiting for receipt',
          title: '等待回执',
          sortable: true
        },
        {
          key: 'Underwriting',
          title: '核保中（正式投保单）',
          sortable: true,
          width:180
        },
        {
          key: 'Other',
          title: '其他',
          sortable: true
        },
        {
          key: 'Subtotal',
          title: '小计',
          sortable: true
        },
      ],
      startDate:'',
      endDate:''
    }
  },
  computed:{
    ...mapGetters([
      "MonthlyReportDataList"
    ])
  },
  methods:{
    ...mapActions([
      'getMonthlyReportDataList'
    ]),
    search(){
        // 
    }
  },
  components:{
    tablePage
  },
  mounted(){
    this.getMonthlyReportDataList()
  }
}
</script>

