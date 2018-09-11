<template>
    <el-row type="flex" align="middle" justify="space-between">
        <img :src="avatar" class="avatar" alt="" width="60" height="60">
        <el-col>
            <el-row>
                <h3 class="title font-size-smalltitle">{{title}}</h3>
            </el-row>
            <el-row class="font-color-minor">
                <span>简书</span> 编 ▪ 收录了<span>{{essayNum}}</span>篇文章 ▪ <span>{{fansNum}}</span>人关注
            </el-row>
        </el-col>
        <el-row class="container-btn" type="flex">
            <el-button size="small" type="primary" round plain>投稿</el-button>
            <el-button size="small" type="primary" round plain>专题主页</el-button>
        </el-row>
    </el-row>
</template>

<script>
    export default {
        name: "ws-care-user-detail-header",
        props:{
            avatar:{
                type:String
            },
            title:{
                type:String
            },
            essayNum:{
                type:Number
            },
            fansNum:{
                type:Number
            }
        }
    }
</script>

<style scoped>

    .avatar {
        width: 60px;
        height: 60px;
        margin-right: 15px;
    }

    .title{
        margin:0 0 5px;
    }

    .container-btn .el-button{
        margin-left:15px;
    }
</style>