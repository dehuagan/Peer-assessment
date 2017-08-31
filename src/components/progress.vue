<template>
<div>
<div><p class="text-left" style="float: left;">{{homework_info.submit_ddl}}</p><p class="text-center" style="float: left; margin-left: 12%;">{{homework_info.assessment_ddl}}</p><p class="text-right" style="float: left; margin-left: 10%;">{{homework_info.modify_ddl}}</p></div><br><br>
   <div class="progress" style="margin-right: 15%;">
	<div class="progress-bar progress-bar-success" role="progressbar"
		 aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"
		 style="width: 25%;">
		<span>作业提交</span>
	</div>
	<div class="progress-bar progress-bar-warning" role="progressbar"
		 aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"
		 style="width: 25%;">
		<span>同伴评估</span>
	</div>
	<div class="progress-bar progress-bar-warning" role="progressbar"
		 aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"
		 style="width: 25%;">
		<span>作业修改</span>
	</div>
	<div class="progress-bar progress-bar-warning" role="progressbar"
		 aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"
		 style="width: 25%;">
		<span>作业归档</span>
	</div>
</div>
</div>
</template>
<script type="text/javascript">
export default {
  props: ['homework_info']
}
</script>
<style type="text/css"></style>