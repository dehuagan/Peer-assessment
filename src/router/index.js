import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import guide from '@/pages/guide'
import peerview from '@/pages/peerview-monitor'
import index from '@/pages/index'
import classmanage from '@/pages/class-manage'
import community from '@/pages/community'
import person from '@/pages/person'
import blank from '@/pages/blank'
import blank2 from '@/pages/blank2'
import login from '@/pages/login'
import store from '@/store.js'
Vue.use(Router)
const router = new Router({
  routes: [
    {
      path: '/pages/index',
      name: 'index',
      meta: {
        requireAuth: true
      },
      component: index
    },
    {
      path: '/pages/guide',
      name: 'guide',
      meta: {
        requireAuth: true
      },
      component: guide
    },
    {
      path: '/pages/peerview-monitor',
      name: 'peerview-monitor',
      meta: {
        requireAuth: true
      },
      component: peerview
    },
    {
      path: '/pages/class-manage',
      name: 'classmanage',
      meta: {
        requireAuth: true
      },
      component: classmanage
    },
    {
      path: '/pages/community',
      name: 'community',
      meta: {
        requireAuth: true
      },
      component: community
    },
    {
      path: '/pages/person',
      name: 'person',
      meta: {
        requireAuth: true
      },
      component: person
    },
    {
      path: '/pages/blank',
      name: 'blank',
      meta: {
        requireAuth: true
      },
      component: blank
    },
    {
      path: '/pages/login',
      name: 'login',
      component: login
    },
    {
      path: '/pages/blank2',
      name: 'blank2',
      meta: {
        requireAuth: true
      },
      component: blank2
    }
  ]
})
router.beforeEach((to, from, next) => {
  console.log('meta*******************************', to)
  if (to.matched.some(r => r.meta.requireAuth)) {
    console.log('meta*******************************', isEmptyObject(store.fetch('user')))
    if (!isEmptyObject(store.fetch('user'))) {
      next()
    } else {
      next({
        path: '/pages/login',
        query: {redirect: '/pages/index'}
      })
    }
  } else {
    next()
  }
})
function isEmptyObject (obj) {
  for (var key in obj) {
    return false
  }
  return true
}

export default router
