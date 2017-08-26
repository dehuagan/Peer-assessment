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
import createcourse from '@/pages/createCourse'
import createhomework from '@/pages/createHomework'
import setupgroup from '@/pages/setupGroup'
import blank from '@/pages/blank'
import fixcourse from '@/pages/fixCourse'
import monitor from '@/pages/monitor'
import grouplist from '@/pages/groupList'
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
      path: '/pages/createCourse',
      name: 'createcourse',
      component: createcourse
    },
    {
      path: '/pages/fixCourse',
      name: 'fixcourse',
      component: fixcourse
    },
    {
      path: '/pages/createHomework/:id/:class_id',
      name: 'createhomework',
      component: createhomework
    },
    {
      path: '/pages/setupGroup/:id',
      name: 'setupgroup',
      component: setupgroup
    },
    {
      path: '/pages/blank',
      name: 'blank',
      component: blank
    },
    {
      path: '/pages/monitor/:course_id/:class_id/:id',
      name: 'monitor',
      component: monitor
    },
    {
      path: '/pages/groupList/:id',
      name: 'grouplist',
      component: grouplist
    }
  ]
})
