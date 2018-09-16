<template>
    <ws-base-layout-main-left-aside-right>
        <template slot="left">
            <el-row>
                <!--轮播图-->
                <el-col class="container-carousel">
                    <el-carousel height="210px"
                                 trigger="click">
                        <el-carousel-item v-for="item in carousels" :key="item.src">
                            <a :href="item.url" target="_blank">
                                <img :src="item.src" alt="" width="100%" height="100%">
                            </a>
                        </el-carousel-item>
                    </el-carousel>
                </el-col>
                <!--热门专题-->
                <el-col class="container-hot">
                    <el-button class="btn-hot" size="mini" type="info" round plain>故事</el-button>
                    <el-button class="btn-hot" size="mini" type="info" round plain>摄影</el-button>
                    <el-button class="btn-hot" size="mini" type="info" round plain>手绘</el-button>
                    <el-button class="btn-hot" size="mini" type="info" round plain>读书</el-button>
                    <el-button class="btn-hot" size="mini" type="info" round plain>自然科普</el-button>
                    <el-button class="btn-hot" size="mini" type="info" round plain>IT.互联网</el-button>
                    <el-button class="btn-hot" size="mini" type="info" round plain>简单书影</el-button>

                    <ws-base-button-text type="text">
                        <span>更多热门专题</span>
                        <i class="el-icon-arrow-right"></i>
                    </ws-base-button-text>
                </el-col>
                <!--文章列表-->
                <el-col>
                    <ws-common-essay-list :list="essays"></ws-common-essay-list>
                    <el-button @click="getMoreEssaysClick" class="btn-leanmore" size="mini" type="info" round>阅读更多
                    </el-button>
                </el-col>
                <!--网站元信息-->
                <el-col>
                    <div class="font-color-minor">Copyright © 2018 Star-Inc.All Rights Reserved</div>
                </el-col>
            </el-row>
        </template>
        <template slot="right">
            <!--导航分类-->
            <el-row>
                <el-button size="small" class="menu-btn" type="info" plain>7日热门<i class="el-icon-arrow-right"></i>
                </el-button>
                <el-button size="small" class="menu-btn" type="info" plain>30日热门<i class="el-icon-arrow-right"></i>
                </el-button>
                <el-button size="small" class="menu-btn" type="info" plain>优选连载<i class="el-icon-arrow-right"></i>
                </el-button>
                <el-button size="small" class="menu-btn" type="info" plain>简书版权<i class="el-icon-arrow-right"></i>
                </el-button>
                <el-button size="small" class="menu-btn" type="info" plain>简书大学堂<i class="el-icon-arrow-right"></i>
                </el-button>
            </el-row>
            <!--扫描码-->
            <el-row>
                <el-popover
                        placement="top"
                        trigger="hover">
                    <img src="./star.jpg" alt="" width="150" height="150">
                    <el-col slot="reference" class="container-qrcode border-color-first">
                        <img src="./star.jpg" alt="" width="80" height="80">
                        <p class="font-color-minor">随时随地发现更多创作内容</p>
                    </el-col>
                </el-popover>

            </el-row>
            <!--推荐作者-->
            <el-row>
                <el-row class="font-color-minor" type="flex" justify="space-between">
                    <span>推荐作者</span>
                    <el-row>
                        <ws-base-button-text
                                @click="getPartAdviceUserClick"
                                :loading="adviceUser.isLoading"
                                type="text">
                            <span>换一批</span>
                        </ws-base-button-text>
                    </el-row>
                </el-row>
                <el-row class="container-list-author">
                    <el-row v-for="(user,index) in adviceUser.users"
                            :key="index"
                            class="container-item-author"
                            type="flex"
                            align="middle">
                        <img class="author-img"
                             :src="user.avatar"
                             alt="">
                        <el-col>
                            <el-row type="flex" justify="space-between">
                                <span class="font-color-main">{{user.name}}</span>
                                <el-row class="font-color-success">
                                    <i class="el-icon-plus"></i>
                                    <span>关注</span>
                                </el-row>
                            </el-row>
                            <el-row class="font-color-minor">
                                写了 <span>{{user.wordNum}}</span>字 <span>{{user.likeNum}}</span>喜欢
                            </el-row>
                        </el-col>
                    </el-row>
                </el-row>
                <el-row>
                    <el-button size="mini" class="author-btn" type="info">查看全部</el-button>
                </el-row>
            </el-row>
        </template>
    </ws-base-layout-main-left-aside-right>
</template>

<script>
    import WsBaseButtonText from '$src/components/base/ws-base-button-text.vue'
    import WsBaseLayoutMainLeftAsideRight from '$src/components/base/ws-base-layout-main-left-aside-right.vue'
    import WsCommonEssayList from "$src/components/common/essay/ws-common-essay-list.vue"

    export default {
        name: "ws-discover",
        components: {
            WsBaseButtonText,
            WsBaseLayoutMainLeftAsideRight,
            WsCommonEssayList
        },
        data() {
            return {
                //文章列表
                essays: [],
                //轮播图
                carousels: [],

                adviceUser: {
                    isLoading: false,
                    users: []
                }
            }
        },
        created() {
            this.init()
        },
        methods: {

            init() {
                this.getEssaysRequest()
                this.getCarouselRequest()
                this.getPartAdviceUserRequest()
            },

            //获取文章列表
            getEssaysRequest() {
                let that = this
                this.request.getColdJoke(undefined, function (err, res) {
                    if (err) {
                        return
                    }
                    if (res.code === 0) {
                        if (res.data.length !== 0) {
                            that.essays = that.essays.concat(res.data)
                        }
                    }
                })
            },

            //获取轮播图
            getCarouselRequest() {
                let that = this
                this.request.getCarousel(undefined, function (err, res) {
                    if (res.code === 0 && res.data.length !== 0) {
                        that.carousels = res.data
                    }
                })
            },

            //获取推荐作者
            getPartAdviceUserRequest() {
                let that = this
                this.adviceUser.isLoading = true
                this.request.getPartAdviceUser(undefined, function (err, res) {
                    that.adviceUser.isLoading = false
                    if (res.code === 0 && res.data.length !== 0) {
                        that.adviceUser.users = res.data
                    }
                })
            },

            getPartAdviceUserClick(){
                this.getPartAdviceUserRequest()
            },

            getMoreEssaysClick() {
                this.getEssaysRequest()
            }
        }
    }
</script>

<style scoped>

    /*左列*/

    /*轮播图*/

    .container-carousel {
        margin-bottom: 20px;
        border-radius: 5px;
        overflow: hidden;
    }

    /*更多热门专题*/

    .container-hot {
        margin-bottom: 30px;
    }

    .el-button + .el-button {
        margin-left: 0;
    }

    .btn-hot {
        margin: 10px 10px 0 0;
    }

    .hot-more {
        display: inline-block;
    }

    /*文章列表*/
    .container-essay-item {
        position: relative;
    }

    .btn-leanmore {
        width: 100%;
        margin-top: 20px;
        margin-bottom: 60px;
    }

    /*右列*/

    /*导航分类*/

    .menu-btn {
        width: 100%;
        margin-bottom: 10px;
        text-align: left;
    }

    /*扫描码*/

    .container-qrcode {
        padding: 5px 10px;
        margin-bottom: 20px;
        border-width: 1px;
        border-style: solid;
        border-radius: 5px;
    }

    .container-qrcode:hover {
        cursor: pointer;
    }

    .container-qrcode p {
        margin: 0;
    }

    /*推荐作者*/

    .container-list-author {
        margin-top: 12px;
    }

    .container-item-author {
        margin-bottom: 12px;
    }

    .author-img {
        width: 40px;
        height: 40px;
        border-radius: 20px;
        margin-right: 5px;
    }

    .author-btn {
        width: 100%;
    }

</style>