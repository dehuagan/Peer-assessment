<template>
  <div>
    <div>
    	<ul class="nav nav-pills">
    		 <li role="presentation" class="active"><a href="#">Home</a></li>
    	</ul>
    </div>
    
  </div>
</template>

<script type="text/javascript">
import axios from 'axios'
export default {
  created () {
    axios.post('https://diningx.cn/pa/public/api/teacher/get_my_course', {
      parmas: {
        'type': 'T2002',
        'token': '1f5be77b086bc671b321a66ae4675330'
      }
    }).then(function (response) {
      console.log('aaaaa--------', response.data)
    })
  }
}
</script>

<style type="text/css">
	
</style>