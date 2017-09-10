<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <div>
    <!-- <topbar :user="user"></topbar>
    <div class="appnav">
      
      <navigatior></navigatior>
    </div> -->
    <div class="router-view">
      <router-view :token="user.token"></router-view>
    </div>
    <div class="foobar">
      <footbar></footbar>
    </div>
   </div>
   <!--***********************************************************************-->
<!-- <div v-else>
<div class="router-view">
      <router-view :token="user.token"></router-view>
    </div>
   <div class="foobar">
      <footbar></footbar>
    </div>
    </div> -->
  </div>
</template>

<script>
import topbar from '@/components/topbar'
import navigatior from '@/components/navigatior'
import footbar from '@/components/footbar'
import store from './store.js'
// import guide from '@/pages/guide'
export default {
  name: 'app',
  data () {
    return {
      judge: '',
      user: {}
    }
  },
  watch: {
    user: {
      handler: function (val, oldVal) {
        console.log('val------>%s,old---------->%s', val, oldVal)
        // this.$router.go(0)
      },
      deep: true
    }
  },
  components: {
    'topbar': topbar,
    'navigatior': navigatior,
    'footbar': footbar
  },
  created () {
    // this.$router.go(0)
    this.judge = this.isEmptyObject(store.fetch('user'))
    console.log('user--------------->', this.judge)
    this.user = store.fetch('user')
  },
  methods: {
    isEmptyObject: function (obj) {
      for (var key in obj) {
        return false
      }
      return true
    }
  //   login: function () {
  //     let self = this
  //     store.save('user', self.user)
  //     axios({
  //       url: 'https://diningx.cn/pa/public/api/teacher/login',
  //       method: 'post',
  //       data: {
  //         type: 'T1002',
  //         email: self.user.email,
  //         password: self.user.password
  //       },
  //       transformRequest: [function (data) {
  //   // Do whatever you want to transform the data
  //         let ret = ''
  //         for (let it in data) {
  //           ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
  //         }
  //         return ret
  //       }],
  //       headers: {
  //         'Content-Type': 'application/x-www-form-urlencoded'
  //       }
  //     }).then(function (res) {
  //       self.token = res.data.token
  //       self.k = 0
  //       console.log('token------------>', self.token)
  //       self.$router.push('/pages/index')
  //     }).catch(function (err) {
  //       console.log(err)
  //     })
  //   }
  }
}
</script>

<style>
.finished {
  text-decoration: underline;
  text-decoration-color: green;
}

.router-view {
   
/*    margin-left: 30px;
    margin-right: 30px;*/
    text-align: center;
    height: 600px;
    width: 1200px;

}

.appnav {
  width: 200px;
  float: left;
  margin: 0;


}

.footbar {
/*  width: 1200px;*/
  margin-top: 500px;


}

#app {
  width: 1200px;
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
