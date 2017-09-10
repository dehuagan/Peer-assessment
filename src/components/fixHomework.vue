<template>
<div>

<div style="border: 1px solid; height: 500px;">
	<div style="margin-top: 10px; margin-left: 10px;">
		<p class="text-left" style="float: left;">作业标题: </p> <input style="margin-right: 35px; margin-left: 10px; width: 200px;float: left;" v-model="homework.name">
	</div>
	<br><br>
	<div style="width: 800px;  margin-left: 10px;" >
		<p class="text-left" style="float: left;">作业要求: </p> <textarea v-model="homework.requirement" style="margin-left: 0px;margin-right: 220px;width: 500px;"></textarea>
	</div>

	<div>
		<p class="text-left" style="float: left; margin-left: 10px;">作业提交截止时间: </p><input v-model="homework.submit_ddl" style="width: 130px; float: left; margin-left: 10px;">
    
	</div>
	<br><br>
	<div><p class="text-left" style="margin-left: 10px; float: left;">是否需要同伴评估:</p><input style="float: left; margin-left: 10px; " type="radio" id="one" value="One" v-model="picked"><label style="float: left; margin-left: 10px;" for="one">需要</label></p><input style="float: left; margin-left: 50px;" type="radio" id="two" value="Two" v-model="picked"><label style="float: left; margin-left: 10px;" for="two">不需要</label></div>
	<br><br>
	<div v-if="picked === 'One'">
	<div style="margin-left: 10px;" >
		<p class="text-left" style="float: left;">同伴互评准则: </p> <textarea v-model="homework.requirement" style="margin-left: 0px;margin-right: 250px;width: 500px; height: 100px;"></textarea>
	</div>
	<br>
	<div style="float: left;"><p class="text-left" style="margin-left: 10px;">同伴互评的评估维度:</p><input v-model="homework.standard[0]" style="width: 130px; margin-left: 10px;"></div>
	<div style="float: left;" v-for="number in sum">
      &nbsp&nbsp<input v-model="homework.standard[number]" style="width: 130px;">
    </div>
    <div style="margin-left: 0px;width: 90px; float: left;"><img :src="addPic" @click="addSum()">&nbsp<img :src="delPic" @click="delSum()">
    </div>
		<br><br>
			<div>
		<form role="form">
	<div class="form-group">
		<label for="name" style="float: left; margin-left: 10px;">评估参考范例(要求：上传文件必须为.txt文件):</label>
	</div>
	<div class="form-group">
<!--   <label class="sr-only" for="inputfile">文件输入</label> -->
  <input style="margin-left: 10px;" type="file" id="inputfile">
 </div>
	</form>
	
	</div>

	<div>
		<p class="text-left" style="float: left; margin-left: 10px;">同评截至时间: </p><input v-model="homework.assessment_ddl" style="width: 130px; float: left; margin-left: 10px;">
    
	</div>
	<div>
		<p class="text-left" style="float: left; margin-left: 10px;">修改截至时间: </p><input v-model="homework.modify_ddl" style="width: 130px; float: left; margin-left: 10px;">
    
	</div>
</div>
</div>
<div style="margin-top: 10px;"><button style="width: 200px;" type="button" class="btn btn-default" @click="saveHomework()">保存</button>&nbsp&nbsp&nbsp&nbsp&nbsp<button style="width: 200px;" type="button" class="btn btn-default" @click="launchHomework()">发布</button></div>

</div>
</template>

<script type="text/javascript">
import addPic from '@/assets/add.png'
import delPic from '@/assets/del.png'
import axios from 'axios'
import store from '@/store.js'
export default {
  data () {
    return {
      course: '',
      addPic: addPic,
      delPic: delPic,
      sum: 0,
      picked: ''
      // homework: {
      //   name: '',
      //   submit_ddl: '',
      //   assessment_ddl: '',
      //   modify_ddl: '',
      //   requirement: '',
      //   standard: []
      // }
    }
  },
  props: ['token', 'course_id', 'class_id', 'homework'],
  methods: {
    saveHomework: function () {
      store.save('homeworkElement', this.homework)
      alert('保存成功')
    },
    addSum: function () {
      this.sum ++
    },
    delSum: function () {
      this.sum --
    },
    launchHomework: function () {
      let self = this
      axios({
        url: 'https://diningx.cn/pa/public/api/teacher/add_homework',
        method: 'post',
        data: {
          type: 'T3001',
          token: self.token,
          name: self.homework.name,
          course_id: self.course_id,
          class_id: self.class_id,
          submit_ddl: self.homework.submit_ddl,
          assessment_ddl: self.homework.assessment_ddl,
          modify_ddl: self.homework.modify_ddl,
          standard: self.homework.standard,
          requirement: self.homework.requirement
        },
        transformRequest: [function (data) {
    // Do whatever you want to transform the data
          let ret = ''
          for (let it in data) {
            if (Object.prototype.toString.apply(data[it]) === '[object Array]') {
              for (let item in data[it]) {
                ret += encodeURIComponent(it) + '[]=' + encodeURIComponent(data[it][item]) + '&'
              }
            } else {
              ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
            }
          }
          return ret
        }],
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(function (res) {
        console.log(res.data)
        alert('发布成功')
        self.$router.push({path: '/pages/homework/' + self.course_id})
        store.delete('homeworkElement')
      }).catch(function (err) {
        console.log(err)
      })
    },
    getCourseData: function () {
      let self = this
      axios({
        url: 'https://diningx.cn/pa/public/api/student/get_course_info_by_id',
        method: 'post',
        data: {
          type: 'S2003',
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
        self.course = res.data.msg.name
        console.log(self.classes)
      }).catch(function (err) {
        console.log(err)
      })
    }
  },
  created () {
    this.getCourseData()
    console.log('class_id----------->', this.class_id)
    // this.homework = self.homework
    console.log('fix')
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