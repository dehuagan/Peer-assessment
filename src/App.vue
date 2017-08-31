<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <topbar></topbar>
    <div class="appnav">
      
      <navigatior></navigatior>
    </div>
    <div class="router-view">
      <router-view></router-view>
    </div>
    <div class="foobar">
      <footbar></footbar>
    </div>
   
  </div>
</template>

<script>
import topbar from '@/components/topbar'
import navigatior from '@/components/navigatior'
import footbar from '@/components/footbar'
// import guide from '@/pages/guide'
export default {
  name: 'app',
  data () {
    return {
    }
  },
  components: {
    'topbar': topbar,
    'navigatior': navigatior,
    'footbar': footbar
  },
  created () {
    // this.$router.push('/pages/index')
  },
  watch: {
    items: {
    // 监测items的变化并作出响应
      handler: function (items) {
      },
      deep: true
    }
  },
  methods: {
    change: function (item) {
      // console.log(item)
      item.isFinished = !item.isFinished
    },
    add: function () {
      this.items.push({
        label: this.newItem,
        isFinished: false
      })
      this.newItem = ''
    },
    click: function () {
      console.log('the method has launched')
      this.$http.post('http://localhost/pa/public/api/student/join_course')
      .then(function (response) {
        console.log('lasdjafjadjf----------', response)
      })
      .catch(function (error) {
        console.log(error)
      })
    }
  }
}
</script>

<style>
.finished {
  text-decoration: underline;
  text-decoration-color: green;
}

.router-view {
   
    float:left;
    text-align: center;
    margin-top: 30px;
    margin-left: 30px;
    height: 600px;
    width: 1000px;

}

.appnav {
  width: 200px;
  float: left;
  margin: 0;


}

.footbar {
/*  width: 1200px;*/
  margin-top: 56%;

}

#app {
 /* width: 1200px;*/
  height: 800px;
  text-align: center;
  margin: 0 auto;
}
/*#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}*/
</style>
