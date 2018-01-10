<template>
	<section class="alertWindow">
		<i class="close" @click="closewindow">关闭</i>
		<section class="rule">
			<p class="p1">你已经是趣现用户</p>
			<p class="p2">请直接下载APP，开始信用卡取现</p>
			<a class="p3" href="http://fir.im/qx360">下载趣现app</a>
		</section>
	</section>
</template>
<script>
export default{
	data(){
		return {

		}
	},
	methods:{
		closewindow(){
			 this.$emit('closewindow')
		}
	}
}
</script>

<style scoped lang="scss">
@import '../../sass/_base.scss';
.alertWindow{
	width:70%;
	height:350px;
	display: inline-block;
	background:#fff;
	position: fixed;
	top:50%;
	left:50%;
	transform: translate(-50%, -50%);
	z-index:10000;
	border-radius: 15px;
	font-size:30px;/*px*/
	.rule{
		padding: 0 10px;
		font-size: 26px;/*px*/
		p{
			width:100%;
			color: #5d5453;
			line-height: 50px;
			font-size:30px;/*px*/
		}
		.p1{
			margin-top:80px;
		}
		.p2{
			margin-top:45px;
		}
		.p3{
			margin-top:20px;
			width:100%;
			height:100px;
			line-height: 100px;
			display: inline-block;
			color: #f07823;
			font-size:30px;/*px*/
		}
	}
	.close{
		position: absolute;
		right:10px;
		top:20px;
		color: #f07823;
		display: inline-block;
		width:80px;
		height:80px;
		font-size:30px;/*px*/
	}

}
</style>