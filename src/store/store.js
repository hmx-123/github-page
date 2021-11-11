// 将Vuex注册为Vue的插件
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

// 创建仓库 并导出
export default new Vuex.Store({
    // 配置项
    state,
    getters,
    mutations,
    actions
})