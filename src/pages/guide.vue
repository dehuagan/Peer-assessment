<template>
 <div>
  <div>
    <topbar :user="user"></topbar>
    <div class="appnav">
      
      <navigatior></navigatior>
      </div>
      </div>
    <div class="list" style="width: 300px; height: 400px; float: left;">
    <div data-spy="scroll" data-target="#navbar-example" data-offset="0" 
   style="height:350px;overflow:auto; position: relative;">
      <div class="panel-group" id="accordion">
      <div v-if="picked === 1">
      <div class="panel panel-default">
        <div class="panel-heading">
          <h4 class="panel-title">
            <a data-toggle="collapse" data-parent="#accordion" 
               href="#collapseOne">
              班级1
            </a>
          </h4>
        </div>
        <div id="collapseOne" class="panel-collapse collapse">
          
            <ul class="list-group">
              <li class="list-group-item">小组1</li>
              <li class="list-group-item">小组1</li>
              <li class="list-group-item">小组1</li>
              <li class="list-group-item">小组1</li>
              <li class="list-group-item">小组1</li>
            </ul>
          </div>
        </div></div>
          <div class="panel panel-default" v-if="picked === 2">
        <div class="panel-heading">
          <h4 class="panel-title">
            <a data-toggle="collapse" data-parent="#accordion" 
               href="#collapseOne">
              个人
            </a>
          </h4>
        </div>
        <div id="collapseOne" class="panel-collapse collapse">
          
            <ul class="list-group">
              <li class="list-group-item">小组1</li>
              <li class="list-group-item">小组1</li>
              <li class="list-group-item">小组1</li>
              <li class="list-group-item">小组1</li>
              <li class="list-group-item">小组1</li>
            </ul>
          </div>
        </div>
              <div class="panel panel-default" v-if="picked === 3">
        <div class="panel-heading">
          <h4 class="panel-title">
            <a data-toggle="collapse" data-parent="#accordion" 
               href="#collapseOne">
              反馈
            </a>
          </h4>
        </div>
        <div id="collapseOne" class="panel-collapse collapse">
          
            <ul class="list-group">
              <li class="list-group-item">小组1</li>
              <li class="list-group-item">小组1</li>
              <li class="list-group-item">小组1</li>
              <li class="list-group-item">小组1</li>
              <li class="list-group-item">小组1</li>
            </ul>
          </div>
        </div>
      </div>
     </div>
   <div class="btn-group" data-toggle="buttons">
  <label class="btn" for="option1">
    <a style="display: block;" id="option1" @click="change(1)">班级</a>
  </label>
  <label class="btn " for="option2" >
    <a @click="change(2)">个人</a>
  </label>
  <label class="btn" for="option3">
    <a @click="change(3)">反馈</a>
  </label>
</div>  
    </div> 
    <div class="talk" style="float: left; margin-left: 60px; width: 600px;">
      <div class="panel panel-default">
    <div class="panel-body" style="border-bottom-style: groove;">
        教师公告{{picked}}
    </div>
    <div data-spy="scroll" data-target="#navbar-example" data-offset="0" 
   style="height:300px;overflow-x:hidden; position: relative;">
    
    <div class="panel-body panel panel-default" style="margin-left: 10px; margin-right: 10px;" v-for="order in orders">
      <p class="text-justify">{{order}}</p>
    </div>
  
   </div>
   <talktext></talktext>
</div>
    </div>
  </div>

</template>

<script>
import talktext from '@/components/talk-text'
import talkmessage from '@/components/talk-message'
import topbar from '@/components/topbar'
import navigatior from '@/components/navigatior'
import store from '@/store.js'
export default {
  data () {
    return {
      msg: '',
      orders: [],
      picked: '',
      user: {}
    }
  },
  methods: {
    change: function (tab) {
      this.picked = tab
    },
    send: function () {
      console.log(this.msg)
      if (this.msg !== '') {
        this.orders.push(this.msg)
      }
      this.msg = ''
    }
  },
  components: {
    talktext, talkmessage, topbar, navigatior
  },
  created () {
    this.user = store.fetch('user')
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
</style>
