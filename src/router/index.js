import Vue from 'vue/dist/vue'
import Router from 'vue-router'

import ErrorMsg from '$src/components/common/errormsg/ErrorMsg.vue'

import WsFeedback from '$src/components/page/feedback/ws-feedback.vue'
import WsIndex from '$src/components/page/index/ws-index.vue'
import WsDiscover from '$src/components/page/discover/ws-discover.vue'
import WsCare from '$src/components/page/care/ws-care.vue'
import WsMessage from '$src/components/page/message/ws-message.vue'
import WsMessageAdmire from '$src/components/page/message/ws-message-admire.vue'
import WsMessageAttention from '$src/components/page/message/ws-message-attention.vue'
import WsMessageComment from '$src/components/page/message/ws-message-comment.vue'
import WsMessageContribution from '$src/components/page/message/ws-message-contribution.vue'
import WsMessageFavour from '$src/components/page/message/ws-message-favour.vue'
import WsMessageInformation from '$src/components/page/message/ws-message-information.vue'
import WsMessageWarn from '$src/components/page/message/ws-message-warn.vue'
import WsSession from '$src/components/page/session/ws-session.vue'
import WsHomepage from '$src/components/page/homepage/ws-homepage.vue'
import WsHomepageTabsEssay from '$src/components/page/homepage/ws-homepage-tabs-essay.vue'
import WsHomepageTabsFans from '$src/components/page/homepage/ws-homepage-tabs-fans.vue'
import WsSetting from '$src/components/page/setting/ws-setting.vue'
import WsSettingAccountManage from '$src/components/page/setting/ws-setting-account-manage.vue'
import WsSettingAppreciation from '$src/components/page/setting/ws-setting-appreciation.vue'
import WsSettingBasic from '$src/components/page/setting/ws-setting-basic.vue'
import WsSettingBlacklist from '$src/components/page/setting/ws-setting-blacklist.vue'
import WsSettingPersonaldata from '$src/components/page/setting/ws-setting-personaldata.vue'
import WsSettingWeiboCertify from '$src/components/page/setting/ws-setting-weibo-certify.vue'
import WsCommonEssayDetail from '$src/components/common/essay/ws-common-essay-detail.vue'
import WsWriteEssay from '$src/components/page/writeessay/ws-writeessay.vue'

Vue.use(Router)

export default new Router({
    routes: [
        //重定向
        {
            path: '/',
            redirect: {
                name:'discover'
            }
        },
        //默认排版
        {
            name: 'index',
            path: '/index',
            components: {
                index: WsIndex
            },
            //在默认排版的main中
            children: [
                {
                    name: 'discover',
                    path: 'discover',
                    components: {
                       default: WsDiscover
                    }
                },
                //我的主页
                {
                    name:'homepage',
                    path:'homepage',
                    components:{
                        default:WsHomepage
                    },
                    children:[
                        {
                            name:'tabsessay',
                            path:'tabsessay',
                            components:{
                                'usertabs':WsHomepageTabsEssay
                            }
                        },
                        {
                            name:'tabsfans',
                            path:'tabsfans',
                            components:{
                                'usertabs':WsHomepageTabsFans
                            }
                        }
                    ]
                },
                //设置
                {
                    name:'setting',
                    path:'setting',
                    components:{
                        default:WsSetting
                    },
                    children:[
                        {
                            name:'basic',
                            path:'basic',
                            components:{
                                'setting-content':WsSettingBasic
                            }
                        },
                        {
                            name:'weibo-certify',
                            path:'weibo-certify',
                            components:{
                                'setting-content':WsSettingWeiboCertify
                            }
                        },
                        {
                            name:'blacklist',
                            path:'blacklist',
                            components:{
                                'setting-content':WsSettingBlacklist
                            }
                        },
                        {
                            name:'appreciation',
                            path:'appreciation',
                            components:{
                                'setting-content':WsSettingAppreciation
                            }
                        },
                        {
                            name:'account-manage',
                            path:'account-manage',
                            components:{
                                'setting-content':WsSettingAccountManage
                            }
                        },
                        {
                            name:'personaldata',
                            path:'personaldata',
                            components:{
                                'setting-content':WsSettingPersonaldata
                            }
                        }
                    ]
                },
                //消息
                {
                    name:'message',
                    path:'message',
                    components:{
                        default:WsMessage
                    },
                    children:[
                        {
                            name:'admire',
                            path:'admire',
                            components:{
                                'message':WsMessageAdmire
                            }
                        },
                        {
                            name:'attention',
                            path:'attention',
                            components:{
                                'message':WsMessageAttention
                            }
                        },
                        {
                            name:'comment',
                            path:'comment',
                            components:{
                                'message':WsMessageComment
                            }
                        },
                        {
                            name:'contribution',
                            path:'contribution',
                            components:{
                                'message':WsMessageContribution
                            }
                        },
                        {
                            name:'information',
                            path:'information',
                            components:{
                                'message':WsMessageInformation
                            }
                        },
                        {
                            name:'favour',
                            path:'favour',
                            components:{
                                'message':WsMessageFavour
                            }
                        },
                        {
                            name:'warn',
                            path:'warn',
                            components:{
                                'message':WsMessageWarn
                            }
                        }
                    ]
                },
                //关注
                {
                    name:'care',
                    path:'care',
                    components:{
                        default:WsCare
                    }
                },
                //帮助与反馈
                {
                    name:'feedback',
                    path:'feedback',
                    components:{
                        default:WsFeedback
                    }
                },
                //文章详情
                {
                    name:'essaydetail',
                    path:'essaydetail',
                    components:{
                        default:WsCommonEssayDetail
                    }
                }
            ]
        },
        //文章编辑排版
        {
            name: 'writeessay',
            path: '/writeessay',
            components: {
                'writeessay': WsWriteEssay
            }
        },
        {
            name:'session',
            path:'/session',
            components:{
                'session':WsSession
            }
        }
    ]
})
