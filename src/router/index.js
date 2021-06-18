import Vue from 'vue'
import VueRouter from 'vue-router'
import ShopList from '../views/ShopList.vue'
import ShopDetailes from '../views/ShopDetailes.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'ShopList',
    component: ShopList
  },
  {
    path: '/shop-detailes/:shopId',
    name: 'ShopDetailes',
    component: ShopDetailes,
    props:true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
