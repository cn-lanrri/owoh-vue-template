/*
 * @Author: Lanrri
 * @Date: 2019-12-31 15:20:02
 * @Description:
 * @LastEditors  : Lanrri
 * @LastEditTime : 2019-12-31 18:04:18
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import(/* webpackChunkName: "index" */ '@/views/index.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
