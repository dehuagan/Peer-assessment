<template>
  <div>
    <div class="list" style="width: 300px; height: 350px; float: left;">
    <div data-spy="scroll" data-target="#navbar-example" data-offset="0" 
   style="height:300px;overflow:auto; position: relative;">
      <div class="panel-group" id="accordion">
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
        </div>
      </div>
     </div>
     <div class="btn-group" data-toggle="buttons" style="width: 300px; margin-top: 50px;">
           <label class="btn btn-success ">
        <input type="checkbox"> 班级
      </label>
      <label class="btn btn-success">
        <input type="checkbox"> 个人
      </label>
      <label class="btn btn-success ">
        <input type="checkbox"> 反馈
      </label>
     </div>
    </div>
    <div class="talk" style="float: left; margin-left: 60px; width: 600px;">
      <div class="panel panel-default">
    <div class="panel-body" style="border-bottom-style: groove;">
        教师公告
    </div>
    <div data-spy="scroll" data-target="#navbar-example" data-offset="0" 
   style="height:300px;overflow-x:hidden; position: relative;">
    
    <div class="panel-body panel panel-default" style="margin-left: 10px; margin-right: 10px;" v-for="order in orders">
      <p class="text-justify">{{order}}</p>
    </div>
  
   </div>
   <div class="col-lg-6" style="width: 600px;">
        <div class="input-group" style="margin: 0px;">
          <input type="text" class="form-control" v-model="msg" @keyup.enter="send()">
          <span class="input-group-btn">
            <button class="btn btn-default" type="button" @click="send()">
              发送
            </button>
          </span>
        <!-- /input-group -->
      </div><!-- /.col-lg-6 -->
</div>
</div>
    </div>
  </div>

</template>

<script>
export default {
  data () {
    return {
      msg: '',
      orders: []
    }
  },
  methods: {
    send: function () {
      console.log(this.msg)
      if (this.msg !== '') {
        this.orders.push(this.msg)
      }
      this.msg = ''
    }
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

</style>
