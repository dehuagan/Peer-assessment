<template>
<div>
	<div style="margin-right: 700px; float: left;">
	<ol class="breadcrumb">
    <li>{{course_id}}</li>
    <li>{{class_id}}</li>
    <li class="active">{{homework_id}}</li>
</ol>
</div>
<div class="text-right" style="float: left;"><img :src="backPic" onclick="window.history.go(-1)"></div>
</div>	
</template>
<script type="text/javascript">
import backPic from '@/assets/Back.png'
export default {
  data () {
    return {
      course_id: this.$route.params.course_id,
      class_id: this.$route.params.class_id,
      homework_id: this.$route.params.id,
      backPic: backPic
    }
  }
}
</script>
<style type="text/css">
.breadcrumb > li + li:before {
    color: #000;
    content: ">";
    padding: 0 5px;
}
</style>