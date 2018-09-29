<template>
  <div id="app">
    <div class="search">
      <search
      v-model="value"
      position="absolute"
      auto-scroll-to-top
      top="0"
      @on-submit="onSubmit"
      ref="search"></search>
      </div>
      <tab-bar></tab-bar>
    <router-view></router-view>
  </div>
</template>

<script type="text-ecmascript-6">
import tabBar from 'components/tabBar/tabBar'
 import { Search } from 'vux'
 export default {
   components: {
    Search,
    tabBar
   },
   data() {
     return {
       value: ''
     }
   },
   methods: {
     onSubmit() {
      console.log('dddd')
     }
   }
 }
</script>

<style  lang="stylus" rel="stylesheet/stylus">
@import "~common/stylus/mixin"
.search
  line-height:30px
</style>
