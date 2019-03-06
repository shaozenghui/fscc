<template>
  <div>
    <Row>
      <i-col span='6'>
        <Button type="primary" @click="addInsur">添加</Button>
      </i-col>
      <i-col span='4' push='15'>
        <Upload action="//jsonplaceholder.typicode.com/posts/" :show-upload-list='false'>
            <Button type="primary" icon="ios-cloud-upload-outline">保险产品导入</Button>
        </Upload>
      </i-col>
    </Row>
    <tablePage :columns="columns" :dataList="InsuranceProductDataList" ></tablePage>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import tablePage from '_c/tablePage'
export default {
  name: 'InsuranceProduct-import',
  data(){
    return {
      columns:[
        {
          key: 'serialNumber',
          title: '序号',
          fixed: 'left',
          width:150
        },
        {
          key: 'company',
          title: '公司',
          width:150,
        },
        {
          key: 'apellation',
          title: '名称',
          width:150
        },
        {
          key: 'Payment fee',
          title: '保司手续费',
          width:150,
          sortable: true
        },
        {
          key: 'First year commission rate',
          title: '首年佣金率',
          width:150,
          sortable: true
        },
        {
          key: 'Tow year commission rate',
          title: '次年佣金率',
          width:150,
          sortable: true
        },
        {
          key: 'Three year commission rate',
          title: '第3年佣金率',
          width:150,
          sortable: true
        },
        {
          key: 'Fore year commission rate',
          title: '第4年佣金率',
          width:150,
          sortable: true
        },
        {
          key: 'Five year commission rate',
          title: '第5年佣金率YC',
          width:150,
          sortable: true,
          fixed: 'right',
        }

      ],
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
    }
  },
  mounted(){
    this.getInsuranceProductDataList()
  }
}
</script>

