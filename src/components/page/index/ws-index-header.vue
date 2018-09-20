<template>
    <el-row
            type="flex"
            align="middle"
            class="container">
        <el-col
                :xs="2"
                :sm="2"
                :lg="5"
                :xl="5"
                class="title">
            <div class="title-wrapper" @click="turnToHomePage">
                <h1 class="font-color-general font-size-largetitle">荧幕星光</h1>
            </div>
        </el-col>

        <el-col
                :xs="22"
                :sm="22"
                :lg="19"
                :xl="19">
            <el-row type="flex" align="middle">
                <el-menu
                        active-text-color="#409EFF"
                        :default-active="defaultActive"
                        mode="horizontal"
                        :router="true"
                        @select="handleSelect">
                    <el-menu-item
                            :route="{name:'discover'}"
                            index="discover">
                        <i class="iconfont icon-faxian"></i>发现
                    </el-menu-item>
                    <el-menu-item
                            :route="{name:'care'}"
                            index="care">
                        <i class="iconfont icon-guanzhu3"></i>关注
                    </el-menu-item>
                    <el-submenu index="message">
                        <template slot="title">
                            <i class="el-icon-bell"></i>消息
                        </template>
                        <el-menu-item
                                index="comment"
                                :route="{name:'comment'}">
                            <i class="iconfont icon-31xiaoxi"></i>评论
                        </el-menu-item>
                        <el-menu-item
                                :route="{name:'information'}"
                                index="information">
                            <i class="iconfont icon-chanpincanshu"></i>简信
                        </el-menu-item>
                        <el-menu-item
                                :route="{name:'contribution'}"
                                index="contribution">
                            <i class="iconfont icon-31dingdan"></i>投稿请求
                        </el-menu-item>
                        <el-menu-item
                                :route="{name:'favour'}"
                                index="favour'">
                            <i class="iconfont icon-31dianzan "></i>喜欢和赞
                        </el-menu-item>
                        <el-menu-item
                                :route="{name:'attention'}"
                                index="attention">
                            <i class="iconfont icon-guanzhu2"></i>关注
                        </el-menu-item>
                        <el-menu-item
                                :route="{name:'admire'}"
                                index="admire">
                            <i class="iconfont icon-31hongbao"></i>赞赏和付费
                        </el-menu-item>
                        <el-menu-item
                                :route="{name:'warn'}"
                                index="warn">
                            <i class="iconfont icon-xinxi"></i>其他提醒
                        </el-menu-item>
                    </el-submenu>

                    <el-menu-item index="">
                        <el-input class="search" type="search" placeholder="搜索"></el-input>
                    </el-menu-item>

                    <template v-if="!this.$store.getters.loginStatus">
                        <el-menu-item
                                index="/session/register">注册
                        </el-menu-item>
                        <el-menu-item
                                index="/session/login">登录
                        </el-menu-item>
                    </template>
                    <template v-else>
                        <el-submenu index="user">
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
                    <el-menu-item
                            :route="{name:'writeessay'}"
                            index="writeessay">写文章
                    </el-menu-item>
                </el-menu>
            </el-row>
        </el-col>

    </el-row>

</template>

<script>

    export default {
        name: "ws-index-header",
        components: {
        },
        data() {
            return {
                defaultActive:'discover'
            };
        },
        created() {
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
                if(key=='exit'){
                    this.exitLogin()
                }
            },
            turnToHomePage() {
            },
            exitLogin(){
                this.$store.commit('setLoginStatus',false)
            }
        },
        computed:{
            basicUserData(){
                return this.$store.getters.userData
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
        min-width: 100px;
        padding: 0 10px;
        height: 100%;
        margin: 0;
    }

    .title .title-wrapper:hover {
        cursor: pointer;
    }

    /*end 标题*/

    /*导航栏*/

    .search {
        min-width: 150px;
        max-width: 300px;
    }

    .el-menu i {
        margin-right: 3px;
    }

    /*end导航栏*/

    /*
    头像
     */
    .avatar {
        width: 30px;
        height: 30px;
        border-radius: 15px;
    }

</style>