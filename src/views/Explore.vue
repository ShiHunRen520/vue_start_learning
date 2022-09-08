<template>
  <div class="explore">
		<!-- <h2>探索页面</h2> -->
		<!-- 实现照片流 -->
		<Show3D></Show3D>
  </div>
</template>

<script>
	import Show3D from '../components/explore/Show3D.vue'
	export default {
		name: 'Explore',
		components: {
			Show3D
		},
		data() {
			return {
				twoArr: [
					{
						id: 0,
						url: 'https://img1.baidu.com/it/u=1615226050,782414503&fm=253&fmt=auto&app=120&f=JPEG?w=889&h=500',
						imgName: '美丽图片',
						viewData: 248,
						likeData: 127,
						userName: '用户',
						currentDate: '2021年12月28日'
					},
					{
						id: 1,
						url: 'https://img1.baidu.com/it/u=1407750889,3441968730&fm=253&fmt=auto&app=120&f=JPEG?w=1200&h=799',
						imgName: '美丽图片',
						viewData: 148,
						likeData: 127,
						userName: '用户',
						currentDate: '2021年2月8日'
					},
					{
						id: 2,
						url: 'https://img2.baidu.com/it/u=2326903703,1471706484&fm=253&fmt=auto&app=138&f=JPEG?w=890&h=500',
						imgName: '美丽图片',
						viewData: 248,
						likeData: 127,
						userName: '用户',
						currentDate: '2021年12月28日'
					},
					{
						id: 3,
						url: 'https://img0.baidu.com/it/u=329459380,3434082451&fm=253&fmt=auto&app=120&f=JPEG?w=700&h=394',
						imgName: '美丽图片',
						viewData: 248,
						likeData: 127,
						userName: '用户',
						currentDate: '2021年12月28日'
					},
					{
						id: 4,
						url: 'https://img2.baidu.com/it/u=256733753,1955873408&fm=253&fmt=auto&app=120&f=JPEG?w=889&h=500',
						imgName: '美丽图片',
						viewData: 248,
						likeData: 127,
						userName: '用户',
						currentDate: '2021年12月28日'
					},
					{
						id: 5,
						url: 'https://img1.baidu.com/it/u=3836838447,682060976&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500',
						imgName: '美丽图片',
						viewData: 248,
						likeData: 127,
						userName: '用户',
						currentDate: '2021年12月28日'
					},
					{
						id: 6,
						url: 'https://img0.baidu.com/it/u=858531662,1232036783&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=281',
						imgName: '美丽图片',
						viewData: 248,
						likeData: 127,
						userName: '用户',
						currentDate: '2021年12月28日'
					},
					{
						id: 7,
						url: 'https://img0.baidu.com/it/u=3445374199,1187784566&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=328',
						imgName: '美丽图片',
						viewData: 248,
						likeData: 127,
						userName: '用户',
						currentDate: '2021年12月28日'
					}
				]
			}
		},
		mounted() {
			// this.copyImg()
			console.log(this.twoArr)
			console.log(this.$http)
		},
		methods: {
			copyImg() {
				let lastIndex = this.twoArr.length
				for(let i = lastIndex; i < 100; i++) {
					console.log(i)
					this.twoArr[i] = Object.assign({},{url: this.twoArr[3].url,id: i})
				}
			}
		}
	}
</script>

<style lang="scss">
	.explore{
		// width: 95%;
		// height: 1000px;
		margin-top: 30px;
		// border: 2px solid red
	}
</style>
