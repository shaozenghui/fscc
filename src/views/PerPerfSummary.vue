<template>
  <div>
    <Row :gutter='10'>
      <i-col span='3' >
        <Input v-model="searchData.seller" placeholder="销售人员名称"  />
      </i-col>
      <i-col span='8' offset='2'>
        <Row :gutter='10'>
            <i-col span="12">
                <DatePicker type="date" placeholder="开始日期" v-model="searchData.start_date"></DatePicker>
            </i-col>
            <i-col span="12">
                  <DatePicker type="date" placeholder="结束日期" v-model="searchData.end_date"></DatePicker>
            </i-col>
        </Row>
      </i-col>
      <i-col span='4' offset='2'>
        <i-button type='primary' icon='ios-search' @click="search">查询</i-button>
      </i-col>
      <i-col span='4'>
        <i-button type='primary' icon='ios-cloud-upload' @click="Download">导出</i-button>
      </i-col>
    </Row>
    <tablePage :columns="columns" :dataList="PerPerfSummaryDataList" ></tablePage>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import tablePage from '_c/tablePage'
import { formatDate } from '@/lib/tools'
import { baseURL2 } from '@/config'
export default {
  name:'PerPerfSummary',
  data(){
    return{
      columns:[
        {
          key: 'SerialNumber',
          title: '序号',
          fixed: 'left',
          width:200,
        },
        {
          key: 'scale_premium',
          title: '规模保费',
          width:200,
        },
        {
          key: 'standard_num',
          title: '标准件数',
          width:100,
        },
        {
          key: 'ins_product',
          title: '保险产品',
          width:300
        },
        {
          key: 'pay_mode',
          title: '缴费方式',
          width:200,
          sortable: true
        },
        {
          key: 'pay_period',
          title: '缴费期间',
          width:200,
          sortable: true
        },
        {
          key: 'seller',
          title: '销售人员',
          width:200,
          sortable: true
        },
        {
          key: 'refer_date',
          title: '交单日期',
          width:200,
          sortable: true
        },
        {
          key: 'effect_date',
          title: '生效时间',
          width:200,
          sortable: true
        },
        {
          key: 'policy_status',
          title: '保单状态',
          width:200,
          sortable: true
        },
         {
          key: 'policy_holder',
          title: '投保人',
          width:200,
          sortable: true
        },
         {
          key: 'recognizee',
          title: '被保人',
          fixed: 'right',
          width:200,
          sortable: true
        },
      ],
      nameValue: '',
      searchData: {
        seller: '',
        start_date: '',
        end_date: ''
      }
    }
  },
  components:{
    tablePage
  },
   computed:{
    ...mapGetters([
      "PerPerfSummaryDataList"
    ]),
    StartDate(){
      return formatDate(this.searchData.start_date)
    },
    EndDate(){
      return formatDate(this.searchData.end_date)
    }
  },
  methods:{
    ...mapActions([
      'getPerPerfSummaryDataList',
      'getDownloadPerPerfSummary'
    ]),
    search(){
      this.getPerPerfSummaryDataList({
        seller: this.searchData.seller,
        start_date: this.StartDate,
        end_date: this.EndDate
      }).then((res) => {}).catch(err => {
        this.$Message.error('数据初始化失败')
      })
    },
    Download(){
      this.getDownloadPerPerfSummary({
        seller: this.searchData.seller,
        start_date: this.StartDate,
        end_date: this.EndDate
      }).then(res => {
        let url = `${baseURL2}${res}`
        window.open(url)
      }).catch(err => {
        this.$Message.error('导出失败!')
      })
    }
  },
  mounted(){
    this.getPerPerfSummaryDataList()
  }
}
</script>

