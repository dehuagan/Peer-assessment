// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import VueResource from 'vue-resource'
// import guide from './pages/guide'
// import peerview from '@/pages/peerview-monitor'
// import VueRouter from 'vue-router'
import axios from 'axios'
Vue.prototype.$http = axios
// Vue.use(VueRouter)
// Vue.config.productionTip = false

// const routes = [
// 	{path: '@/pages/guide', component: guide},
// 	{path: '@/pages/peerview-monitor', component: peerview}
// ]

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
