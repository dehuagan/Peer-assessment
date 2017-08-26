<template>
  <div id="peer">
  <div style="width: 1000px; height: 130px;">
    <div class="classnav table-responsive">
     
    	<ul id="myTab" class="nav nav-tabs">
      <li :class="{'active': index == 0}" v-for="(item,index) in items">
      <a href="" data-toggle="tab" @click="changeTab(item.id)">
       {{item.name}} </a>
  </li>
  
</ul>

  
    </div>
    </div>
   
  <!--************************************************************************** -->
   <div style="margin-top: 0px;">
  <div data-spy="scroll" data-target="#navbar-example" data-offset="0" 
   style="height:400px;overflow-x:hidden; position: relative;">
  <div v-for="aclass in classes" class="panel panel-default" style="width: 1000px;">
  <div class="panel-heading">
    <h3 class="panel-title">
      {{aclass.class_name}}作业列表
    </h3>
    
  </div>
  <div class="panel-body">
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
    <td><router-link class="btn btn-success" :to="'/pages/monitor/'+homework.course_id+'/'+homework.class_id+'/'+homework.id">监控</router-link></td>
  </tr>
  </tbody>
  </table>
   </div>
   </div>
</div>
</div>
</div>
  </div>
</template>

<script type="text/javascript">
import axios from 'axios'
export default {
  data () {
    return {
      items: [],
      classes: []
    }
  },
  methods: {
    getHomeworkData: function (id) {
      let self = this
      axios({
        url: 'https://diningx.cn/pa/public/api/teacher/get_homework_of_course',
        method: 'post',
        data: {
          type: 'T3003',
          token: '1f5be77b086bc671b321a66ae4675330',
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
    changeTab: function (id) {
      console.log('id------------------->', id)
      this.getHomeworkData(id)
    }
  },
  created () {
    this.getData()
    this.changeTab(1)
  }
}
</script>

<style type="text/css">
a.router-link-active {
  background-color: #ccc;
}
</style>