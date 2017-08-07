import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import guide from '@/pages/guide'
import peerview from '@/pages/peerview-monitor'
import index from '@/pages/index'
import classmanage from '@/pages/class-manage'
import community from '@/pages/community'
import person from '@/pages/person'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/pages/index',
      name: 'index',
      component: index
    },
    {
      path: '/pages/guide',
      name: 'guide',
      component: guide
    },
    {
      path: '/pages/peerview-monitor',
      name: 'peerview-monitor',
      component: peerview
    },
    {
      path: '/pages/class-manage',
      name: 'classmanage',
      component: classmanage
    },
    {
      path: '/pages/community',
      name: 'community',
      component: community
    },
    {
      path: '/pages/person',
      name: 'person',
      component: person
    }
  ]
})
