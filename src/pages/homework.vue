<template>
<div>

    <div style="margin-right: 950px;">
        <router-link to="/pages/peerview-monitor" class="btn btn-default">返回</router-link>
   </div>

	<div>
	<ul class="nav nav-tabs">
	<li><router-link :to="'/pages/classDetail/'+course_id">课程大纲</router-link></li>
	<li><router-link :to="'/pages/student-manage/'+course_id">学生管理</router-link></li>
	<li><router-link :to="'/pages/class-resource/'+course_id">课程资源</router-link></li>
	<li class="active"><router-link :to="'/pages/homework/'+course_id">课程作业</router-link></li>
	<li><router-link :to="'/pages/exc-work/'+course_id">优秀作品榜</router-link></li>
	</ul>
  </div>
   <h3>{{ items.name }}作业列表</h3>
	<div data-spy="scroll" data-target="#navbar-example" data-offset="0" 
   style="height:400px;overflow-x:hidden; position: relative;">
	<div v-for="aclass in classes" class="panel panel-default" style="width: 1000px;">
	<div class="panel-heading">
		<h3 class="panel-title" style="height: 30px;">
			{{aclass.class_name}}
			<router-link :to="'/pages/createHomework/'+course_id" class="btn btn-default text-right" style="float: right;">创建作业</router-link>
		</h3>
		
	</div>
	<div class="panel-body">
		<div data-spy="scroll" data-target="#navbar-example" data-offset="0" 
   style="height:300px;overflow:auto; position: relative;"></div>
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
        url: 'https://diningx.cn/pa/public/api/student/get_course_info_by_id',
        method: 'post',
        data: {
          type: 'S2003',
          token: 'fecf5b523f9e5f7c6fc6923f653edddc',
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
  }
}
</script>

<style type="text/css">
	
</style>