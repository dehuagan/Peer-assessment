<template>
<div>
	<div>
    <topbar :user="user"></topbar>
    <div class="appnav">
      
      <navigatior></navigatior>
      </div>
      </div>
      {{token}}
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
  props: ['token'],
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

</style>