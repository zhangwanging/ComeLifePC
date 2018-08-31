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
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import request from '$src/init/request'

Vue.use(ElementUI);


Vue.prototype.request=request
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
