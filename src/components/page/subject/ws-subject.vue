<template>
    <transition name="fade">
        <ws-base-layout-main-left-aside-right>
            <template slot="left">
                <!--头部-->
                <el-row
                        type="flex"
                        justify="center"
                        align="middle">
                    <!--头像-->
                    <img
                            class="avatar"
                            :src="require(`$src/assets/star.jpg`)"
                            alt="">
                    <!--简述-->
                    <el-col>
                        <h3 class="title font-size-smalltitle">专题</h3>

                        <span class="font-color-minor">
                        收录了180271篇文章 · 3385039人关注
                    </span>
                    </el-col>

                    <!--按钮组-->
                    <el-row class="container-button" type="flex">
                        <el-button
                                @click="contributeClick"
                                type="success"
                                size="mini"
                                plain
                                round>
                            投稿
                        </el-button>
                        <el-button
                                @click="careClick"
                                type="success"
                                size="mini"
                                plain
                                round>
                            关注
                        </el-button>
                    </el-row>
                </el-row>
                <el-row>
                    <el-tabs v-model="tabActiveName">

                        <el-tab-pane label="最新评论" name="new-comment">
                            <ws-common-essay-list/>
                        </el-tab-pane>

                        <el-tab-pane label="最新收录" name="new-record">
                            <ws-common-essay-list/>
                        </el-tab-pane>

                        <el-tab-pane label="热门" name="hot">
                            <ws-common-essay-list/>
                        </el-tab-pane>
                    </el-tabs>
                </el-row>
            </template>
            <template slot="right">
                <el-collapse value="notice">
                    <el-collapse-item name="notice">
                        <template slot="title">
                            <span class="font-color-minor">专题公告</span>
                        </template>
                        <div>
                            投稿须知:
                            读书专题仅收录与读书有关的书评、读书笔记、阅读方法、读书清单等文章。
                            文中不得出现非简书的链接;包括但不限于公众号、二维码、头条号、微博、一点资源等带有广告性质的信息; 配图不能带有水印。
                            文章收录字数1000字起( 大神请忽略此限制)，请不要直接摘抄原文的话就来投稿。请注意排版美观、请不要密集投稿。
                            进群请添加主编微信: MYH5619175, 记得备注I简书昵称+读书]。

                            欢迎关注公众号茶点故事（Jianshu_teahouse）每周一篇编委精心推荐精彩书评。
                        </div>
                    </el-collapse-item>
                </el-collapse>
            </template>
        </ws-base-layout-main-left-aside-right>
    </transition>
</template>

<script>

    import WsBaseLayoutMainLeftAsideRight from '$src/components/base/ws-base-layout-main-left-aside-right.vue'
    import WsCommonEssayList from '$src/components/common/essay/ws-common-essay-list.vue'

    export default {
        name: "ws-subject",
        components: {
            WsBaseLayoutMainLeftAsideRight,
            WsCommonEssayList
        },
        data() {
            return {
                tabActiveName: 'new-comment'
            }
        },
        methods: {
            contributeClick() {
                this.$message({
                    message: '待实现',
                    type: 'warning'
                });
            },
            careClick() {
                this.$message({
                    message: '待实现',
                    type: 'warning'
                });
            }
        }
    }
</script>

<style scoped>

    /*左栏*/

    /*头部*/

    .avatar {
        width: 65px;
        height: 65px;
        margin-right: 10px;
        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;
        border-radius: 5px;
    }

    .title {
        margin: 0 0 5px 0;
    }

    .container-button .el-button {
        margin-left: 10px;
    }
</style>