<template>
	<div class="select-body">
		<a-scene renderer="antialias: auto" tune-render>
		    <a-assets>
		    //存放纹理，背景资源
		        <img id="sky" src="../../assets/qj4.jpg" alt="图片" />
		        <!-- <a-assets-item id="botDance" src="../as"></a-assets-item> -->
		    </a-assets>
		    <a-box
					id="box0"
		      position="0 2 -5"
		      rotation="0 45 45"
		      scale="1 1 1"
		      src="#sky"
		    ></a-box>
		    <a-camera id="camera" position="0 1.6 0" fov="80" ref="camera"></a-camera>
		    <a-sky src="#sky" ref="sky" radius="15"></a-sky>
		</a-scene>
	</div>
</template>

<script>
	export default {
		name: 'Select',
		data() {
			return {
			}
		},
		methods: {
		
		}
	}
</script>

<style lang="scss">
	
</style>
