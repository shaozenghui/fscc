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
        <i-button type='primary' icon='ios-cloud-upload' @click="Download">导出</i-button>

      </i-col>
    </Row>
    <tablePage :columns="columns" :dataList="PreWeekDataList" ></tablePage>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import tablePage from '_c/tablePage'
import { formatDate } from '@/lib/tools'
import { baseURL2 } from '@/config'
export default {
  name: 'excel-import',
  data(){
    return {
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
        },
        {
          key: 'standard_premium',
          title: '标准保费',
          sortable: true
        },
        {
          key: 'fyc',
          title: 'FYC',
          sortable: true
        },
        {
          key: 'standard_num',
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
    ]),
    formatDates(){
      return formatDate(this.endDate)
    }
  },
  components:{
    tablePage
  },
  methods:{
    ...mapActions([
      'getSearchPreWeekList',
      'getDownloadPreWeek'
    ]),
    search(){
      this.getSearchPreWeekList(this.formatDates).then(() => {
      }).catch(err => {
        this.$Message.error('查询失败!')
      })
    },
    Download(){
      this.getDownloadPreWeek(this.formatDates).then(res => {
        let url = `${baseURL2}${res}`
        window.open(url)
      }).catch(err => {
        this.$Message.error('导出失败!')
      })
    }
  },
  mounted(){

  }
}
</script>
<style lang="less" >
.submitButton{
  margin-top: 20px;
}
</style>

