<template>
  <transition name="slide">
    <div class="recommend-detail">
      <!--滑动区域-->
      <scroll ref="scrollList" class="recommend-content" :data="commentList">
        <div>
          <div>
            <div class="banner">
              <img :src="detail.pageImg" alt="">
              <div class="detail-title">
                <p>{{detail.title}}</p>
                <span>已阅人数: {{read}}</span>
              </div>
            </div>

            <div class="detail-content">
              <div class="product" v-html="detail.content">
              </div>
              <span>发布于  {{detail.created}}</span>
            </div>

            <div class="comment" id="commentList">
              <p>全部 {{commentNumber}} 条回复</p>
              <div v-for="item in commentList" class="comment-list" :key="item.index">
                <div class="left">
                  <img src="../../assets/images/weizhuanfa.png">
                </div>
                <div class="right">
                  <span>{{item.name}}</span>
                  <p>{{item.comment}}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </scroll>
    </div>
    </transition>
</template>

<script>
  import { getImgTextDetail, getReadNumber, getReadNumberUser, getAddnumber, getCommentNumber, getImgTextComment } from 'api/index/recommend'
  import { XHeader } from 'vux'
  import Scroll from 'base/scroll/scroll'
  import Loading from 'base/loading/loading'
  export default{
    components: {
      XHeader,
      Scroll,
      Loading
    },
    data() {
      return {
        detail: [],
        wrapper: null, // mescroll实例对象
        detailId: '',
        read: '',
        commentNumber: '',
        commentList: [],
        pageSize: 10,
        nowPage: 1
      }
    },
    methods: {
      getDetail() {
        var params = {
          id: this.$route.params.id
        }
        if (this.$route.params.id === undefined) {
          return false
        } else {
          getImgTextDetail(params).then((res) => {
            if (res.status === 200) {
              console.log(res)
              this.detail = res.data
            }
          })
        }
      },
      readNumber() { // 获取阅读数
        var params = {
          id: this.$route.params.id
        }
        getReadNumber(params).then((res) => {
          console.log(res)
          if (res.status === 200) {
            this.read = res.data
          }
        })
      },
      addNumber() { // 添加阅读数
        var params = {
          materialId: this.$route.params.id,
          courierId: sessionStorage.getItem('id')
        }
        getAddnumber(params).then((res) => {
          if (res.status === 200) {
            console.log('阅读')
          }
        })
      },
      getCommont() { // 获取评论数
        var params = {
          materialId: this.$route.params.id
        }
        getCommentNumber(params).then((res) => {
          if (res.status === 200) {
            this.commentNumber = res.data
          }
        })
      },
      getUserNumber() { // 判断用户是否阅读
        var params = {
          materialId: this.$route.params.id,
          courierId: sessionStorage.getItem('id')
        }
        getReadNumberUser(params).then((res) => {
          if (res.status === 200) {
            console.log(res, '2222222222')
            if (res.data < 1) {
              this.addNumber()
            }
          }
        })
      },
      doGetCommentImg() { // 评论列表
        var params = {
          pageSize: this.pageSize,
          nowPage: this.nowPage,
          materialId: this.$route.params.id
        }
        getImgTextComment(params).then((res) => {
          if (res.status === 200) {
            console.log(res.data.list)
            this.commentList = res.data.list
            console.log(this.commentList.length)
          }
        })
      }
    },
    created() {
      this.getDetail()
      this.getUserNumber()
      this.readNumber()
      this.doGetCommentImg()
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  .slide-enter-active, .slide-leave-active
    transition: all 0.3s

  .slide-enter, .slide-leave-to
    transform: translate3d(100%, 0, 0)
  .recommend-detail
    position: fixed
    z-index: 100
    top: 0
    left: 0
    bottom: 50px
    right: 0
    background: $color-background
  .recommend-content{
    height:100%
    overflow: hidden;
  }
  .banner
    position:relative
    img
      width:100%
      height:220px
    .detail-title
      width:100%
      position:absolute
      bottom:8px
      padding:5px 15px
      font-family: PingFangSC-Medium
      color:#ffffff
      letter-spacing: 0.07px
      p
        font-size: 16px
        padding-bottom:2px;
      span
        font-size: 12px
  .detail-content
    padding: 10px 15px
    font-size: 14px
    background-color:#ffffff
    color: #333333
    letter-spacing: 0.07px
    border-bottom: 1 solid #D6D6D6
    .product
      padding: 15px 0
   .comment
    padding: 10px 15px
    background: #ffffff
    height:auto
      p
        font-size: 14px
        color: #333333
    .comment-no-data
      text-align:center
      padding: 20px 0
    .comment-list
      margin-top:10px
      display:flex
      border-bottom: 1px solid #D6D6D6
      padding:0 0 15px 0
      .left
        flex:1
        img
          width:30px
          height:30px
          border-radius:50%
      .right
        flex:5
        p,span
          font-size: 14px
          color: #333333
</style>
