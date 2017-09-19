// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueChatScroll from 'vue-chat-scroll'
Vue.use(VueChatScroll)
Vue.prototype.HOST = '/api'
// import axios from 'axios'
// Vue.prototype.$http = axios
// Vue.use(axios)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
