/*
 * @Author: Lanrri
 * @Date: 2019-09-17 17:24:08
 * @LastEditors: Lanrri
 * @LastEditTime: 2019-12-12 16:16:45
 */
import Vue from 'vue'
import VueRouter, { Route } from 'vue-router'
import { Store } from 'vuex'

declare module 'vue/types/vue' {
  interface Vue {
    $router: VueRouter
    $route: Route
    $store: Store<any>
    $http: any
    $services: any
    $isLoading: boolean
    $woUI: any
    $MtaH5: any
  }
}
