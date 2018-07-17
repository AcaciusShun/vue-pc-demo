import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from './../pages/index'
import VueSource from 'vue-resource'
// 引入詳情頁佈局頁面
import DetailPage from '../pages/detail'
import DetailAnaPage from '../pages/detail/analysis'
import DetailCouPage from '../pages/detail/count'
import DetailForPage from '../pages/detail/forecast'
import DetailPubPage from '../pages/detail/publish'


Vue.use(Router)
Vue.use(VueSource)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: IndexPage
    },
    {
      path: '/detail',
      name: 'detail',
      redirect: '/detail/count',
      component: DetailPage,

      children:[
        {
					path: 'analysis',
					component: DetailAnaPage
				},
				{
					path: 'count',
					component: DetailCouPage
				},
				{
					path: 'forecast',
					component: DetailForPage
				},
				{
					path: 'publish',
					component: DetailPubPage
				}
      ]
    }
  ]
})
