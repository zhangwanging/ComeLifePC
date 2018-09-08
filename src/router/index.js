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
import NewComment from '$src/components/page/homepage/NewComment.vue'
import Dynamic from '$src/components/page/homepage/Dynamic.vue'
import Hot from '$src/components/page/homepage/Hot.vue'
import Setting from '$src/components/page/setting/Setting.vue'
import BasicSetting from '$src/components/page/setting/BasicSetting.vue'
import WeiboCertify from '$src/components/page/setting/WeiboCertify.vue'
import Blacklist from '$src/components/page/setting/Blacklist.vue'
import AppreciationSetting from '$src/components/page/setting/AppreciationSetting.vue'
import AccountManagement from '$src/components/page/setting/AccountManagement.vue'
import PersonalData from '$src/components/page/setting/PersonalData.vue'
//消息
import Message from '$src/components/page/message/Message.vue'
import Comment from '$src/components/page/message/Comment.vue'
import Contribution from '$src/components/page/message/Contribution.vue'
import Information from '$src/components/page/message/Information.vue'
import LoveAndFavour from '$src/components/page/message/LoveAndFavour.vue'
import Warn from '$src/components/page/message/Warn.vue'
import Attention from '$src/components/page/message/Attention.vue'
import Admire from '$src/components/page/message/Admire.vue'
import Care from '$src/components/page/care/Care.vue'
import Feedback from '$src/components/page/feedback/Feedback.vue'
import Essay from '$src/components/page/writeessay/Essay.vue'
import EssayList from '$src/components/business-common/EssayList.vue'

Vue.use(Router)

export default new Router({
    routes: [
        //测试
        {
            name: 'test',
            path: '/test',
            components:{
                test:EssayList
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
                            name:'new-comment',
                            path:'new-comment',
                            components:{
                                'new-comment':EssayList
                            }
                        }
                    ]
                },
                //设置
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
                },
                //消息
                {
                    name:'message',
                    path:'message',
                    components:{
                        'message':Message
                    },
                    children:[
                        {
                            name:'admire',
                            path:'admire',
                            components:{
                                'message':Admire
                            }
                        },
                        {
                            name:'attention',
                            path:'attention',
                            components:{
                                'message':Attention
                            }
                        },
                        {
                            name:'comment',
                            path:'comment',
                            components:{
                                'message':Comment
                            }
                        },
                        {
                            name:'contribution',
                            path:'contribution',
                            components:{
                                'message':Contribution
                            }
                        },
                        {
                            name:'information',
                            path:'information',
                            components:{
                                'message':Information
                            }
                        },
                        {
                            name:'love-and-favour',
                            path:'love-and-favour',
                            components:{
                                'message':LoveAndFavour
                            }
                        },
                        {
                            name:'warn',
                            path:'warn',
                            components:{
                                'message':Warn
                            }
                        }
                    ]
                },
                {
                    name:'care',
                    path:'care',
                    components:{
                        'care':Care
                    }
                },
                //帮助与反馈
                {
                    name:'feedback',
                    path:'feedback',
                    components:{
                        'feedback':Feedback
                    }
                },
                //文章详情
                {
                    name:'essay',
                    path:'essay',
                    components:{
                        'essay':Essay
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
