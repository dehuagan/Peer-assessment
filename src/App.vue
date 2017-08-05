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
    
    
   <!--  <button @click="click()">click</button>
    <h1 v-text="title"></h1>
    <input v-model="newItem" @keyup.enter="add">
    <ul>
      <li v-for="item in items" v-bind:class="{finished:item.isFinished}" @click="change(item)">{{item.label}}</li>
    </ul> -->
  </div>
</template>

<script>
import topbar from '@/components/topbar'
import navigatior from '@/components/navigatior'
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
    'navigatior': navigatior
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
   width:350px;
    float:left;
    padding:10px; 
}

.nav {
  width: 100px;
  float: left;
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
