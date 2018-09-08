<template>
    <el-row>
        <el-row
                class="container-item border-color-first"
                type="flex"
                justify="space-between"
                align="middle">
            <el-col>
                <h3 class="item-title">{{title}}</h3>
                <p class="item-content font-color-minor">
                    {{content}}
                </p>
                <el-row class="item-container-footer font-color-minor">
                    <span>{{author}}</span>
                    <template v-if="isComment">
                        <i class="icon iconfont icon-liaotiancopy"></i>
                        <span>{{commentNum}}</span>
                    </template>
                    <template v-if="isLike">
                        <i class="icon iconfont icon-icon-test"></i>
                        <span>{{likeNum}}</span>
                    </template>
                </el-row>
            </el-col>
            <img class="item-img" :src="imgUrl" alt="" width="100" height="80">
        </el-row>
    </el-row>
</template>

<script>
    /**
     * 注意：只是个Item,对于list，定义Item组件更合适
     */
    export default {
        name: "EssayList",
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
                type: String,
                default: require('./logo.png')
            },
            isComment: {
                type: Boolean,
                default: true
            },
            isLike: {
                type: Boolean,
                default: true
            },
            commentNum: {
                type: Number,
                default: 0
            },
            likeNum: {
                type: Number,
                default: 0
            }
        }
    }
</script>

<style scoped>
    .container-item {
        padding: 10px 0;
        border-bottom-width: 1px;
        border-bottom-style: solid;
    }

    .item-title {
        margin: 0;
    }

    .item-content {
        margin-top: 8px;
        margin-bottom: 8px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
    }

    .item-img {
        margin-left: 15px;
    }

    .icon {
        margin-left: 5px;
    }
</style>