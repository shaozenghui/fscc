<template>
  <div>
    <Row>
      <i-col span='4' push='22'>
        <Button type="primary">Excel导出</Button>
      </i-col>
    </Row>
     <tablePage :columns="columns" :dataList="PlaDifferentDataList" :PageFlag='false' ref='tablePage'></tablePage>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import tablePage from '_c/tablePage'
export default {
  name: 'PlaDifferent',
  data(){
    return{
      columns:[
        {
          key: 'Serial number',
          title: '序号',
          fixed: 'left',
          width:100,
        },
        {
          key: 'operation',
          title: '操作',
          width:100,
          render: (h, {row, column, index}) => {
            return (
              <i-button type='primary' on-click={this.submitOk.bind(event,index)}>OK</i-button>
            )
          }
        },
        {
          key: 'name',
          title: '姓名',
          width:150
        },
        {
          key: 'Job number',
          title: '工号',
          width:150,
          sortable: true
        },
        {
          key: 'Minya',
          title: '明亚号',
          width:150,
          sortable: true
        },
        {
          key: 'Policy number',
          title: '保单号',
          width:150,
          sortable: true
        },
        {
          key: 'Insurance company',
          title: '保险公司',
          width:200,
          sortable: true
        },
        {
          key: 'Product name',
          title: '产品名称',
          width:200,
          sortable: true
        },
        {
          key: 'Date of presentation',
          title: '交单日期',
          width:150,
          sortable: true
        },
        {
          key: 'achievement',
          title: '业绩',
          fixed: 'right',
          width:150,
          sortable: true
        },
      ],
    }
  },
   computed:{
    ...mapGetters([
      "PlaDifferentDataList"
    ])
  },
   methods: {
     ...mapActions([
      'getPlaDifferentDataList'
    ]),
    submitOk(event,index){
      console.log(event,index)
      this.$refs.tablePage.data.splice(index,1)
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
