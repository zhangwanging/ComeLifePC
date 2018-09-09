<template>
    <el-row>
        <el-row
                class="border-color-first"
                type="flex"
                justify="space-between"
                align="middle">
            <el-col>
                <h3 class="item-title">{{title}}</h3>
                <p class="item-content font-color-minor">
                    {{content}}
                </p>
                <el-row class="item-container-footer font-color-minor" type="flex" align="middle">
                    <span>{{author}}</span>
                    <template v-if="isLook">
                        <i class="icon iconfont icon-kanguo"></i><span>{{lookNum}}</span>
                    </template>
                    <template v-if="isComment">
                        <i class="icon iconfont icon-31wangwangxuanzhong"></i><span>{{commentNum}}</span>
                    </template>
                    <template v-if="isLike">
                        <i class="icon iconfont icon-31guanzhu1xuanzhong"></i><span>{{likeNum}}</span>
                    </template>
                </el-row>
            </el-col>
            <img class="item-img" :src="imgUrl" alt="" width="100" height="80">
        </el-row>
    </el-row>
</template>

<script>
    export default {
        name: "ws-essayitem",
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
            isLook:{
              type:Boolean,
              default:true
            },
            isComment: {
                type: Boolean,
                default: true
            },
            isLike: {
                type: Boolean,
                default: true
            },
            lookNum:{
              type:Number,
              default:0
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

    /*底部*/

    .icon {
        margin-left: 7px;
        margin-right:2px;
    }

    .icon-kanguo{
        font-size:17px;
    }

    .icon-31wangwangxuanzhong{
        font-size:13px;
    }

    .icon-31guanzhu1xuanzhong{
        font-size:14px;
    }

    /*end 底部*/
</style>