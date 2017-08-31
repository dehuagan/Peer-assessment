<template>
<div>
	<h4>作业要求内容</h4>
	<div data-spy="scroll" data-target="#navbar-example" data-offset="0" 
   style="height:80%;overflow-x:hidden; position: relative;">
   	<p style="float: left;" class="text-left"><strong>作业要求:</strong> </p><div style="width: 100%;"><p class="text-justify">{{homework_info.requirement}}</p></div>
   	<br>
   	<p style="float: left;" class="text-left"><strong>作业提交截止时间: </strong></p><p style="float: left; margin-left: 1%;">{{homework_info.submit_ddl}}</p>
   </div>
</div>
</template>

<script type="text/javascript">
export default {
  props: ['homework_info']
}
</script>
<style type="text/css"></style>