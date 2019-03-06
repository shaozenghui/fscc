<template>
  <div >
      <Row type="flex" justify="center" align="middle">
        <i-col span='8'>
          <p class="fromtitle">个人设置</p>
           <Form :model="formItem" label-position="left" :label-width="100" class="from">
              <FormItem label="用户名">
                   <Input v-model="formItem.userName" placeholder="请输入用户名" size='large'></Input>
              </FormItem>
              <FormItem label="密码">
                  <Input v-model="formItem.passWord" placeholder="请输入密码" size='large' type="password"></Input>
              </FormItem>
              <FormItem>
                  <Button type="primary" @click="handleSubmit(formItem)">保存</Button>
              </FormItem>
          </Form>
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
        userName:"",
        passWord:''
      }
    }
  },
  methods:{
    handleSubmit(val){
      console.log(val)
    }
  }
}
</script>
<style>
.from label{
  font-size: 24px !important;
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
</style>
