<template>
<div>
  
<div id="col-nav">
      <div id="left">
  

    <ul class="nav nav-pills nav-stacked">
      <li><router-link to="/pages/index"><img :src="homenol" ></router-link></li>
      <li><router-link to="/pages/class-manage">课程管理</router-link></li>
      <li><router-link to="/pages/peerview-monitor">同评监控</router-link></li>
      <li><router-link to="/pages/guide">指导反馈</router-link></li>
      <li><router-link to="/pages/community">社区讨论</router-link></li>
      <li><router-link to="/pages/person">个人空间</router-link></li>
    </ul>
    
  
</div>
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
#col-nav {
  width: 100%;
  background-color: #FAFAFA;
  border: solid #E3E3E3 1px;
  padding-bottom: 50px;
  float:left;
}

#col-nav ul {
  width: 100%;
}
#col-nav ul li a {
  text-align: center;
}


#col-nav #left ul .courseManage-sub,#col-nav #left ul .discussComm-sub{
  display: none;
}
#col-nav #left ul .courseManage-sub a,#col-nav #left ul .discussComm-sub a{
  margin-left: -15px; 
  color:#5BC0DE;
}
a.router-link-active {
  background-color: #ccc;
}


</style>
