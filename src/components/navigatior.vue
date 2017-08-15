<template>
<div>
  

  <div class="navi">
    <ul class="nav" style="border-right: 2px solid #000;border-bottom: 2px solid #000; margin-left: 0px; height: 500px;">
      <li><router-link to="/pages/index"><img :src="homenol"></router-link></li>
      <li><router-link to="/pages/class-manage">课程管理</router-link></li>
      <li><router-link to="/pages/peerview-monitor">同评监控</router-link></li>
      <li><router-link to="/pages/guide">指导反馈</router-link></li>
      <li><router-link to="/pages/community">社区讨论</router-link></li>
      <li><router-link to="/pages/person">个人空间</router-link></li>
    </ul>
    
  
  </div>
</div>
 
</template>

<script>
import homepic from '@/assets/home.png'
import homenol from '@/assets/home-nol.png'
export default {
  data () {
    return {
      homeurl: homepic,
      homenol: homenol,
      iconhome: {
        'background': homenol
      }
    }
  },
  methods: {
    showActive: function (index) {
      this.active = index
      console.log('launch------#####')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style type="text/css">
ul {
  margin-left: 0;
}
a {
  color: black;
}
a:hover {
  color: green;
}
a.router-link-active {
  background-color: #ccc;
}
.navi li {
  border-bottom: 2px solid #000;
}

.navi a {
  display: block;
}
</style>
