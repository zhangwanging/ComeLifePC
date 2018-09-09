<template>
    <el-row type="flex" align="middle" class="container">
        <el-col :xs="2" :sm="2" :lg="5" :xl="5" class="title">
            <div class="title-wrapper" @click="turnToHomePage">
                <h1 class="font-color-general font-size-largetitle">荧幕星光</h1>
            </div>
        </el-col>
        <!--左导航-->
        <el-col :xs="15" :sm="16" :lg="12" :xl="13">
            <el-row type="flex" align="middle">
                <Navbar :menu="leftMenus" @select="handleSelect" class="container-nav-left"></Navbar>
                <el-col class="search" :span="8">
                    <el-input type="search" placeholder="搜索"></el-input>
                </el-col>
            </el-row>
        </el-col>
        <!--右导航-->
        <el-col :xs="8" :sm="8" :lg="8" :xl="6">
            <Navbar :menu="rightMenus" class="container-nav-right"></Navbar>
        </el-col>
    </el-row>

</template>

<script>

    import Navbar from '$src/components/business-common/Navbar.vue'

    export default {
        name: "Header",
        components: {
            Navbar
        },
        data() {
            return {
                leftMenus: {
                    mode: 'horizontal',
                    menuItems: [
                        {
                            routerObj: {
                                name: 'home'
                            },
                            label: '发现',
                            labelIconClass: 'el-icon-view'
                        },
                        {
                            routerObj: {
                                name: 'care'
                            },
                            label: '关注',
                            labelIconClass: 'el-icon-tickets'
                        },
                        {
                            routerObj: {
                                name: 'message'
                            },
                            label: '消息',
                            labelIconClass: 'el-icon-bell',
                            menuItems: [
                                {
                                    routerObj: {
                                        name: 'message'
                                    },
                                    label: '评论',
                                    labelIconClass: ''
                                },
                                {
                                    routerObj: {
                                        name: ''
                                    },
                                    label: '简信',
                                    labelIconClass: ''
                                },
                                {
                                    routerObj: {
                                        name: ''
                                    },
                                    label: '投稿请求',
                                    labelIconClass: ''
                                },
                                {
                                    routerObj: {
                                        name: ''
                                    },
                                    label: '喜欢和赞',
                                    labelIconClass: ''
                                },
                                {
                                    routerObj: {
                                        name: ''
                                    },
                                    label: '关注',
                                    labelIconClass: ''
                                },
                                {
                                    routerObj: {
                                        name: ''
                                    },
                                    label: '赞赏和付费',
                                    labelIconClass: ''
                                },
                                {
                                    routerObj: {
                                        name: ''
                                    },
                                    label: '其他和提醒',
                                    labelIconClass: ''
                                }
                            ]
                        }
                    ]
                },
                rightMenus: {
                    mode: 'horizontal',
                    menuItems: [
                        {
                            routerObj: {
                                name: 'register'
                            },
                            label: '注册',
                            labelIconClass: ''
                        },
                        {
                            routerObj: {
                                name: 'login'
                            },
                            label: '登录',
                            labelIconClass: ''
                        },
                        {
                            routerObj: {
                                name: 'message'
                            },
                            label: '头像',
                            isImg:true,
                            imgUrl:require('./star.jpg'),
                            menuItems: [
                                {
                                    routerObj: {
                                        name: 'essaytabs'
                                    },
                                    label: '我的主页',
                                    labelIconClass: ''
                                },
                                {
                                    routerObj: {
                                        name: ''
                                    },
                                    label: '收藏的文章',
                                    labelIconClass: ''
                                },
                                {
                                    routerObj: {
                                        name: ''
                                    },
                                    label: '喜欢的文章',
                                    labelIconClass: ''
                                },
                                {
                                    routerObj: {
                                        name: ''
                                    },
                                    label: '已购内容',
                                    labelIconClass: ''
                                },
                                {
                                    routerObj: {
                                        name: ''
                                    },
                                    label: '我的钱包',
                                    labelIconClass: ''
                                },
                                {
                                    routerObj: {
                                        name: 'setting'
                                    },
                                    label: '设置',
                                    labelIconClass: ''
                                },
                                {
                                    routerObj: {
                                        name: 'feedback'
                                    },
                                    label: '帮助与反馈',
                                    labelIconClass: ''
                                },
                                {
                                    routerObj: {
                                        name: ''
                                    },
                                    label: '退出',
                                    labelIconClass: ''
                                }
                            ]
                        },
                        {
                            routerObj: {
                                name: 'writeessay'
                            },
                            label: '写文章'
                        }
                    ]
                }
            };
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            },
            turnToHomePage(){
                this.$router.push({name:'home'})
            }
        }
    }
</script>

<style scoped>

    .container {
        height: 100%;
    }

    /*标题*/

    .title {
        display: flex;
        height: 100%;
        justify-content: center;
    }

    .title .title-wrapper {
        display: flex;
        align-items: center;
        min-width:100px;
        padding: 0 10px;
        height: 100%;
        margin: 0;
    }

    .title .title-wrapper:hover{
        cursor:pointer;
    }

    /*end 标题*/

    /*左边导航栏*/

    .container-nav-left {
        min-width: 323px;
    }

    .search {
    }

    /*end左边导航栏*/

    /*右边导航栏*/

    .container-nav-right {
        min-width: 425px;
    }

    /*end右边导航栏*/

</style>