<template>
<div class="container">
  <div class="search" v-show="$route.meta.showFooter">
    <Search></Search>
  </div>
 <div class="recommend" ref="recommend">
    <scroll ref="scroll" class="recommend-content" :data="MainList">
      <div>
        <div v-if="recommends.length" class="slider-wrapper">
          <slider>
            <div v-for="item in recommends" :key="item.index">
              <a  @click="selectItem(item)">
                <img :src="item.img">
              </a>
            </div>
          </slider>
        </div>

        <div class="tab">
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
        </div>

        <div class="recommend-list">
          <ul>
            <li class="article-list-card" @click="selectItem(item)" v-for="item in MainList" :key="item.index">
            <!--params: {id: item.id}-->
              <img :src="item.pageImg" alt="">
              <div class="footer">
                <div class="title z-ellipsisi">
                  {{item.title}}
                </div>
                <div class="subtitle z-ellipsisi" v-html="item.content">
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div class="loading-container" v-show="!MainList.length">
        <loading></loading>
      </div>

    </scroll>
  </div>
  <router-view></router-view>
</div>
</template>

<script>
  import Slider from 'base/slider/slider'
  import { Tab, TabItem, Search } from 'vux'
  import { getMainPush, getImgText, getClassify } from 'api/index/recommend'
  import tabList from 'components/tabList/tabList'
  import Scroll from 'base/scroll/scroll'
  import Loading from 'base/loading/loading'
  export default {
    data() {
      return {
        recommends: [],
        MainList: [],
        pageSize: 10,
        pageNum: 1,
        classify: 10,
        tabList: [],
        index: 0,
        value: ''
      }
    },
    created() {
      this._doGetMainPush()
      this._doGetClassify()
      setTimeout(() => {
        this._getMainPushList()
      }, 1000)
    },
    methods: {
      _doGetMainPush() { // 轮播图
        getMainPush().then((res) => {
          if (res.status === 200) {
            var List = res.data
            List.forEach(item => {
              this.$set(item, 'url', '/' + item.material)
            })
            this.recommends = List
            console.log(this.recommends, '22111')
          }
        })
      },
      _doGetClassify() {
        getClassify('').then((res) => {
          if (res.status === 200) {
            this.tabList = res.data
            console.log(res)
          }
        })
      },
      _getMainPushList() {
        var params = {
          pageSize: this.pageSize,
          nowPage: this.pageNum,
          classify: this.classify
        }
        getImgText(params).then((res) => {
          if (res.status === 200) {
            this.MainList = res.data.list
          }
        }).catch((e) => {

        })
      },
      tabHandler(item) {
        console.log(item)
        this.MainList = []
        this.classify = item.id
        setTimeout(() => {
          this._getMainPushList()
        }, 1000)
      },
      selectItem(item) {
        this.$router.push({
          path: `/recommend/${item.id}`
        })
      }
    },
    components: {
      Slider,
      tabList,
      Scroll,
      Loading,
      Tab,
      TabItem,
      Search
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import "~common/stylus/variable"
  .recommend
    position: fixed
    width: 100%
    top: 44px
    bottom: 50px
    .search{
      line-height:30px;
    }
    .recommend-content
      height: 100%
      overflow: hidden
      .slider-wrapper
        position: relative
        width: 100%
        overflow: hidden
      .recommend-list
        margin: 10px 0 0 0
        padding-bottom:1px
        .article-list-card
          margin:0 8px 8px
          bottom:10px
          border-radius: 8px
          background-color: #fff
          box-shadow: 0 0 4px 0 rgba(166,142,92,0.20)
          img
            border-radius: 8px;
            width:100%
            height:200px
        .article-list-card .footer
          padding: 15px 0 10px
          overflow: hidden
        .article-list-card .footer .title
          margin: 0 20px
          font-size: 14px
          font-weight: 500
          color: #404040
        .article-list-card .footer .subtitle
          margin: 0 20px
          padding-top: 8px
          font-size: 12px
          color: #868686
        .article-list-body
          margin-top: 8px
      .loading-container
        position: absolute
        width: 100%
        top: 55%
        transform: translateY(-50%)
</style>