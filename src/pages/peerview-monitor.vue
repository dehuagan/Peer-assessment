<template>
  <div id="peer">
    <div class="classnav"> 
    	<ul id="myTab" class="nav nav-tabs">
      <li :class="{'active': index == 0}" v-for="(item,index) in items">
      <a href="" data-toggle="tab" @click="changeTab(item.name)">
       {{item.name}} </a>
  </li>
  
</ul>

  
    </div>
  </div>
</template>

<script type="text/javascript">
import axios from 'axios'
export default {
  data () {
    return {
      items: []
    }
  },
  methods: {
    getData: function () {
      let self = this
      axios({
        url: 'https://diningx.cn/pa/public/api/teacher/get_my_course',
        method: 'post',
        data: {
          type: 'T2002',
          token: '1f5be77b086bc671b321a66ae4675330'
        },
        transformRequest: [function (data) {
    // Do whatever you want to transform the data
          let ret = ''
          for (let it in data) {
            ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
          }
          return ret
        }],
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(function (res) {
        console.log(res.data.msg[0].name + '-----' + res.data.msg.length)
        self.items = res.data.msg
        console.log('------------->', self.items.index)
      }).catch(function (err) {
        console.log(err)
      })
    },
    changeTab: function (data) {
      console.log(data)
    }
  },
  created () {
    this.getData()
  }
}
</script>

<style type="text/css">
a.router-link-active {
  background-color: #ccc;
}
</style>