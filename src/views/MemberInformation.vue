<template>
  <div>
      
      <Row>
        <i-col span='4' push='22'>
          <Button type="primary" @click="addHandle">添加员工</Button>
        </i-col>
      </Row>
      <tablePage :columns="columns" :dataList="MemberInformationDataList" ></tablePage>
      <Modal
        v-model="modal"
        title="添加员工">
        <Row type="flex" justify="center" align="middle">
          <i-col span='20'>
            <Form :model="formItem" label-position="left"  class="from" ref="formItem" :rules="ruleValidate">
                <FormItem label="邮箱"  prop="email">
                    <Input v-model="formItem.email" placeholder="请输入邮箱" size='large'></Input>
                </FormItem>
                <FormItem label="用户名" prop="userName">
                    <Input v-model="formItem.userName" placeholder="请输入用户名" size='large'></Input>
                </FormItem>
                <FormItem label="密码" prop="passWord">
                    <Input v-model="formItem.passWord" placeholder="请输入密码" size='large' type="password"></Input>
                </FormItem>
            </Form>
          </i-col>
        </Row>
        <div slot="footer">
            <Button type="primary" @click="handleSubmit('formItem')">保存</Button>
        </div>
      </Modal>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import tablePage from '_c/tablePage'
export default {
  name: 'MemberInformation',
  data(){
    return{
      formItem: {
        email:'',
        userName:"",
        passWord:''
      },
      modal:false,
      ruleValidate: {
        email: [
            { required: true, message: '请输入邮箱', trigger: 'blur'   },
            {  message: '邮箱格式不正确', trigger: 'blur', type: 'email'  },
        ],
        userName: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
            { min: 6,  message: '用户名最少为六位', trigger: 'blur', type: 'string' },
        ],
        passWord: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 6,  message: '密码最少为六位', trigger: 'blur', type: 'string' },
        ]
      },
      columns:[
        {
          key: 'Serial number',
          title: '序号',
        },
        {
          key: 'Member name',
          title: '成员名称',
        },
        {
          key: 'Login name',
          title: '登录名',
          width:200,
        },
        {
          key: 'operation',
          title: '操作',
          render: (h, {row, column, index}) => {
            return (
              <div>
                <i-button type='primary' style={{marginRight:'20px'}} on-click={this.addHandle}>编辑</i-button>
                <i-button type='error'>删除</i-button>
              </div>

            )
          }
        }
      ]
    }
  },
  components:{
    tablePage
  },
   computed:{
    ...mapGetters([
      "MemberInformationDataList"
    ])
  },
  methods:{
    ...mapActions([
      'getMemberInformationDataList'
    ]),
    addHandle(){
      this.modal = true
    },
    handleSubmit(name) {
      this.$refs[name].validate((valid) => {
          if (valid) {
              this.$Message.success('保存成功!');
              this.modal = false
          } else {
              this.$Message.error('请完善信息!');
          }
      })
    }
  },
  mounted(){
    this.getMemberInformationDataList()
  }
}
</script>
