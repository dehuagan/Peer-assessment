<template>
<div>
	<div style=" margin-top: 10px; height: 80px;">
	<ul class="nav nav-tabs" style="height: 50px;">
	<li :class="{'active': status == 1}"><a @click="status = 1">课程大纲</a></li>
	<li :class="{'active': status == 2}"><a @click="status = 2">学生管理</a></li>
	<li :class="{'active': status == 3}"><a @click="status = 3">课程资源</a></li>
	<li :class="{'active': status == 4}"><a @click="status = 4">课程作业</a></li>
	<li :class="{'active': status == 5}"><a @click="status = 5">优秀作品榜</a></li>
	</ul>
  </div>
  <div v-if="status === 1" class="detail" style=" width: 900px;">
  <ul class="list-unstyled">
  <li><h4 class="text-left">课程名: <small>{{items.name}}</small></h4></li>
  <li><h4 class="text-left">课程介绍: <small>{{items.description}}</small></h4></li>
  <li><h4 class="text-left">课程时长: <small>{{items.total_hours}}</small></h4></li>
  <li><h4 class="text-left">开课时间段: <small>{{items.start_day}}---{{ items.end_day }}</small></h4></li>
  <li><h4 class="text-left">先修课程: <small>{{items.pre_course_name}}</small></h4></li>
  <li><h4 class="text-left">教学目标: <small>{{items.aim}}</small></h4></li>
  </ul>
  </div>
  <div v-if="status === 2">
    <studentManage :course_id="course_id" :token="user.token"></studentManage>
  </div>
  <div v-if="status === 3">
    <classResource :course_id="course_id"></classResource>
  </div>
    <div v-if="status === 4">
    <homework :course_id="course_id" :token="user.token"></homework>
  </div>
  
    <div v-if="status === 5">
    <excWork :course_id="course_id"></excWork>
  </div>
</div>

</template>
<script type="text/javascript">
import studentManage from '@/components/student-manage'
import classResource from '@/components/class-resource'
import homework from '@/components/homework'
import excWork from '@/components/exc-work'
import store from '@/store.js'
import axios from 'axios'
export default {
  data () {
    return {
      items: [],
      classes: [],
      user: {},
      status: 1
    }
  },
  props: ['token', 'course_id'],
  components: {
    studentManage, classResource, homework, excWork
  },
  methods: {
    getData: function () {
      let self = this
      axios({
        url: 'https://diningx.cn/pa/public/api/student/get_course_info_by_id',
        method: 'post',
        data: {
          type: 'S2003',
          token: self.token,
          course_id: self.course_id
        },
        transformRequest: [function (data) {
    // Do whatever you want to transform the data
          let ret = ''
          for (let it in data) {
            ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
          }
          return ret
        }],
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(function (res) {
        console.log(self.course_id)
        console.log(res.data.msg)
        self.items = res.data.msg
        self.classes = self.items.classes
        console.log(self.classes)
        // console.log('------------->', self.items)
      }).catch(function (err) {
        console.log(err)
      })
    }
  },
  created () {
    this.getData()
    this.user = store.fetch('user')
  }
}
</script>
<style type="text/css">
a {
  text-decoration: none;
}



</style>