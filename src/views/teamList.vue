<template>
  <div>
    <Row>
       <i-col span="4" push='22'>
         <Button @click="addTeam('add')" type='primary'>添加团队</Button>
      </i-col>
    </Row>
    <tablePage :columns="columns" :dataList="TeamListDataList" ></tablePage>
    <Modal
        v-model="modal"
        :title="modalTitle"
        >
      <div >
        <Row type="flex" justify="center" align="middle">
          <i-col span='20'>
            <Form v-if="modal" ref="formInline" :model="formInline" label-position="left"  :rules="ruleValidate">
              <FormItem prop="name" label="团队名称">
                  <Input type="text" v-model="formInline.name" placeholder="请填写团队名称"></Input>
              </FormItem>
              <FormItem label="负责人" prop="responsible_id">
                  <Select v-model="formInline.responsible_id" placeholder="请选择负责人">
                      <Option  v-for="(v,k) in UserList" :value="v[0]" :key="`responsibleLisy_${k}`">{{v[1]}}</Option>
                  </Select>
              </FormItem>
              <FormItem prop="team_user_list" label="成员">
                  <Select v-model="formInline.team_user_list" multiple placeholder="请选择成员">
                      <Option  v-for="(v,k) in UserList" :value="v[0]" :key="`memberList_${k}`">{{v[1]}}</Option>
                  </Select>
              </FormItem>
            </Form>
          </i-col>
        </Row>
      </div>
      <div slot="footer">
          <Button type="primary" @click="handleSubmit('formInline')">保存</Button>
      </div>
    </Modal>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import tablePage from '_c/tablePage'
import { GETUSERLIST } from '@/store/types'
export default {
  name: 'excel-import',
  data(){
    return {
      modalTitle:'添加团队',
      columns:[
        {
          key: 'serialNumber',
          title: '序号',
        },
        {
          key: 'name',
          title: '团队名称',
        },
        {
          key: 'responsible_name',
          title: '团队负责人',
        },
        {
          key: 'num',
          title: '团队人数',
          sortable: true
        },
        {
          key: 'operation',
          title: '操作',
          sortable: true,
          render: (h, { row, column, index}) => {
            return (
              <div>
                <i-button type='primary' on-click={this.addTeam.bind(this,'change', { row })} style={{marginRight:'10px'}}>更新</i-button>
                <i-button type='error' on-click={this.delectTeam.bind(this, { row })} >删除</i-button>
              </div>
            )
          }
        }
      ],
      modal:false,
      id:'',
      is_add:true,
      formInline: {
        name: '',
        responsible_id:'',
        team_user_list: []
      },
      ruleValidate: {
        name: [
            { required: true, message: '请填写团队名称', trigger: 'blur', type: 'string'  }
        ],
        responsible_id: [
            { required: true, message: '请选择负责人', trigger: 'blur', type: 'number' },
        ],
        team_user_list: [
            { required: true, message: '请选择成员', trigger: 'blur', type: 'array' },
        ]
      },
    }
  },
  computed:{
    ...mapGetters([
      "TeamListDataList",
      "UserList"
    ])
  },
  watch:{
    modal(newVal, oldVal){
      for(var key in this.formInline){
        this.formInline[key] = ''
      }
    }
  },
  components:{
    tablePage
  },
  methods:{
    ...mapActions([
      'getTeamListDataList',
      'getTeamListUserList',
      'getTeamListAdd',
      'getTeamListUpdate',
      'getTeamListDelete'
    ]),
    delectTeam({row}){
      this.getTeamListDelete(row.id).then(() => {
        this.$Message.success('删除成功!');
        this.getTeamListDataList()
      }).catch(err => {
        this.$Message.error('删除失败!');
      })
    },
    addTeam(name,{ row } = {}){
      if(name === 'add') {
        this.is_add = true
        this.getTeamListUserList()
        this.modalTitle = '添加团队'
      } else if(name === 'change') {
        this.modalTitle = '更新团队'
        this.id = row.id
        this.is_add = false
        this.getTeamListUpdate({id:row.id}).then(res => {
        let arr = []
        res.team_user_list.forEach(item => {
          arr.push(item[0])
        })
        res.team_user_list = arr
        this.formInline = res
        this.$store.commit(GETUSERLIST,res.user_list)
        }).catch(err =>{
          this.$Message.error('数据初始化失败!');
        })
      }
      this.modal = true
    },
    handleSubmit(name) {
      this.$refs[name].validate((valid) => {
          if (valid) {
            if(this.is_add){
              this.getTeamListAdd({
                name:this.formInline.name,
                num:this.formInline.team_user_list.length,
                responsible_id:this.formInline.responsible_id,
                team_user:this.formInline.team_user_list,
              }).then(res => {
                this.$Message.success('保存成功!');
                this.modal = false
                this.getTeamListDataList()
              }).catch(err => {
                if(err.code === '501'){
                  for(var key in err.message){
                    this.$Message.error(`${key}:${err.message[key]}!`);
                  }
                } else if (err.code === '400') {
                  for(var key in err.error_info){
                    this.$Message.error(`${err.error_info[key]}!`);
                  }
                }
              })
            } else {
              this.getTeamListUpdate({
                id:this.id,
                data:{
                  num:this.formInline.team_user_list.length,
                  responsible_id:this.formInline.responsible_id,
                  team_user:this.formInline.team_user_list
                }
              }).then(res => {
                this.$Message.success('保存成功!');
                this.modal = false
                this.getTeamListDataList()
              }).catch(err =>{
                if(err.code === '501'){
                  for(var key in err.message){
                    this.$Message.error(`${key}:${err.message[key]}!`);
                  }
                } else if (err.code === '400') {
                  for(var key in err.error_info){
                    this.$Message.error(`${err.error_info[key]}!`);
                  }
                }
              })
            }
          } else {
              this.$Message.error('请完善信息!');
          }
      })
    }
  },
  mounted(){
    this.getTeamListDataList()
  }
}
</script>
<style lang="less" >
.submitButton{
  margin-top: 20px;
}
</style>


