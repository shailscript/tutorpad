import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import Finder from '@/views/Finder.vue'
import Login from '@/views/Login.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/',
      component: () => import('@/views/layouts/Guest.vue'),
      children: [
        {
          path: 'finder',
          component: Finder
        },
        {
          path: 'login',
          component: Login
        }
      ]
    },
  ]
})