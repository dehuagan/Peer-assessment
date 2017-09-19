<template>
	<div>
		<div class="panel panel-default">
	<div class="panel-heading">
		<h3 class="panel-title">
			班级指导公告
		</h3>
	</div>
	<div data-spy="scroll" data-target="#navbar-example" data-offset="0"
     style="height:350px;overflow-x: hidden; position: relative;">
	<div class="panel-body">
		<textarea style="height: 120px; width: 700px; margin-left: 120px;"  type="text" class="form-control" id="firstname" placeholder="请输入报告内容"></textarea>
		<br>
		<button type="button" class="btn btn-default" style="width: 100px;">发布</button>
		<hr>
		
     	<div class="panel panel-default" v-for="order in orders">
    <div class="panel-body">
        {{order}}
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
     	
     </div>
		<textarea style="height: 120px; width: 700px; margin-left: 120px;"  type="text" class="form-control" id="firstname" placeholder="请输入报告内容"></textarea>
		<br>
		<button type="button" class="btn btn-default" style="width: 100px;">发布</button>
		<hr>
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
      orders: []
    }
  },
  props: ['class_id', 'class_groupmsg', 'token'],
  methods: {
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
    }
  },
  created () {
    console.log('class_id---------->', self.class_id)
    this.get_ct_communicate()
  }
}
</script>
<style type="text/css"></style>