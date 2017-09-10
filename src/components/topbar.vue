<template>
 <div id="header">

			<div class="logo">
				<span class="navbar-brand" href="#">同伴评估系统</span>
			</div>
			
			<!--用户信息-->
			<div>
				<router-link to="/pages/person" class="btn">{{user.msg.name}}</router-link>
				<a class="btn" @click="out()">退出</a>
			</div>
		</div>

</template>

<script type="text/javascript">
import store from '@/store.js'
export default {
  props: ['user'],
  methods: {
    out: function () {
      store.delete('user')
      this.$router.push('/pages/index')
    }
  }
}
</script>

<style type="text/css">
* {
	padding: 0;
	font-family: "微软雅黑";
	font-size: 15px;
}


/*header*/

#header {
	border-bottom: solid #D5D5D5;
	background-color: #F5F5F5;
	width: 100%;
	height: 55px;
}

#header .logo {
	width: 60%;
	float:left;
}

#header .logo span {
	font-size: 25px;
	float: right;
}

#header #nav-right {
	width:40%;
	float: right;
}
#header #nav-right .user-info{
	float:right;
}
#header #nav-right li {
	float: left;
	list-style: none;
}

#header #nav-right .user-photo {
	padding: 10px;
}

#header #nav-right .user-photo img {
	width: 35px;
	height: 35px;
}

#header #nav-right .username {
	padding-left: 0px;
	font-weight: bold;
}

#header #nav-right .notice-icon img {
	width: 20px;
	height: 20px;
}

#header #nav-right .setup-icon img {
	width: 20px;
	height: 20px;
}


/*纵向导航*/

#col-nav {
	width: 15%;
	background-color: #FAFAFA;
	border: solid #E3E3E3 1px;
	padding-bottom: 50px;
	float:left;
}

#col-nav ul {
	width: 100%;
}
#col-nav ul li a {
	text-align: center;
}


#col-nav #left ul .courseManage-sub,#col-nav #left ul .discussComm-sub{
	display: none;
}
#col-nav #left ul .courseManage-sub a,#col-nav #left ul .discussComm-sub a{
	margin-left: -15px;	
	color:#5BC0DE;
}

/*内容主体*/
#content{
width:80%;
margin-top: 1.5%;
position: absolute;
margin-left: 17.5%;
}
#course h3{
	font-weight: bold;
}
#course{
	margin-top: 2%;
}

#content #content-tab-body .content-tab-body-padding{
	padding-top:10px;
}

/*footer*/
#footer{
	position:absolute;
	background-color: #515151;
	width:100%;
	padding: 0px 0px 15px;	
	text-align: center;
	color: #fff;
}


.footer img {
	margin: 0px;
}

.footer .footer-menu {
	margin: 20px auto;
}

.site-footer-links {
	padding-left: 0px;
}

.footer .footer-menu li {
	display: inline-block;
	display: inline;
	zoom: 1;
	margin-right: 10px
}

.footer .footer-menu a {
	color: #fff;
}

.footer .footer-menu a:hover {
	color: #ffa955;
}

.footer .copyright {
	color: #efefef;
}

.footer .copyright a {
	color: #efefef;
}

.footer .copyright a:hover {
	color: #ffa955;
}
</style>