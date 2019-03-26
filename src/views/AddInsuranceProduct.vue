<template>
  <div>
    <Row type="flex"  justify='center' align='middle'>
      <i-col span='12'  >
          <p class="fromtitle">添加保险产品</p>
          <Form v-if="Object.keys(ruleInline).length"  :model="formItem" label-position="left" :label-width="160" class="from" :rules="ruleInline" ref="formInline">
            <FormItem label="公司"  prop="company">
                  <Input v-model="formItem.company" placeholder="请输入公司" size='large' :disabled='flag'></Input>
            </FormItem>
            <FormItem label="名称"  prop="name">
                  <Input v-model="formItem.name" placeholder="请输入名称" size='large'></Input>
            </FormItem>
             <FormItem label="产品ID"  prop="product_id">
                  <Input v-model="formItem.product_id" placeholder="请输入产品ID" size='large'></Input>
            </FormItem>
            <FormItem label="保司手续费"  prop="insurer_fee">
                  <Input   v-model="formItem.insurer_fee" placeholder="请输入保司手续费" size='large'  ></Input>
            </FormItem>
            <FormItem label="首年佣金率"  prop="commission_rate_first">
                  <Input v-model="formItem.commission_rate_first" placeholder="请输入首年佣金率" size='large' ></Input>
            </FormItem>
            <FormItem label="次年佣金率"  prop="commission_rate_second">
                  <Input v-model="formItem.commission_rate_second" placeholder="请输入次年佣金率" size='large' ></Input>
            </FormItem>
            <FormItem label="第3年佣金率"  prop="commission_rate_third">
                  <Input v-model="formItem.commission_rate_third" placeholder="请输入第3年佣金率" size='large' ></Input>
            </FormItem>
            <FormItem label="第4年佣金率"  prop="commission_rate_fourth">
                  <Input v-model="formItem.commission_rate_fourth" placeholder="请输入第4年佣金率" size='large' ></Input>
            </FormItem>
            <FormItem label="第5年佣金率"  prop="commission_rate_fifth">
                  <Input v-model="formItem.commission_rate_fifth" placeholder="请输入第5年佣金率" size='large' ></Input>
            </FormItem>
            <Row>
              <i-col span='4' push='10'>
                <FormItem>
                  <Button type="primary" @click="handleSubmit('formInline',formItem.id)" style="float:right">保存</Button>
                </FormItem>
              </i-col>
            </Row>
        </Form>
      </i-col>
    </Row>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  name: 'AddInsuranceProduct',
  data(){
    return {
      // 公司输入框是否更改
      flag:false,
      formItem: {
        company:'',
        name:'',
        product_id:'',
        insurer_fee:'',
        commission_rate_first: '',
        commission_rate_second: '',
        commission_rate_third: '',
        commission_rate_fourth: '',
        commission_rate_fifth: '',
      },
      ruleInline: {
          company: [
              { required: true, message: '请输入公司', trigger: 'blur' },
              { type: 'string', min: 3, message: '名称最少为3个字符', trigger: 'blur' }
          ],
          name: [
              { required: true, message: '请输入名称', trigger: 'blur' },
              { type: 'string', min: 6, message: '名称最少为六个字符', trigger: 'blur' }
          ],
          product_id: [
              {  message: '请输入产品ID', trigger: 'blur' },
          ],
          insurer_fee: [
            {  required: true, message: '请输入保司手续费', trigger: 'blur' },
            { min:0, type: 'number', message: '保司手续费最小为零', trigger: 'blur', transform(value) {
                return Number(value);
            }}
          ],
          commission_rate_first: [
            {  required: true, message: '请输入首年佣金率', trigger: 'blur' },
            { min:0,max:0.99, type: 'number', message: '佣金率的范围为0~0.99', trigger: 'blur', transform(value) {
                return Number(value);
            }}
          ],
           commission_rate_second: [
              { required: true, message: '请输入次年佣金率', trigger: 'blur' },
              { type: 'number', min: 0, max: 0.99, message: '佣金率的范围为0~0.99之间', trigger: 'blur', transform(value) {
                return Number(value);
            }}
          ],
          commission_rate_third: [
              { required: true, message: '请输入第三年佣金率', trigger: 'blur' },
              { type: 'number', min: 0, max: 0.99, message: '佣金率的范围为0~0.99之间', trigger: 'blur', transform(value) {
                return Number(value);
            }}
          ],
          commission_rate_fourth: [
              { required: true, message: '请输入第四年佣金率', trigger: 'blur'},
              { type: 'number', min: 0, max: 0.99, message: '佣金率的范围为0~0.99之间', trigger: 'blur', transform(value) {
                return Number(value);
            }}
          ],
          commission_rate_fifth: [
              { required: true, message: '请输入第五年佣金率', trigger: 'blur'},
              {  type: 'number' , min: 0, max: 0.99, message: '佣金率的范围为0~0.99之间', trigger: 'blur' , transform(value) {
                return Number(value);
            }}
          ]
      },
      id:''
    }
  },
  methods: {
    ...mapActions([
      'getInsuranceProductUpdate',
      'getInsuranceProductAdd'
    ]),
    handleSubmit(name,id) {
        this.$refs[name].validate((valid) => {
            if (valid) {
              //判断是新建还是更新
              if (this.id) {
                // 更新处理
                this.getInsuranceProductUpdate({
                  id:id,
                  data:this.formItem
                }).then(res => {
                  this.$Message.success('保存成功!');
                  this.$router.push({name:'InsuranceProduct'})
                }).catch(err => {
                  this.$Message.error('保存失败!');
                })
              } else {
                // 新建处理
                this.getInsuranceProductAdd(this.formItem).then(() => {
                  this.$Message.success('保存成功!');
                  this.$router.push({name:'InsuranceProduct'})
                }).catch(err => {
                  for(var key in err){
                      this.$Message.error(`${key}:${err[key]}!`);
                  }
                })
              }
            } else {
                this.$Message.error('请完善信息!');
            }
        })
    }
  },
  mounted(){
    this.$nextTick(() => {
      this.id = this.$route.query.id
      // 更新请求数据
      if(this.id){

        this.flag = true
        this.getInsuranceProductUpdate(this.$route.query).then(res => {
          let obj = {}
          for(let key in res){
            res[key] = (typeof res[key]) === 'number'  ? res[key].toString() : res[key]
          }
          this.formItem =  Object.assign(this.formItem, res)
          this.ruleInline = this.ruleInline
        }).catch(err => {
          this.$Message.error('请求数据失败!');
        })
      }
    })
  }
}
</script>
<style lang='less'>
.from {
  label{
    font-size: 20px !important;
    color: rgb(27, 26, 26);
    padding: 0 !important;
    height: 36px;
    line-height: 36px !important;
  }

}
.fromtitle{
  height: 50px;
  line-height: 50px;
  text-align: center;
  font-size: 30px;
  margin: 10px 0;
}
</style>

