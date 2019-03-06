<template>
  <div>
    <Row type="flex"  justify='center' align='middle'>
      <i-col span='12'  >
          <p class="fromtitle">添加保险产品</p>
          <Form :model="formItem" label-position="left" :label-width="160" class="from" :rules="ruleInline" ref="formInline">
            <FormItem label="公司"  prop="company">
                  <Input v-model="formItem.company" placeholder="请输入公司" size='large'></Input>
            </FormItem>
            <FormItem label="名称"  prop="apellation">
                  <Input v-model="formItem.apellation" placeholder="请输入名称" size='large'></Input>
            </FormItem>
            <FormItem label="保司手续费"  prop="PaymentFee">
                  <Input v-model="formItem.PaymentFee" placeholder="请输入保司手续费" size='large'></Input>
            </FormItem>
            <FormItem label="首年佣金率"  prop="Firstrate">
                  <Input v-model="formItem.Firstrate" placeholder="请输入首年佣金率" size='large'></Input>
            </FormItem>
            <FormItem label="次年佣金率"  prop="Tworate">
                  <Input v-model="formItem.Tworate" placeholder="请输入次年佣金率" size='large'></Input>
            </FormItem>
            <FormItem label="第3年佣金率"  prop="Threerate">
                  <Input v-model="formItem.Threerate" placeholder="请输入第3年佣金率" size='large'></Input>
            </FormItem>
            <FormItem label="第4年佣金率"  prop="Forerate">
                  <Input v-model="formItem.Forerate" placeholder="请输入第4年佣金率" size='large'></Input>
            </FormItem>
            <FormItem label="第5年佣金率"  prop="Fiverate">
                  <Input v-model="formItem.Fiverate" placeholder="请输入第5年佣金率" size='large'></Input>
            </FormItem>
            <Row>
              <i-col span='4' push='10'>
                <FormItem>
                  <Button type="primary" @click="handleSubmit('formInline')" style="float:right">保存</Button>
                </FormItem>
              </i-col>
            </Row>
        </Form>
      </i-col>
    </Row>
  </div>
</template>
<script>
export default {
  name: 'AddInsuranceProduct',
  data(){
    return {
      formItem: {
        company:'',
        apellation:'',
        PaymentFee:'',
        Firstrate: '',
        Tworate: '',
        Threerate: '',
        Forerate: '',
        Fiverate: '',
      },
      ruleInline: {
          company: [
              { required: true, message: '请输入公司', trigger: 'blur' },
              { type: 'string', min: 6, message: '名称最少为六个字符', trigger: 'blur' }
          ],
          apellation: [
              { required: true, message: '请输入名称', trigger: 'blur' },
              { type: 'string', min: 6, message: '名称最少为六个字符', trigger: 'blur' }
          ],
          PaymentFee: [
              { required: true, message: '请输入保司手续费', trigger: 'blur', type: 'number' },
          ],
          Firstrate: [
              { required: true, message: '请输入首年佣金率', trigger: 'blur' },
              { type: 'number', min: 1, max:100, message: '佣金率的范围为1~100之间', trigger: 'blur' }
          ],
          Tworate: [
              { required: true, message: '请输入次年佣金率', trigger: 'blur' },
              { type: 'number', min: 1, max:100, message: '佣金率的范围为1~100之间', trigger: 'blur' }
          ],
          Threerate: [
              { required: true, message: '请输入第三年佣金率', trigger: 'blur' },
              { type: 'number', min: 1, max:100, message: '佣金率的范围为1~100之间', trigger: 'blur' }
          ],
          Forerate: [
              { required: true, message: '请输入第四年佣金率', trigger: 'blur' },
              { type: 'number', min: 1, max:100, message: '佣金率的范围为1~100之间', trigger: 'blur' }
          ],
          Fiverate: [
              { required: true, message: '请输入第五年佣金率', trigger: 'blur' },
              { type: 'number', min: 1, max:100, message: '佣金率的范围为1~100之间', trigger: 'blur' }
          ]
      }
    }
  },
  methods: {
    handleSubmit(name) {
        this.$refs[name].validate((valid) => {
            if (valid) {
                this.$Message.success('保存成功!');
            } else {
                this.$Message.error('请完善信息!');
            }
        })
    }
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

