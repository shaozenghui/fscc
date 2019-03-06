<template>
  <div>
    <Row :gutter='10'>
      <i-col span='3' >
        <Input v-model="searchData.nameValue" placeholder="销售人员名称"  />
      </i-col>
      <i-col span='8' offset='2'>
        <Row :gutter='10'>
            <i-col span="12">
                <DatePicker type="date" placeholder="开始日期" v-model="searchData.startData"></DatePicker>
            </i-col>
            <i-col span="12">
                  <DatePicker type="date" placeholder="结束日期" v-model="searchData.endData"></DatePicker>
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
    <tablePage :columns="columns" :dataList="PerPerfSummaryDataList" ></tablePage>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import tablePage from '_c/tablePage'
export default {
  name:'PerPerfSummary',
  data(){
    return{
      columns:[
        {
          key: 'Scale premium',
          title: '规模保费',
          fixed: 'left',
          width:200,
        },
        {
          key: 'Standard number',
          title: '标准件数',
          width:200,
        },
        {
          key: 'Insurance products',
          title: '保险产品',
          width:200
        },
        {
          key: 'Payment method',
          title: '缴费方式',
          width:200,
          sortable: true
        },
        {
          key: 'Payment period',
          title: '缴费期间',
          width:200,
          sortable: true
        },
        {
          key: 'Salesman',
          title: '销售人员',
          width:200,
          sortable: true
        },
        {
          key: 'Date of presentation',
          title: '交单日期',
          width:200,
          sortable: true
        },
        {
          key: 'entry-into-force time',
          title: '生效时间',
          width:200,
          sortable: true
        },
        {
          key: 'Policy status',
          title: '保单状态',
          width:200,
          sortable: true
        },
         {
          key: 'Policy-holder',
          title: '投保人',
          width:200,
          sortable: true
        },
         {
          key: 'Insured person',
          title: '被保人',
          fixed: 'right',
          width:200,
          sortable: true
        },
      ],
      nameValue: '',
      searchData: {
        nameValue: '',
        startData: '',
        endData: ''
      }
    }
  },
  components:{
    tablePage
  },
   computed:{
    ...mapGetters([
      "PerPerfSummaryDataList"
    ])
  },
  methods:{
    ...mapActions([
      'getPerPerfSummaryDataList'
    ]),
    search(){
      // 
    }
  },
  mounted(){
    this.getPerPerfSummaryDataList()
  }
}
</script>

