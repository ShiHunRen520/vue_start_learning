<template>
	<div class="hot">
		<div class="hot-header">
			<h1>热门航拍点</h1>
			<span class="hot-link">
				<el-link type="primary">热门航拍点集集锦<i class="el-icon-camera el-icon--right"></i> </el-link>
			</span>
		</div>
		<div class="hot-li">
			<div class="img-body" v-for="(it,index) in imgArr" :key="index">
				<img :src="it.url" >
				<div class="hot-tag">
						<el-tag type="success">{{it.name}}</el-tag>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Hot',
		data() {
			return {
				imgArr: [
					{
						url: 'https://img0.baidu.com/it/u=2379834867,2770244234&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500',
						name: '中国花果山'
					},
					{
						url: 'https://img0.baidu.com/it/u=3407350863,2811665565&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=421',
						name: '美国自由啊'
					},
					{
						url: 'https://img0.baidu.com/it/u=745386141,4121332421&fm=253&fmt=auto&app=138&f=JPEG?w=750&h=500',
						name: '澳大利亚'
					},
					{
						url: 'https://img1.baidu.com/it/u=3553753688,1018415444&fm=253&fmt=auto&app=120&f=JPEG?w=1280&h=800',
						name: '冰岛'
					},
					{
						url: 'https://img1.baidu.com/it/u=2068796850,1070436727&fm=253&fmt=auto&app=120&f=JPEG?w=1366&h=768',
						name: '新疆'
					},
					{
						url: 'https://img0.baidu.com/it/u=2253011373,3785503299&fm=26&fmt=auto',
						name: '西藏'
					}
				]
			}
		}
	}
</script>

<style lang="scss">
	.hot{
		width: 1200px;
		height: 220px;
		// border: 1px solid greenyellow;
		.hot-header{
			width: 100%;
			height: 40px;
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-bottom: 15px;
			h1{
				font-family: '黑体';
				font-weight: 600;
			}
		}
		.hot-li{
			width: 100%;
			height: calc(100% - 50px);
			display: flex;
			justify-content: space-between;
			align-items: center;
			  img{
					width: 180px;
					height: 120px;
					border-radius: 5px;
					// border: 1px solid darkcyan;
				}
				.hot-tag{
					margin-top: 5px;
				}
		}
	}
</style>
