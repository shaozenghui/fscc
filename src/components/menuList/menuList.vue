<template>
  <div>
      <Submenu  :name="item.name" >
          <template slot="title">
              <Icon :type="item.icon" />
              {{item.title}}
          </template>
          <template v-for="(v, k) in item.children">
              <MenuItem :name="v.name" :key="`MenuList_item${k}`" v-if='!v.children'>
                <router-link :to='v.path'><Icon :type="v.icon" />{{v.title}}</router-link>
              </MenuItem>
              <menuList :item="v" :key="`MenuList_item${v}`" v-else></menuList>
          </template>
      </Submenu>
  </div>
</template>
<script>
export default {
  name: 'menuList',
  props: {
    item: {
      type: Object,
      default: () => []
    }
  }
}
</script>
