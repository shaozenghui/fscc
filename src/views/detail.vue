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
      <Modal v-model="modal"  fullscreen>
          <p slot="header" style="text-align:center">保单联合人</p>
          <div style="text-align:center;width:1000px;margin:0 auto">
            <Row>
             <i-col span='3' push='21'>
                <i-button type='primary' @click="policyUserAdd">添加保单联合人</i-button>
              </i-col>
            </Row>
            <tablePage :columns="policyUserColumns" :dataList="policyUserList" ></tablePage>
            <Modal v-model="modal2"    @0n-ok ='ok' @on-cancel='cancel'>
                <Row type="flex" justify="center" align="middle">
                  <i-col span='20'>
                    <Form v-if="Object.keys(ruleValidate).length" :model="formItem" label-position="left"  class="from" ref="formItem" :rules="ruleValidate" >
                        <FormItem label="明亚号" >
                            <Input v-model="division_number" disabled  placeholder="请输入明亚号" size='large' ></Input>
                        </FormItem>
                        <FormItem label="成员" prop="user_id" v-if="flag">
                            <Select v-model="formItem.user_id" >
                              <Option
                              v-for="(item, index) in policyPerList"
                              :value="item[0]"
                              :key='`UserList_${index}`'>{{item[1]}}</Option>
                            </Select>
                        </FormItem>
                        <FormItem label="成员" v-if="!flag">
                            <Input v-model="formItem.user_id" disabled  size='large' ></Input>
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
import { formatDate } from '@/lib/tools'
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
          render: (h, { row }) => {
              return (
                <i-button type='primary' on-click={this.editHandel.bind(this,{ row })}>编辑联合人</i-button>
              )
          }
        },
      ],
      flag:true,
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
          render: (h, { row }) => {
              return (
               <div>
                  <i-button type='primary' on-click={this.policyUserChange.bind(this,{ row })} style={{marginRight:'20px'}}>更新</i-button>
                  <i-button type='error' on-click={this.policyUserDelect.bind(this,{ row })}>删除</i-button>
               </div>
              )
          }
        },
      ],
      formItem: {
        user_id:'',
        rate:''
      },
      ruleValidate: {
        user_id: [
            { required: true, message: '请选择成员', trigger: 'blur', type: 'string' }
        ],
        rate: [
            {  required: true, message: '请输入佣金率', trigger: 'blur' },
            {  min:0,max:0.99, type: 'number', message: '佣金率的范围为0~0.99', trigger: 'blur', transform(value) {
                return Number(value);
            }}
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
      },
      division_number:'',
      is_add: true,
      id:''
    }
  },
  computed: {
    ...mapGetters([
      "DetailDataList",
      'policyUserList',
      'policyPerList'
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
       'getPolicyUserAdd',
       'getPolicyUserUpdate',
       'getPolicyUserDelete'
    ]),
    editHandel({row}){
      this.division_number = row.division_number
      this.getPolicyUserData({
        division_number:row.division_number
      }).then(() => {

      }).catch(err => {
        this.$Message.error('数据初始化失败!');
      })
      this.modal = true
    },
    search(){
      let data = this.searchData;
      data.refer_date = formatDate(this.searchData.refer_date)
      this.getSearchDetailData(data).then(() => {
      }).catch(err => {
        this.$Message.error('数据初始化失败!');
      })
    },
    cancel(){
      for (var key in this.formItem) {
      this.formItem[key] = ''
      }
    },
     ok(){
       for (var key in this.formItem) {
        this.formItem[key] = ''
        }
    },
    policyUserChange({ row }){
      this.flag = false
      this.is_add = false
      this.id = row.id
      this.getPolicyUserAdd()
      this.formItem.user_id = row.user_id
      this.getPolicyUserUpdate({
        id:row.id
      }).then(res => {
        this.modal2 = true
        this.flag = false
        this.formItem.rate = res.rate
      })
    },
    policyUserDelect({ row }){
      this.getPolicyUserDelete(row.id).then(() => {
          this.$Message.success('删除成功!');
          this.getPolicyUserData({
            division_number:this.division_number
          }).then(() => {}).catch(err => {
            this.$Message.error('数据初始化失败!');
          })
      }).catch(err => {
         this.$Message.error('删除失败!');
      })
    },
    policyUserAdd(){
      this.flag = true
      this.is_add = true
      this.getPolicyUserAdd()
      this.modal2 = true
    },
    handleSubmit(name) {
      this.$refs[name].validate((valid) => {
          if (valid) {
            if (this.is_add) {
             this.formItem.division_number = this.division_number
              this.getPolicyUserAdd(this.formItem).then(() => {
                this.modal2 = false
                this.$Message.success('保存成功!');
                 for (var key in this.formItem) {
                  this.formItem[key] = ''
                 }
                this.getPolicyUserData({
                  division_number:this.division_number
                }).then(() => {}).catch(err => {
                  this.$Message.error('数据初始化失败!');
                })
              }).catch(err => {
                this.$Message.error('保存失败!');
              })
            } else {
              this.getPolicyUserUpdate({
                id:this.id,
                data:{
                  rate:this.formItem.rate
                }
              }).then(res => {
                this.modal2 = false
                this.$Message.success('保存成功!');
                 for (var key in this.formItem) {
                    this.formItem[key] = ''
                  }
                this.getPolicyUserData({
                  division_number:this.division_number
                }).then(() => {}).catch(err => {
                  this.$Message.error('数据初始化失败!');
                })
              })
            }

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
