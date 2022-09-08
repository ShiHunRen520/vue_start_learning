<template>
	<div class="tab">
		<div class="tab-title">阿白的白日梦</div>
		<div class="nav">
			<router-link to="/">首页</router-link>
			<router-link to="/explore">探索VR</router-link>
			<router-link to="/tag">标签</router-link>
			<router-link to="/photographer">摄影师</router-link>
			<router-link to="/photoshow">寻迹</router-link>
			<el-badge value="Hot" class="item">
				<router-link to="/game">阿白的白日梦摄影大赛</router-link>
			</el-badge>
		</div>
		<div class="tab-search">
			<el-input
			    placeholder="请输入内容"
					clearable
			    v-model="inputText">
			    <i slot="prefix" class="el-input__icon el-icon-search"></i>
			  </el-input>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Tab',
		data() {
			return {
				inputText: ''
			}
		},
		props: {
			msg: String
		}
	}
</script>

<style lang="scss">
	.tab {
		width: 100%;
		height: 60px;
		background-color: #000000;
		display: flex;
		justify-content: space-between;
		align-items: center;
		.tab-title{
			color: #FFF0FF;
			font-family: 微软雅黑;
			font-size: 20px;
			font-weight: 500;
			margin-left: 50px;
		}
		.nav{
			a {
				font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;;
				font-size: 14px;
				color: #999999;
				text-decoration: none;
				margin-left: 20px;
				&.router-link-exact-active {
					color: #ffffff;
				}
			}
			.el-badge__content{
				border: 0px solid transparent;
				border-radius: 2px;
			}
		}
		.tab-search{
			width: 250px;
			height: 45px;
			margin-right: 40px;
			.el-input .el-input__inner{
				height: 32px;
				color: #FFF0FF;
				border: none;
				background-color: transparent;
				margin-top: 5px;
			}
			.el-input__inner:hover{
				border: 1px dashed #888888;
			}
			input:focus{
				outline: 1px dashed #18eecb;
			}
			// border: 1px solid red;
		}
	}
</style>
