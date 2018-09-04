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
import Session from '$src/components/page/session/Session.vue'
import HomePage from '$src/components/page/homepage/HomePage.vue'
import EssayList from '$src/components/page/homepage/EssayList.vue'
import Comment from '$src/components/page/homepage/Comment.vue'
import Dynamic from '$src/components/page/homepage/Dynamic.vue'
import Hot from '$src/components/page/homepage/Hot.vue'
import Setting from '$src/components/page/setting/Setting.vue'
import BasicSetting from '$src/components/page/setting/BasicSetting.vue'
import WeiboCertify from '$src/components/page/setting/WeiboCertify.vue'
import Blacklist from '$src/components/page/setting/Blacklist.vue'
import AppreciationSetting from '$src/components/page/setting/AppreciationSetting.vue'
import AccountManagement from '$src/components/page/setting/AccountManagement.vue'
import PersonalData from '$src/components/page/setting/PersonalData.vue'

Vue.use(Router)

export default new Router({
    routes: [
        //测试
        {
            name: 'test',
            path: '/test',
            components:{
                test:HomePage
            }
        },
        //重定向
        {
            path: '/',
            redirect: {
                name:'index'
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
                //我的主页
                {
                    name:'homepage',
                    path:'homepage',
                    components:{
                        'homepage':HomePage
                    },
                    children:[
                        {
                            name:'essaylist',
                            path:'essaylist',
                            components:{
                                'essaylist':EssayList
                            }
                        },
                        {
                            name:'dynamic',
                            path:'dynamic',
                            components:{
                                'dynamic':Dynamic
                            }
                        },
                        {
                            name:'hot',
                            path:'hot',
                            components:{
                                'hot':EssayList
                            }
                        },
                        {
                            name:'comment',
                            path:'comment',
                            components:{
                                'comment':EssayList
                            }
                        }
                    ]
                },
                {
                    name:'setting',
                    path:'setting',
                    components:{
                        'setting':Setting
                    },
                    children:[
                        {
                            name:'basic-setting',
                            path:'basic-setting',
                            components:{
                                'setting-content':BasicSetting
                            }
                        },
                        {
                            name:'weibo-certify',
                            path:'weibo-certify',
                            components:{
                                'setting-content':WeiboCertify
                            }
                        },
                        {
                            name:'blacklist',
                            path:'blacklist',
                            components:{
                                'setting-content':Blacklist
                            }
                        },
                        {
                            name:'appreciation-setting',
                            path:'appreciation-setting',
                            components:{
                                'setting-content':AppreciationSetting
                            }
                        },
                        {
                            name:'account-management',
                            path:'basic-setting',
                            components:{
                                'setting-content':AccountManagement
                            }
                        },
                        {
                            name:'personal-data',
                            path:'personal-data',
                            components:{
                                'setting-content':PersonalData
                            }
                        }
                    ]
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
        },
        {
            name:'session',
            path:'/session',
            components:{
                'test':Session
            },
            children:[
                {
                    name:'register',
                    path:'register',
                    components:{
                        'register':Register
                    }
                },
                {
                    name:'login',
                    path:'login',
                    components:{
                        'login':Login
                    }
                }
            ]
        }
    ]
})
