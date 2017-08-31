<template>
 <div>
   <h3>学生作业详情</h3>
   <div><p class="text-left" style="float: left; width: 200px;">学号: {{oneStudent.school_num}}</p><p class="text-right" style="float: left;">姓名: {{content.name}}</p></div>
 </div> 
</template>
<script type="text/javascript">
import axios from 'axios'
export default {
  props: ['homework_id', 'oneStudent'],
  data () {
    return {
      content: {}
    }
  },
  methods: {
    getContent: function () {
      let self = this
      axios({
        url: 'https://diningx.cn/pa/public/api/teacher/get_student_homework_content',
        method: 'post',
        data: {
          type: 'T3007',
          token: '1f5be77b086bc671b321a66ae4675330',
          homework_id: self.homework_id,
          student_id: self.oneStudent.student_id
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
        self.content = res.data.msg
      }).catch(function (err) {
        console.log(err)
      })
    }
  },
  created () {
    this.getContent()
  }
}
</script>
<style type="text/css">
  
</style>