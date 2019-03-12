<template>
  <div>
    <Row class="table">
      <i-col span='24'>
          <Table border :columns="columns" :data="data" width='500px' :row-class-name='rowClassName'></Table>
      </i-col>
    </Row>
    <Row v-if='PageFlag'>
      <i-col span='24'>
        <Page :total="datatotal" show-sizer @on-change='onPageChange' @on-page-size-change='onPageSizeChange' />
      </i-col>
    </Row>
  </div>
</template>
<script>
export default {
  name: 'table-page',
  props:{
    columns:{
      type: Array,
      default: () => []
    },
    dataList:{
      type: Array,
      default: () => []
    },
    rowClassName:{
      type:Function,
      default:() => {}
    },
    PageFlag:{
      type: Boolean,
      default: true
    }
  },
  data(){
    return{
      data:[],
      datatotal:0,
      currentPage:1,
      PageSize:10
    }
  },
  methods:{
    onPageChange(val){
      this.currentPage = val
    },
    onPageSizeChange(val){
      this.PageSize = val
    },
    init(){
      // setTimeout(() => {
        this.datatotal = this.dataList.length
        this.data = this.dataList.slice((this.currentPage - 1) * this.PageSize,this.currentPage*this.PageSize)
      // },1000)
    }
  },
  watch:{
    currentPage(newVal, oldVal){
      this.init()
    },
    PageSize(){
      this.init()
    },
    dataList(){
      this.init()
    }
  },
  mounted(){
    this.init()
  }
}
</script>
<style lang="less">
.table{
  margin: 20px 0;
}

</style>
// 1   0  -  10
// 2   10  - 20
// 3   20  - 30
