<template>
  <div>
    <Row>
      <i-col span='4' push='22'>
        <Button type="primary">Excel导出</Button>
      </i-col>
    </Row>
     <tablePage :columns="columns" :dataList="WageDifferentDataList" :PageFlag='false' ref='tablePage'></tablePage>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import tablePage from '_c/tablePage'
export default {
  name: 'WageDifferent',
  data(){
    return{
      columns:[
        {
          key: 'SerialNumber',
          title: '序号',
          // fixed: 'left',
          // width:100,
        },

        {
          key: 'division_number',
          title: '明亚号',
          // width:150
        },
        {
          key: 'recognizee',
          title: '被保人',
          // width:150,
          // sortable: true
        },
        {
          key: 'pre_commision',
          title: '预估佣金',
          // width:150,
          sortable: true
        },
        {
          key: 'commision',
          title: '实收佣金',
          // width:150,
          sortable: true
        },
        {
          key: 'policy_year',
          title: '保单年度',
          // width:200,
          sortable: true
        },
        {
          key: '年月',
          title: '产品名称',
          // width:200,
          sortable: true
        },
        {
          key: 'operation',
          title: '操作',
          // width:100,
          render: (h, {row, column, index}) => {
            return (
              <i-button type='primary' on-click={this.submitOk.bind(event,index)}>OK</i-button>
            )
          }
        },
      ],
    }
  },
  methods: {
     ...mapActions([
      'getWageDifferentDataList'
    ]),
    submitOk(event,index){
      this.$refs.tablePage.data.splice(index,1)
    }
  },
  computed:{
    ...mapGetters([
      "WageDifferentDataList"
    ])
  },
  components:{
    tablePage
  },
  mounted(){
   this.getWageDifferentDataList()
  }
}
</script>
