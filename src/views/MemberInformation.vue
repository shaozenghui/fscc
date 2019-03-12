<template>
  <div>

      <Row>
        <i-col span='4' push='22'>
          <Button type="primary" @click="addHandle('add')">添加员工</Button>
        </i-col>
      </Row>
      <tablePage :columns="columns" :dataList="MemberInformationDataList" ></tablePage>
      <Modal
        v-model="modal"
        title="添加员工">
        <Row type="flex" justify="center" align="middle">
          <i-col span='20'>
            <Form v-if="modal" :model="formItem" label-position="left"  class="from" ref="formItem" :rules="ruleValidate" inline>
                <FormItem label="邮箱"  prop="email">
                    <Input v-model="formItem.email" placeholder="请输入邮箱" size='large'></Input>
                </FormItem>
                <FormItem label="用户名" prop="username">
                    <Input v-model="formItem.username" placeholder="请输入用户名" size='large'></Input>
                </FormItem>
                <FormItem label="密码" prop="password">
                    <Input v-model="formItem.password" placeholder="请输入密码" size='large' type="password"></Input>
                </FormItem>
                <FormItem label="权限" prop="is_superuser">
                    <Select v-model="formItem.is_superuser">
                      <Option
                      v-for="(item, index) in is_superuserList"
                      :value="item.value"
                      :key='`is_superuserList_${index}`'>{{item.label}}</Option>
                    </Select>
                </FormItem>
                 <FormItem label="状态" prop="is_active">
                    <Select v-model="formItem.is_active">
                      <Option
                      v-for="(item, index) in is_activeList"
                      :value="item.value"
                      :key='`is_superuserList_${index}`'>{{item.label}}</Option>
                    </Select>
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
        username:"",
        password:'',
        is_superuser:'',
        is_active:''
      },
      is_activeList:[
        {
          value: '1',
          label:'正常',
        },
        {
          value: '0',
          label:'禁用',
        }
      ],
      is_superuserList:[
        {
          value: '1',
          label:'管理员',
        },
        {
          value: '0',
          label:'普通员工',
        }
      ],
      is_add:true,
      modal:false,
      ruleValidate: {
        email: [
            { required: true, message: '请输入邮箱', trigger: 'blur'   },
            {  message: '邮箱格式不正确', trigger: 'blur', type: 'email'  },
        ],
        username: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
            { min: 6,  message: '用户名最少为六位', trigger: 'blur', type: 'string' },
        ],
        password: [
            { message: '请输入密码', trigger: 'blur' },
            { min: 8,  message: '密码最少为八位', trigger: 'blur', type: 'string' },
        ],
        is_superuser: [
            { required: true, message: '请选择权限', trigger: 'blur' }
        ],
        is_active: [
            { required: true, message: '请选择状态', trigger: 'blur' }
        ],
      },
      columns:[
        {
          key: 'SerialNumber',
          title: '序号',
        },
        {
          key: 'username',
          title: '成员名称',
        },
        {
          key: 'email',
          title: '邮箱',
          width:200,
        },
        {
          key: 'date_joined',
          title: '日期',
          width:200,
        },
        {
          key: 'get_status_txt',
          title: '状态',
          width:200,
        },
        {
          key: 'operation',
          title: '操作',
          render: (h, {row, column, index}) => {
            return (
              <div>
                <i-button type='primary' style={{marginRight:'20px'}} on-click={this.addHandle.bind(this,'change',{ row })}>更新</i-button>
                <i-button type='error' on-click={this.remove.bind(this,{row, column, index})}>删除</i-button>
              </div>
            )
          }
        }
      ],
      staff_id:''
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
  watch:{
    modal(newVal,oldVal){
      if(!newVal){
        for(var key in this.formItem){
          this.formItem[key] = ''
        }
      }
    }
  },
  methods:{
    ...mapActions([
      'getMemberInformationDataList',
      'getAddStaff',
      'getChangeStaff'
    ]),
    addHandle(name,{ row } = {}){
      if(name === 'add'){
         this.is_add = true
         this.modal = true
      }
      else {
        this.is_add = false
        this.modal = true
        this.staff_id = row.id
        this.getChangeStaff({
            id:row.id
          }).then(res => {

          res.is_superuser = res.is_superuser.toString()
          res.is_active = res.is_active.toString()
          this.formItem = Object.assign(this.formItem, res)
        }).catch(err => {
             this.$Message.error('数据初始化失败!');
        })
      }
    },
    remove({row, column, index}){
      this.MemberInformationDataList.splice(index, 1)
       this.$Message.success('删除成功!');
    },
    handleSubmit(name) {
      this.$refs[name].validate((valid) => {
          if (valid) {
            if(this.is_add){
              this.getAddStaff(this.formItem).then(() => {
                this.$Message.success('保存成功!');
                this.modal = false
                this.getMemberInformationDataList()
              }).catch(err => {
                let obj = err.message
                for( var key in obj){
                   this.$Message.error(`${key}:${obj[key]}`);
                }
              })
            } else {
              this.getChangeStaff({
                id:this.staff_id,
                data:this.formItem
              }).then(res => {
                  this.$Message.success('保存成功!');
                  this.modal = false
                  this.getMemberInformationDataList()
              }).catch(err => {
                  this.$Message.error('修改失败!');
              })
            }
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
