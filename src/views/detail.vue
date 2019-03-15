<template>
  <div>
      <Row :gutter='10'>
        <i-col span='3'>
          <Input v-model="searchData.seller" placeholder="请输入销售人员"  />
        </i-col>
        <i-col span='3'>
          <Input v-model="searchData.policy_holder" placeholder="请输入投保人"  />
        </i-col>
        <i-col span='3'>
          <Input v-model="searchData.recognizee" placeholder="请输入被保人"  />
        </i-col>
        <i-col span="3">
            <DatePicker  type="date" placeholder="交单日期" v-model="searchData.refer_date"></DatePicker>
        </i-col>
        </i-col>
        <i-col span='3'>
          <Input v-model="searchData.division_number" placeholder="请输入明亚号"  />
        </i-col>
        <i-col span='3'>
          <i-button type='primary' icon='ios-search' @click="search">查询</i-button>
        </i-col>
        <i-col span='3'>
          <i-button type='primary' icon='ios-cloud-upload'>导出</i-button>
        </i-col>
      </Row>
      <tablePage :columns="columns" :dataList="DetailDataList" ></tablePage>
      <Modal v-model="modal" @on-ok="ok" @on-cancel="cancel" fullscreen ok-text='保存'>
          <p slot="header" style="text-align:center">保单联合人</p>
          <div style="text-align:center;width:1000px;margin:0 auto">
            <Row>
             <i-col span='3' push='21'>
                <i-button type='primary' @click="policyUserAdd">添加保单联合人</i-button>
              </i-col>
            </Row>
            <tablePage :columns="policyUserColumns" :dataList="policyUserList" ></tablePage>
            <Modal v-model="modal2" @on-ok="ok" @on-cancel="cancel" ok-text='保存'>
                <Row type="flex" justify="center" align="middle">
                  <i-col span='20'>
                    <Form v-if="modal" :model="formItem" label-position="left"  class="from" ref="formItem" :rules="ruleValidate" >
                        <FormItem label="明亚号" prop="division_number">
                            <Input v-model="formItem.division_number" placeholder="请输入明亚号" size='large' ></Input>
                        </FormItem>
                        <FormItem label="成员" prop="user_id">
                            <Select v-model="formItem.user_id">
                              <Option
                              v-for="(item, index) in UserList"
                              :value="item[0]"
                              :key='`UserList_${index}`'>{{item[1]}}</Option>
                            </Select>
                        </FormItem>
                        <FormItem label="佣金率" prop="rate">
                            <Input v-model="formItem.rate" placeholder="请输入佣金率" size='large' ></Input>
                        </FormItem>
                    </Form>
                  </i-col>
                </Row>
                <div slot="footer">
                    <Button type="primary" @click="handleSubmit('formItem')">保存</Button>
                </div>
            </Modal>
          </div>
      </Modal>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import tablePage from '_c/tablePage'
export default {
  name: 'detail',
  data(){
    return {
      columns:[
        {
          key: 'seller',
          title: '销售人员',
          fixed: 'left',
          width:150,
          sortable: true
        },
        {
          key: 'division_number',
          title: '明亚号',
          width:200
        },
        {
          key: 'policy_number',
          title: '保单号',
          width:200,
          sortable: true
        },
        {
          key: 'ins_company',
          title: '保险公司',
          width:150,
          sortable: true
        },
        {
          key: 'ins_product',
          title: '保险产品',
          width:300,
          sortable: true
        },
        {
          key: 'pay_mode',
          title: '缴费期间',
          width:150,
          sortable: true
        },
        {
          key: 'pay_period',
          title: '缴费年限',
          width:150,
          sortable: true
        },

        {
          key: 'policy_holder',
          title: '投保人',
          width:150,
          sortable: true
        },
        {
          key: 'recognizee',
          title: '被保人',
          width:150,
          sortable: true
        },
        {
          key: 'policy_status',
          title: '保单类型',
          width:150,
          sortable: true
        },
        {
          key: 'medical_status',
          title: '是否体检',
          width:150,
          sortable: true
        },
        {
          key: 'refer_date',
          title: '交单日期',
          width:150,
          sortable: true
        },
        {
          key: 'effect_date',
          title: '生效日期',
          width:150,
          sortable: true
        },
        {
          key: 'operat_date',
          title: '操作日期',
          width:150,
          sortable: true
        },
        {
          key: 'insurer_fee',
          title: '保险费率',
          width:150,
          sortable: true
        },
        {
          key: 'pay_ratio',
          title: '支付比例',
          width:150,
          sortable: true
        },
        {
          key: 'quarter_bonus',
          title: '季度奖',
          width:150,
          sortable: true
        },
        {
          key: 'platform_ratio',
          title: '平台比例',
          width:150,
          sortable: true
        },
        {
          key: 'platform_bonus',
          title: '平台奖',
          width:150,
          sortable: true
        },
        {
          key: 'commission_first',
          title: '第一年佣金',
          width:150,
          sortable: true
        },
        {
          key: 'commission_rate_first',
          title: '第一年佣金率',
          width:150,
          sortable: true
        },
        {
          key: 'commission_second',
          title: '第二年佣金',
          width:150,
          sortable: true
        },
        {
          key: 'commission_rate_second',
          title: '第二年佣金率',
          width:150,
          sortable: true
        },
        {
          key: 'commission_third',
          title: '第三年佣金',
          width:150,
          sortable: true
        },
        {
          key: 'commission_rate_third',
          title: '第三年佣金率',
          width:150,
          sortable: true
        },
        {
          key: 'commission_fourth',
          title: '第四年佣金',
          width:150,
          sortable: true
        },
        {
          key: 'commission_rate_fourth',
          title: '第四年佣金率',
          width:150,
          sortable: true
        },
        {
          key: 'commission_fifth',
          title: '第五年佣金',
          width:150,
          sortable: true
        },
        {
          key: 'commission_rate_fifth',
          title: '第五年佣金率',
          width:150,
          sortable: true
        },
        {
          key: 'operation',
          title: '操作',
          fixed: 'right',
          width:150,
          render: () => {
              return (
                <i-button type='primary' on-click={this.editHandel}>编辑联合人</i-button>
              )
          }
        },
      ],
      policyUserColumns:[
        {
          key: 'division_number',
          title: '明亚号',
        },
        {
          key: 'user_id',
          title: '姓名',
        },
        {
          key: 'rate',
          title: '佣金率',
        },
        {
          key: 'operation',
          title: '操作',
          render: () => {
              return (
               <div>
                  <i-button type='primary' on-click={this.policyUserChange} style={{marginRight:'20px'}}>更新</i-button>
                  <i-button type='error' on-click={this.policyUserDelect}>删除</i-button>
               </div>
              )
          }
        },
      ],
      formItem: {
        division_number:'',
        user_id:'1',
        rate:''
      },
      ruleValidate: {
        division_number: [
            { required: true, message: '请输入明亚号', trigger: 'blur' },
            { min: 20,  message: '明亚号最少为二十位', trigger: 'blur', type: 'string' },
        ],
        user_id: [
            { required: true, message: '请选择成员', trigger: 'blur', type: 'string' }
        ],
        rate: [
            { required: true, message: '请输入佣金率', trigger: 'blur' },
            { min: 0, max: 0.99, message: '佣金率最多为0.99', trigger: 'blur', type: 'string' },
        ],
      },
      modal: false,
      modal2: false,
      searchData: {
        seller:'',
        policy_holder:'',
        recognizee:'',
        refer_date:'',
        division_number:'',
      }
    }
  },
  computed: {
    ...mapGetters([
      "DetailDataList",
      'policyUserList',
      'UserList'
    ])
  },
  components:{
    tablePage
  },
  methods:{
    ...mapActions([
       "getDetailDataList",
       'getSearchDetailData',
       'getPolicyUserData',
       'getPolicyUserAdd'
    ]),
    editHandel(){
      this.modal = true
    },
    search(){
      console.log(this.searchData)
      this.getSearchDetailData(this.searchData).then(() => {
        
      }).catch(err => {

      })
    },
    ok () {
        this.$Message.info('Clicked ok');
    },
    cancel () {
        this.$Message.info('Clicked cancel');
    },
    policyUserChange(){

    },
    policyUserDelect(){

    },
    policyUserAdd(){
      this.modal2 = true
    },
    handleSubmit(name) {
      this.$refs[name].validate((valid) => {
          if (valid) {
            this.$Message.error('保存成功!');
          } else {
            this.$Message.error('请完善信息!');
          }
      })
    }
  },
  mounted(){
    this.getDetailDataList()
  }
}
</script>
<style lang="less" >

 .demo-table-error-row td{
      background-color:red;
      color: #fff;
  }
.submitButton{
  margin-top: 20px;
}
</style>
