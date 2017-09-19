<template>
<div style="width: 1200px;">
<div>
	<div style="float: left; margin-left: 20px;">
	<ol class="breadcrumb">
    <li v-for="aclass in courseData.classes"><a v-if="aclass.id === generalData[1]">{{aclass.class_name}}</a></li>
    <li class="active">{{generalData[2]}}</li>
</ol>
</div>
</div>
<br><br><br>
<!--*********************************************************************************-->
   
<myprogress :homework_info="homework_info"></myprogress>
<div v-if="homework_info.state === 1" style="width: 1000px; margin-left: 200px;">
<div v-if="judge === 0">
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
   <!--*************************************************************-->
   <div v-if="homework_info.state === 2">
   	<h4>已提交评价的学生名单</h4>
   	  <div data-spy="scroll" data-target="#navbar-example" data-offset="0" 
   style="height:90%;overflow-x:hidden; position: relative;">
     <table style="width: 100%;" class="table table-bordered">
    <thead>
    <tr>
      <th>编号</th>
      <th>学号</th>
      <th>姓名</th>
      <th>提交时间</th>
    </tr>
  </thead>
  <tbody>
  <tr v-for="comment in student_comment">
  	<td>{{comment.student_id}}</td>
  	<td>{{comment.school_num}}</td>
  	<td>{{comment.name}}</td>
  	<td>{{comment.creat_time}}</td>
  </tr>
  </tbody>
  </table>
   </div>
   </div>
    <!--*************************************************************-->
    <div v-if="homework_info.state === 3">
    <div style="margin-left: 220px;" class="panel panel-default">
  <div class="panel-heading">
    <h3 class="panel-title">
      第一轮&nbsp&nbsp&nbsp(平均分:{{result_1.avg_score}})
    </h3>
    
  </div>
    <!-- <div data-spy="scroll" data-target="#navbar-example" data-offset="0" 
   style="overflow:auto; position: relative;"> -->
    <table class="table table-bordered">
    <thead>
    <tr>
      <th v-for="avg in result_1.avg_star">
        {{avg.standard_name}}:&nbsp{{avg.avg_star}}
      </th>
    </tr>
  </thead>
  </table>
  
   </div>
   <br><br><br>
   <div style="margin-left: 220px;" class="panel panel-default">
  <div class="panel-heading">
    <h3 class="panel-title">
      第二轮&nbsp&nbsp&nbsp(平均分:{{result_2.avg_score}})
    </h3>
    
  </div>
    <!-- <div data-spy="scroll" data-target="#navbar-example" data-offset="0" 
   style="overflow:auto; position: relative;"> -->
    <table class="table table-bordered">
    <thead>
    <tr>
      <th v-for="avg in result_2.avg_star">
        {{avg.standard_name}}:&nbsp{{avg.avg_star}}
      </th>
    </tr>
  </thead>
  </table>
  
   </div>
<!-- {{result_1.avg_score}} -->
    </div>
    <div v-if="homework_info.state === 4">
    	{{result}}
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
      backPic: backPic,
      state: '',
      generalData: [],
      courseData: {},
      student_comment: [],
      students: [],
      judge: 0,
      result_1: {},
      result_2: {},
      homework_info: {},
      oneStudent: {
        school_num: '',
        student_id: ''
      }
    }
  },
  props: ['token', 'homework_id'],
  components: {
    homeworkDetail,
    myprogress,
    homeworkRequire
  },
  methods: {
    getStudentComment: function () {
      let self = this
      axios({
        url: 'https://diningx.cn/pa/public/api/teacher/get_submit_assessment_student',
        method: 'post',
        data: {
          type: 'T3006',
          token: self.token,
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
        self.student_comment = res.data.msg
        console.log('学生评论-------------->', self.student_comment)
      }).catch(function (err) {
        console.log(err)
      })
    },
    getHomeworkInfo: function () {
      let self = this
      axios({
        url: 'https://diningx.cn/pa/public/api/student/get_homework_info_by_id',
        method: 'post',
        data: {
          type: 'S3008',
          token: self.token,
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
        self.state = self.homework_info.state
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
          token: self.token,
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
          token: self.token,
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
    },
    getResult: function () {
      let self = this
      axios({
        url: 'https://diningx.cn/pa/public/api/student/get_homework_class_result',
        method: 'post',
        data: {
          type: 'S3012',
          token: self.token,
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
        self.result_1 = res.data.msg[1]
        self.result_2 = res.data.msg[2]
        console.log('该作业班级情况-------->', self.result_1)
      }).catch(function (err) {
        console.log(err)
      })
    }
    // getHomeworkPerson: function () {
    //   let self = this
    //   axios({
    //     url: 'https://diningx.cn/pa/public/api/student/get_homework_personal_result',
    //     method: 'post',
    //     data: {
    //       type: 'S3012',
    //       token: self.token,
    //       homework_id: self.homework_id
    //     },
    //     transformRequest: [function (data) {
    // // Do whatever you want to transform the data
    //       let ret = ''
    //       for (let it in data) {
    //         ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
    //       }
    //       return ret
    //     }],
    //     headers: {
    //       'Content-Type': 'application/x-www-form-urlencoded'
    //     }
    //   }).then(function (res) {
    //     self.homework_person = res.data
    //     console.log('获取该作业的个人的情况 -------->', self.homework_person)
    //   }).catch(function (err) {
    //     console.log(err)
    //   })
    // }
  },
  watch: {
    state: {
      handler: function (val, oldval) {
        console.log('val--------->%s,    oldval------------->%s', val, oldval)
        if (val === 1) {
          this.getHomeworkData()
        } else if (val === 2) {
          this.getStudentComment()
        } else if (val === 3 || val === 4) {
          this.getResult()
        }
      },
      deep: true
    }
  },
  created () {
    this.generalData = store.fetch('storeData')
    this.getCourseData()
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