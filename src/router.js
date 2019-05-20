import Vue from 'vue'
import Router from 'vue-router'
import Finder from '@/views/Finder.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'finder',
      component: Finder
    },
  ]
})