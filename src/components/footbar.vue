<template>
  		<div id="footer">
			<footer class="footer">
				<div class="container">
					<div class="footer-menu">
						<ul class="footer-link">
							<li>
								<a href="problem" target="_blank">常见问题</a>
							</li>
							<li>
								<a href="suggest" target="_blank">意见反馈</a>
							</li>
							<li>
								<a href="contact" target="_blank">联系我们</a>
							</li>
							<li>
								<a href="about" target="_blank">关于系统</a>
							</li>
						</ul>
					</div>
					<div class="copyright">
						<span style="margin-left:10px;color:#fff;">CopyRight&copy;广东外语外贸大学信息学院NLP同伴评估小组</span>
					</div>

				</div>
			</footer>
		</div>
</template>

<script>
export default {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
#footer{
	position:absolute;
	background-color: #515151;
	padding: 0px 0px 15px;	
	text-align: center;
	color: #fff;
	margin-top: 300px;
	width: 1200px;
}


.footer img {
	margin: 0px;
}

.footer .footer-menu {
/*	margin: 20px auto;*/
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