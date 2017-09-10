<template>
<div>

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