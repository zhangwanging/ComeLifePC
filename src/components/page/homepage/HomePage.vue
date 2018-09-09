<template>
    <ws-mainlayout>
        <template slot="left">
            <el-row class="container-user-header" type="flex" align="middle">
                <img src="//upload.jianshu.io/users/upload_avatars/4900320/faed9c6f-ec35-48d7-9867-84a50a00310f.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240"
                     alt=""
                class="atavar">
                <el-col>
                    <h3 class="username font-size-smalltitle">携手前行</h3>
                    <el-row :gutter="10">
                        <el-col class="user-outline" :span="3">
                            <el-row>10</el-row>
                            <el-row>关注<i class="el-icon-arrow-right"></i></el-row>
                        </el-col>
                        <el-col class="user-outline" :span="3">
                            <el-row>0</el-row>
                            <el-row>
                                <router-link :to="{name:'fanstabs'}">粉丝 <i class="el-icon-arrow-right"></i></router-link>
                            </el-row>
                        </el-col>
                        <el-col class="user-outline" :span="3">
                            <el-row>2</el-row>
                            <el-row>
                                <router-link :to="{name:'essaytabs'}">文章 <i class="el-icon-arrow-right"></i></router-link>
                            </el-row>
                        </el-col>
                        <el-col class="user-outline" :span="3">
                            <el-row>496</el-row>
                            <el-row>字数</el-row>
                        </el-col>
                        <el-col class="user-outline" :span="5">
                            <el-row>0</el-row>
                            <el-row>收获喜欢</el-row>
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>

            <el-row>
                <router-view name="usertabs"></router-view>
            </el-row>
        </template>
        <template slot="right">
            <el-row class="outline-item">
                <el-row class="outline-item-line" type="flex" justify="space-between">
                    <span class="font-color-note">个人介绍</span>
                    <a href="#" class="font-color-note">编辑</a>
                </el-row>
                <el-row class="outline-item-line">
                    <p>努力让生活过成诗的样子？不要诧异，其实我不是乖孩子</p>
                </el-row>
            </el-row>
            <el-row class="outline-item">
                <el-row class="outline-item-line" type="flex" align="middle">
                    <i class="iconfont icon-zhongtumoshi"></i>
                    <span>我关注的专题/文集/连载</span>
                </el-row>
                <el-row class="outline-item-line" type="flex" align="middle">
                    <i class="iconfont icon-zan"></i>
                    <span>我喜欢的文章</span>
                </el-row>
            </el-row>
            <el-row class="outline-item">
                <el-row class="outline-item-line" type="flex" justify="space-between">
                    <span>我创建的专题</span>
                    <a href="#">新建专题</a>
                </el-row>
                <el-row class="outline-item-line" type="flex" align="middle">
                    <i class="iconfont icon-fenlei1"></i>
                    <span>专题描述</span>
                </el-row>
            </el-row>
            <el-row class="outline-item">
                <el-row class="outline-item-line">
                    <span>我的文集</span>
                </el-row>
                <el-row class="outline-item-line" type="flex" align="middle">
                    <i class="iconfont icon-tushu"></i>
                    <span>日记本</span>
                </el-row>
            </el-row>
        </template>
    </ws-mainlayout>
</template>

<script>
    import WsMainlayout from '$src/components/business-common/ws-mainlayout.vue'
    import EssayTabs from '$src/components/page/homepage/EssayTabs.vue'

    export default {
        name: "HomePage",
        components: {
            WsMainlayout,
            EssayTabs
        },
        data() {
            return {
            };
        },
        methods: {

        }
    }
</script>

<style scoped>
    /*左边*/

    /*用户简介*/
    .container-user-header{
        margin-bottom: 12px;
    }

    .atavar{
        width:60px;
        height:60px;
        margin-right:30px;
        border-radius: 30px;
    }

    .username {
        margin:0;
    }

    .user-outline {
        border-right: 1px solid lightgrey;
        min-width:50px;
    }

    .user-outline .el-row:last-child{
        min-width:60px;
    }

    .user-outline:last-child {
        border-right: 0;
    }

    .user-outline .el-row:last-child{
        cursor: pointer;
        color:#C0C4CC;
    }
    /*end 用户简介*/

    /*end左边*/

    /*右边*/

    .outline-item {
        padding: 10px 0;
        border-bottom: 1px solid lightgrey;
    }

    .outline-item-line {
        padding: 5px 0;
    }

    i{
        margin-right:5px;
    }
</style>