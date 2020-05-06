import Vue from 'vue'
import App from './App'
import MpvueRouterPatch from 'mpvue-router-patch'
import store from './store/index'
Vue.use(MpvueRouterPatch)
Vue.config.productionTip = false
Vue.prototype.$store = store// 挂在到vue原型上

App.mpType = 'app'

const app = new Vue({
    ...App,
    store
})
app.$mount()
