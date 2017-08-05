import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import guide from '@/pages/guide'
import peerview from '@/pages/peerview-monitor'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/pages/guide',
      name: 'guide',
      component: guide
    },
    {
      path: '/pages/peerview-monitor',
      name: 'peerview-monitor',
      component: peerview
    }
  ]
})
