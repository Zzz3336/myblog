import Vue from 'vue'
import App from './App'
import router from './router'
// 引入element-ui
import Elementui from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(Elementui)
// 引入axios
import axios from 'axios'
Vue.prototype.$axios = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
