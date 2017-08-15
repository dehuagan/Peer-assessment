<template>
<div>
<div class="panel panel-default" style="width: 60px; height: 25px;">
    <!-- <div class="panel-body" style="width: 60px;"> -->
        <router-link to="/pages/peerview-monitor">返回</router-link>
    <!-- </div> -->
</div>
	<div>
	<ul class="nav nav-tabs">
	<li><router-link :to="'/pages/classDetail/'+course_id">课程大纲</router-link></li>
	<li><router-link :to="'/pages/student-manage/'+course_id">学生管理</router-link></li>
	<li class="active"><router-link :to="'/pages/class-resource/'+course_id">课程资源</router-link></li>
	<li><router-link :to="'/pages/homework/'+course_id">课程作业</router-link></li>
	<li><router-link :to="'/pages/exc-work/'+course_id">优秀作品榜</router-link></li>
	</ul>
  </div>
	<div style="margin-top: 20px;">
		<form role="form">
	<div class="form-group">
		<label for="name" style="float: left;">名称 :</label>
		<input style="width: 300px;" type="text" class="form-control" id="name" 
			   placeholder="请输入标题">
	</div>
	<div class="form-group">
  <label class="sr-only" for="inputfile">文件输入</label>
  <input type="file" id="inputfile">
 </div>
	</form>
	</div>
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
.form-group {
  margin-bottom: 15px;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}	
</style>