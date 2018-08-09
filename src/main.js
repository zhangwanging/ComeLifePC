// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue/dist/vue'
import App from '$src/App.vue'
import router from '$src/router/index'
import store from '$src/store/index'
import '$src/assets/css/common.css'
import axios from 'axios'
import global from '$src/global'
import util from '$src/utils/util'


Vue.prototype.request = axios.create({
    baseURL: 'https://www.zhangw.xyz',
    //baseURL:'http://192.168.1.101:3000',
    timeout: 5000,
    headers: {}
});
Vue.prototype.global=global
Vue.prototype.util=util

Vue.config.productionTip = false


new Vue({
    el: '#app',
    router,
    store,
    components: {App},
    template: '<App/>'
})
