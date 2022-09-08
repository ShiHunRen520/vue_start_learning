<template>
	<div class="tag-body">
		<carousel-3d ref="slideCrousel" :autoplay="autoplay" :controls-height="60" :perspective="10"
			:autoplayTimeout="3000" :display="5" :width="400" :height="320" :space="500" :animationSpeed="aniSpeed"
			@after-slide-change="curI">
			<slide class="carousel_box" v-for="(item, index) in earthData" :key="index" :index="index">
				<div class="carousel_flashlight" :style="{background: `url(${item.url})`}" @click="getIndex(index)">
					<p>{{item.stext}}</p>
					<h3>{{item.sdescription}}</h3>
				</div>
			</slide>
		</carousel-3d>
		<div class="tag-btn">
			<el-tag v-for="(item, index) in earthData" :key="index" @click="getIndex(index)"
				:class="index === curIndex ? 'tag-active' : '' ">{{item.stext}}</el-tag>
		</div>
	</div>
</template>

<script>
	import {
		Carousel3d,
		Slide
	} from 'vue-carousel-3d'
	export default {
		name: 'Tag3D',
		components: {
			Carousel3d,
			Slide
		},
		data() {
			return {
				autoplay: true,
				curIndex: 0,
				aniSpeed: 1000,
				earthData: [{
						stext: "花草",
						sdescription: "有灵的花草带来生命的气息",
						url: 'https://img1.baidu.com/it/u=1342805063,1872449865&fm=253&fmt=auto&app=138&f=JPEG?w=658&h=370'
					},
					{
						stext: "极限",
						sdescription: "极限的挑战也是对生活的刺激",
						url: 'https://img2.baidu.com/it/u=3758388462,4107162773&fm=253&fmt=auto&app=138&f=JPEG?w=499&h=355'
					},
					{
						stext: "天空",
						sdescription: "绚丽的天空总能放开心扉",
						url: 'https://img0.baidu.com/it/u=3325784342,2976910751&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=281'
					},
					{
						stext: "海底",
						sdescription: "未知的世界才是最有吸引力的东西",
						url: 'https://img0.baidu.com/it/u=3279748108,783649809&fm=253&fmt=auto&app=138&f=JPEG?w=970&h=500'
					},
					{
						stext: "航天",
						sdescription: "宇宙终将是我们的探索的去处",
						url: 'https://img2.baidu.com/it/u=2265475225,1649094113&fm=253&fmt=auto&app=120&f=JPEG?w=533&h=255'
					},
				]
			}
		},
		methods: {
			curI(index) {
				console.log(index)
				this.curIndex = index
			},
			getIndex(index) {
				this.$refs.slideCrousel.goSlide(index)
				console.log('你点击了我' + index)
				this.curIndex = index
				this.earthData.map((it, i) => {
					if (index === i) {
						// this.disNum = 0
						// this.$router.push('/photographer')
						const h = this.$createElement;
						this.$msgbox({
							title: this.earthData[index].stext,
							message: h('p', null, [
								h('span', null, `内容可以是内容可以是内容可以是内容可以是内容可以是内容可以
								是内容可以是内容可以是内容可以是内容可以是内容可以是内容可以是内容可以是内容可
								以是内容可以是内容可以是内容可以是内容可以是内容可以是内容可以是内容可以是内容
								可以是内容可以是内容可以是内容可以是内容可以是内容可以是内容可以是内容可以是内
								内容可以是内容可以是内容可以是内容可以是容可以是内容可以是内容可以是 `),
								h('i', {
									style: 'color: teal'
								}, 'VNode')
							]),
							showCancelButton: true,
							cancelButtonText: '取消',
							confirmButtonText: '穿越 ?',
							beforeClose: (action, instance, done) => {
								if (action === 'confirm') {
									instance.confirmButtonLoading = true;
									instance.confirmButtonText = '主题世界行进中...';
									setTimeout(() => {
										done();
										setTimeout(() => {
											instance.confirmButtonLoading = false;
										}, 300);
									}, 100000);
								} else {
									done();
								}
							}
						}).then(action => {
							this.$message({
								type: 'info',
								message: 'action: ' + action
							});
						});
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	.el-message-box {
		display: inline-block;
		width: 1200px;
		padding-bottom: 10px;
		vertical-align: middle;
		background-color: transparent;
		border-radius: 4px;
		border: 1px dashed #00FFB7;
		font-size: 18px;
		box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
		text-align: left;
		overflow: hidden;
		-webkit-backface-visibility: hidden;
		backface-visibility: hidden;
	}
	.el-message-box__message{
		p{
			font-family: "黑体";
			font-size: 20px;
			color: #FFF000;
		}
	}
	.el-message-box__title {
		font-size: 20px;
		color: #A6E22E;
	}

	.el-message-box__close .el-icon-close {
		color: #c197fe;
		font-size: 25px;
	}

	.el-button--primary {
		// display: none;
		color: #C07ABE;
		background: transparent;
		border: 1px dashed #cfc;
	}
	.el-button.is-loading::before{
		background-color: transparent;
	}
	.el-button--default {
		background: transparent;
		border: 1px dashed #cfc;
	}

	.el-button:hover {
		color: #95ff3e;
		border-color: #ff5c33;
		background-color: transparent;
	}

	.tag-body {
		width: 100%;
		height: 100%;
		margin-top: 20px;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
		background-color: #171818;
		background-image: linear-gradient(0deg, #171818 0%, #04343b 100%);

		.tag-btn {
			// position: ;
			width: 80%;
			height: 100px;
			display: flex;
			// border: 2px solid red;
			justify-content: space-around;
			align-items: center;

			.el-tag {
				background-color: transparent;
				display: inline-block;
				width: 130px;
				height: 45px;
				text-align: center;
				line-height: 45px;
				padding: 0 10px;
				letter-spacing: 5px;
				font-size: 20px;
				color: #54ff9b;
				border: 1px dashed #ffc1e2;
				border-radius: 4px;
				box-sizing: border-box;
				white-space: nowrap;
			}

			.el-tag:hover {
				border: 1px dashed #55aa7f;
				color: #5e73ff;
			}

			.tag-active {
				border: 1px dashed #55aa7f;
				color: #5e73ff;
			}
		}
	}

	.c_wrap {
		width: 100%;
		height: 370px;

		.c_title {
			width: 252px;
			height: 53px;
			line-height: 53px;
			text-indent: 37px;
			background: linear-gradient(270deg, rgba(45, 110, 251, 0) 0%, #2d6efb 100%);
			color: #fff;
			margin: 0 auto;
			font-size: 20px;
		}
	}

	.carousel_box {
		width: 100%;
		display: flex;

		.carousel_flashlight {
			flex: 1;
			height: 334px;
			border-radius: 8px;
			// background: url("../../assets/qj1.jpg") no-repeat center bottom;
			background-repeat: no-repeat;
			background-size: 100% 100%;
			text-align: center;

			p {
				font-size: 35px;
				font-weight: 500;
				text-align: center;
				color: #67ff39;
				line-height: 28px;
			}

			h3 {
				font-size: 25px;
				font-family: "digital-7";
				text-align: center;
				color: #ffffff;
				line-height: 150px;
			}
		}
	}

	// 覆盖轮播样式
	.carousel-3d-slide {
		background: none;
		border: 0px;
	}
</style>
