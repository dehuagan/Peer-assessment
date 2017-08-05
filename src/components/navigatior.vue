<template>
<div>
  

  <div class="nav">
    <ul>
      <li> <img :src="homeurl"> </li>
      <li>课程管理</li>
      <li><router-link to="/pages/peerview-monitor">同评监控</router-link></li>
      <li><router-link to="/pages/guide">指导反馈</router-link></li>
      <li>社区讨论</li>
      <li>个人空间</li>
    </ul>
    
  
  </div>
</div>
 
</template>

<script>
import homepic from '@/assets/home.png'
export default {
  data () {
    return {
      homeurl: homepic
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style type="text/css">

.nav {
  width: 100px;
  border-left: 1px solid #000;
  border-right: 1px solid #000;
}
.nav ul {
  margin: 0;
  padding-left: 0px;

/*  padding-top: 15px;
*/  /*margin-right: 1000px;
  border-right: 2px solid #000;
  border-top: 2px solid #000;
  border-right: 2px solid #000;
  border-left: 2px solid #000;*/
}

.nav li {
  text-align: center;
  border-bottom: 2px solid #000;
  height: 40px;

}

/*h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}*/
</style>
