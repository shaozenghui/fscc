<template>
  <div>
    <Row>
      <i-col span='6'>
        <Select v-model="achievement" style="width:200px" >
            <Option v-for="item in achievementList" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
      </i-col>
      <i-col span='4' push='15'>
        <Upload :action="BaseURL"
          :headers="headers"
          :show-upload-list='true'
          :on-progress='progress'
          :on-success='uploadSuccess'
          :on-error='error'
          :before-upload='beforeUpload'
          :data='yearMonth'
          >
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
      BaseURL:'',
      achievement: 'ach',
      yearMonth:{},
      ExcelDataList:[],
      achievementList: [
        {
          value: 'ach',
          label: '业绩',
        },
        {
          value: 'pay',
          label: '工资',
        },
        {
          value: 'bonus',
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
        },
        {
          key: 'error_info',
          title: '错误信息',
        },
        {
          key: 'division_number',
          title: '明亚号',
        },
        {
          key: 'ins_company',
          title: '保险公司',
          width:150,
        },
        {
          key: 'ins_product',
          title: '保险产品',
          width:150,
        },
        {
          key: 'recognizee',
          title: '被认领人',
          width:150
        }
      ],
    }
  },
  components:{
    tablePage
  },
  watch: {
    achievement(){
       this.BaseURL = `${baseURL}/finance/importExcel/${this.achievement}`
    }
  },
  methods:{
    ...mapActions([
      'getSaveExcel'
    ]),
    rowClassName (row, index) {
        if (!row.dataState) {
            return 'demo-table-error-row';
        }
        return '';
    },
    submit() {
      this.getSaveExcel(this.achievement).then(() => {
        this.$Message.info('保存成功！');
      }).catch(err => {
        this.$Message.error('保存失败！');
      })

    },
    uploadSuccess(res, file, fileList){
      console.log(res.result)
      res.result.map((item, index) => {
        item.serialNumber = index + 1
      })
      this.ExcelDataList = res.result
      
    },
    progress(event, file, fileList){

    },
    error(error, file, fileList){
      this.$Message.error('导入文件失败！');
    },
    beforeUpload(file){
      if(this.achievement === 'pay') {
        let str = file.name.slice(file.name.length - 11, file.name.length - 5)
        this.yearMonth = {
          year_month:str
        }
      } else if(this.achievement === 'bonus') {
        let year_month_start = file.name.slice(file.name.length - 18, file.name.length - 12)
        let year_month_end = file.name.slice(file.name.length - 11, file.name.length - 5)
        this.yearMonth = {
          year_month_start:year_month_start,
          year_month_end:year_month_end,
        }
      }
      let promise = new Promise((resolve) => {
        this.$nextTick(function () {
            resolve(true);
        });
      });
      return promise; //通过返回一个promis对象解决
    }
  },
  mounted(){
    this.BaseURL = `${baseURL}/finance/importExcel/${this.achievement}`
    // this.getExcelDataList()
  }
}
</script>
<style lang="less" >
.demo-table-error-row td{
    background-color:#f0f0f0;
    color: #000;
}
.submitButton{
  margin-top: 20px;
}
</style>

