/*
 * @Author: Lanrri
 * @Date: 2019-12-31 15:20:02
 * @Description:
 * @LastEditors  : Lanrri
 * @LastEditTime : 2019-12-31 18:27:30
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
