<template>
	<section>
		<head-top :logo-title="logoTitle"></head-top>
		<section class="swiper-container ad">
			<section class="swiper-wrapper">
				<a class="swiper-slide">
					<img src="" alt="">
				</a>
				<a class="swiper-slide active">
					<img src="" alt="">
				</a>
				<a class="swiper-slide">
					<img src="" alt="">
				</a>
			</section>
			<div id="pagination" class="pagination"></div>
		</section>
		<p class="tj_tit"><em>推荐项目</em></p>
		<section class="item_list">
			<ul>
				<li>
					<a href="">
						<img src="" alt="" >
						<span>
							<h5 >智能指纹锁系统这是个</h5>
							<p class="ellipsis">一句简介一名简介一句简介一名简介一句简介一名简介一句简介一名简介...</p>
							<i></i>
						</span>	
						<em>¥100万</em>					
					</a>
				</li>
				<li>
					<a href="">
						<img src="" alt="" >
						<span>
							<h5>智能指纹锁系统这是个</h5>
							<p>一句简介一名简介...</p>
							<i></i>
						</span>	
						<em>¥100万</em>					
					</a>
				</li>
				<li>
					<a href="">
						<img src="" alt="" >
						<span>
							<h5>智能指纹锁系统这是个</h5>
							<p>一句简介一名简介...</p>
							<!-- <i></i> -->
						</span>	
						<em>¥100万</em>					
					</a>
				</li>
			</ul>
		</section>
		<v-footer></v-footer>
	</section>
</template>
<script>
import head from '../../components/header/header'
import footer from '../../components/footer/footer'
import {Swiper} from '../../plugins/swiper.min.js'
export default{
	data(){
		return {
			logoTitle:'易商网盟'
		}
	},
	mounted(){
		new Swiper('.swiper-container', {
			pagination: '#pagination',
			autoplayDisableOnInteraction : false,
			autoplay : 3000,
			spaceBetween:10,
			loop:1
		});
	},
	components:{
		'head-top':head,
		'v-footer':footer
	}
}
</script>


<style lang="scss" scoped>
@import '../../sass/swiper.min.css';
@import '../../sass/base';
.ad{
	position: relative;
	width:100%;
	height:360px;
	line-height: 360px;
	a{
		width:90.666% !important;
		height:100%;
		display: inline-block;
		border-radius: 15px;
		background-color: #a2a2c8;
		img{
			width:100%;
			height:100%;
		}
	}
	.swiper-slide-next,.swiper-slide-prev{
		height:340px;
		margin-top:15px;
	}
}
.tj_tit{
	margin:46px 0 36px 0 ;
	line-height: 32px;
	line-height: 32px;
	font-size:30px;/*px*/
	color: #000;
	margin-left:35px;
	border-left:6px solid #1f8bee;
	em{
		font-style: normal;
		margin-left:10px;
	}
}
.item_list{
	border-top:1px solid #e5e5e8;
	li{
		padding:38px 25px 25px 38px;
		border-bottom:1px solid #e5e5e8;
		width:100%;
		position: relative;
		a{
			width:100%;
			height:100%;
			display: inline-block;
			img{
				width:21.22%;
				height:146px;	
				display: inline-block;	
				border:1px solid #e5e5e8;
				vertical-align: top;

			}
			span{
				width:48.84%;
				display: inline-block;
				margin-left:.25rem;
				h5{
					margin-top:7px;
					line-height: 48px;
					font-size:28px;/*px*/
					color:#000;
				}
				p{
					font-size: 24px;/*px*/
					color: #c0c4e0;
					line-height: 45px;
				}
				i{
					width:51px;
					height:31px;
					display: inline-block;
					background: url(../../assets/tj_icon.png);
					background-size: 100% 100%;	
					margin-top:15px;				
				}
			}
			em{
				width:23.25%;
				height:40px;
				text-align: center;
				line-height: 40px;
				font-size:28px;/*px*/
				color: #fff;
				font-weight: bold;
				display: inline-block;
				background: url(../../assets/home_btn.png);
				background-size: 100% 100%;
				margin-left:10px;
				position: absolute;
				top:50%;
				right:25px;
				transform: translateY(-50%);

			}			
		}
	}
}
</style>