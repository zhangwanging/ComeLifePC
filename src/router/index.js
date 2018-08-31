import Vue from 'vue/dist/vue'
import Router from 'vue-router'
import Home from '$src/components/page/home/Home.vue'
import Index from '$src/components/page/Index.vue'
import Register from '$src/components/page/register/Register.vue'
import Login from '$src/components/page/login/Login.vue'
import WriteEssay from '$src/components/page/writeessay/WriteEssay.vue'
import WsButton from '$src/components/common/button/button.vue'
import Alert from '$src/components/common/alert/alert.vue'
import Carousel from '$src/components/common/carousel/carousel.vue'
import ErrorMsg from '$src/components/common/errormsg/ErrorMsg.vue'

Vue.use(Router)

export default new Router({
    routes: [
        //测试
        {
            name: 'test',
            path: '/test',
            components:{
                test:ErrorMsg
            }
        },
        //重定向
        {
            path: '/',
            redirect: {
                name:'home'
            }
        },
        //默认排版
        {
            name: 'index',
            path: '/index',
            components: {
                index: Index
            },
            //在默认排版的main中
            children: [
                {
                    name: 'home',
                    path: 'home',
                    components: {
                        'main': Home
                    }
                },
                {
                    name: 'register',
                    path: 'register',
                    components: {
                        'main': Register
                    }
                },
                {
                    name: 'login',
                    path: 'login',
                    components: {
                        'main': Login
                    }
                }

            ]
        },
        //文章编辑排版
        {
            name: 'writeessay',
            path: '/writeessay',
            components: {
                'writeessay': WriteEssay
            }
        }
    ]
})
