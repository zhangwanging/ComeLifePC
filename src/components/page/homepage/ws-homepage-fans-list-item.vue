<template>
    <el-row type="flex" align="middle">
        <img :src="avatar" alt="" class="avatar">
        <el-col>
            <h3 class="title font-size-content">{{title}}</h3>
            <el-row class="container-attr font-color-minor" type="flex">
                <el-row>关注 <span>{{attentionNum}}</span></el-row>
                <el-row>粉丝 <span>{{fansNum}}</span></el-row>
                <el-row>文章 <span>{{essayNum}}</span></el-row>
            </el-row>
            <el-row class="font-color-minor">
                写了 <span>{{wordNum}}</span> 字,获得了 <span>{{likeNum}}</span> 个喜欢
            </el-row>
        </el-col>
        <el-switch class="attention" v-model="isAttention"></el-switch>
    </el-row>
</template>

<script>
    export default {
        name: "ws-homepage-fans-list-item",
        props: {
            avatar: {
                type: String
            },
            title: {
                type: String
            },
            attentionNum: {
                type: Number
            },
            fansNum: {
                type: Number
            },
            essayNum: {
                type: Number
            },
            wordNum: {
                type: Number
            },
            likeNum: {
                type: Number
            },
            isAttention: {
                type: Boolean
            }
        },
        data() {
            return {
            }
        }
    }
</script>

<style scoped>

    /*头像*/

    .avatar {
        width: 40px;
        height: 40px;
        margin-right: 10px;
        border-radius: 20px;
    }

    /*end 头像*/

    .title {
        margin: 0;
    }

    .container-attr .el-row {
        padding-right: 7px;
        margin-right: 7px;
        border-right: 1px solid #DCDFE6;
    }

    .container-attr .el-row:last-child {
        border: 0;
    }

    /*关注*/

    .attention {
        width: 60px;
    }

    /*end 关注*/
</style>