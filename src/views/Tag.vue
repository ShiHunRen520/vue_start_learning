<template>
	<div class="tag">
		<!-- <h2>标签页面</h2> -->
		<Tag3D></Tag3D>
	</div>
</template>

<script>
	import Tag3D from '../components/tag/Tag3D.vue'
	export default {
		name: 'Tag',
		components:{
			Tag3D
		},
		data() {
			return {
				
			}
		},
		mounted() {
			// let imgArr = this.$http
			// .get('')
			// .then(function(res){
			// 	console.log(res)
			// })
		}
	}
</script>

<style lang="scss">
	.tag{
		width: 100%;
		height: 860px;
		display: flex;
		justify-content: center;
		align-items: center;
		// border: 1px solid red;
	}
</style>
