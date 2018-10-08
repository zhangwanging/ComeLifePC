// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue/dist/vue'
import '$src/assets/css/common.scss'
import util from '$src/utils/util'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import request from '$src/api/request'
import '$src/mock/mock'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import '$src/assets/css/icon.scss'
import '$src/assets/css/response.scss'
import 'element-ui/lib/theme-chalk/display.css'
import storage from '$src/store/storage'
import '$src/directive/directive.js'

Vue.use(ElementUI);
Vue.use(mavonEditor)


Vue.prototype.request = request
Vue.prototype.util = util
Vue.prototype.storage=storage

Vue.config.productionTip = false


export default Vue
