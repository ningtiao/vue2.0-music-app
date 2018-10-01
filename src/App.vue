<template>
  <div id="app">
    <!-- index article cart mine -->
    <m-header></m-header>
    <router-view></router-view>
     <tab-bar></tab-bar>
  </div>
</template>

<script type="text-ecmascript-6">
import 'common/css/common.scss'
import tabBar from 'components/tabBar/tabBar'
import MHeader from 'components/m-header/m-header'
export default {
  components: {
    tabBar,
    MHeader
  },
  data() {
    return {
      value: '',
      enterAnimate: '', // 页面进入动效
      leaveAnimate: '' // 页面离开动效
    }
  },
  methods: {
    onSubmit() {
    console.log('dddd')
    }
  },
  watch: {
    '$route'(to, from) {
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      if (toDepth === 2) {
        // this.$store.commit('setPageName', to.name)
      }
      if (toDepth === fromDepth) {
      }
      this.enterAnimate = toDepth > fromDepth
        ? 'animated fadeInRight'
        : 'animated fadeInLeft'
      this.leaveAnimate = toDepth > fromDepth
        ? 'animated fadeOutRight'
        : 'animated fadeOutLeft'
    }
  },
 }
</script>

<style  lang="stylus" rel="stylesheet/stylus">
@import "~common/stylus/mixin"
.search
  line-height:30px
</style>
