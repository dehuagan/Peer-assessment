<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <topbar></topbar>
    <div class="nav">
      
      <navigatior></navigatior>
    </div>
    <div class="router-view">
      <router-view></router-view>
    </div>
    <div class="footer">
      <footbar></footbar>
    </div>
   
  </div>
</template>

<script>
import topbar from '@/components/topbar'
import navigatior from '@/components/navigatior'
import footbar from '@/components/footbar'
// import guide from '@/pages/guide'
import Store from './Store'
console.log('aaa------', Store)
export default {
  name: 'app',
  data () {
    return {
      title: 'ashfgahfa',
      items: Store.fetch(),
      newItem: ''
    }
  },
  components: {
    'topbar': topbar,
    'navigatior': navigatior,
    'footbar': footbar
  },
  watch: {
    items: {
    // 监测items的变化并作出响应
      handler: function (items) {
        Store.save(items)
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
    padding-right: 0px; 
    text-align: center;
    margin-top: 30px;
    margin-left: 80px;
}

.nav {
  width: 100px;
  float: left;

}

.footer {
  /*text-align: center;*/
  margin-top: 600px;
  clear:both;
  height: 50px;
  border: 2px solid #000

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
