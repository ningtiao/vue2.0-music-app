<template>
  <div class="tablist">
    <tab
      class="coupon-list-head"
      :line-width="2"
      active-color="#333333"
      bar-active-color="#FFB718"
      v-model="index">
      <tab-item
        v-for="item in tabList"
        :key="item.index"
        @click.native="tabHandler(item)"
        :selected="item.index === 0">
        {{item.className}}
      </tab-item>
    </tab>
  </div>
</template>

<script>
  import { Tab, TabItem } from 'vux'
  import { getClassify } from 'api/index/recommend'
  export default {
    data() {
      return {
        tabList: [],
        index: 0
      }
    },
    components: {
      Tab,
      TabItem
    },
    created() {
      this._doGetClassify()
    },
    methods: {
      _doGetClassify() {
        getClassify('').then((res) => {
          if (res.status === 200) {
            this.tabList = res.data
            console.log(res)
          }
        })
      },
      tabHandler() {
        console.log('qiehuan')
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  .tab
    display: flex
    height: 44px
    line-height: 44px
    font-size: $font-size-medium
    .tab-item
      flex: 1
      text-align: center
      .tab-link
        padding-bottom: 5px
        color: $color-text-l
      &.router-link-active
        .tab-link
          color: $color-theme
          border-bottom: 2px solid $color-theme
</style>