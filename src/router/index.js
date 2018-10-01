import Vue from 'vue'
import Router from 'vue-router'
import Recommend from 'components/recommend/recommend'
import Singer from 'components/singer/singer'
import User from 'views/userInfo/User'
import Rank from 'components/rank/rank'
import Search from 'components/search/search'
import details from 'components/detail/details'
Vue.use(Router)

// 配置路由
export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/recommend'
    },
    {
      path: '/recommend',
      component: Recommend,
      meta: {
        // 路由层级，数值越大层级越深，以此决定转场动画的前进和后退 大于前进，小于后退
        index: 0,
        showFooter: true
      },
      children: [
        {
          path: ':id',
          component: details
        }
      ]
    },
    {
      path: '/User',
      component: User
    },
    {
      path: '/singer',
      component: Singer
    },
    {
      path: '/rank',
      component: Rank
    },
    {
      path: '/search',
      component: Search
    }
  ]
})
