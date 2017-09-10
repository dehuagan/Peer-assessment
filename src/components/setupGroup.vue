<template>
<div>
<div v-if="status === 1">
  <div class="progress">
	<div class="progress-bar progress-bar-success" role="progressbar"
		 aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"
		 style="width: 33%;">
		<span>学生加入</span>
	</div>
	<div class="progress-bar progress-bar-info" role="progressbar"
		 aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"
		 style="width: 33%; margin-bottom: 0px;">
		<span>设置分组</span>
	</div>
	<!-- <div class="progress-bar progress-bar-warning" role="progressbar"
		 aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"
		 style="width: 30%;">
		<span class="sr-only">分组名单</span>
	</div> -->
</div>
<div  data-spy="scroll" data-target="#navbar-example" data-offset="0" style="height: 450px; overflow-x:hidden; position: relative; margin-top: 0px;">
<div class="panel panel-default" >
<p class="text-left text-justify">分组设置选项卡<br>说明:<br>随机划分：系统根据要求，在当前班级下随机抽取学生划分成一组，按照设置要求，划分结果是每组人数达到基本一致。如果出现多余的，则采用可多不可少的原则分配。<br>教师划分：由老师根据自己的想法，点击若干学生划分成组。<br>自主划分：由学生自主划分小组。<br>系统划分：根据学生注册时填写的学习风格测试问卷和添加课程时填写的预测考试问卷，寻找出学生彼此最
        适合的搭档。<br><br>
        <table class="table table-bordered">
	
	<thead>
		<tr>
			<th>班级</th>
			<th>选择划分方式</th>
		</tr>
	</thead>
	<tbody>
		<tr v-for="aclass in classes">
			<td>{{aclass.class_name}}</td>
			<td><label class="radio-inline">
		<input type="radio" name="optionsRadiosinline" id="optionsRadios3" :value="'1'+aclass.class_id" v-model="picked"> 随机划分
	</label>
	
	<label class="radio-inline">
		<input type="radio" name="optionsRadiosinline" id="optionsRadios4"  :value="'2'+aclass.class_id" v-model="picked"> 系统划分
	</label>
	<label class="radio-inline">
		<input type="radio" name="optionsRadiosinline" id="optionsRadios4"  :value="'3'+aclass.class_id" v-model="picked"> 线下分组
	</label></td>
		</tr>
		</tbody>
		</table>
</p>

</div>
<div class="panel panel-default" style="width: 1000px; text-align: center;" v-if="picked === 0">
<h3>分组名单</h3>
<div class="panel panel-default" style="width: 800px;margin-left: 100px;" v-for="group in groupData">
	<div class="panel-heading">
		<h3 class="panel-title">
			{{group.class_name}}
		</h3>
	</div>

	<table class="table table-bordered">
	<!-- 	<h3 class="panel-title">
			
		</h3> -->

		<thead>
			<tr>
				<th>组别</th>
				<th>学号</th>
				<th>姓名</th>
			</tr>
		</thead>
		<tbody>
			<tr v-for="info in group.groupinfo">
				<td>第{{info.group_id}}组</td>
				<td><tr v-for="member in info.group_membermsg">{{member.school_num}}</tr></td>
				<td><tr v-for="member in info.group_membermsg">{{member.name}}</tr></td></td>
			</tr>
			
		</tbody>
</table>
	
</div>
	
	
</div>  	

<div v-else>
	<div class="panel panel-default" v-for="aclass in classes">
	<div class="panel-heading">
		<h3 class="panel-title">
			{{aclass.class_name}}
		</h3>
	</div>
	<div class="panel-body" v-if="picked === '1'+aclass.class_id">
		<p><button @click="upload(1,aclass.class_id,$event)">确定</button></p>
	</div>
	<div class="panel-body" v-if="picked === '2'+aclass.class_id">
		<p>分组将由系统划分，请按<button @click="upload(2,aclass.class_id,$event)">确定</button></p>
	</div>
	<div class="panel-body" v-if="picked === '3'+aclass.class_id">
	<form>
		<p class="text-left" style="float: left;">上传分组名单（要求必须为Excel表格，具体格式如下）:</p>&nbsp&nbsp<input style="float: left;" type="file" @change="getFile($event)"> <button style="float: left;" @click="upload(3, aclass.class_id, $event)">提交</button>
	</form>
	<table class="table table-bordered">
	<tbody>
		<tr>
			<td>学生姓名</td>
			<td>学号</td>
			<td>小组</td>
		</tr>
		<tr>
			<td>小花</td>
			<td>1</td>
			<td>1</td>
		</tr>
		<tr>
			<td>小船</td>
			<td>2</td>
			<td>1</td>
		</tr>
		<tr>
			<td>小明</td>
			<td>3</td>
			<td>2</td>
		</tr>
	</tbody>
	</table>
	</div>
</div>
</div>
</div>
</div>
<div v-if="status === 2">
  <groupList></groupList>
</div>
<div v-if="status === 1">
<div v-if="picked === 0" style="margin-top: 30px;">
	<button class="btn btn-default" @click="saveGroup()">确定分组名单</button>
</div>
<div v-else style="margin-top: 30px;"><!--  -->
	<button class="btn btn-default" @click="getAllGroup(classes)">生成分组名单</button>
</div>
</div>
	</div>
</template>

<script type="text/javascript">
import axios from 'axios'
import store from '@/store.js'
import groupList from '@/components/groupList'
export default {
  data () {
    return {
      classes: [],
      picked: '',
      checkedNames: [],
      select: [],
      file: '',
      choseArr: [],
      a: 0,
      groupData: [],
      status: 1
    }
  },
  components: {
    groupList
  },
  props: ['token', 'course_id'],
  methods: {
    saveGroup: function () {
      console.log('#####this is save group########')
      store.save('groupMsg', this.groupData)
      this.status = 2
    },
    getFile: function (event) {
      this.file = event.target.files[0]
      console.log('file--------------->', this.file)
      console.log('picked---------->', this.picked)
    },
    getGroupData: function (id) {
      let self = this
      axios({
        url: 'https://diningx.cn/pa/public/api/teacher/get_groupingmsg',
        method: 'post',
        data: {
          class_id: id,
          type: 'T2005',
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
        self.groupData.push(res.data.msg)
        console.log('班级分组信息-------------->', self.groupData)
      }).catch(function (err) {
        console.log(err)
      })
    },
    getAllGroup: function (classes) {
      this.picked = 0
      console.log('getAllGroup-------->', classes)
      console.log('class---------->', classes[0].class_id)
      for (var i = 0; i < classes.length; i++) {
        console.log('class_id-------->', classes[i].class_id)
        this.getGroupData(classes[i].class_id)
      }
      //   // this.getGroupData(x.class_id)
      // }
    },
    upload: function (grouptype, id, event) {
      event.preventDefault()
      let self = this
      let formData = new FormData()
      formData.append('groupingtype', grouptype)
      formData.append('class_id', id)
      formData.append('type', 'T2004')
      formData.append('token', self.token)
      formData.append('file', self.file)
      axios({
        url: 'https://diningx.cn/pa/public/api/teacher/grouping',
        method: 'post',
        data: formData,
    //     transformRequest: [function (data) {
    // // Do whatever you want to transform the data
    //       let ret = ''
    //       for (let it in data) {
    //         ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
    //       }
    //       return ret
    //     }],
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then(function (res) {
        // console.log(res.data.msg[0].name + 'T2003-----' + res.data.msg.length)
      }).catch(function (err) {
        console.log(err)
      })
      this.file = ''
    },
    getData: function () {
      let self = this
      axios({
        url: 'https://diningx.cn/pa/public/api/teacher/get_student_by_course',
        method: 'post',
        data: {
          type: 'T2003',
          token: self.token,
          course_id: self.course_id
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
        console.log(res.data.msg[0].name + 'T2003-----' + res.data.msg.length)
        self.classes = res.data.msg
        console.log(self.classes)
      }).catch(function (err) {
        console.log(err)
      })
    }
  },
  created () {
    this.getData()
  }
}
</script>

<style type="text/css">
td {
	text-align: center;
}
th {
	text-align: center;
}
tr {
	text-align: center;
}
</style>