<template>
	<div class="select-body">
		<el-tabs v-model="activeName" @tab-click="handleClick">
			<el-tab-pane label="自然" name="first">
				<One />
			</el-tab-pane>
			<el-tab-pane label="城市" name="second">
				<One :photoArr="twoArr"/>
			</el-tab-pane>
			<el-tab-pane label="运动" name="third">
				<One :photoArr="threeArr"/>
			</el-tab-pane>
			<el-tab-pane label="人物" name="fourth">
				<One :photoArr="fourArr"/>
			</el-tab-pane>
			<!-- <el-tab-pane label="热门标签" name="six">
				<One :photoArr="threeArr"/>
			</el-tab-pane> -->
		</el-tabs>
	</div>
</template>

<script>
	import One from './selCom/One.vue'
	export default {
		name: 'Select',
		components:{One},
		data() {
			return {
				activeName: 'second',
				twoArr: [
					{
						imgUrl: 'https://img1.baidu.com/it/u=1615226050,782414503&fm=253&fmt=auto&app=120&f=JPEG?w=889&h=500',
						imgName: '美丽图片',
						viewData: 248,
						likeData: 127,
						userName: '用户',
						currentDate: '2021年12月28日'
					},
					{
						imgUrl: 'https://img1.baidu.com/it/u=1407750889,3441968730&fm=253&fmt=auto&app=120&f=JPEG?w=1200&h=799',
						imgName: '美丽图片',
						viewData: 148,
						likeData: 127,
						userName: '用户',
						currentDate: '2021年2月8日'
					},
					{
						imgUrl: 'https://img2.baidu.com/it/u=2326903703,1471706484&fm=253&fmt=auto&app=138&f=JPEG?w=890&h=500',
						imgName: '美丽图片',
						viewData: 248,
						likeData: 127,
						userName: '用户',
						currentDate: '2021年12月28日'
					},
					{
						imgUrl: 'https://img0.baidu.com/it/u=329459380,3434082451&fm=253&fmt=auto&app=120&f=JPEG?w=700&h=394',
						imgName: '美丽图片',
						viewData: 248,
						likeData: 127,
						userName: '用户',
						currentDate: '2021年12月28日'
					},
					{
						imgUrl: 'https://img2.baidu.com/it/u=256733753,1955873408&fm=253&fmt=auto&app=120&f=JPEG?w=889&h=500',
						imgName: '美丽图片',
						viewData: 248,
						likeData: 127,
						userName: '用户',
						currentDate: '2021年12月28日'
					},
					{
						imgUrl: 'https://img1.baidu.com/it/u=3836838447,682060976&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500',
						imgName: '美丽图片',
						viewData: 248,
						likeData: 127,
						userName: '用户',
						currentDate: '2021年12月28日'
					},
					{
						imgUrl: 'https://img0.baidu.com/it/u=858531662,1232036783&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=281',
						imgName: '美丽图片',
						viewData: 248,
						likeData: 127,
						userName: '用户',
						currentDate: '2021年12月28日'
					},
					{
						imgUrl: 'https://img0.baidu.com/it/u=3445374199,1187784566&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=328',
						imgName: '美丽图片',
						viewData: 248,
						likeData: 127,
						userName: '用户',
						currentDate: '2021年12月28日'
					}
				],
				threeArr: [
					{
						imgUrl: 'https://img2.baidu.com/it/u=4179708572,3155054568&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500',
						imgName: '美丽图片',
						viewData: 248,
						likeData: 127,
						userName: '用户',
						currentDate: '2021年12月28日'
					},
					{
						imgUrl: 'https://img1.baidu.com/it/u=1552356916,1367762173&fm=253&fmt=auto&app=138&f=JPEG?w=658&h=439',
						imgName: '美丽图片',
						viewData: 148,
						likeData: 127,
						userName: '用户',
						currentDate: '2021年2月8日'
					},
					{
						imgUrl: 'https://img2.baidu.com/it/u=2197747343,3758552362&fm=26&fmt=auto',
						imgName: '美丽图片',
						viewData: 248,
						likeData: 127,
						userName: '用户',
						currentDate: '2021年12月28日'
					},
					{
						imgUrl: 'https://img1.baidu.com/it/u=3556474158,4158187226&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500',
						imgName: '美丽图片',
						viewData: 248,
						likeData: 127,
						userName: '用户',
						currentDate: '2021年12月28日'
					},
					{
						imgUrl: 'https://img0.baidu.com/it/u=489948383,1512948360&fm=253&fmt=auto&app=138&f=JPEG?w=667&h=500',
						imgName: '美丽图片',
						viewData: 248,
						likeData: 127,
						userName: '用户',
						currentDate: '2021年12月28日'
					},
					{
						imgUrl: 'https://img1.baidu.com/it/u=1993980639,632255973&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500',
						imgName: '美丽图片',
						viewData: 248,
						likeData: 127,
						userName: '用户',
						currentDate: '2021年12月28日'
					},
					{
						imgUrl: 'https://img2.baidu.com/it/u=1953939432,2970501421&fm=253&fmt=auto&app=138&f=JPEG?w=680&h=442',
						imgName: '美丽图片',
						viewData: 248,
						likeData: 127,
						userName: '用户',
						currentDate: '2021年12月28日'
					},
					{
						imgUrl: 'https://img0.baidu.com/it/u=2043692290,939462956&fm=253&fmt=auto&app=138&f=JPEG?w=658&h=438',
						imgName: '美丽图片',
						viewData: 248,
						likeData: 127,
						userName: '用户',
						currentDate: '2021年12月28日'
					}
				]
				,
				fourArr: [
					{
						imgUrl: 'https://img2.baidu.com/it/u=480416536,2775180965&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500',
						imgName: '美丽图片',
						viewData: 248,
						likeData: 127,
						userName: '用户',
						currentDate: '2021年12月28日'
					},
					{
						imgUrl: 'https://img1.baidu.com/it/u=719982625,727098913&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=313',
						imgName: '美丽图片',
						viewData: 148,
						likeData: 127,
						userName: '用户',
						currentDate: '2021年2月8日'
					},
					{
						imgUrl: 'https://img0.baidu.com/it/u=2084951222,1548081417&fm=253&fmt=auto&app=138&f=JPEG?w=666&h=500',
						imgName: '美丽图片',
						viewData: 248,
						likeData: 127,
						userName: '用户',
						currentDate: '2021年12月28日'
					},
					{
						imgUrl: 'https://img2.baidu.com/it/u=2279076928,330495771&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500',
						imgName: '美丽图片',
						viewData: 248,
						likeData: 127,
						userName: '用户',
						currentDate: '2021年12月28日'
					},
					{
						imgUrl: 'https://img1.baidu.com/it/u=274476683,4051030263&fm=26&fmt=auto',
						imgName: '美丽图片',
						viewData: 248,
						likeData: 127,
						userName: '用户',
						currentDate: '2021年12月28日'
					},
					{
						imgUrl: 'https://img0.baidu.com/it/u=2169870956,4017865002&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500',
						imgName: '美丽图片',
						viewData: 248,
						likeData: 127,
						userName: '用户',
						currentDate: '2021年12月28日'
					},
					{
						imgUrl: 'https://img1.baidu.com/it/u=1927281327,2341929010&fm=253&fmt=auto&app=138&f=JPEG?w=707&h=500',
						imgName: '美丽图片',
						viewData: 248,
						likeData: 127,
						userName: '用户',
						currentDate: '2021年12月28日'
					},
					{
						imgUrl: 'https://img1.baidu.com/it/u=1602235160,937923683&fm=253&fmt=auto&app=138&f=JPEG?w=633&h=500',
						imgName: '美丽图片',
						viewData: 248,
						likeData: 127,
						userName: '用户',
						currentDate: '2021年12月28日'
					}
				]
				,
				fiveArr: [
					{
						imgUrl: 'https://img2.baidu.com/it/u=480416536,2775180965&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500',
						imgName: '美丽图片',
						viewData: 248,
						likeData: 127,
						userName: '用户',
						currentDate: '2021年12月28日'
					},
					{
						imgUrl: 'https://img1.baidu.com/it/u=719982625,727098913&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=313',
						imgName: '美丽图片',
						viewData: 148,
						likeData: 127,
						userName: '用户',
						currentDate: '2021年2月8日'
					},
					{
						imgUrl: 'https://img0.baidu.com/it/u=2084951222,1548081417&fm=253&fmt=auto&app=138&f=JPEG?w=666&h=500',
						imgName: '美丽图片',
						viewData: 248,
						likeData: 127,
						userName: '用户',
						currentDate: '2021年12月28日'
					},
					{
						imgUrl: 'https://img2.baidu.com/it/u=2279076928,330495771&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500',
						imgName: '美丽图片',
						viewData: 248,
						likeData: 127,
						userName: '用户',
						currentDate: '2021年12月28日'
					},
					{
						imgUrl: 'https://img1.baidu.com/it/u=274476683,4051030263&fm=26&fmt=auto',
						imgName: '美丽图片',
						viewData: 248,
						likeData: 127,
						userName: '用户',
						currentDate: '2021年12月28日'
					},
					{
						imgUrl: 'https://img0.baidu.com/it/u=2169870956,4017865002&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500',
						imgName: '美丽图片',
						viewData: 248,
						likeData: 127,
						userName: '用户',
						currentDate: '2021年12月28日'
					},
					{
						imgUrl: 'https://img1.baidu.com/it/u=1927281327,2341929010&fm=253&fmt=auto&app=138&f=JPEG?w=707&h=500',
						imgName: '美丽图片',
						viewData: 248,
						likeData: 127,
						userName: '用户',
						currentDate: '2021年12月28日'
					},
					{
						imgUrl: 'https://img1.baidu.com/it/u=1602235160,937923683&fm=253&fmt=auto&app=138&f=JPEG?w=633&h=500',
						imgName: '美丽图片',
						viewData: 248,
						likeData: 127,
						userName: '用户',
						currentDate: '2021年12月28日'
					}
				]
				,
			}
		},
		methods: {
			handleClick(tab, event) {
				// console.log(tab, event);
				console.log(this.activeName)
			}
		}
	}
</script>

<style lang="scss">
	.select-body{
		width: 100%;
		height: 100%;
		background-color: #f7f8f9;
		.el-tabs__nav{
			left: 38%;
		}
		.el-tabs__item{
			font-size: 20px;
			font-family: "黑体";
			transition: all 0.3s 0s ease-in-out;
		}
		.el-tabs__item.is-active{
			color: #00f3ff;
			font-size: 21px;
		}
		.el-tabs__content{
			overflow: visible;
		}
	}
</style>
