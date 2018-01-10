<template>
	<header class="head_top">
		<section class="logo_head" v-if="logoTitle">
			<span class="logo_text">{{logoTitle}}</span>
			<span class="email_icon"></span>
		</section>



		<section class="detail_head" v-if="detailTitle">
			<span class="logo_text">{{detailTitle}}</span>
			<span class="kefu_icon" v-if="detailTitle"></span>
		</section>
	</header>
</template>

<script>

export default{
	data(){
		return {}
	},
	props: ['logoTitle','detailTitle']
}

</script>


<style lang="scss" scoped>
    .head_top{
    	width: 100%;
    	height:90px;
    	.logo_head{
    		width:100%;
    		height:90px;
    		line-height: 90px;
    		text-align: center;
    		position: absolute;
    		.logo_text{
				font-size:30px;/*px*/
				color: #0f83ed;				
		   }
		   .email_icon{
		   		width:40px;
		   		height:40px;
		   		display: inline-block;
		   		background: url(../../assets/email.png);
		   		background-size:100% 100%;
		   		position: absolute;
		   		top:50%;
		   		right:25px;
    			transform: translateY(-50%);
		   }
	    }
    }
</style>