<template>
  <div>
      <Row>
        <i-col span='4' push='22'>
          <Button type="primary" @click="addHandle">添加成员</Button>
        </i-col>
      </Row>
      <tablePage :columns="columns" :dataList="MemberListDataList" ></tablePage>
      <Modal
        v-model="modal"
        title="添加成员">
        <Row type="flex" justify="center" align="middle">
          <i-col span='20'>
            <Form :model="formItem" label-position="left"  class="from" ref="formItem" :rules="ruleValidate">
                <FormItem label="成员名" prop="userName">
                    <Input v-model="formItem.userName" placeholder="请输入成员名" size='large'></Input>
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
  name: 'MemberList',
  data(){
    return{
      formItem: {
        userName:""
      },
      modal:false,
      ruleValidate: {
        userName: [
            { required: true, message: '请输入成员名', trigger: 'blur' , type: 'string'}
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
      "MemberListDataList"
    ])
  },
  methods:{
    ...mapActions([
      'getMemberListDataList'
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
    this.getMemberListDataList()
  }
}
</script>
