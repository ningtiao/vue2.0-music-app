<template>
  <div class="recommend" ref="recommend" style="color:red">
      djdljl
  </div>
</template>

<script>
  import { getImgTextDetail } from 'api/index/recommend'
  export default{
    data() {
      return {
        detail: [],
        wrapper: null, // mescroll实例对象
        detailId: '',
        read: '',
        praise: '',
        isPraise: '',
        isDisable: false,
        showDetail: true,
        shareDetail: '',
        light: false,
        wChatparames: '',
        inputmessage: '',
        guideInfo: '',
        shareRemark: '',
        firstFigure: '',
        clickmore: false,
        wxUrl: '',
        isBtn: false,
        commentNumber: '',
        commentList: [],
        share: '',
        page: {
          num: 1, // 当前页 默认0,回调之前会加1; 即callback(page)会从1开始
          size: 10, // 每页数据条数
          time: null // 加载第一页数据服务器返回的时间; 防止用户翻页时,后台新增了数据从而导致下一页数据重复;
        }
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
      }
    },
    created() {
      this.getDetail()
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  .banner
    position:relative
    img
      width:100%
      height:5rem
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
</style>