<template>
	<div class="one-body">
		<div class="card-item" v-for="(it, index) in photoArr" :key="index">
			<el-card :body-style="{ padding: '0px' }" shadow="hover">
				<img :src="it.imgUrl">
				<div style="padding: 14px;">
					<div class="card-name">{{ it.imgName + index}}</div>
					<div class="card-data">
						<div class="show">
							<i class="el-icon-view" style="color: #999;"></i>
							<span style="color: #999;">{{ it.viewData }}</span>
						</div>
						<div class="zan">
							<i class="el-icon-star-on" style="color: #999;"></i>
							<span style="color: #999;">{{ it.likeData }}</span>
						</div>
					</div>
					<div class="line"></div>
					<div class="bottom clearfix">
						<div class="user-body">
							<img src="../../../assets/logo.png">
							<span class="user-na">{{ it.userName }}</span>
						</div>
						<time class="time">{{ it.currentDate }}</time>
					</div>
				</div>
			</el-card>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'One',
		data() {
			return {
				currentDate: new Date().getFullYear() + '年' + new Date().getMonth() + 1 + '月' + new Date().getDay() + '日',
				naturalArr: [{
						imgUrl: 'https://img1.baidu.com/it/u=3929349911,2593974303&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=313',
						imgName: '美丽图片',
						viewData: 248,
						likeData: 127,
						userName: '用户',
						currentDate: '2021年12月28日'
					},
					{
						imgUrl: 'https://img0.baidu.com/it/u=2925522188,1074625357&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500',
						imgName: '美丽图片',
						viewData: 148,
						likeData: 127,
						userName: '用户',
						currentDate: '2021年2月8日'
					},
					{
						imgUrl: 'https://img2.baidu.com/it/u=1906905584,1303442372&fm=253&fmt=auto&app=138&f=JPEG?w=756&h=500',
						imgName: '美丽图片',
						viewData: 248,
						likeData: 127,
						userName: '用户',
						currentDate: '2021年12月28日'
					},
					{
						imgUrl: 'https://img2.baidu.com/it/u=3451348843,3568968596&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=500" class="image',
						imgName: '美丽图片',
						viewData: 248,
						likeData: 127,
						userName: '用户',
						currentDate: '2021年12月28日'
					},
					{
						imgUrl: 'https://img0.baidu.com/it/u=927637170,1053734759&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=291',
						imgName: '美丽图片',
						viewData: 248,
						likeData: 127,
						userName: '用户',
						currentDate: '2021年12月28日'
					},
					{
						imgUrl: 'https://img1.baidu.com/it/u=2813310499,3310479372&fm=253&fmt=auto&app=120&f=JPEG?w=1422&h=800',
						imgName: '美丽图片',
						viewData: 248,
						likeData: 127,
						userName: '用户',
						currentDate: '2021年12月28日'
					},
					{
						imgUrl: 'https://img1.baidu.com/it/u=1658640056,2630998507&fm=26&fmt=auto',
						imgName: '美丽图片',
						viewData: 248,
						likeData: 127,
						userName: '用户',
						currentDate: '2021年12月28日'
					},
					{
						imgUrl: 'https://img2.baidu.com/it/u=3979879748,2489102797&fm=253&fmt=auto&app=120&f=JPEG?w=1422&h=800',
						imgName: '美丽图片',
						viewData: 248,
						likeData: 127,
						userName: '用户',
						currentDate: '2021年12月28日'
					},
					// {
					// 	imgUrl: 'https://img2.baidu.com/it/u=3451348843,3568968596&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=500" class="image',
					// 	imgName: '美丽图片',
					// 	viewData: 248,
					// 	likeData: 127,
					// 	userName: '用户',
					// 	currentDate: '2021年12月28日'
					// },
					// {
					// 	imgUrl: 'https://img2.baidu.com/it/u=1906905584,1303442372&fm=253&fmt=auto&app=138&f=JPEG?w=756&h=500',
					// 	imgName: '美丽图片',
					// 	viewData: 248,
					// 	likeData: 127,
					// 	userName: '用户',
					// 	currentDate: '2021年12月28日'
					// }
				]
			}
		},
		props: {
			photoArr: {
				type: Array,
				default: () => {
					return [{
							imgUrl: 'https://img1.baidu.com/it/u=3929349911,2593974303&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=313',
							imgName: '美丽图片',
							viewData: 248,
							likeData: 127,
							userName: '用户',
							currentDate: '2021年12月28日'
						},
						{
							imgUrl: 'https://img0.baidu.com/it/u=2925522188,1074625357&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500',
							imgName: '美丽图片',
							viewData: 148,
							likeData: 127,
							userName: '用户',
							currentDate: '2021年2月8日'
						},
						{
							imgUrl: 'https://img2.baidu.com/it/u=1906905584,1303442372&fm=253&fmt=auto&app=138&f=JPEG?w=756&h=500',
							imgName: '美丽图片',
							viewData: 248,
							likeData: 127,
							userName: '用户',
							currentDate: '2021年12月28日'
						},
						{
							imgUrl: 'https://img2.baidu.com/it/u=3451348843,3568968596&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=500" class="image',
							imgName: '美丽图片',
							viewData: 248,
							likeData: 127,
							userName: '用户',
							currentDate: '2021年12月28日'
						},
						{
							imgUrl: 'https://img0.baidu.com/it/u=927637170,1053734759&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=291',
							imgName: '美丽图片',
							viewData: 248,
							likeData: 127,
							userName: '用户',
							currentDate: '2021年12月28日'
						},
						{
							imgUrl: 'https://img1.baidu.com/it/u=2813310499,3310479372&fm=253&fmt=auto&app=120&f=JPEG?w=1422&h=800',
							imgName: '美丽图片',
							viewData: 248,
							likeData: 127,
							userName: '用户',
							currentDate: '2021年12月28日'
						},
						{
							imgUrl: 'https://img1.baidu.com/it/u=1658640056,2630998507&fm=26&fmt=auto',
							imgName: '美丽图片',
							viewData: 248,
							likeData: 127,
							userName: '用户',
							currentDate: '2021年12月28日'
						},
						{
							imgUrl: 'https://img2.baidu.com/it/u=3979879748,2489102797&fm=253&fmt=auto&app=120&f=JPEG?w=1422&h=800',
							imgName: '美丽图片',
							viewData: 248,
							likeData: 127,
							userName: '用户',
							currentDate: '2021年12月28日'
						}
					]
				}
			}
		},
		methods: {

		}
	}
</script>

<style lang="scss">
	.one-body {
		width: 100%;
		margin-top: 30px;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		align-items: center;

		.card-item {
			width: 285px;
			height: 320px;
			margin-top: 20px;

			img {
				width: 285px;
				height: 190px;
			}

			.el-card__body {
				.line {
					width: 100%;
					height: 1px;
					opacity: 0.3;
					background-color: #999;
				}
			}

			.card-data {
				display: flex;
				justify-content: left;
				align-items: center;
				margin: 8px 0 5px 0;

				.show {
					margin-right: 10px;
				}
			}
		}

		.time {
			font-size: 15px;
			font-family: "黑体";
			position: relative;
			left: 90px;
			color: #999;
		}

		.bottom {
			margin-top: 15px;
			line-height: 15px;
			width: 100%;
			display: flex;
			align-items: center;

			.user-body {
				display: flex;
				align-items: center;

				img {
					width: 24px;
					height: 24px;
					border-radius: 50%;
				}

				.user-na {
					font-family: "黑体";
					color: #999;
					font-size: 18px;
					margin-left: 10px;
				}
			}
		}

		.image {
			width: 100%;
			display: block;
		}

		.clearfix:before,
		.clearfix:after {
			display: table;
			content: "";
		}

		.clearfix:after {
			clear: both
		}
	}
</style>
