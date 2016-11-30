import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
/* eslint-disable no-new */


//定义路由组件
const charts = require('./components/charts.vue')

//定义路由
const routes = [
  { path: '/', redirect: '/charts' },
  { path: '/charts', component: charts}
]

// 创建router实例
const router = new VueRouter({
  routes
})

new Vue({
  el: '#app', 
  template: '<App/>',
  components: { App },
  router
})
 