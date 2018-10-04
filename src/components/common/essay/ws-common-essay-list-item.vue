<template>
    <transition name="more">
        <el-row class="container-ws-common-essay-list-item">
            <el-row
                    class="border-color-first"
                    type="flex"
                    justify="space-between"
                    align="middle">
                <el-col>

                    <!--标题-->
                    <router-link :to="{name:'essaydetail'}">
                        <h3 class="item-title">{{title}}</h3>
                    </router-link>

                    <!--内容-->
                    <p class="item-content font-color-minor">
                        {{content}}
                    </p>

                    <!--底部-->
                    <el-row class="item-container-footer font-color-minor" type="flex" align="middle">
                        <router-link :to="{name:'tabsessay'}">
                            <span>{{author}}</span>
                        </router-link>
                        <template v-if="isLook">
                            <router-link :to="{name:'essaydetail'}">
                                <i class="icon iconfont icon-kanguo"></i><span>{{lookNum}}</span>
                            </router-link>
                        </template>
                        <template v-if="isComment">
                            <router-link :to="{name:'essaydetail'}">
                                <i class="icon iconfont icon-31wangwangxuanzhong"></i><span>{{commentNum}}</span>
                            </router-link>
                        </template>
                        <template v-if="isLike">
                            <i class="icon iconfont icon-31guanzhu1xuanzhong"></i><span>{{likeNum}}</span>
                        </template>
                    </el-row>
                </el-col>

                <!--图片-->
                <router-link :to="{name:'essaydetail'}">
                    <img
                            class="item-img"
                            :src="imgUrl"
                            alt=""
                            width="100"
                            height="80">
                </router-link>
            </el-row>
        </el-row>
    </transition>
</template>

<script>
    export default {
        name: "ws-common-essay-list-item",
        props: {
            title: {
                type: String,
                default: '默认title'
            },
            content: {
                type: String,
                default: '默认content'
            },
            author: {
                type: String,
                default: '默认author'
            },
            imgUrl: {
                type: String
            },
            isLook: {
                type: Boolean,
                default: true
            },
            isComment: {
                type: Boolean,
                default: true
            },
            isLike: {
                type: Boolean,
                default: true
            },
            lookNum: {
                type: Number,
                default: 0
            },
            commentNum: {
                type: Number,
                default: 0
            },
            likeNum: {
                type: Number,
                default: 0
            }
        },
        methods: {}
    }
</script>

<style scoped>

    .container-ws-common-essay-list-item {
    }

    /*标题*/

    .item-title {
        margin: 0;
    }

    /*内容*/

    .item-content {
        margin-top: 8px;
        margin-bottom: 8px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
    }

    /*图片*/

    .item-img {
        margin-left: 15px;
        -webkit-border-radius: 3px;
        -moz-border-radius: 3px;
        border-radius: 3px;
    }

    /*底部*/

    .icon {
        margin-left: 7px;
        margin-right: 2px;
    }

    .icon-kanguo {
        font-size: 17px;
    }

    .icon-31wangwangxuanzhong {
        font-size: 13px;
    }

    .icon-31guanzhu1xuanzhong {
        font-size: 14px;
    }



</style>