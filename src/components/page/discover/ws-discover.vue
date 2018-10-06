<template>
    <ws-base-layout-main-left-aside-right @scroll.native="handleAppScroll">
        <template slot="left">
            <el-row>
                <!--轮播图-->
                <el-col class="container-carousel">
                    <el-carousel height="210px"
                                 trigger="click">
                        <el-carousel-item v-for="(item,index) in carousels" :key="index">
                            <router-link :to="{name:'essaydetail'}" target="_blank">
                                <img :src="item.src" alt="" width="100%" height="100%">
                            </router-link>
                        </el-carousel-item>
                    </el-carousel>
                </el-col>
                <!--热门专题-->
                <el-col class="container-hot hidden-sm-and-down">
                    <el-button
                            @click="turnToSubjectClick"
                            class="btn-hot"
                            size="mini"
                            type="primary"
                            plain>
                        故事
                    </el-button>
                    <el-button
                            @click="turnToSubjectClick"
                            class="btn-hot"
                            size="mini"
                            type="primary"
                            plain>
                        手绘
                    </el-button>
                    <el-button
                            @click="turnToSubjectClick"
                            class="btn-hot"
                            size="mini"
                            type="primary"
                            plain>
                        读书
                    </el-button>
                    <el-button
                            @click="turnToSubjectClick"
                            class="btn-hot"
                            size="mini"
                            type="primary"
                            plain>
                        自然科普
                    </el-button>
                    <el-button
                            @click="turnToSubjectClick"
                            class="btn-hot"
                            size="mini"
                            type="primary"
                            plain>
                        IT.互联网
                    </el-button>
                    <el-button
                            @click="turnToSubjectClick"
                            class="btn-hot"
                            size="mini"
                            type="primary"
                            plain>
                        简单书影
                    </el-button>

                    <!--更多专题-->
                    <router-link :to="{name:'subject-more'}">
                        <ws-base-button-text type="text">
                            <span>更多热门专题</span>
                            <i class="el-icon-arrow-right"></i>
                        </ws-base-button-text>
                    </router-link>
                </el-col>
                <!--文章列表-->
                <el-col>
                    <ws-common-essay-list></ws-common-essay-list>
                </el-col>
                <!--网站元信息-->
                <el-col>
                    <div class="container-left-footer">
                        <p class="font-color-minor hidden-sm-and-down">
                            <router-link :to="{name:'subject'}">关于简书</router-link>
                            <router-link :to="{name:'essaydetail'}">加入我们</router-link>
                            <router-link :to="{name:'essaydetail'}">简书出版</router-link>
                            <router-link :to="{name:'feedback'}">帮助中心</router-link>
                            <router-link :to="{name:'essaydetail'}">合作伙伴</router-link>
                        </p>
                        <div class="font-color-minor">Copyright © 2018 Star-Inc.All Rights Reserved</div>
                    </div>
                </el-col>
            </el-row>
        </template>
        <template slot="right">
            <!--导航分类-->
            <el-row class="container-category">
                <router-link :to="{name:'hotday7'}">
                    <img class="menu-btn"
                         :src="require(`$src/assets/img/banner-hot-day-7.png`)"
                         :key="1"
                         alt="">
                </router-link>
                <router-link :to="{name:'hotday30'}">
                    <img class="menu-btn"
                         :key="2"
                         :src="require(`$src/assets/img/banner-hot-day-30.png`)"
                         alt="">
                </router-link>
                <router-link :to="{name:'serial'}">
                    <img class="menu-btn"
                         :key="3"
                         :src="require(`$src/assets/img/banner-serial.png`)"
                         alt="">
                </router-link>

                <router-link :to="{name:'copyright'}">
                    <img class="menu-btn"
                         :key="4"
                         :src="require(`$src/assets/img/banner-copyright.png`)"
                         alt="">
                </router-link>

                <router-link :to="{name:'subject'}">
                    <img class="menu-btn"
                         :key="5"
                         :src="require(`$src/assets/img/banner-campus.png`)"
                         alt="">
                </router-link>

            </el-row>
            <!--扫描码-->
            <el-row>
                <el-popover
                        placement="top"
                        trigger="hover">
                    <img
                            :src="require(`./star.jpg`)"
                            alt=""
                            width="150"
                            height="150">
                    <el-col slot="reference" class="container-qrcode border-color-first">
                        <img
                                :src="require(`./star.jpg`)"
                                alt=""
                                width="80"
                                height="80">
                        <p class="font-color-minor">随时随地发现更多创作内容</p>
                    </el-col>
                </el-popover>

            </el-row>
            <!--推荐作者-->
            <el-row>
                <ws-common-recommend-author/>
            </el-row>
        </template>
    </ws-base-layout-main-left-aside-right>
</template>

<script>
    import WsBaseButtonText from '$src/components/base/ws-base-button-text.vue'
    import WsBaseLayoutMainLeftAsideRight from '$src/components/base/ws-base-layout-main-left-aside-right.vue'
    import WsCommonEssayList from "$src/components/common/essay/ws-common-essay-list.vue"
    import WsCommonRecommendAuthor from '$src/components/common/recommend-author/ws-common-recommend-author.vue'

    export default {
        name: "ws-discover",
        components: {
            WsBaseButtonText,
            WsBaseLayoutMainLeftAsideRight,
            WsCommonEssayList,
            WsCommonRecommendAuthor
        },
        data() {
            return {
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
            handleAppScroll(e){
                console.dir("e:"+e)
            },
            init() {
                this.getCarouselRequest()
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

            //转向专题页面
            turnToSubjectClick() {
                this.$router.push({name: 'subject'})
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

    /*网站元信息*/
    .container-left-footer {
        position: absolute;
        margin-top: 30px;
        margin-bottom: 20px;
    }

    .container-left-footer p a {
        display: inline-block;
        margin-right: 15px;
        color: #909399;
    }

    /*右列*/

    /*导航分类*/

    .container-category {
        margin-top: -4px;
    }

    .menu-btn {
        width: 100%;
        height: 40px;
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

</style>