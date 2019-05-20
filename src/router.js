import Vue from 'vue';
import Router from 'vue-router';
// import Home from './views/Home.vue';
import Finder from './views/Finder.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Finder, //for testing
    },
    {
      path: '/finder',
      name: 'finder',
      component: Finder,
    },
  ],
});