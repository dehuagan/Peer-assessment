<template>
<div>
  <router-link to="/pages/class-manage" class="btn btn-default" style="margin-right: 900px; margin-bottom: 10px;">返回</router-link>

  
	<div>
	<ul class="nav nav-tabs">
	<li class="active"><router-link :to="'/pages/classDetail/'+course_id">课程大纲</router-link></li>
	<li><router-link :to="'/pages/student-manage/'+course_id">学生管理</router-link></li>
	<li><router-link :to="'/pages/class-resource/'+course_id">课程资源</router-link></li>
	<li><router-link :to="'/pages/homework/'+course_id">课程作业</router-link></li>
	<li><router-link :to="'/pages/exc-work/'+course_id">优秀作品榜</router-link></li>
	</ul>
  </div>
  <div class="detail" style="margin-top: 20px; width: 900px;">
  <ul class="list-unstyled">
  <li><h4 class="text-left">课程名: <small>{{items.name}}</small></h4></li>
  <li><h4 class="text-left">课程介绍: <small>{{items.description}}</small></h4></li>
  <li><h4 class="text-left">课程时长: <small>{{items.total_hours}}</small></h4></li>
  <li><h4 class="text-left">开课时间段: <small>{{items.start_day}}---{{ items.end_day }}</small></h4></li>
  <li><h4 class="text-left">先修课程: <small v-for="aclass in classes">{{aclass.class_name}}&nbsp&nbsp</small></h4></li>
  <li><h4 class="text-left">教学目标: <small>{{items.aim}}</small></h4></li>
  </ul>
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
a {
  text-decoration: none;
}



</style>