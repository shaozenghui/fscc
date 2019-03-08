<template>
  <div>
      <Row type="flex" justify="center" align="middle" style="margin-top:100px">
        <i-col span='8'>
            <Tabs :animated="false" class="tabs">
                <TabPane label="个人信息">
                    <Form :model="formItem" :rules="formItemRuleInline" label-position="left"  class="from" ref="formItem" :label-width='100'>
                      <FormItem  prop="username" label="用户名">
                          <Input v-model="formItem.username" placeholder="请输入用户名" size='large'></Input>
                      </FormItem>
                      <!-- <FormItem  prop="email">
                          <Input v-model="formItem.email" placeholder="请输入邮箱" size='large' ></Input>
                      </FormItem> -->
                      <FormItem>
                          <Button type="primary" @click="handleSubmit('formItem')">保存</Button>
                      </FormItem>
                    </Form>
                </TabPane>
                <TabPane label="修改密码">
                    <Form :model="formItemPas" label-position="left" class="from" ref="formItemPas" :rules="formItemPasRuleInline" :label-width='100'>
                      <FormItem prop="password_old" label="原密码">
                          <Input v-model="formItemPas.password_old" placeholder="请输入原密码" size='large' type="password"></Input>
                      </FormItem>
                      <FormItem prop="password" label="新密码">
                          <Input v-model="formItemPas.password" placeholder="请输入新密码" size='large' type="password"></Input>
                      </FormItem>
                      <FormItem prop="password_confirm" label="新密码">
                          <Input v-model="formItemPas.password_confirm" placeholder="请再次输入新密码" size='large' type="password"></Input>
                      </FormItem>
                      <FormItem>
                          <Button type="primary" @click="PasSubmit('formItemPas')">保存</Button>
                      </FormItem>
                    </Form>
                </TabPane>

            </Tabs>
        </i-col>
      </Row>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  name: 'PersonalSet',
  data(){
    return{
      formItem: {
        username:"",
        // email:''
      },
      formItemPas: {
        password_old:"",
        password:'',
        password_confirm:''
      },
      formItemRuleInline: {
        username: [
          { required: true, message: '用户名不能为空', trigger: 'blur' },
        ],
        // email: [
        //   { required: true, message: '邮箱不能为空', trigger: 'blur' },
        //   { type: 'email', message: '电子邮件格式不正确', trigger: 'blur' }
        // ],
      },
      formItemPasRuleInline: {
        password_old: [
          { required: true, message: '请输入旧密码  ', trigger: 'blur' },
          { type: 'string', min: 6, message: '密码的最小长度为六位', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入新密码  ', trigger: 'blur' },
          { type: 'string', min: 6, message: '密码的最小长度为六位', trigger: 'blur' }
        ],
        password_confirm: [
          { required: true, message: '请再次输入密码  ', trigger: 'blur' },
          { type: 'string', min: 6, message: '密码的最小长度为六位', trigger: 'blur' }
        ]
      }
    }
  },
  methods:{
    ...mapActions([
      'getPasswordChange',
      'getusernameChange'
    ]),
    handleSubmit(name) {
      this.$refs[name].validate((valid) => {
        this.valid = valid
          if (valid) {
            this.getusernameChange(this.formItem).then(() => {
              this.$Message.success('保存成功!');
            }).catch((err) => {
              this.$Message.error('保存失败!');
            })
          } else {
              this.$Message.error('请完善信息!');
          }
      })
    },
    PasSubmit(name) {
      this.$refs[name].validate((valid) => {
        this.valid = valid
          if (valid) {
              this.getPasswordChange(this.formItemPas).then(() => {
                 this.$Message.success('修改成功，请重新登录');
                 setTimeout(() => {
                    this.$router.push({name:'login'})
                 }, 1000)
              }).catch((err) => {
                if(err === '501'){
                  this.$Message.error('两次密码输入不一样!')
                }else if ( err === '500'){
                  this.$Message.error('旧密码输入有误!')
                }
              })
          } else {
              this.$Message.error('请完善信息!');
          }
      })
    },
  },
  mounted(){
    this.getusernameChange().then((res) => {
      this.formItem = res
    }).catch((err) => {
      this.$Message.error('用户名获取失败!');
    })
  }

}
</script>
<style>
.from{
  margin-top: 40px;
}
.from label{
  font-size: 20px !important;
  color: rgb(27, 26, 26);
  padding: 0 !important;
  height: 36px;
  line-height: 36px !important;
}
.fromtitle{
  height: 50px;
  line-height: 50px;
  /* text-align: center; */
  font-size: 30px;
  margin: 50px 0;
}
.ivu-tabs-nav{
  font-size: 20px;
}
</style>
