<template>
  <div>
    <Row type="flex" justify="center" align="middle" >
      <i-col span='5' class="login">
        <p class="fromtitle">找回密码</p>
          <Form :model="formItem"   class="from" :rules="ruleInline" ref="formInline">
            <FormItem prop="email">
                  <Input  v-model="formItem.email" placeholder="请输入绑定邮箱地址" size='large'>
                    <Icon type="ios-mail" slot="prepend" />
                  </Input>
            </FormItem>
            <FormItem prop="code">
                <Input  v-model="formItem.code" placeholder="邮箱验证码" size='large'  >
                  <Icon type="ios-barcode" slot="prepend"></Icon>
                  <Button type="primary" slot="append" @click="sendCode"  v-html="codeMessage"></Button>
                </Input>

            </FormItem>
             <FormItem prop="password">
                  <Input  v-model="formItem.password" placeholder="请输入新密码" size='large' type="password">
                    <Icon type="md-lock" slot="prepend"></Icon>
                  </Input>
            </FormItem>
            <!-- <FormItem prop="newPswAgs">
                <Input  v-model="formItem.newPswAgs" placeholder="请再次输入新密码" size='large'  type="password">
                  <Icon type="md-lock" slot="prepend"></Icon>
                </Input>
            </FormItem> -->
            <FormItem>
                <Button  class="submit" type="primary" @click="handleSubmit('formInline')" >重置密码</Button>
            </FormItem>
            <FormItem>
                <Button  class="submit"  >
                  <router-link to='/login'>返回登录页</router-link>
                </Button>
            </FormItem>
        </Form>
      </i-col>
    </Row>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
import { setToken } from '@/lib/util'
export default {
  name: 'RetrievePassword',
  data(){

    return {
      // 表单数据
      formItem: {
        email:"",
        code:'',
        password:'',
        // newPswAgs:''
      },
      // 表单规则
      ruleInline: {
          email: [
              { required: true, message: '邮箱不能为空', trigger: 'blur' },
              { type: 'email', message: '电子邮件格式不正确', trigger: 'blur' }
          ],
          code: [
              { required: true, message: '邮箱验证码', trigger: 'blur' },
               { type: 'string', min: 6,max: 6, message: '邮箱验证码为六位', trigger: 'blur' }
          ],
          password: [
              { required: true, message: '请输入新密码  ', trigger: 'blur' },
              { type: 'string', min: 6, message: '密码的最小长度为六位', trigger: 'blur' }
          ],
          // newPswAgs: [
          //     { required: true, message: '请再次输入密码  ', trigger: 'blur' },
          //     { type: 'string', min: 6, message: '密码的最小长度为六位', trigger: 'blur' }
          // ]
      },
      codeMessage:'发送验证码',
      codeFlag:true,
    }
  },
  methods:{
    ...mapActions([
      'getsendCode',
      'getRetrievePassword'
    ]),
    // 重置密码
     handleSubmit(name) {
        this.$refs[name].validate((valid) => {
            if (valid) {
                this.getRetrievePassword(this.formItem).then((res) => {
                    setToken(res.token)
                    this.$Message.success('重置成功!');
                    this.$router.push({path: '/'})
                }).catch(err => {
                   this.$Message.error('重置失败!');
                })

            } else {
                this.$Message.error('请完善信息!');
            }
        })
    },
    // 发送验证码
    sendCode(){
      if(this.formItem.email){
        var con = 60
        if(this.codeFlag){
          this.codeFlag = false
          this.getsendCode(this.formItem.email).then(res => {
              this.$Message.success('验证码发送成功请注意查收!');
          }).catch(err => {
              this.$Message.error('验证码发送失败!');
          })
          var time = setInterval(() => {
              if(con == 0){
                clearInterval(time)
                con = 60
                this.codeFlag = true
                this.codeMessage = '发送验证码'
              }else{
                con-- ;
                this.codeMessage = `<i>${con}s</i>后重新发送`
              }
          },1000)
        }
      } else this.$Message.error('请完善信息!');
    }
  }
}
</script>
<style lang='less'>
body{
  background:#f1f1f1
}
.from label{
  font-size: 24px !important;
  color: rgb(27, 26, 26);
}
.fromtitle{
  height: 50px;
  line-height: 50px;
  text-align: center;
  font-size: 24px;
  margin-bottom: 20px;
}
.login{
  width: 400px!important;
  background:#fff ;
  padding: 30px;
  margin-top: 200px;
  border-radius: 4px;
  position: absolute;
  top: 50%;
  margin-top: -250px;
}
.ivu-input{
  border:1px solid #cacaca
}
.submit{
  width: 100%;
  border-radius: 10px;
}

</style>
