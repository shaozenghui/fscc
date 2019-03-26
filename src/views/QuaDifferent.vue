<template>
  <div>
    <Row :gutter="10">
      <i-col span="4">
          <DatePicker type="month" placeholder="开始日期" v-model="start_date"></DatePicker>
      </i-col>
      <i-col span="4">
          <DatePicker type="month" placeholder="结束日期" v-model="end_date"></DatePicker>
      </i-col>
      <i-col span='4' push='14'>
        <Button type="primary" @click="Search">差异查询</Button>
      </i-col>
    </Row>
     <tablePage :columns="columns" :dataList="QuaDifferentDataList"  ref='tablePage'></tablePage>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import tablePage from '_c/tablePage'
import { formatDate } from '@/lib/tools'
export default {
  name: 'QuaDifferent',
  data(){
    return{
      start_date:new Date(),
      end_date:new Date(),
      columns:[
        {
          key: 'SerialNumber',
          title: '序号',
          fixed: 'left',
          width:50
        },
        {
          key: 'division_number',
          title: '明亚号',
          sortable: true,
          width:200
        },
        {
          key: 'recognizee',
          title: '被保人',
          sortable: true,
          width:100
        },
        {
          key: 'pre_quarter_bonus',
          title: '预估季度奖',
          sortable: true,
           width:150
        },
        {
          key: 'quarter_bonus',
          title: '实收季度奖',
          sortable: true,
           width:150
        },
        {
          key: 'pre_insurer_fee',
          title: '预估保司手续费',
          sortable: true,
           width:150
        },
        {
          key: 'insurer_fee',
          title: '实际保司手续费',
          sortable: true,
           width:150
        },
        {
          key: 'pre_pay_ratio',
          title: '预估所得比例',
          sortable: true,
           width:150
        },
        {
          key: 'pay_ratio',
          title: '实际比例',
          sortable: true,
           width:150
        },
        {
          key: 'year_month_start',
          title: '开始年月',
          sortable: true,
           width:150
        },
        {
          key: 'year_month_end',
          title: '结束年月',
          sortable: true,
           width:150
        },
        {
          key: 'operation',
          title: '操作',
          fixed: 'right',
          width:150,
          render: (h, {row, column, index}) => {
            return (
              <i-button type='primary' on-click={this.submitOk.bind(this,{ row })}>OK</i-button>
            )
          }
        }
      ],
    }
  },
  methods: {
    ...mapActions([
      'getQuaDifferentDataList',
      'getQuaDifferentUpdateQuarter'
    ]),
    submitOk({ row }){
       this.getQuaDifferentUpdateQuarter({
         "division_number": row.division_number
         }).then(() => {
         this.$Message.success('消除成功!')
         this.getQuaDifferentDataList()
       }).catch(err => {
         this.$Message.error('消除失败!')
       })
    },
    Search(){
      this.getQuaDifferentDataList({
          "start_date": this.StartDate,
          "end_date": this.EndDate
      }).then(()=>{
        this.$Message.success('查询成功!')
      })
      .catch(err => {
        this.$Message.error('查询失败!')
      })
    }
  },
  computed:{
    ...mapGetters([
      "QuaDifferentDataList"
    ]),
    StartDate(){
      return formatDate(this.start_date).substring(0,6)
    },
    EndDate(){
      return formatDate(this.end_date).substring(0,6)
    }
  },
  components:{
    tablePage
  },
  mounted(){
    this.getQuaDifferentDataList()
  }
}
</script>
