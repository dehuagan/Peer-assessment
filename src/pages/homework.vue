<template>
<div>
	<router-link to="/pages/class-manage" class="btn btn-default" style="margin-right: 900px; margin-bottom: 10px;">返回</router-link>

	<div>
	<ul class="nav nav-tabs">
	<li><router-link :to="'/pages/classDetail/'+course_id">课程大纲</router-link></li>
	<li><router-link :to="'/pages/student-manage/'+course_id">学生管理</router-link></li>
	<li><router-link :to="'/pages/class-resource/'+course_id">课程资源</router-link></li>
	<li class="active"><router-link :to="'/pages/homework/'+course_id">课程作业</router-link></li>
	<li><router-link :to="'/pages/exc-work/'+course_id">优秀作品榜</router-link></li>
	</ul>
  </div>
  <!-- 分割 ************************************************************************-->
   <h3>{{ items.name }}作业列表</h3>
	<div data-spy="scroll" data-target="#navbar-example" data-offset="0" 
   style="height:400px;overflow-x:hidden; position: relative;">
	<div v-for="aclass in classes" class="panel panel-default" style="width: 1000px;">
	<div class="panel-heading">
		<h3 class="panel-title" style="height: 30px;">
			{{aclass.class_name}}
			<router-link :to="'/pages/createHomework/'+course_id +'/' + aclass.class_id" class="btn btn-default text-right" style="float: right;">创建作业</router-link>
		</h3>
		
	</div>
	<div class="panel-body">
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
		<td><button>查看</button>&nbsp&nbsp<button>删除</button></td>
	</tr>
	</tbody>
	</table>
   </div>
	</div>
</div>
	</div>
</div>
</template>
<script type="text/javascript">
import axios from 'axios'
export default {
  data () {
    return {
      course_id: this.$route.params.id,
      items: [],
      classes: []
    }
  },
  methods: {
    getData: function () {
      let self = this
      axios({
        url: 'https://diningx.cn/pa/public/api/teacher/get_homework_of_course',
        method: 'post',
        data: {
          type: 'T3003',
          token: '1f5be77b086bc671b321a66ae4675330',
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