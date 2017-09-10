<template>
  <div id="peer">
  <div>
    <topbar :user="user"></topbar>
    <div class="appnav">
      
      <navigatior></navigatior>
      </div>
      </div>
<!--     <div class="classnav table-responsive"> -->
     <div style="height: 60px; margin-top: 10px; margin-left: 230px;">
    	<ul class="nav nav-pills">
      <li :class="{'active': index == 0}" v-for="(item,index) in items">
      <a href="" data-toggle="tab" @click="changeTab(item.id)">
       {{item.name}} </a>
  </li>
  
</ul>
</div>
  
   <!--  </div> -->
   
   
  <!-- ************************************************************************** -->
  <div v-if="status === 1">
   <div style="margin-top: 10px; margin-left: 230px;">
  <div data-spy="scroll" data-target="#navbar-example" data-offset="0" 
   style="height:600px;overflow-x:hidden; position: relative;">
  <div v-for="aclass in classes" class="panel panel-default">
  <div class="panel-heading">
    <h3 class="panel-title">
      {{aclass.class_name}}作业列表
    </h3>
    
  </div>
    <div data-spy="scroll" data-target="#navbar-example" data-offset="0" 
   style="height:300px;overflow:auto; position: relative;">
    <table class="table table-bordered">
    <thead>
    <tr>
      <th>作业标题</th>
      <th>截至时间</th>
      <th>轮次</th>
      <th>作业状态</th>
      <th>提交人数</th>
      <th>作业平均分</th>
      <th>操作</th>
    </tr>
  </thead>
  <tbody>
  <tr v-for="(homework, index) in aclass.homeworks">
    <td>{{homework.name}}</td>
    <td>{{homework.submit_ddl}}</td>
    <td>{{homework.round}}</td>
    <td>{{homework.state}}</td>
    <td>{{homework.submit_num}}</td>
    <td>{{homework.avg_score}}</td>
    <td><button class="btn btn-success" @click="showDeatail( homework.course_id,  homework.class_id, homework.id, homework.name)">监控</button></td>
  </tr>
  </tbody>
  </table>
   </div>
   </div>

</div>
</div>
</div>
<div v-if="status === 2">
<p class="text-right"><img  :src="backPic" @click="status = 1"></p>
  <monitor :token="token" :homework_id="homework_id"></monitor>
</div>
  </div>
</template>

<script type="text/javascript">
import backPic from '@/assets/Back.png'
import axios from 'axios'
import store from '@/store.js'
import topbar from '@/components/topbar'
import navigatior from '@/components/navigatior'
import monitor from '@/components/monitor'
export default {
  data () {
    return {
      backPic: backPic,
      items: [],
      classes: [],
      storeData: [],
      user: {},
      status: 1,
      // course_id: '',
      // class_id: '',
      homework_id: ''
      // homework_name: ''
    }
  },
  components: {
    topbar, navigatior, monitor
  },
  props: ['token'],
  methods: {
    showDeatail: function (courseid, classid, id, name) {
      console.log('class_name&id------->', classid, id)
      this.storeData.push(courseid)
      this.storeData.push(classid)
      this.storeData.push(name)
      store.save('storeData', this.storeData)
      this.storeData = []
      this.status = 2
      this.homework_id = id
    },
    getHomeworkData: function (id) {
      let self = this
      axios({
        url: 'https://diningx.cn/pa/public/api/teacher/get_homework_of_course',
        method: 'post',
        data: {
          type: 'T3003',
          token: self.token,
          course_id: id
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
        self.classes = res.data.msg
        console.log(self.classes)
      }).catch(function (err) {
        console.log(err)
      })
    },
    getData: function () {
      let self = this
      axios({
        url: 'https://diningx.cn/pa/public/api/teacher/get_my_course',
        method: 'post',
        data: {
          type: 'T2002',
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
        console.log(res.data.msg[0].name + '-----' + res.data.msg.length)
        self.items = res.data.msg
        console.log('------------->', self.items.index)
      }).catch(function (err) {
        console.log(err)
      })
    },
    changeTab: function (id) {
      console.log('id------------------->', id)
      this.getHomeworkData(id)
    }
  },
  created () {
    this.getData()
    this.changeTab(1)
    this.user = store.fetch('user')
  }
}
</script>

<style type="text/css">
a.router-link-active {
  background-color: #ccc;
}

th {
  text-align: center;
}
</style>