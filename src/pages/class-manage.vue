<template>
<div>
 <div data-spy="scroll" data-target="#navbar-example" data-offset="0" 
   style="overflow-x:hidden; position: relative;">
	<div style="width: 950px;">
	 <table class="table table-bordered">
		<caption style="text-align: center;"><h4>我的开设课程</h4></caption>
		<thead>
			<tr>
				<th>课程名</th>
				<th>面向年级</th>
				<th>状态</th>
				<th>创建时间</th>
				<th>操作</th>
			</tr>
		</thead>
		<tbody>
		<tr v-for="course in courses">
			<td>{{ course.name }}</td>
			<td>{{course.grade}}</td>
			<td>{{course.state}}</td>
			<td>{{ course.start_day }}</td>
			<td><router-link :to="'/pages/classDetail/'+course.id" class="btn btn-default"> 查看</router-link>&nbsp&nbsp&nbsp<button type="button" class="btn btn-danger" @click="delCourse($index)">删除</button></td>
		</tr>
		<tr v-if="notLauCourses != ''">
			<td>{{notLauCourses.name}}</td>
			<td>{{notLauCourses.grade}}</td>
			<td>{{notLauCourses.state}}</td>
			<td>{{ notLauCourses.startday }}</td>
			<td><router-link :to="'/pages/createHomework/'+fixid" class="btn btn-warning">修改</router-link> &nbsp&nbsp&nbsp<button type="button" class="btn btn-success" @click="launch()">发布</button> &nbsp&nbsp&nbsp<button type="button" class="btn btn-danger" @click="delprecourse()">删除</button></td>
		</tr>
		</tbody>
		</table>
	</div>
	</div>
	<div v-if="notLauCourses ==''">
	<router-link :to="'/pages/createHomework/'+creid" class="btn btn-default" style="width: 300px;">创建课程</router-link>
	</div>
	<div v-else>
		 <button type="button" style="width: 300px;" class="btn btn-default btn-lg" disabled="disabled">创建课程</button>
		 <p style="color: red;">您有课程还没发布，请先发布课程再创建新课程</p>
	</div>
	</div>
</template>

<script type="text/javascript">
import axios from 'axios'
import store from '@/store.js'
export default {
  data () {
    return {
      courses: [],
      fixid: 0,
      creid: 1,
      notLauCourses: {},
      newClass: []
    }
  },
  methods: {
    delCourse: function (index) {
      this.courses.splice(index, 1)
    },
    delprecourse: function () {
      store.delete()
      this.notLauCourses = ''
    },
    launch: function () {
      let self = this
      console.log('try######______------>', self.notLauCourses.name)
      self.newClass = self.notLauCourses.classes
      axios({
        url: 'https://diningx.cn/pa/public/api/teacher/add_course',
        method: 'post',
        data: {
          type: 'T2001',
          token: '1f5be77b086bc671b321a66ae4675330',
          name: self.notLauCourses.name,
          grade: self.notLauCourses.grade,
          description: self.notLauCourses.description,
          start_day: self.notLauCourses.startday,
          end_day: self.notLauCourses.endday,
          total_hours: self.notLauCourses.hours,
          classes: self.notLauCourses.classes,
          pre_course_name: self.notLauCourses.precourseName,
          aim: self.notLauCourses.aims,
          progress: 'first'
        },
        transformRequest: [function (data) {
    // Do whatever you want to transform the data
          let ret = ''
          for (let it in data) {
            if (Object.prototype.toString.apply(data[it]) === '[object Array]') {
              for (let item in data[it]) {
                ret += encodeURIComponent(it) + '[]=' + encodeURIComponent(data[it][item]) + '&'
              }
            } else {
              ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
            }
          }
          return ret
        }],
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(function (res) {
        console.log(res.data)
      }).catch(function (err) {
        console.log(err)
      })
      self.delprecourse()
      this.$route.go(0)
    },
    getAllCourse: function () {
      let self = this
      axios({
        url: 'https://diningx.cn/pa/public/api/teacher/get_my_course',
        method: 'post',
        data: {
          type: 'T2002',
          token: '1f5be77b086bc671b321a66ae4675330'
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
        console.log(res.data.msg[0].name + '-----' + res.data.msg.length)
        self.courses = res.data.msg
        console.log(self.courses)
      }).catch(function (err) {
        console.log(err)
      })
    },
    getNotLaunchedCourse: function () {
      // console.log('fetch what---------*******>', store.fetch())
      // var items = store.fetch()
      // self.notLauCourses = items
      // console.log(self.notLauCourses)
      return store.fetch()
    }
  },
  created () {
    this.getAllCourse()
    this.notLauCourses = this.getNotLaunchedCourse()
  }
}
</script>

<style type="text/css">
th {
	text-align: center;
}
</style>