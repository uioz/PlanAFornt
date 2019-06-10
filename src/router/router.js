import Vue from 'vue';
import Router from 'vue-router';
import Index from "@/views/index/index";

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Index
    },
    {
      path: '/query',
      component: () => import(/* webpackChunkName:"query" */'../views/query/query.vue')
    }
  ]
});
