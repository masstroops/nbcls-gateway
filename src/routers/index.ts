// import { createRouter, createWebHistory } from 'vue-router'
import * as Router from 'vue-router'
import Layout from '@components/layout/layout.vue'


//Create a router and then export it

const _routes:Array<Router.RouteRecordRaw> = [
  //Path  6 Component are mandatory
  {
    path: "/",
    redirect: '/home'
  },
  
  {
    path: "/g1",
    component: Layout,//Lazy Loading to defer loading only when required
    name: "g1",
    redirect: '/home',
    children: [
      {
        path: '/home',
        component: () => import('@pages/home/home.vue'),
        name: 'home',
        meta: { title: '首页' }
      },
      {
        path: '/instrument',
        component: () => import('@pages/instrument/instrument.vue'),
        name: 'instrument',
        meta: { title: '仪器列表' },
      },
      {
        path: '/instrument/detail',
        component: () => import('@pages/instrument/detail.vue'),
        name: 'instrumentDetail',
        meta: { title: '仪器列表' },
      },
      {
        path: '/rules',
        component: () => import('@pages/rules/rules.vue'),
        name: 'rules',
        meta: { title: '规章制度' }
      },
      {
        path: '/rules/detail',
        component: () => import('@pages/rules/detail.vue'),
        name: 'rulesDetail',
        meta: { title: '规章制度' }
      },
      {
        path: '/news',
        component: () => import('@pages/news/news.vue'),
        name: 'news',
        meta: { title: '新闻动态' }
      },
      {
        path: '/news/detail',
        component: () => import('@pages/news/detail.vue'),
        name: 'newsDetail',
        meta: { title: '新闻动态' }
      },
      {
        path: '/trainning',
        component: () => import('@pages/trainning/trainning.vue'),
        name: 'trainning',
        meta: { title: '培训讲座' }
      },
      {
        path: '/trainning/detail',
        component: () => import('@pages/trainning/detail.vue'),
        name: 'trainningDetail',
        meta: { title: '培训讲座' }
      },
      {
        path: '/introduction',
        component: () => import('@pages/introduction/introduction.vue'),
        name: 'introduction',
        meta: { title: '平台简介' }
      },
      {
        path: '/contact',
        component: () => import('@pages/contact/contact.vue'),
        name: 'contact',
        meta: { title: '联系方式' }
      },
      {
        path: '/login',
        component: () => import('@pages/login/login.vue'),
        name: 'login',
        meta: { title: '预约入口' }
      },
    ]
  },
  // {
  //   path: "/g2", //need to change with regex to catch all non-defined
  //   component: Layout,
  //   name: "g2",
  //   children: [
  //     {
  //       path: '/instrument',
  //       component: () => import('@pages/instrument/instrument.vue'),
  //       name: 'instrument'
  //     }
  //   ]
  // },
];


const router = Router.createRouter({
  history: Router.createWebHistory(),//webHash history will  add hash before every route
  routes: _routes, //Send the routes here.
})


export default router;