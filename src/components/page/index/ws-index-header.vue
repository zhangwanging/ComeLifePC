<template>
    <el-row
            type="flex"
            align="middle"
            class="container-ws-index-header">
        <el-col
                :xs="5"
                :sm="5"
                :md="5"
                :lg="5"
                :xl="5"
                class="title">
            <div class="title-wrapper" @click="turnToHomePage">
                <h1 class="font-color-primary font-size-largetitle">荧幕星光</h1>
            </div>
        </el-col>

        <el-col
                :xs="19"
                :sm="19"
                :md="19"
                :lg="19"
                :xl="19">
            <el-row style="width:100%;" type="flex" align="middle">
                <el-menu
                        active-text-color="#409EFF"
                        :default-active="defaultActive"
                        mode="horizontal"
                        :router="true"
                        @select="handleSelect">
                    <div class="left">
                        <!--发现-->
                        <el-menu-item
                                :route="{name:'discover'}"
                                index="discover">
                            <i class="iconfont icon-faxian hidden-sm-and-down"></i>发现
                        </el-menu-item>
                        <!--关注-->
                        <el-menu-item
                                v-if="loginStatus"
                                :route="{name:'care'}"
                                index="care">
                            <i class="iconfont icon-guanzhu3 hidden-sm-and-down"></i>关注
                        </el-menu-item>
                        <!--消息-->
                        <el-submenu
                                v-if="loginStatus"
                                class="message"
                                index="message">
                            <template slot="title">
                                <i class="el-icon-bell hidden-sm-and-down"></i>消息
                            </template>
                            <el-menu-item
                                    index="comment"
                                    :route="{name:'comment',params:{defaultActive:'comment'}}">
                                <i class="iconfont icon-31xiaoxi"></i>评论
                            </el-menu-item>
                            <el-menu-item
                                    :route="{name:'information',params:{defaultActive:'information'}}"
                                    index="information">
                                <i class="iconfont icon-chanpincanshu"></i>简信
                            </el-menu-item>
                            <el-menu-item
                                    :route="{name:'contribution',params:{defaultActive:'contribution'}}"
                                    index="contribution">
                                <i class="iconfont icon-31dingdan"></i>投稿请求
                            </el-menu-item>
                            <el-menu-item
                                    :route="{name:'favour',params:{defaultActive:'favour'}}"
                                    index="favour'">
                                <i class="iconfont icon-31dianzan "></i>喜欢和赞
                            </el-menu-item>
                            <el-menu-item
                                    :route="{name:'attention',params:{defaultActive:'attention'}}"
                                    index="attention">
                                <i class="iconfont icon-guanzhu2"></i>关注
                            </el-menu-item>
                            <el-menu-item
                                    :route="{name:'admire',params:{defaultActive:'admire'}}"
                                    index="admire">
                                <i class="iconfont icon-31hongbao"></i>赞赏和付费
                            </el-menu-item>
                            <el-menu-item
                                    :route="{name:'warn',params:{defaultActive:'warn'}}"
                                    index="warn">
                                <i class="iconfont icon-xinxi"></i>其他提醒
                            </el-menu-item>
                        </el-submenu>

                        <!--搜索-->
                        <el-menu-item
                                class="search"
                                :route="{name:'discover'}"
                                index="search">
                            <el-input
                                    size="small"
                                    type="search"
                                    placeholder="搜索"/>
                        </el-menu-item>
                    </div>

                    <div class="right">
                        <!--登录/注册-->
                        <template v-if="!loginStatus">
                            <el-menu-item
                                    index="/session/register">注册
                            </el-menu-item>
                            <el-menu-item
                                    index="/session/login">登录
                            </el-menu-item>
                        </template>
                        <template v-else>
                            <el-submenu class="user" index="user">
                                <template slot="title">
                                    <img :src="basicUserData.avatar" alt="" class="avatar">
                                </template>
                                <el-menu-item
                                        :route="{name:'tabsessay'}"
                                        index="tabsessay">
                                    <i class="iconfont icon-31xiaoxi"></i>我的主页
                                </el-menu-item>
                                <el-menu-item
                                        :route="{name:'collection'}"
                                        index="">
                                    <i class="iconfont icon-chanpincanshu"></i>收藏的文章
                                </el-menu-item>
                                <el-menu-item
                                        :route="{name:'like'}"
                                        index=" ">
                                    <i class="iconfont icon-31dingdan"></i>喜欢的文章
                                </el-menu-item>
                                <el-menu-item
                                        :route="{name:'shop'}"
                                        index=" ">
                                    <i class="iconfont icon-31dianzan "></i>已购内容
                                </el-menu-item>
                                <el-menu-item
                                        :route="{name:'wallet'}"
                                        index=" ">
                                    <i class="iconfont icon-guanzhu2"></i>我的钱包
                                </el-menu-item>
                                <el-menu-item
                                        :route="{name:'basic'}"
                                        index="basic">
                                    <i class="iconfont icon-31hongbao"></i>设置
                                </el-menu-item>
                                <el-menu-item
                                        :route="{name:'feedback'}"
                                        index="feedback">
                                    <i class="iconfont icon-xinxi"></i>帮助与反馈
                                </el-menu-item>
                                <el-menu-item
                                        :route="{name:'discover'}"
                                        index="discover"
                                        @click="exitLogin">
                                    <i class="iconfont icon-xinxi"></i>退出
                                </el-menu-item>
                            </el-submenu>
                        </template>
                        <!--写文章-->
                        <el-menu-item
                                :route="{name:'writeessay'}"
                                index="writeessay">写文章
                        </el-menu-item>
                    </div>
                </el-menu>
            </el-row>
        </el-col>

    </el-row>

</template>

<script>

    export default {
        name: "ws-index-header",
        components: {},
        data() {
            return {
                defaultActive: 'discover'
            };
        },
        created() {
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
                if (key == 'exit') {
                    this.exitLogin()
                }
            },
            turnToHomePage() {
            },
            exitLogin() {
                this.$store.commit('setLoginStatus', false)
            },
            searchClick() {
                console.log('search....')
            }
        },
        computed: {
            basicUserData() {
                return this.$store.getters.userData
            },
            loginStatus() {
                return this.$store.getters.loginStatus
            }
        }
    }
</script>

<style scoped>

    .container {
        height: 100%;
        min-width: 778px;
    }

    /*标题*/

    .title {
        display: flex;
        height: 100%;
        justify-content: center;
        min-width: 100px;
    }

    .title .title-wrapper {
        display: flex;
        align-items: center;
        min-width: 100px;
        padding: 0 10px;
        height: 100%;
        margin: 0;
    }

    .title .title-wrapper:hover {
        cursor: pointer;
    }

    /*导航栏*/

    .search {

    }

    .search:hover{
        background-color: white;
    }

    .el-menu i {
        margin-right: 3px;
    }

    .el-menu {
        display: -webkit-flex;
        display: -moz-flex;
        display: -ms-flex;
        justify-content: space-between;
        width: 100%;
        border-bottom: none;
    }

    .el-menu:before{
        content: none;
    }

    .el-menu:after{
        content: none;
    }

    .el-menu .left {
        display: -webkit-flex;
        display: -moz-flex;
        display: -ms-flex;
        justify-content: flex-start;
    }

    .el-menu .right {
        display: -webkit-flex;
        display: -moz-flex;
        display: -ms-flex;
        justify-content: flex-end;
        margin-right:10%;
    }

    .el-menu .right .user{
        min-width:90px;
    }

    .el-menu-item {
        display: flex;
        align-items: center;
        height:59px;
    }

    .el-menu .message {
        min-width: 120px;
    }

    /*
    头像
     */
    .avatar {
        width: 30px;
        height: 30px;
        border-radius: 15px;
    }

</style>