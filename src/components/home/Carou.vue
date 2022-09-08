<template>
	<div class="carousel">
		<el-carousel :interval="4000" type="card" height="320px">
			<el-carousel-item v-for="(item,index) in cardArr" :key="item">
				<!-- <span class="medium">{{ index }}</span> -->
				<img :src="item" >
			</el-carousel-item>
		</el-carousel>
	</div>
</template>

<script>
	export default {
		name: 'Carou',
		data() {
			return {
				cardArr: [
					'https://img2.baidu.com/it/u=4142684559,293670076&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500',
					'https://img0.baidu.com/it/u=2473280142,1045103799&fm=253&fmt=auto&app=138&f=JPEG?w=799&h=500',
					'https://img2.baidu.com/it/u=2529841041,1688255876&fm=253&fmt=auto&app=120&f=JPEG?w=889&h=500',
					'https://img1.baidu.com/it/u=2566305331,3245125884&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500',
					'https://img0.baidu.com/it/u=1563104984,2915488077&fm=253&fmt=auto&app=120&f=JPEG?w=1422&h=800',
					'https://img0.baidu.com/it/u=3018071707,3297673087&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500'
				]
			}
		}
	}
</script>

<style lang="scss">
	.carousel {
		.el-carousel__item h3 {
			color: #475669;
			font-size: 14px;
			opacity: 0.75;
			line-height: 200px;
			margin: 0;
		}
		
		.el-carousel__item:nth-child(2n) {
			background-color: #99a9bf;
			border-radius: 5px;
		}
		
		.el-carousel__item:nth-child(2n+1) {
			background-color: #d3dce6;
			border-radius: 5px;
		}
	}
</style>
