import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import 'bootstrap/dist/css/bootstrap.css'
Vue.use(VueRouter)
/* eslint-disable no-new */


//定义路由组件
const lineCharts = require('./components/lineCharts.vue')
const pieCharts = require('./components/pieCharts.vue')
const tabbar = require('./components/tabbar.vue')
//定义路由
const routes = [
  { path: '/', redirect: '/lineCharts' },
  { path: '/lineCharts', component: lineCharts},
  { path: '/pieCharts', component: pieCharts},
  { path: '/tabbar', component: tabbar}
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
 