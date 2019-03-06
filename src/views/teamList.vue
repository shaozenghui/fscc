<template>
  <div>
    <Row>
       <i-col span="4" push='22'>
         <Button @click="addTeam" type='primary'>添加团队</Button>
      </i-col>
    </Row>
    <tablePage :columns="columns" :dataList="TeamListDataList" ></tablePage>
    <Modal
        v-model="modal"
        title="添加团队"
        >
      <div >
        <Row type="flex" justify="center" align="middle">
          <i-col span='20'>
            <Form ref="formInline" :model="formInline" label-position="left"  :rules="ruleValidate">
              <FormItem prop="name" label="团队名称">
                  <Input type="text" v-model="formInline.name" placeholder="请填写团队名称"></Input>
              </FormItem>
              <FormItem label="负责人" prop="responsible">
                  <Select v-model="formInline.responsible" placeholder="请选择负责人">
                      <Option  v-for="(v,k) in responsibleList" :value="v.value" :key="`responsibleLisy_${k}`">{{v.name}}</Option>
                  </Select>
              </FormItem>
              <FormItem prop="member" label="成员">
                  <Select v-model="formInline.member" multiple placeholder="请选择成员">
                      <Option  v-for="(v,k) in memberList" :value="v.value" :key="`memberList_${k}`">{{v.name}}</Option>
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
export default {
  name: 'excel-import',
  data(){
    return {
      columns:[
        {
          key: 'serialNumber',
          title: '序号',
        },
        {
          key: 'teamName',
          title: '团队名称',
        },
        {
          key: 'Team leader',
          title: '团队负责人',
        },
        {
          key: 'Team size',
          title: '团队人数',
          sortable: true
        },
        {
          key: 'createTime',
          title: '创建时间',
          sortable: true
        },
        {
          key: 'operation',
          title: '操作',
          sortable: true,
          render: (h, { row, column, index}) => {
            return (
              <div>
                <i-button type='error' style={{marginRight:'10px'}}>删除</i-button>
                <i-button type='primary'>编辑</i-button>
              </div>
            )
          }
        }
      ],
      modal:false,
      formInline: {
        name: '',
        responsible:'',
        member: []
      },
      ruleValidate: {
        name: [
            { required: true, message: '请填写团队名称', trigger: 'blur', type: 'string'  }
        ],
        responsible: [
            { required: true, message: '请选择负责人', trigger: 'blur', type: 'string' },
        ],
        member: [
            { required: true, message: '请选择成员', trigger: 'blur', type: 'array' },
        ]
      },
      responsibleList: [
        { value: '0', name: 'tom'},
        { value: '1', name: 'tom1'},
        { value: '2', name: 'tom2'},
      ],
      memberList: [
        { value: '0', name: 'tom'},
        { value: '1', name: 'tom1'},
        { value: '2', name: 'tom2'},
      ]
    }
  },
  computed:{
    ...mapGetters([
      "TeamListDataList"
    ])
  },
  components:{
    tablePage
  },
  methods:{
    ...mapActions([
      'getTeamListDataList'
    ]),
    addTeam(){
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
    this.getTeamListDataList()
  }
}
</script>
<style lang="less" >
.submitButton{
  margin-top: 20px;
}
</style>


