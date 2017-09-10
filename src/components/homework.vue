<template>
<div>

  <!-- 分割 ************************************************************************-->
  <div v-if="status === 1">
   <h3>{{ items.name }}作业列表</h3>
	<div data-spy="scroll" data-target="#navbar-example" data-offset="0" 
   style="height:600px;overflow-x:hidden; position: relative;">
	<div v-for="aclass in classes" class="panel panel-default">
	<div class="panel-heading">
		<h3 class="panel-title" style="height: 30px;">
			{{aclass.class_name}}
			<button @click="createHomework(aclass.class_id)" class="btn btn-default text-right" style="float: right;">创建作业</button>
		</h3>
		
	</div>

		<div data-spy="scroll" data-target="#navbar-example" data-offset="0" 
   style="height:300px;overflow:auto; position: relative;">
   	<table class="table table-bordered">
		<thead>
		<tr>
			<th>作业标题</th>
			<th>截至时间</th>
			<th>轮次</th>
			<th>作业状态</th>
			<th>操作</th>
		</tr>
	</thead>
	<tbody>
	<tr v-for="(homework, index) in aclass.homeworks">
		<td>{{homework.name}}</td>
		<td>{{homework.submit_ddl}}</td>
		<td>{{homework.round}}</td>
		<td>{{homework.state}}</td>
		<td><button class="btn btn-default">查看</button>&nbsp&nbsp<button class="btn btn-danger" @click="delHomework($index)">删除</button></td>
	</tr>
	</tbody>
	</table>
   </div>

</div>
	</div>
</div>
<div v-if="status === 2">
 <p class="text-right"><img :src="backpic" @click="status = 1"></p>
  <createHomework :course_id="course_id" :class_id="class_id" :token="token"></createHomework>
</div>
<div v-if="status === 3">
  <p class="text-right"><img :src="backpic" @click="status = 1"></p>
  <fixHomework :course_id="course_id" :class_id="class_id" :token="token" :homework="homework"></fixHomework>
</div>
</div>
</template>
<script type="text/javascript">
import axios from 'axios'
import createHomework from '@/components/createHomework'
import backpic from '@/assets/Back.png'
import store from '@/store.js'
import fixHomework from '@/components/fixHomework'
export default {
  data () {
    return {
      items: [],
      classes: [],
      status: 1,
      class_id: '',
      backpic: backpic,
      homework: {}
    }
  },
  props: ['token', 'course_id'],
  components: {
    createHomework, fixHomework
  },
  methods: {
    isEmptyObject: function (obj) {
      for (var key in obj) {
        return false
      }
      return true
    },
    createHomework: function (classid) {
      this.homework = store.fetch('homeworkElement')
      if (this.isEmptyObject(this.homework)) {
        this.status = 2
      } else {
        this.status = 3
      }
      this.class_id = classid
    },
    delHomework: function (index) {
    },
    getData: function () {
      let self = this
      axios({
        url: 'https://diningx.cn/pa/public/api/teacher/get_homework_of_course',
        method: 'post',
        data: {
          type: 'T3003',
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