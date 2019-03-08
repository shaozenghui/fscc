<template>
  <div>
  <Row type="flex" justify="center" align="middle" >
      <i-col span='5' class="login">
        <p class="fromtitle">财务结算系统</p>
          <Form :model="formItem"  class="from" :rules="ruleInline" ref="formInline" >
            <FormItem prop="username">
                  <Input  v-model="formItem.username" placeholder="请输入用户名" size='large'>
                   <Icon type="ios-contact" slot="prepend"></Icon>
                  </Input>
            </FormItem>
            <FormItem prop="password">
                <Input  v-model="formItem.password" placeholder="请输入密码" size='large' type="password">
                   <Icon type="md-lock" slot="prepend"></Icon>
                </Input>
            </FormItem>
            <FormItem>
                <Button @click="RetrievePassword">忘记密码</Button>
                <Button  style="float:right" type="primary" @click="handleSubmit('formInline')" >登录</Button>
            </FormItem>
        </Form>
      </i-col>
    </Row>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  name: 'login',
  data(){
    return{
      formItem: {
        username:"",
        password:''
      },
      ruleInline: {
          username: [
              { required: true, message: '请输入用户名', trigger: 'blur' },
               { type: 'string', min: 4, message: '用户名最小长度为四位', trigger: 'blur' }
          ],
          password: [
              { required: true, message: '请输入密码  ', trigger: 'blur' },
              { type: 'string', min: 6, message: '密码的最小长度为六位', trigger: 'blur' }
          ]
      }
    }
  },
  mounted(){
    var _this = this;
    document.onkeydown = function(e){
      if (e.keyCode == 13) {
        _this.handleSubmit('formInline')
      }
    }
  },
  methods:{
    ...mapActions([
      'getLogin'
    ]),
    handleSubmit(name) {
        this.$refs[name].validate((valid) => {
            if (valid) {
              this.getLogin(this.formItem).then(() => {
                 this.$Message.success('登录成功!');
                  this.$router.push({path: '/'})
              }).catch(() => {
                this.$Message.error('用户名或者密码错误');
              })

            } else {
                this.$Message.error('请完善信息!');
            }
        })
    },
    RetrievePassword(){
      this.$router.push({path: '/RetrievePassword'})
    }
  }
}
</script>
<style>
body{
  background:#f1f1f1;
   /* background-image: url('../assets/bg.png');
   background-size: 100% 100%;
   background-repeat: no-repeat; */
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
  margin-bottom:30px;
}
.login{
  width: 400px;
  background:#fff ;
  padding: 30px;
  margin-top: 200px;
  border-radius: 4px;
  position: absolute;
  top: 50%;
  margin-top: -200px;
}
.ivu-input{
  border:1px solid #cacaca
}
</style>
