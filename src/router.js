import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Finder from './views/Finder.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/finder',
      name: 'Finder',
      component: Finder
    },
  ]
})