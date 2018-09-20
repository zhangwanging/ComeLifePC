<template>
    <ws-base-layout-main-left-aside-right>

        <!--左栏-->
        <template slot="left">

            <!--用户简介-->
            <el-row class="container-user-header" type="flex" align="middle">
                <img :src="userBasicData.avatar"
                     alt=""
                     class="atavar">
                <el-col>
                    <h3 class="username font-size-smalltitle">{{userBasicData.name}}</h3>
                    <el-row :gutter="10">
                        <!--关注-->
                        <el-col class="user-outline" :span="3">
                            <el-row>{{userBasicData.attentionNum}}</el-row>
                            <el-row>
                                <router-link
                                        :to="{name:'tabsfans'}">关注 <i class="el-icon-arrow-right"></i>
                                </router-link>
                            </el-row>
                        </el-col>
                        <!--粉丝-->
                        <el-col class="user-outline" :span="3">
                            <el-row>{{userBasicData.fansNum}}</el-row>
                            <el-row>
                                <router-link
                                        :to="{name:'tabsfans'}">粉丝 <i class="el-icon-arrow-right"></i>
                                </router-link>
                            </el-row>
                        </el-col>
                        <!--文章-->
                        <el-col class="user-outline" :span="3">
                            <el-row>{{userBasicData.essayNum}}</el-row>
                            <el-row>
                                <router-link :to="{name:'tabsessay'}">文章 <i class="el-icon-arrow-right"></i></router-link>
                            </el-row>
                        </el-col>
                        <!--字数-->
                        <el-col class="user-outline" :span="3">
                            <el-row>{{userBasicData.wordNum}}</el-row>
                            <el-row>字数</el-row>
                        </el-col>
                        <!--收获喜欢-->
                        <el-col class="user-outline" :span="5">
                            <el-row>{{userBasicData.likeNum}}</el-row>
                            <el-row>收获喜欢</el-row>
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>

            <!--用户行为内容选项卡-->
            <el-row>
                <router-view name="usertabs"></router-view>
            </el-row>
        </template>

        <!--右栏-->
        <template slot="right">

            <!--个人介绍-->
            <el-row class="outline-item">
                <el-row
                        class="outline-item-line"
                        type="flex"
                        justify="space-between">
                    <span class="font-color-note">个人介绍</span>
                    <a href="#" class="font-color-note">编辑</a>
                </el-row>
                <el-row class="outline-item-line">
                    <p>{{userBasicData.motto}}</p>
                </el-row>
            </el-row>

            <!--我关注的专题/文集/连载，喜欢的文章-->
            <el-row class="outline-item">
                <el-row
                        class="outline-item-line"
                        type="flex"
                        align="middle">
                    <i class="iconfont icon-zhongtumoshi"></i>
                    <span>我关注的专题/文集/连载</span>
                </el-row>
                <el-row
                        class="outline-item-line"
                        type="flex"
                        align="middle">
                    <i class="iconfont icon-zan"></i>
                    <span>我喜欢的文章</span>
                </el-row>
            </el-row>

            <!--我创建的专题-->
            <el-row class="outline-item">
                <el-row
                        class="outline-item-line"
                        type="flex"
                        justify="space-between">
                    <span>我创建的专题</span>
                    <a href="#">新建专题</a>
                </el-row>
                <el-row class="outline-item-line">
                    <el-row class="subject"
                            type="flex"
                            align="middle"
                            :key="index"
                            v-for="(subject,index) in userBasicData.subjects">
                        <img class="subject-img" :src="subject.imgUrl" alt="">
                        <span>{{subject.name}}</span>
                    </el-row>
                </el-row>
            </el-row>

            <!--我的文集-->
            <el-row class="outline-item">
                <el-row class="outline-item-line">
                    <span>我的文集</span>
                </el-row>
                <el-row class="outline-item-line">
                    <el-row
                            v-for="(note,index) in userBasicData.notes"
                            :key="index"
                            type='flex'
                            align="center"
                            class="note">
                        <i class="iconfont icon-tushu"></i>
                        <span>{{note.name}}</span>
                    </el-row>
                </el-row>
            </el-row>
        </template>
    </ws-base-layout-main-left-aside-right>
</template>

<script>
    import WsBaseLayoutMainLeftAsideRight from '$src/components/base/ws-base-layout-main-left-aside-right.vue'
    import WsHomepageTabsEssay from '$src/components/page/homepage/ws-homepage-tabs-essay.vue'

    export default {
        name: "ws-homepage",
        components: {
            WsBaseLayoutMainLeftAsideRight,
            WsHomepageTabsEssay
        },
        data() {
            return {
                userBasicData:{}
            };
        },
        created(){
            this.init()
        },
        methods: {
            init(){
                this.getUserBasicDataRequest()
            },

            //获取用户基础数据
            getUserBasicDataRequest(){
                let that=this
                this.request.getUserBasicData({},function (err,res) {
                    if(res.code===0){
                        that.userBasicData=res.data
                    }
                })
            }
        }
    }
</script>

<style scoped>

    /*左栏*/

    /*用户简介*/
    .container-user-header{
        margin-bottom: 12px;
    }

    .atavar{
        width:60px;
        height:60px;
        margin-right:20px;
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

    /*右栏*/

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
    
    /*我的专题*/

    .subject{
        margin-bottom: 8px;
    }

    .subject:last-child{
        margin-bottom: 0;
    }

    .subject-img{
        width:24px;
        height:20px;
        margin-right:5px;
        -webkit-border-radius: 3px;
        -moz-border-radius: 3px;
        border-radius: 3px;
    }

    .note{
        margin-bottom: 8px;
    }

    .note:last-child{
        margin-bottom: 0;
    }
</style>