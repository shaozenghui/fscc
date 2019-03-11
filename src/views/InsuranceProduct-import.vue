<template>
  <div>
    <Row>
      <i-col span='6'>
        <Button type="primary" @click="addInsur">添加</Button>
      </i-col>
      <i-col span='4' push='15'>
        <Upload
        :action="`${baseURL}/finance/importExcel/insurance`"
        :show-upload-list='false'
        :headers="headers"
        :on-success='uploadSuccess'>
            <Button type="primary" icon="ios-cloud-upload-outline" >保险产品导入</Button>
        </Upload>
      </i-col>
    </Row>
    <tablePage :columns="columns" :dataList="InsuranceProductDataList" ></tablePage>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import tablePage from '_c/tablePage'
import { baseURL } from '@/config'
import { getToken } from '@/lib/util'
export default {
  name: 'InsuranceProduct-import',
  data(){
    return {
      baseURL,
      columns:[
        {
          key: 'serialNumber',
          title: '序号',
          fixed: 'left',
          width:50
        },
        {
          key: 'company',
          title: '公司',
          width:150,
        },
        {
          key: 'name',
          title: '名称',
          width:300
        },
        {
          key: 'insurer_fee',
          title: '保司手续费',
          width:120,
          sortable: true
        },
        {
          key: 'commission_rate_first',
          title: '首年佣金率',
          width:120,
          sortable: true
        },
        {
          key: 'commission_rate_second',
          title: '次年佣金率',
          width:120,
          sortable: true
        },
        {
          key: 'commission_rate_third',
          title: '第3年佣金率',
          width:140,
          sortable: true
        },
        {
          key: 'commission_rate_fourth',
          title: '第4年佣金率',
          width:140,
          sortable: true
        },
        {
          key: 'commission_rate_fifth',
          title: '第5年佣金率',
          width:140,
          sortable: true,

        },
        {
          key: 'operation',
          title: '操作',
          fixed: 'right',
          width:140,
          render: (h, {row, column, index}) => {
            return (
              <div>
                <i-button type='primary'  on-click={this.addHandle.bind(this, { row })}>更新</i-button>
              </div>
            )
          }
        }
      ],
      headers:{
         'Authorization': `Token ${getToken()}`
      }
    }
  },
  computed:{
    ...mapGetters([
      "InsuranceProductDataList"
    ])
  },
  components:{
    tablePage
  },
  methods:{
    ...mapActions([
      'getInsuranceProductDataList'
    ]),
    addInsur(){
      this.$router.push({name: 'AddInsuranceProduct'})
    },
    addHandle({ row }){
      this.$router.push({name: 'AddInsuranceProduct',query:{id:row.id}})
    },
    uploadSuccess(res, file, fileList){
      console.log(res)
    },
  },
  mounted(){
    this.getInsuranceProductDataList()
  }
}
</script>

