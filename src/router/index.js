import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from './../pages/index'
import VueSource from 'vue-resource';

Vue.use(Router)
Vue.use(VueSource)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: IndexPage
    }
  ]
})
