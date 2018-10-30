import Vue from 'vue/dist/vue'
import Router from 'vue-router'
import store from '$src/store/index'

const WsFeedback = () => import('$src/components/page/feedback/ws-feedback.vue')
const WsIndex = () => import('$src/components/page/index/ws-index.vue')
const WsDiscover = () => import ('$src/components/page/discover/ws-discover.vue')
const WsCare = () => import('$src/components/page/care/ws-care.vue')
const WsMessage = () => import('$src/components/page/message/ws-message.vue')
const WsMessageAdmire = () => import('$src/components/page/message/ws-message-admire.vue')
const WsMessageAttention = () => import('$src/components/page/message/ws-message-attention.vue')
const WsMessageComment = () => import('$src/components/page/message/ws-message-comment.vue')
const WsMessageContribution = () => import('$src/components/page/message/ws-message-contribution.vue')
const WsMessageFavour = () => import('$src/components/page/message/ws-message-favour.vue')
const WsMessageInformation = () => import('$src/components/page/message/ws-message-information.vue')
const WsMessageWarn = () => import('$src/components/page/message/ws-message-warn.vue')
const WsSession = () => import('$src/components/page/session/ws-session.vue')
const WsHomepage = () => import('$src/components/page/homepage/ws-homepage.vue')
const WsHomepageTabsEssay = () => import('$src/components/page/homepage/ws-homepage-tabs-essay.vue')
const WsHomepageTabsFans = () => import('$src/components/page/homepage/ws-homepage-tabs-fans.vue')
const WsSetting = () => import('$src/components/page/setting/ws-setting.vue')
const WsSettingAccountManage = () => import('$src/components/page/setting/ws-setting-account-manage.vue')
const WsSettingAppreciation = () => import('$src/components/page/setting/ws-setting-appreciation.vue')
const WsSettingBasic = () => import('$src/components/page/setting/ws-setting-basic.vue')
const WsSettingBlacklist = () => import('$src/components/page/setting/ws-setting-blacklist.vue')
const WsSettingPersonaldata = () => import('$src/components/page/setting/ws-setting-personaldata.vue')
const WsSettingWeiboCertify = () => import('$src/components/page/setting/ws-setting-weibo-certify.vue')
const WsCommonEssayDetail = () => import('$src/components/common/essay/ws-common-essay-detail.vue')
const WsWriteEssay = () => import('$src/components/page/writeessay/ws-writeessay.vue')
const WsHotDay7 = () => import('$src/components/page/hot/ws-hot-day7.vue')
const WsHotDay30 = () => import('$src/components/page/hot/ws-hot-day30.vue')
const WsSerial = () => import('$src/components/page/serial/ws-serial.vue')
const WsCopyright = () => import('$src/components/page/copyright/ws-copyright.vue')
const WsIndexMainLarge = () => import('$src/components/page/index/ws-index-main-large.vue')
const WsIndexMainSmall = () => import('$src/components/page/index/ws-index-main-small.vue')
const WsCommonRecommendAuthorDetail = () => import('$src/components/common/recommend-author/ws-common-recommend-author-detail.vue')
const WsSubject = () => import('$src/components/page/subject/ws-subject.vue')
const WsSubjectMore = () => import('$src/components/page/subject/ws-subject-more.vue')
const WsCollection = () => import('$src/components/page/collection/ws-collection.vue')
const WsIndexMainMini = () => import('$src/components/page/index/ws-index-main-mini.vue')
const WsShop = () => import('$src/components/page/shop/ws-shop.vue')
const WsWallet = () => import('$src/components/page/wallet/ws-wallet.vue')
const WsLike = () => import('$src/components/page/like/ws-like.vue')
const WsHomepageTabsLike = () => import('$src/components/page/homepage/ws-homepage-tabs-like.vue')

Vue.use(Router)

const router = new Router({

    routes: [
        //重定向
        {
            path: '/',
            redirect: {
                name: 'discover'
            }
        },
        //index排版,含两种布局
        {
            name: 'index',
            path: '/index',
            components: {
                index: WsIndex
            },
            children: [
                {
                    name: 'mainsmall',
                    path: 'mainsmall',
                    components: {
                        default: WsIndexMainSmall
                    },
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
                            meta: {requiresAuth: true},
                            name: 'homepage',
                            path: 'homepage',
                            components: {
                                default: WsHomepage
                            },
                            children: [
                                {
                                    name: 'tabsessay',
                                    path: 'tabsessay',
                                    components: {
                                        'usertabs': WsHomepageTabsEssay
                                    }
                                },
                                {
                                    name: 'tabsfans',
                                    path: 'tabsfans',
                                    components: {
                                        'usertabs': WsHomepageTabsFans
                                    }
                                },
                                {
                                    name: 'tabslike',
                                    path: 'tabslike',
                                    components: {
                                        'usertabs': WsHomepageTabsLike
                                    }
                                }
                            ]
                        },
                        //设置
                        {
                            meta: {requiresAuth: true},
                            name: 'setting',
                            path: 'setting',
                            components: {
                                default: WsSetting
                            },
                            children: [
                                {
                                    name: 'basic',
                                    path: 'basic',
                                    components: {
                                        'setting-content': WsSettingBasic
                                    }
                                },
                                {
                                    name: 'weibo-certify',
                                    path: 'weibo-certify',
                                    components: {
                                        'setting-content': WsSettingWeiboCertify
                                    }
                                },
                                {
                                    name: 'blacklist',
                                    path: 'blacklist',
                                    components: {
                                        'setting-content': WsSettingBlacklist
                                    }
                                },
                                {
                                    name: 'appreciation',
                                    path: 'appreciation',
                                    components: {
                                        'setting-content': WsSettingAppreciation
                                    }
                                },
                                {
                                    name: 'account-manage',
                                    path: 'account-manage',
                                    components: {
                                        'setting-content': WsSettingAccountManage
                                    }
                                },
                                {
                                    name: 'personaldata',
                                    path: 'personaldata',
                                    components: {
                                        'setting-content': WsSettingPersonaldata
                                    }
                                }
                            ]
                        },
                        //消息
                        {
                            meta: {requiresAuth: true},
                            name: 'message',
                            path: 'message',
                            components: {
                                default: WsMessage
                            },
                            props: {
                                default: true
                            },
                            children: [
                                {
                                    name: 'admire',
                                    path: 'admire',
                                    components: {
                                        'message': WsMessageAdmire
                                    }
                                },
                                {
                                    name: 'attention',
                                    path: 'attention',
                                    components: {
                                        'message': WsMessageAttention
                                    }
                                },
                                {
                                    name: 'comment',
                                    path: 'comment',
                                    components: {
                                        'message': WsMessageComment
                                    }
                                },
                                {
                                    name: 'contribution',
                                    path: 'contribution',
                                    components: {
                                        'message': WsMessageContribution
                                    }
                                },
                                {
                                    name: 'information',
                                    path: 'information',
                                    components: {
                                        'message': WsMessageInformation
                                    },
                                    props: {
                                        'message': true
                                    }
                                },
                                {
                                    name: 'favour',
                                    path: 'favour',
                                    components: {
                                        'message': WsMessageFavour
                                    }
                                },
                                {
                                    name: 'warn',
                                    path: 'warn',
                                    components: {
                                        'message': WsMessageWarn
                                    }
                                }
                            ]
                        },
                        //关注
                        {
                            meta: {requiresAuth: true},
                            name: 'care',
                            path: 'care',
                            components: {
                                default: WsCare
                            }
                        },
                        //帮助与反馈
                        {
                            meta: {requiresAuth: true},
                            name: 'feedback',
                            path: 'feedback',
                            components: {
                                default: WsFeedback
                            }
                        },
                        //热门
                        {
                            meta: {requiresAuth: true},
                            name: 'hotday7',
                            path: 'hotday7',
                            components: {
                                default: WsHotDay7
                            }
                        },
                        {
                            meta: {requiresAuth: true},
                            name: 'hotday30',
                            path: 'hotday30',
                            components: {
                                default: WsHotDay30
                            }
                        },
                        {
                            meta: {requiresAuth: true},
                            name: 'copyright',
                            path: 'copyright',
                            components: {
                                default: WsCopyright
                            }
                        },
                        //推荐作者详情
                        {
                            name: 'recommend-author-detail',
                            path: 'recommend-author-detail',
                            components: {
                                default: WsCommonRecommendAuthorDetail
                            }
                        },
                        {
                            name: 'subject',
                            path: 'subject',
                            components: {
                                default: WsSubject
                            }
                        },
                        {
                            name: 'subject-more',
                            path: 'subject-more',
                            components: {
                                default: WsSubjectMore
                            }
                        }
                    ]
                },
                {
                    name: 'mainlarge',
                    path: 'mainlarge',
                    components: {
                        default: WsIndexMainLarge
                    }
                },
                {
                    name: 'mainmini',
                    path: 'mainmini',
                    components: {
                        default: WsIndexMainMini
                    },
                    children: [
                        //收藏的文章
                        {
                            meta: {requiresAuth: true},
                            name: 'collection',
                            path: 'collection',
                            components: {
                                default: WsCollection
                            }
                        },
                        //文章详情
                        {
                            name: 'essaydetail',
                            path: 'essaydetail',
                            components: {
                                default: WsCommonEssayDetail
                            }
                        },
                        //已购内容
                        {
                            meta: {requiresAuth: true},
                            name: 'shop',
                            path: 'shop',
                            components: {
                                default: WsShop
                            }
                        },
                        //我的钱包
                        {
                            meta: {requiresAuth: true},
                            name: 'wallet',
                            path: 'wallet',
                            components: {
                                default: WsWallet
                            }
                        },
                        //喜欢的文章
                        {
                            meta: {requiresAuth: true},
                            name: 'like',
                            path: 'like',
                            components: {
                                default: WsLike
                            }
                        }
                    ]
                }
            ]
        },
        //文章编辑排版
        {
            meta: {requiresAuth: true},
            name: 'writeessay',
            path: '/writeessay',
            components: {
                'writeessay': WsWriteEssay
            }
        },
        {
            name: 'session',
            path: '/session/:type',
            components: {
                'session': WsSession
            }
        }, {
            name: 'serial',
            path: '/serial',
            components: {
                'serial': WsSerial
            }
        }
    ],
    scrollBehavior(to, from, savedPosition) {
        /*        console.log('to:'+JSON.stringify(to.hash))
                if (to.hash) {
                    return {
                        selector: to.hash
                    }
                }*/
    }
})

router.beforeEach((to, from, next) => {
    console.log('beforeEach')
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!store.getters.loginStatus) {
            next({
                name: 'session'
            })
        } else {
            next()
        }
    } else {
        next() // 确保一定要调用 next()
    }
})

router.afterEach((to, from) => {

})

export default router