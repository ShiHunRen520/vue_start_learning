import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/list',
    name: 'list',
    component: () => import('../views/List.vue')
  },
	{
		// 探索页面
		path: '/explore',
		name: 'explore',
		component: () => import('../views/Explore.vue')
	},
	{
		// 标签页面
		path: '/tag',
		name: 'tag',
		component: () => import('../views/Tag.vue')
	},
	{
		// 摄影师页面
		path: '/photographer',
		name: 'photographer',
		component: () => import('../views/Photographer.vue')
	},
	{
		// 照片显示页面
		path: '/photoshow',
		name: 'photoshow',
		component: () => import('../views/PhotoShow.vue')
	},
	{
		// 摄影比赛页面
		path: '/game',
		name: 'game',
		component: () => import('../views/Game.vue')
	}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
