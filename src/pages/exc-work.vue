<template>
<div>

	<router-link to="/pages/class-manage" class="btn btn-default" style="margin-right: 900px; margin-bottom: 10px;">返回</router-link>
  
	
	<div>
	<ul class="nav nav-tabs">
	<li><router-link :to="'/pages/classDetail/'+course_id">课程大纲</router-link></li>
	<li><router-link :to="'/pages/student-manage/'+course_id">学生管理</router-link></li>
	<li><router-link :to="'/pages/class-resource/'+course_id">课程资源</router-link></li>
	<li><router-link :to="'/pages/homework/'+course_id">课程作业</router-link></li>
	<li class="active"><router-link :to="'/pages/exc-work/'+course_id">优秀作品榜</router-link></li>
	</ul>
  </div>
	<p>this is exc</p>
</div>
</template>
<script type="text/javascript">
export default {
  data () {
    return {
      course_id: this.$route.params.id
    }
  }
}
</script>

<style type="text/css">
	
</style>