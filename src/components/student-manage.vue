<template>
<div>
<div v-if="status === 1">
  <div class="progress">
	<div class="progress-bar progress-bar-success" role="progressbar"
		 aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"
		 style="width: 33%;">
		<span>学生加入</span>
	</div>
</div>
	<div style="margin-top: 0;">
	<h4>已成功加入课程的名单</h4>
	<div data-spy="scroll" data-target="#navbar-example" data-offset="0" style="height: 450px; overflow-x:hidden; position: relative;">
	<div class="panel panel-default" v-for="tclass in classes" style="height: 180px;">
	<div class="panel-heading">
		<h3 class="panel-title">
			{{tclass.class_name}} (共{{tclass.students.length}}人) <!-- <button type="button" class="btn btn-link text-right" style="color: red;height: 20px;">删除名单</button> -->
            <button style="border:none; height: 15px;"><a style="color: red;">删除名单</a></button>
		</h3>
	</div>
	<div class="panel-body">
	<div data-spy="scroll" data-target="#navbar-example" data-offset="0" style="height: 120px; overflow-x:hidden; position: relative; margin-top: 0px;">
		<table class="table table-bordered" style="margin: 0;">
		<!-- <caption style="text-align: center;"><h4>已成功加入课程的名单</h4></caption> -->
		<thead>
			<tr>
				<th>编号</th>
				<th>学号</th>
				<th>姓名</th>
				<th>预测问卷分数</th>
				<th>先修课程平均绩点</th>
				<th>操作</th>
			</tr>
			<tr v-for="student in tclass.students">
				<th>{{student.id}}</th>
				<th>{{student.student_id}}</th>
				<th>{{student.name}}</th>
				<th>{{student.aim_score}}</th>
				<th>{{student.pre_course_score}}</th>
				<th>查看&nbsp&nbsp<button style="border:none; background-color: white;"><a style="color: red;">删除</a></button></th>
			</tr>
		</thead>
		<tbody>
		</tbody>
		</table>
</div>
	</div>
</div>
		</div>
	</div>
	
</div>
<div v-if="status === 2">
	<setupGroup :token="token" :course_id="course_id"></setupGroup>
</div>
<div v-if="status === 1" style="margin-top: 50px; height: 28px;"><button class="btn btn-default" @click="status = 2">全部添加成功</button></div>
</div>
</template>
<script type="text/javascript">
import axios from 'axios'
import setupGroup from '@/components/setupGroup'
export default {
  data () {
    return {
      classes: [],
      aimaver: '',
      status: 1
    }
  },
  props: ['token', 'course_id'],
  components: {
    setupGroup
  },
  methods: {
    getData: function () {
      let self = this
      axios({
        url: 'https://diningx.cn/pa/public/api/teacher/get_student_by_course',
        method: 'post',
        data: {
          type: 'T2003',
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
        console.log(res.data.msg[0].name + 'T2003-----' + res.data.msg.length)
        self.classes = res.data.msg
        console.log(self.classes)
      }).catch(function (err) {
        console.log(err)
      })
    }
  },
  created () {
    this.getData()
  }
}
</script>

<style type="text/css">
th {
	text-align: center;
}

</style>