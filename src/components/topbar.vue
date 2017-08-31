<template>
 <div id="header">

			<div class="logo">
				<span class="navbar-brand" href="#">同伴评估系统</span>
			</div>

			<!--用户信息-->
			<!-- <div id="nav-right">
				<ul class="user-info">
					<li>
						<a class="user-photo navbar-brand"><img class="img-circle" src="../img/500351234.jpg" /></a>
					</li>
					<li>
						<a class="username navbar-brand">Carrie</a>
					</li>
					<li>
						<a class="notice-icon navbar-brand"><img src="../img/bell.png"></a>
					</li>
					<li>
						<a class="setup-icon navbar-brand"><img src="../img/setup.png"></a>
					</li>
				</ul>
			</div> -->
		</div>

</template>

<script type="text/javascript">
export default {}
</script>

<style type="text/css">
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

</style>