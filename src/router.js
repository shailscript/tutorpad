import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home.vue';
import Finder from '@/views/Finder.vue';
import Tuitions from '@/views/Tuitions.vue';
import Login from '@/views/Login.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },

    {
      path: '/finder',
      name: 'finder',
      component: Finder,
    },

    {
      path: '/tuitions',
      name: 'tuitions',
      component: Tuitions,
    },

    {
      path: '/login',
      name: 'login',
      component: Login,
    },
  ],
});
