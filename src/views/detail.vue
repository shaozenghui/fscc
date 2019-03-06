<template>
  <div>
      <Row :gutter='10'>
        <i-col span='3'>
          <Input v-model="searchData.nameValue" placeholder="姓名"  />
        </i-col>
        <i-col span='3'>
          <Select v-model="searchData.policyStateSelect" >
              <Option v-for="item in policyStateList" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>
        </i-col>
        <i-col span='8'>
          <Row :gutter='10'>
              <i-col span="12">
                  <DatePicker type="date" placeholder="交单日期" v-model="searchData.presentationDate"></DatePicker>
              </i-col>
              <i-col span="12">
                   <DatePicker type="date" placeholder="回执日期" v-model="searchData.receiptDate"></DatePicker>
              </i-col>
          </Row>
        </i-col>
        <i-col span='3'>
          <Select v-model="searchData.unionSelect" >
              <Option v-for="item in unionList" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>
        </i-col>
        <i-col span='3'>
          <i-button type='primary' icon='ios-search' @click="search">查询</i-button>
        </i-col>
        <i-col span='3'>
          <i-button type='primary' icon='ios-cloud-upload'>导出</i-button>
        </i-col>
      </Row>
      <tablePage :columns="columns" :dataList="DetailDataList" ></tablePage>
      <Modal v-model="modal" title="编辑联合人" @on-ok="ok" @on-cancel="cancel">
          <p>Content of dialog</p>
          <p>Content of dialog</p>
          <p>Content of dialog</p>
      </Modal>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import tablePage from '_c/tablePage'
export default {
  name: 'detail',
  data(){
    return {
      policyStateList:[
        {
          value: '1',
          label: '正式保单',
        },
        {
          value: '0',
          label: '撤单',
        },
      ],
      unionList:[
        {
          value: '0',
          label: '否',
        },
        {
          value: '1',
          label: '是',
        }
      ],
      columns:[
        {
          key: 'operation',
          title: '操作',
          fixed: 'left',
          width:150,
          render: () => {
              return (
                <i-button type='primary' on-click={this.editHandel}>编辑联合人</i-button>
              )
          }
        },
        {
          key: 'Scale premium',
          title: '规模保费',
          width:150,
        },
        {
          key: 'Occupational fee increase',
          title: '职业加费',
          width:150
        },
        {
          key: 'Additional investment',
          title: '额外投资',
          width:150,
          sortable: true
        },
        {
          key: 'annual premium equivalent',
          title: '标准保费',
          width:150,
          sortable: true
        },
        {
          key: 'StandardNumber',
          title: '标准件数',
          width:150,
          sortable: true
        },
        {
          key: 'Fyc',
          title: 'FYC',
          width:150,
          sortable: true
        },
        {
          key: 'achievement',
          title: '业绩',
          fixed: 'right',
          width:150,
          sortable: true
        },
      ],
      modal: false,
      searchData: {
        nameValue:'',
        policyStateSelect:'0',
        presentationDate:'',
        receiptDate:'',
        unionSelect:'0',
      }
    }

  },
  computed: {
    ...mapGetters([
      "DetailDataList"
    ])
  },
  components:{
    tablePage
  },
  methods:{
    ...mapActions([
       "getDetailDataList"
    ]),
    editHandel(){
      this.modal = true
    },
    search(){
      console.log(this.searchData)
    },
    ok () {
        this.$Message.info('Clicked ok');
    },
    cancel () {
        this.$Message.info('Clicked cancel');
    }
  },
  mounted(){
    this.getDetailDataList()
  }
}
</script>
<style lang="less" >

 .demo-table-error-row td{
      background-color:red;
      color: #fff;
  }
.submitButton{
  margin-top: 20px;
}
</style>
