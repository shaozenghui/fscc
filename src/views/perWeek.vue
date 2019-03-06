<template>
  <div>
    <Row>
       <i-col span="12">
          <DatePicker type="date" placeholder="结束日期" v-model="endDate"></DatePicker>
      </i-col>
      <i-col span='3'>
        <i-button type='primary' icon='ios-search' @click="search">查询</i-button>
      </i-col>
      <i-col span='3'>
        <i-button type='primary' icon='ios-cloud-upload'>导出</i-button>
      </i-col>
    </Row>
    <tablePage :columns="columns" :dataList="PreWeekDataList" ></tablePage>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import tablePage from '_c/tablePage'
export default {
  name: 'excel-import',
  data(){
    return {
      columns:[
        {
          key: 'serialNumber',
          title: '序号',
        },
        {
          key: 'cname',
          title: '姓名',
        },
        {
          key: 'team',
          title: '团队',
        },
        {
          key: 'premium',
          title: '保费',
          sortable: true
        },
        {
          key: 'Fyc',
          title: 'FYC',
          sortable: true
        },
        {
          key: 'StandardNumber',
          title: '标准件数',
          sortable: true
        },
      ],
      endDate:''
    }
  },
  computed:{
    ...mapGetters([
      "PreWeekDataList"
    ])
  },
  components:{
    tablePage
  },
  methods:{
    ...mapActions([
      'getPreWeekDataList'
    ]),
    search(){
      //
    }
  },
  mounted(){
    this.getPreWeekDataList()
  }
}
</script>
<style lang="less" >
.submitButton{
  margin-top: 20px;
}
</style>

