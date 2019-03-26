<template>
  <div>
      <Row>
        <i-col span='4' push='22'>
          <Button type="primary" @click="addHandle('add')">添加成员</Button>
        </i-col>
      </Row>
      <tablePage :columns="columns" :dataList="MemberListDataList" ></tablePage>
      <Modal
        v-model="modal"
        :title="modalTitle">
        <Row type="flex" justify="center" align="middle">
          <i-col span='20'>
            <Form v-if="modal" :model="formItem" label-position="left"  class="from" ref="formItem" :rules="ruleValidate">
                <FormItem label="成员名" prop="name">
                    <Input v-model="formItem.name" placeholder="请输入成员名" size='large'></Input>
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
      modalTitle:'添加成员',
      formItem: {
        name:""
      },
      modal:false,
      is_add: true,
      id:'',
      ruleValidate: {
        name: [
            { required: true, message: '请输入成员名', trigger: 'blur' , type: 'string'}
        ]
      },
      columns:[
        {
          key: 'serialNumber',
          title: '序号',
        },
        {
          key: 'name',
          title: '成员名称',
        },
        {
          key: 'operation',
          title: '操作',
          render: (h, {row, column, index}) => {
            return (
              <div>
                <i-button type='primary' style={{marginRight:'20px'}} on-click={this.addHandle.bind(this,'change',{ row })}>更新</i-button>
                <i-button type='error' on-click={this.deleteHandle.bind(this,{ row })}>删除</i-button>
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
  watch:{
    modal(newVal, oldVal){
      if(!newVal){
        this.formItem.name = ''
      }
    }
  },
  methods:{
    ...mapActions([
      'getMemberListDataList',
      'getMemberAdd',
      'getMemberUpdate',
      'getMemberDelete'
    ]),
    addHandle(name,{ row } = { }){
      if(name === 'add'){
        this.modalTitle = '添加成员'
        this.is_add = true
      } else {
        this.id = row.id
        this.is_add = false
         this.modalTitle = '更新成员'
        this.getMemberUpdate({id:row.id}).then(res => {
          this.formItem = res
        }).catch(err => {
          this.$Message.error('数据初始化失败!');
        })
      }
      this.modal = true
    },
    deleteHandle({ row }){
      this.getMemberDelete(row.id).then( res => {
        this.$Message.success('删除成功!');
        this.getMemberListDataList()
      }).catch(err => {
        this.$Message.error('删除失败!');
      })
    },
    handleSubmit(name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          if(this.is_add){
            this.getMemberAdd(this.formItem).then(res => {
              this.$Message.success('保存成功!');
              this.getMemberListDataList()
              this.modal = false
            }).catch(err => {
              this.$Message.error('保存失败!');
            })
          } else {
            this.getMemberUpdate({
              id:this.id ,
              data: this.formItem
            }).then(res => {
              this.$Message.success('保存成功!');
              this.getMemberListDataList()
              this.modal = false
            }).catch(err => {
              this.$Message.error('保存失败!');
            })
          }

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
