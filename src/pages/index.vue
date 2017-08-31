<template>
<div id="index">
	<div class="panel panel-default" style="margin-left: 15%">
  <div class="panel-heading">
    <h3 class="panel-title">正在进行的作业项</h3>
  </div>
  <div class="panel-body" style="height: 460px">
  <div class="progress">
  <div class="progress-bar progress-bar-success progress-bar-striped" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 40%">
    <span class="sr-only">40% Complete (success)</span>
  </div>
</div>
<div class="progress">
  <div class="progress-bar progress-bar-info progress-bar-striped" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width: 20%">
    <span class="sr-only">20% Complete</span>
  </div>
</div>
<div class="progress">
  <div class="progress-bar progress-bar-warning progress-bar-striped" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%">
    <span class="sr-only">60% Complete (warning)</span>
  </div>
</div>
<div class="progress">
  <div class="progress-bar progress-bar-danger progress-bar-striped" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style="width: 80%">
    <span class="sr-only">80% Complete (danger)</span>
  </div>
</div>
  </div>
</div>
<div class="panel panel-default" style="margin-left: 15%">
  <div class="panel-heading">
    <h3 class="panel-title">资源推荐</h3>
  </div>
  <div class="panel-body" style="height: 460px">
  </div>
</div>

<center><p><a class="btn btn-primary btn-lg" href="#" role="button">加载更多</a></p></center>
</div>
</template>
<script type="text/javascript">
export default {
  data () {
    return {

    }
  }
}
</script>
<style type="text/css">
	
</style>