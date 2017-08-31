<template>
<div style="width: 1000px;">
<div style="width: 100%;">
	<div style="float: left;">
	<ol class="breadcrumb">
    <li>{{courseData.name}}</li>
    <li v-for="aclass in courseData.classes"><a v-if="aclass.id === generalData[1]">{{aclass.class_name}}</a></li>
    <li class="active">{{generalData[2]}}</li>
</ol>
</div>
<p class="text-right"><img  :src="backPic" onclick="window.history.go(-1)"></p>
</div>
<br>
<!--*********************************************************************************-->
   <div v-if="judge === 0">
<myprogress :homework_info="homework_info"></myprogress>
<p class="text-right"><button class="btn btn-default" @click="judge = 3">查看作业要求</button></p>
   <h4>提交名单</h4>
   <div data-spy="scroll" data-target="#navbar-example" data-offset="0" 
   style="height:90%;overflow-x:hidden; position: relative;">
	
 <table style="width: 100%;" class="table table-bordered">
    <thead>
    <tr>
      <th>编号</th>
      <th>学号</th>
      <th>姓名</th>
      <th>提交时间</th>
      <th>提交内容</th>
    </tr>
  </thead>
  <tbody>
  <tr v-for="(student, index) in students">
  	<td>{{student.student_id}}</td>
  	<td>{{student.school_num}}</td>
  	<td>{{student.name}}</td>
  	<td>{{student.creat_time}}</td>
  	<td><button class="btn btn-default" @click="giveData( student.school_num, student.student_id)"> 查看</button></td>
  </tr>
  </tbody>
  </table>
   </div>
   </div>
   <div v-if="judge === 1">
   <p class="text-left"><button class="btn btn-default" @click="judge = 0" style="margin-right: 900px;">返回</button></p>
   	<homeworkDetail :homework_id="homework_id" :oneStudent="oneStudent"></homeworkDetail>
   </div>
   <div v-if="judge === 3">
   	<p class="text-left"><button class="btn btn-default" @click="judge = 0" style="margin-right: 900px;">返回</button></p>
    <homeworkRequire :homework_info="homework_info"></homeworkRequire>
   </div>
</div>	
</template>
<script type="text/javascript">
import backPic from '@/assets/Back.png'
import store from '@/store.js'
import axios from 'axios'
import homeworkDetail from '@/components/homeworkDetail'
import myprogress from '@/components/progress'
import homeworkRequire from '@/components/homeworkRequire'
export default {
  data () {
    return {
      homework_id: this.$route.params.homework_id,
      backPic: backPic,
      generalData: [],
      courseData: {},
      students: [],
      judge: 0,
      homework_info: {},
      oneStudent: {
        school_num: '',
        student_id: ''
      }
    }
  },
  components: {
    homeworkDetail,
    myprogress,
    homeworkRequire
  },
  methods: {
    getHomeworkInfo: function () {
      let self = this
      axios({
        url: 'https://diningx.cn/pa/public/api/student/get_homework_info_by_id',
        method: 'post',
        data: {
          type: 'S3008',
          token: '1f5be77b086bc671b321a66ae4675330',
          homework_id: self.homework_id
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
        self.homework_info = res.data.msg
        store.save('homework_info', self.homework_info)
        console.log('homework_info----------->', self.homework_info)
      }).catch(function (err) {
        console.log(err)
      })
    },
    giveData: function (num, id) {
      this.judge = 1
      this.oneStudent.school_num = num
      this.oneStudent.student_id = id
    },
    getCourseData: function () {
      let self = this
      axios({
        url: 'https://diningx.cn/pa/public/api/student/get_course_info_by_id',
        method: 'post',
        data: {
          type: 'S2003',
          token: '1f5be77b086bc671b321a66ae4675330',
          course_id: self.generalData[0]
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
        self.courseData = res.data.msg
      }).catch(function (err) {
        console.log(err)
      })
    },
    getHomeworkData: function () {
      let self = this
      axios({
        url: 'https://diningx.cn/pa/public/api/teacher/get_submit_homework_student',
        method: 'post',
        data: {
          type: 'T3005',
          token: '1f5be77b086bc671b321a66ae4675330',
          homework_id: self.homework_id
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
        self.students = res.data.msg
        console.log('students-------->', self.students)
      }).catch(function (err) {
        console.log(err)
      })
    }
  },
  created () {
    this.generalData = store.fetch('storeData')
    this.getCourseData()
    this.getHomeworkData()
    this.getHomeworkInfo()
  }
}
</script>
<style type="text/css">
.breadcrumb > li + li:before {
    color: #000;
    content: ">";
    padding: 0 5px;
}
</style>