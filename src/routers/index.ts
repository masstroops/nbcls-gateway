// import { createRouter, createWebHistory } from 'vue-router'
import * as Router from 'vue-router'
import Home from '@pages/home/home.vue'


//Create a router and then export it

const _routes:Array<Router.RouteRecordRaw> = [
  //Path  6 Component are mandatory
  {
    path: "/",
    redirect: '/home'
  },
  {
    path: "/home",
    component: Home,//Lazy Loading to defer loading only when required
    name: "home"  //Use defined kepp dot notation to have  elegant design
  },
  {
    path: "/instrument", //need to change with regex to catch all non-defined
    component: () => import('@pages/instrument/instrument.vue'),
    name: "instrument"
  },
];


const router = Router.createRouter({
  history: Router.createWebHistory(),//webHash history will  add hash before every route
  routes: _routes, //Send the routes here.
})


export default router;