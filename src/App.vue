<template>
  <div id="app">
    <Tab />
    <router-view/>
  </div>
</template>

<script>
	import Tab from './components/Tab.vue'
	export default {
		components: {
			Tab
		}
	}
</script>

<style lang="scss">
#app {
  display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
}
</style>
