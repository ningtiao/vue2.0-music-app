<template>
  <tabbar>
      <tabbar-item selected link="Recommend">
        <img slot="icon" src="../../assets/images/shouye.png">
        <img slot="icon-active" src="../../assets/images/shouyexuanzhong.png">
        <span slot="label">首页</span>
      </tabbar-item>
      <tabbar-item link="User">
        <img slot="icon" src="../../assets/images/wode.png">
        <img slot="icon-active" src="../../assets/images/wodeuanzhong.png">
        <span slot="label">我的</span>
      </tabbar-item>
  </tabbar>
</template>
<script>
import { Tabbar, TabbarItem } from 'vux'

export default {
  components: {
    Tabbar,
    TabbarItem
  },
  props: [],
  data() {
    return {
      select: 'index',
      bottomBar: [
        {
          name: '首页',
          iconCls: '../assets/images/shouye.png',
          link: 'Recommend'
        },
        {
          name: '我的',
          iconCls: '../assets/images/shouye.png',
          link: 'User'
        }
      ]
    }
  }
}
</script>
