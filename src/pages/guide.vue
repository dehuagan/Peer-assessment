<template>
 <div>
  <div>
    <topbar :user="user"></topbar>
    <div class="appnav">
      
      <navigatior></navigatior>
      </div>
      </div>
      <div style="margin-top: 5px; margin-left: 210px;">
      <div data-spy="scroll" data-target="#navbar-example" data-offset="0" 
   style="height:50px;overflow-x:hidden; position: relative;">
        <ul class="nav nav-pills">
      <li :class="{'active': index == 0}" v-for="(info,index) in class_info">
      <a href="" data-toggle="tab" @click="changeTab( info.class_id, info.class_groupmsg)">
       {{info.class_name}} </a>
  </li>
  
</ul>
</div>
      </div>
      <div style="margin-left: 210px; margin-top: 10px;">
            <div class="panel panel-default">
  <div class="panel-heading">
    <h3 class="panel-title">
      班级指导公告
    </h3>
  </div>
  <div data-spy="scroll" data-target="#navbar-example" data-offset="0"
     style="height:350px;overflow-x: hidden; position: relative;">
  <div class="panel-body">
    <textarea style="height: 120px; width: 700px; margin-left: 120px;"  type="text" class="form-control" id="firstname" placeholder="请输入报告内容" v-model="classGuide"></textarea>
    <br>
    <button type="button" class="btn btn-default" style="width: 100px;" @click="postClassCommunicate( 3, classGuide)">发布</button>
    <hr>
    
      <div class="panel panel-default" v-for="order in orders">
    <div class="panel-body">
        <p style="text-align: center; background-color: lightblue;">{{order.post_at}}</p>
        {{order.communicate_content}}
    </div>
</div>

     </div>
  </div>
  

</div>
<br>
<div class="panel panel-default">
  <div class="panel-heading">
    <h3 class="panel-title">
      小组指导公告
    </h3>
  </div>
  <div data-spy="scroll" data-target="#navbar-example" data-offset="0"
     style="height:350px;overflow-x: hidden; position: relative;">
  <div class="panel-body">
     <div data-spy="scroll" data-target="#navbar-example" data-offset="0"
     style="height:100px;overflow-x: hidden; position: relative;">
      <div v-for="group in class_groupmsg" style="text-align: left;">
          <input type="radio" :id="group.group_id" :value="group.group_id" v-model="picked">
          <label v-for="member in group.group_membermsg" :for="group.group_id">{{member.name}}</label>
      </div>
     </div>
     <br>
    <textarea style="height: 120px; width: 700px; margin-left: 120px;"  type="text" class="form-control" id="firstname" placeholder="请输入报告内容" v-model="groupGuide"></textarea>
    <br>
    <button type="button" class="btn btn-default" style="width: 100px;" @click="postGroupCommunicate( 2, groupGuide)">发布</button>
    <hr>

    <div class="panel panel-default" v-for="gorder in g_orders">
    <div class="panel-body">
        <p style="text-align: center; background-color: lightblue;">{{gorder.post_at}}</p>
        {{gorder.communicate_content}}
    </div>
</div>
  </div>
  </div>
  

</div>
      </div>
    
  </div>

</template>

<script>
import topbar from '@/components/topbar'
import navigatior from '@/components/navigatior'
import store from '@/store.js'
import axios from 'axios'
// import chatMsg from '@/components/chatMsg'
export default {
  data () {
    return {
      classGuide: '',
      groupGuide: '',
      post_order: {
        communicate_content: '',
        post_at: ''
      },
      orders: [],
      user: {},
      class_info: [],
      class_name: '',
      class_id: '',
      class_groupmsg: [],
      picked: '',
      g_orders: []
    }
  },
  props: ['token'],
  // watch: {
  //   msg: function () {
  //     this.$nextTick(() => {
  //       document.getElementById('myData').scrollTop = document.getElementById('myData').scrollHeight + 100
  //       console.log('scrollTop--------->', document.getElementById('myData').scrollTop)
  //     })
  //   }
  // },
  watch: {
    picked: function (val, oldval) {
      console.log('new: %s, old: %s', val, oldval)
      this.get_gt_communicate(val)
    }
  },
  methods: {
    get_gt_communicate: function (val) {
      let self = this
      console.log('picked--------------->', self.picked)
      axios({
        url: 'https://diningx.cn/pa/public/api/teacher/get_gt_communicate',
        method: 'post',
        data: {
          type: 'T2020',
          class_id: self.class_id,
          group_id: val,
          token: self.token
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
        self.g_orders = res.data.msg.communicate_content
        console.log('g_orders---------------------->', self.orders)
      }).catch(function (err) {
        console.log(err)
      })
    },
    get_ct_communicate: function () {
      let self = this
      axios({
        url: 'https://diningx.cn/pa/public/api/teacher/get_ct_communicate',
        method: 'post',
        data: {
          type: 'T2021',
          class_id: self.class_id,
          token: self.token
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
        self.orders = res.data.msg.communicate_content
        console.log('orders---------------------->', self.orders)
      }).catch(function (err) {
        console.log(err)
      })
    },
    changeTab: function (id, groupmsg) {
      this.class_id = id
      this.class_groupmsg = groupmsg
      this.get_ct_communicate()
      console.log('changeTab-------->', id, groupmsg)
    },
    postClassCommunicate: function (num, msg) {
      let self = this
      console.log('post_msg-------->', msg)
      self.post_order.communicate_content = msg
      var d = new Date()
      var year = d.getFullYear()
      var month = d.getMonth() + 1
      var day = d.getDate() < 10 ? '0' + d.getDate() : '' + d.getDate()
      var hour = d.getHours()
      var minutes = d.getMinutes()
      var seconds = d.getSeconds()
      self.post_order.post_at = (year + '-' + month + '-' + day + ' ' + hour + ':' + minutes + ':' + seconds)
      self.orders.push(self.post_order)
      console.log('实时orders---------->', self.orders)
      axios({
        url: 'https://diningx.cn/pa/public/api/teacher/post_communicate',
        method: 'post',
        data: {
          type: 'T2009',
          communicate_type: num,
          class_id: self.class_id,
          group_id: '',
          student_id: '',
          communicate_content: msg,
          token: self.token
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
        self.classGuide = ''
        console.log('postRes---------------------->', res.data)
      }).catch(function (err) {
        console.log(err)
      })
    },
    postGroupCommunicate: function (num, msg) {
      let self = this
      console.log('post_msg-------->', msg)
      self.post_order.communicate_content = msg
      var d = new Date()
      var year = d.getFullYear()
      var month = d.getMonth() + 1
      var day = d.getDate() < 10 ? '0' + d.getDate() : '' + d.getDate()
      var hour = d.getHours()
      var minutes = d.getMinutes()
      var seconds = d.getSeconds()
      self.post_order.post_at = (year + '-' + month + '-' + day + ' ' + hour + ':' + minutes + ':' + seconds)
      self.g_orders.push(self.post_order)
      console.log('实时orders---------->', self.orders)
      axios({
        url: 'https://diningx.cn/pa/public/api/teacher/post_communicate',
        method: 'post',
        data: {
          type: 'T2009',
          communicate_type: num,
          class_id: self.class_id,
          group_id: self.picked,
          student_id: '',
          communicate_content: msg,
          token: self.token
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
        self.groupGuide = ''
        console.log('postRes---------------------->', res.data)
      }).catch(function (err) {
        console.log(err)
      })
    },
    getClassInfo: function () {
      let self = this
      axios({
        url: 'https://diningx.cn/pa/public/api/teacher/get_classInfo',
        method: 'post',
        data: {
          type: 'T2015',
          token: self.token
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
        self.class_info = res.data.msg
        console.log('class_info---------------------->', self.class_info[0])
        self.changeTab(self.class_info[0].class_id, self.class_info[0].class_groupmsg)
        console.log('class_info[0]------------>', self.class_info[0].class_id)
      }).catch(function (err) {
        console.log(err)
      })
    }
  },
  components: {
    topbar, navigatior
  },
  created () {
    this.user = store.fetch('user')
    this.getClassInfo()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
label {
  width: 100px;
}
.btn-group {
  background-color: green;
}
a {
  display: block;
}
.time {
            margin: 7px 0;
            text-align: center;
            
            > span {
                display: inline-block;
                padding: 0 18px;
                font-size: 12px;
                color: #fff;
                border-radius: 2px;
                background-color: #dcdcdc;
            }
        }
</style>
