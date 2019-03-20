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
     <tablePage :columns="columns" :dataList="PlaDifferentDataList"  ref='tablePage'></tablePage>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import tablePage from '_c/tablePage'
import { formatDate } from '@/lib/tools'
export default {
  name: 'PlaDifferent',
  data(){
    return{
      start_date:'',
      end_date:'',
      columns:[
        {
          key: 'SerialNumber',
          title: '序号',
          width:50
        },
        {
          key: 'division_number',
          title: '明亚号',
          width:250
        },
        {
          key: 'recognizee',
          title: '被保人',
          sortable: true,
           width:150
        },
        {
          key: 'pre_platform_bonus',
          title: '预估平台奖',
          sortable: true,
           width:150
        },
        {
          key: 'platform_bonus',
          title: '实收平台奖',
          sortable: true,
           width:150
        },
        {
          key: 'pre_platform_ratio',
          title: '预估比例',
          sortable: true,
           width:150
        },
        {
          key: 'platform_ratio',
          title: '实收比例',
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
           width:150,
          render: (h, {row, column, index}) => {
            return (
              <i-button type='primary' on-click={this.submitOk.bind(this,{ row })}>OK</i-button>
            )
          }
        },
      ],
    }
  },
   computed:{
    ...mapGetters([
      "PlaDifferentDataList"
    ]),
    StartDate(){
      return formatDate(this.start_date).substring(0,6)
    },
    EndDate(){
      return formatDate(this.end_date).substring(0,6)
    }
  },
   methods: {
     ...mapActions([
      'getPlaDifferentDataList',
      'getQuaDifferentUpdatePlatform'
    ]),
    submitOk({ row }){
       this.getQuaDifferentUpdatePlatform({
         "division_number": row.division_number
         }).then(() => {
         this.$Message.success('消除成功!')
         this.getPlaDifferentDataList()
       }).catch(err => {
         this.$Message.error('消除失败!')
       })
    },
    Search(){
      this.getPlaDifferentDataList({
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
  components:{
    tablePage
  },
  mounted(){
    this.getPlaDifferentDataList()
  }
}
</script>
