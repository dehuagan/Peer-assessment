import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import guide from '@/pages/guide'
import peerview from '@/pages/peerview-monitor'
import index from '@/pages/index'
import classmanage from '@/pages/class-manage'
import community from '@/pages/community'
import person from '@/pages/person'
import classdetail from '@/pages/classDetail'
import studentmanage from '@/pages/student-manage'
import classresource from '@/pages/class-resource'
import homework from '@/pages/homework'
import excwork from '@/pages/exc-work'
import createhomework from '@/pages/createHomework'
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
    },
    {
      path: '/pages/student-manage/:id',
      name: 'student-manage',
      component: studentmanage
    },
    {
      path: '/pages/class-resource/:id',
      name: 'class-resource',
      component: classresource
    },
    {
      path: '/pages/homework/:id',
      name: 'homework',
      component: homework
    },
    {
      path: '/pages/exc-work/:id',
      name: 'excwork',
      component: excwork
    },
    {
      path: '/pages/classDetail/:id',
      name: 'classdetail',
      component: classdetail
    },
    {
      path: '/pages/createHomework/:id',
      name: 'createhomework',
      component: createhomework
    }
  ]
})
