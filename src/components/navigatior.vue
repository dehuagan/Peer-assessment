<template>
<div>
  

  <div>
    <ul class="nav nav-pills nav-stacked" style="border-right: 2px solid #000;">
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

/*.nav {
  width: 180px;
  border-left: 1px solid #000;
  border-right: 1px solid #000;
  border-bottom: 2px solid #000;
  height: 400px;
}*/
/*.nav ul {
  margin: 0;
  padding-left: 0px;
}*/

/*.icon-home {
  background: url('/Users/gandehua/my-project/src/assets/home-nol.png');
  background-size: 100% 100%;
}
*/
/*.router-link-active {
  color: green;
}
*/
/*.nav li {
  text-align: center;
  border-bottom: 2px solid #000;
  height: 40px;

}
li {
  
}
.hide {
  position: absolute;
  bottom: 0;
}*/
a {
  color: #42b983;
}
li {
  border-bottom: 2px solid #000;
}

/*a:visited{
  color: green;
}*/
/*a:hover{
  color: green;
}*/

/*a:active {
  color: green;
}*/
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
