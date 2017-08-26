<template>
<div>
<div style="margin-right: 800px; float: left;">
	<ol class="breadcrumb">
    <li><router-link to="/pages/class-manage">课程管理</router-link></li>
    <li class="active">创建课程</li>
</ol>
</div>
<div class="text-right" style="float: left;"><img :src="backPic" onclick="window.history.go(-1)"></div>
<div style="width: 900px;">
	<h3 style="text-align: center;">课程简介</h3>
	<div style="width: 400px; float: left;">
		<p class="text-left" style="float: left;">课程名: </p> <input style="margin-right: 35px; margin-left: 10px; width: 200px;float: left;" v-model="course.name">
	</div>
	
	<div>
		<p class="text-left" style="float: left;">面向年级: </p> <input style="margin-right: 35px; margin-left: 10px; width: 100px;float: left;" v-model="course.grade"placeholder="例如15级">
	</div>
<br><br><br>
	<div style="width: 800px;  margin-left: 0px;" >
		<p class="text-left" style="float: left;">课程介绍: </p> <textarea v-model="course.description" style="margin-left: 0px;margin-right: 220px;width: 500px;"></textarea>
	</div>
<br>
	<div style="float: left;">
	<p class="text-left" style="float: left;">课程时长: </p> <input type="number" v-model="course.hours" style="margin-right: 35px; margin-left: 10px; width: 100px;float: left;">
	</div>
	<div style="float: left;">
		<p class="text-left" style="float: left;">开课时间段: </p><input v-model="course.startday" style="width: 130px; float: left;" placeholder="年/月/日">&nbsp---<input v-model="course.endday" style="width: 130px; margin-left: 10px;" placeholder="年/月/日">
    
	</div>
	<br><br>
		<div style="float: left;">
			<p class="text-left" style="float: left;">上课班级: </p><input v-model="course.classes[0]" style="width: 130px; margin-left: 10px;">
		</div>
		<div style="float: left;" v-for="number in sum">
			&nbsp&nbsp<input v-model="course.classes[number]" style="width: 130px;">
		</div>
		<div style="margin-left: 0px;width: 90px; float: left;"><img :src="addPic" @click="addSum()">&nbsp<img :src="delPic" @click="delSum()">
		</div>
		<br><br><br>
		<div class="text-left">
			<p class="text-left" style="float: left;">先修课程: </p><input v-model="course.precourseName" style="width: 300px; margin-left: 10px; float: left;" placeholder="只需填写一个最相关的先修课程即可">
		</div>
		<br><br><br>
		<div style="width: 800px;  margin-left: 0px;" >
		<p class="text-left" style="float: left;">教学目标: </p> <textarea style="margin-left: 0px;margin-right: 220px;width: 500px;" v-model="course.aims"></textarea>
	</div>
	<br>
	<div>
	<p class="text-left" style="float: left;">教学进度表: </p>
	<div class="form-group" style="margin-left: 10px;">
  <label class="sr-only" for="inputfile">文件输入</label>
  <input type="file" id="inputfile">
 </div>
 </div>
 <br><br><br>
 <div><button style="width: 200px;" type="button" class="btn btn-default" @click="saveCourse()">保存</button></div>
	</div>
</div>

</div>
</template>

<script type="text/javascript">
import addPic from '@/assets/add.png'
import delPic from '@/assets/del.png'
import backPic from '@/assets/Back.png'
import store from '@/store.js'
export default {
  data () {
    return {
      sum: 0,
      id: this.$route.params.id,
      addPic: addPic,
      delPic: delPic,
      backPic: backPic,
      course: {
        name: '',
        grade: '',
        description: '',
        hours: '',
        startday: '',
        endday: '',
        classes: [],
        precourseName: '',
        aims: '',
        state: '1'
      }
    }
  },
  methods: {
    addSum: function () {
      this.sum ++
    },
    delSum: function () {
      this.sum --
    },
    saveCourse: function () {
      store.save('courseElement', this.course)
      this.$router.push({path: '/pages/class-manage'})
    },
    getStoreData: function () {
      return (store.fetch('courseElement'))
    }
  },
  created () {
    // this.judge
    console.log('%%%%%------->createCourse')
  }
}
</script>

<style type="text/css">
.breadcrumb > li + li:before {
    color: #000;
    content: ">";
    padding: 0 5px;
}
</style>