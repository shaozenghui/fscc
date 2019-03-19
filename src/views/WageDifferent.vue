<template>
  <div>
    <Row>
      <i-col span="4">
          <DatePicker type="month" placeholder="日期" v-model="endDate"></DatePicker>
      </i-col>
      <i-col span='4' push='18'>
        <Button type="primary" @click="Search">差异查询</Button>
      </i-col>
    </Row>
     <tablePage :columns="columns" :dataList="WageDifferentDataList"  ref='tablePage'></tablePage>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import tablePage from '_c/tablePage'
import { formatDate } from '@/lib/tools'
export default {
  name: 'WageDifferent',
  data(){
    return{
      columns:[
        {
          key: 'SerialNumber',
          title: '序号',
        },

        {
          key: 'division_number',
          title: '明亚号',
        },
        {
          key: 'recognizee',
          title: '被保人',
        },
        {
          key: 'pre_commision',
          title: '预估佣金',
          sortable: true
        },
        {
          key: 'commision',
          title: '实收佣金',
          sortable: true
        },
        {
          key: 'policy_year',
          title: '保单年度',
          sortable: true
        },
        {
          key: 'operation',
          title: '操作',
          render: (h, {row, column, index}) => {
            return (
              <i-button type='primary' on-click={this.submitOk.bind(this,{ row })}>OK</i-button>
            )
          }
        },
      ],
      endDate:''
    }
  },
  methods: {
     ...mapActions([
      'getWageDifferentDataList',
      'getWageDifferentUpdatePay'
    ]),
    submitOk({ row }){
       this.getWageDifferentUpdatePay({
         "division_number": row.division_number,
         "policy_year": row.policy_year
       }).then(() => {
         this.$Message.success('消除成功!')
         this.getWageDifferentDataList()
       }).catch(err => {
         this.$Message.error('消除失败!')
       })
    },
    Search(){
      this.getWageDifferentDataList({'date':this.formatDates})
      .then(()=>{
        this.$Message.success('查询成功!')
      })
      .catch(err => {
        this.$Message.error('查询失败!')
      })
    }
  },
  computed:{
    ...mapGetters([
      "WageDifferentDataList"
    ]),
    formatDates(){
      return formatDate(this.endDate).substring(0,6)
    }
  },
  components:{
    tablePage
  },
  mounted(){
    this.getWageDifferentDataList()
  }
}
</script>
