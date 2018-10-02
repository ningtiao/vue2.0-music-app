<template>
  <div id="app">
    <!-- index article cart mine 
    <router-view></router-view>
    <tab-bar v-show="$route.meta.showFooter"></tab-bar>-->
    <!-- index article cart mine -->
    <div class="app" :class="{'hideLeft':$route.path.split('/').length>2}">
        <router-view name="default">
        </router-view>
      <div class="z-foot">
        <tab-bar></tab-bar>
      </div>
    </div>
    <transition
      name="custom-classes-transition"
      :enter-active-class="enterAnimate"
      :leave-active-class="leaveAnimate">
      <router-view
        name="subPage"
        class="router-view" v-if="!$route.meta.keepAlive">
      </router-view>
    </transition>
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
