import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false


// 注册总线
// Vue.prototype.$bus = new Vue()

// 注册请求环境
import * as api from "./api/api"
Vue.prototype.$api = api;

// 引入仓库环境
import store from './store/store'

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
