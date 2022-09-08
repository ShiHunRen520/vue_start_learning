import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import AFRAME from 'aframe'
import axios from 'axios'


import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.prototype.$http = axios
Vue.use(ElementUI);
Vue.use(AFRAME)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
