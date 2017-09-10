<template>
	<div class="topbar">
    <topbar :user="user"></topbar>
    <div class="appnav">
      
      <navigatior></navigatior>
      </div>
      </div>
</template>
<script type="text/javascript">
import topbar from '@/components/topbar'
import navigatior from '@/components/navigatior'
import store from '@/store.js'
export default {
  data () {
    return {
      user: {}
    }
  },
  created () {
    this.user = store.fetch('user')
  },
  components: {
    topbar, navigatior
  }
}
</script>
<style type="text/css">
.appnav {
  width: 200px;
  float: left;
  margin: 0;


}
.topbar {
	margin: 0 auto;
	
}
</style>