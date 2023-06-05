// import { createRouter, createWebHistory } from 'vue-router'
import * as Router from 'vue-router'
import Home from '@pages/home/home.vue'
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
        component: Home,
        name: 'home'
      }
    ]
  },
  {
    path: "/g2", //need to change with regex to catch all non-defined
    component: Layout,
    name: "g2",
    children: [
      {
        path: '/instrument',
        component: () => import('@pages/instrument/instrument.vue'),
        name: 'instrument'
      }
    ]
  },
];


const router = Router.createRouter({
  history: Router.createWebHistory(),//webHash history will  add hash before every route
  routes: _routes, //Send the routes here.
})


export default router;