<template>
  <div>
      <Row type="flex" justify="center" align="middle" style="margin-top:100px">
        <i-col span='8'>
            <Tabs :animated="false" class="tabs">
                <TabPane label="个人信息">
                    <Form :model="formItem" :rules="formItemRuleInline" label-position="left"  class="from" ref="formItem">
                      <FormItem  prop="userName">
                          <Input v-model="formItem.userName" placeholder="请输入用户名" size='large'></Input>
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
                    <Form :model="formItemPas" label-position="left" class="from" ref="formItemPas" :rules="formItemPasRuleInline">
                      <FormItem prop="oldpassWord">
                          <Input v-model="formItemPas.oldpassWord" placeholder="请输入原密码" size='large' type="password"></Input>
                      </FormItem>
                      <FormItem prop="newpassWord">
                          <Input v-model="formItemPas.newpassWord" placeholder="请输入新密码" size='large' type="password"></Input>
                      </FormItem>
                      <FormItem prop="newagpassWord">
                          <Input v-model="formItemPas.newagpassWord" placeholder="请再次输入新密码" size='large' type="password"></Input>
                      </FormItem>
                      <FormItem>
                          <Button type="primary" @click="handleSubmit2('formItemPas')">保存</Button>
                      </FormItem>
                    </Form>
                </TabPane>
            </Tabs>
        </i-col>
      </Row>
  </div>
</template>
<script>
export default {
  name: 'PersonalSet',
  data(){
    return{
      formItem: {
        userName:"root",
        // email:''
      },
      formItemPas: {
        oldpassWord:"",
        newpassWord:'',
        newagpassWord:''
      },
      formItemRuleInline: {
        userName: [
          { required: true, message: '用户名不能为空', trigger: 'blur' },
        ],
        // email: [
        //   { required: true, message: '邮箱不能为空', trigger: 'blur' },
        //   { type: 'email', message: '电子邮件格式不正确', trigger: 'blur' }
        // ],
      },
      formItemPasRuleInline: {
        oldpassWord: [
          { required: true, message: '请输入旧密码  ', trigger: 'blur' },
          { type: 'string', min: 6, message: '密码的最小长度为六位', trigger: 'blur' }
        ],
        newpassWord: [
          { required: true, message: '请输入新密码  ', trigger: 'blur' },
          { type: 'string', min: 6, message: '密码的最小长度为六位', trigger: 'blur' }
        ],
        newagpassWord: [
          { required: true, message: '请再次输入密码  ', trigger: 'blur' },
          { type: 'string', min: 6, message: '密码的最小长度为六位', trigger: 'blur' }
        ]
      }
    }
  },
  methods:{
    handleSubmit(name) {
      this.$refs[name].validate((valid) => {
        this.valid = valid
          if (valid) {
              this.$Message.success('保存成功!');
          } else {
              this.$Message.error('请完善信息!');
          }
      })
    },
    handleSubmit2(name) {
      this.$refs[name].validate((valid) => {
        this.valid = valid
          if (valid) {
              this.$Message.success('保存成功!');
          } else {
              this.$Message.error('请完善信息!');
          }
      })
    },
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
