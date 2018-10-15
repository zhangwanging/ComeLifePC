
import Vue from 'vue/dist/vue'
import App from '$src/App.vue'
import router from '$src/router/index'
import store from '$src/store/index'
import '$src/style/common.scss'
import util from '$src/utils/util'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '$src/mock/mock'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import '$src/style/icon.scss'
import '$src/style/response.scss'
import 'element-ui/lib/theme-chalk/display.css'
import storage from '$src/store/storage'
import '$src/directive/directive.js'
import { Popover } from 'element-ui'


Vue.use(Popover);

Vue.use(ElementUI);
Vue.use(mavonEditor)

Vue.prototype.util = util
Vue.prototype.storage=storage

Vue.config.productionTip = false


const app=new Vue({
    el: '#app',
    router,
    store,
    components: {App},
    template: '<App/>',
    data:{
    },
    methods:{

    },
    watch:{

    }
})

console.dir(app)