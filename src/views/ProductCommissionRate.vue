<template>
  <div >
      <Row type="flex" justify="center" align="middle">
        <i-col span='8'>
          <p class="fromtitle">产品佣金率设置</p>
           <Form :model="formItem" label-position="left" :label-width="100" class="from">
              <FormItem label="产品">
                <Select v-model="formItem.SelectVal" size='large'>
                  <Option  v-for="(item, index) in SelectList" :key="`SelectList_item${index}`" :value="item.value">{{item.label}}</Option>
                </Select>
              </FormItem>
              <FormItem label="佣金率">
                  <Input v-model="formItem.inputVal" placeholder="佣金率" size='large'></Input>
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
  name: 'ProductCommissionRate',
  data(){
    return{
      formItem: {
        SelectVal:"A",
        inputVal:''
      },
      SelectList:[
          {
            label: '产品A',
            value: 'A',
          },
           {
            label: '产品B',
            value: 'B'
          },
           {
            label: '产品C',
            value: 'C'
          },
        ],
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
}
.fromtitle{
  height: 50px;
  line-height: 50px;
  /* text-align: center; */
  font-size: 30px;
  margin: 50px 0;
}
</style>
