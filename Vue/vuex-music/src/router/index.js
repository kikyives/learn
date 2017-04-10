import Vue from 'vue'
import Router from 'vue-router'
import MusicList from '../components/MusicList/MusicList.vue'
import Find from '../components/Find/Find.vue'
import Social from '../components/Social/Social.vue'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  mode: 'history',
  routes: [
    {
      path: '/',
      name: '/',
      redirect: '/music-list'
    },
    {
      path: '/music-list',
      name: 'MusicList',
      component: MusicList
    },
    {
      path: '/social',
      name: 'Social',
      component: Social
    },
      {
      path: '/find',
      name: 'Find',
      component: Find
    },
  ]
})
