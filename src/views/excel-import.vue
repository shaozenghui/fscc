<template>
  <div>
    <Row>
      <i-col span='6'>
        <Select v-model="achievement" style="width:200px" @on-change='onChange'>
            <Option v-for="item in achievementList" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
      </i-col>
      <i-col span='4' push='15'>
        <Upload :action="`${baseURL}/finance/importExcel/ach`"
          :headers="headers"
          :show-upload-list='true'
          :on-progress='progress'
          :on-success='uploadSuccess'
          :on-error='error'>
            <Button type="primary" icon="ios-cloud-upload-outline">Excel导入</Button>
        </Upload>
      </i-col>
    </Row>
    <tablePage :columns="columns" :dataList="ExcelDataList" :rowClassName='rowClassName'></tablePage>
    <Row class="submitButton">
      <i-col span='24' push='20'>
          <i-button type='primary' @click="submit">保存</i-button>
      </i-col>
    </Row>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import tablePage from '_c/tablePage'
import { baseURL } from '@/config'
import { getToken } from '@/lib/util'
export default {
  name: 'excel-import',
  data(){
    return {
      baseURL,
      achievement: '0',
      achievementList: [
        {
          value: '0',
          label: '业绩',
        },
        {
          value: '1',
          label: '工资',
        },
        {
          value: '2',
          label: '季度平台奖',
        }

      ],
      headers:{
         'Authorization': `Token ${getToken()}`
      },
      columns:[
        {
          key: 'serialNumber',
          title: '序号',
          fixed: 'left',
          width:150
        },
        {
          key: 'dataState',
          title: '数据状态',
          width:150,
          filters: [
              {
                  label: '错误',
                  value: 0
              },
              {
                  label: '正确',
                  value: 1
              }
          ],
          filterMultiple: false,
          filterMethod (value, row) {
              if (value === 0) {
                  return row.dataState === false;
              } else {
                  return row.dataState === true;
              }
          }
        },
        {
          key: 'errorMsg',
          title: '错误信息',
          width:150
        },
        {
          key: 'scalePremium',
          title: '规模保费',
          width:150,
          sortable: true
        },
        {
          key: 'OccupationalFeeIncrease',
          title: '职业加费',
          width:150,
          sortable: true
        },
        {
          key: 'AdditionalInvestment',
          title: '额外投资',
          width:150,
          sortable: true
        },
        {
          key: 'annualPremiumEquivalent',
          title: '标准保费',
          width:150,
          sortable: true
        },
        {
          key: 'StandardNumber',
          title: '标准件数',
          width:150,
          sortable: true
        },
        {
          key: 'Fyc',
          title: 'FYC',
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
      "ExcelDataList"
    ])
  },
  components:{
    tablePage
  },
  methods:{
    ...mapActions([
      'getExcelDataList'
    ]),
    onChange(val){
      // console.log(val)
    },
    rowClassName (row, index) {
        if (!row.dataState) {
            return 'demo-table-error-row';
        }
        return '';
    },
    submit() {
       this.$Message.info('保存成功！');
    },
    uploadSuccess(res, file, fileList){
      console.log(res)
    },
    progress(event, file, fileList){
      console.log(file)
    },
    error(error, file, fileList){
      console.log(error)
      // console.log(file)
      // console.log(fileList)
    }
  },
  mounted(){
    this.getExcelDataList()
  }
}
</script>
<style lang="less" >
.demo-table-error-row td{
    background-color:red;
    color: #000;
}
.submitButton{
  margin-top: 20px;
}
</style>

