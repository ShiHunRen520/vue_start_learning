<template>
	<div class="home">
		<!-- <h2>首页</h2> -->
		<!-- 美图轮播 -->
		<div class="carousel">
			<Carou />
		</div>
		<!-- 热门航拍点 -->
		<div class="hot-area">
			<Hot></Hot>
		</div>
		<!-- 按照类型精选模块 -->
		<div class="handpick">
			<Select></Select>
		</div>
	</div>
</template>

<script>
	import Carou from '../components/home/Carou.vue'
	import Hot from '../components/home/Hot.vue'
	import Select from '../components/home/Select.vue'
	export default {
		name: 'Home',
		components: {Hot,Carou,Select}
	}
</script>
<style lang="scss">
	.home {
		width: 100%;
		height: 1700px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		.carousel {
			width: 1200px;
			height: 320px;
			margin-top: 50px;
		}
		.hot-area{
			margin-top: 40px;
			// border: 1px solid red;
		}
		.handpick{
			width: 1200px;
			height: 800px;
			// border: 1px solid hotpink;
		}
	}
</style>
