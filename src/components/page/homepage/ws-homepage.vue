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
                                <router-link :to="{name:'tabsessay'}">文章 <i class="el-icon-arrow-right"></i>
                                </router-link>
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

                    <ws-base-button-text @click="isEditProfile=true">
                        <i class="el-icon-edit"></i>编辑
                    </ws-base-button-text>

                </el-row>
                <el-row v-if="isEditProfile">
                    <el-col style="margin:10px 0;">
                        <el-input
                                type="textarea"
                                :rows="3"
                                :placeholder="userBasicData.motto"
                                v-model="userBasicData.motto">
                        </el-input>
                    </el-col>
                    <el-col>
                        <el-button
                                style="margin-right:5px;"
                                @click="isEditProfile=false"
                                size="mini"
                                type="success"
                                plain
                                round>
                            保存
                        </el-button>
                        <ws-base-button-text
                                @click="isEditProfile=false">
                            取消
                        </ws-base-button-text>
                    </el-col>
                </el-row>
                <el-row v-else
                        class="outline-item-line">
                    <p>{{userBasicData.motto}}</p>
                </el-row>
            </el-row>

            <!--我关注的专题/文集/连载，喜欢的文章-->
            <el-row class="outline-item">
                <el-row
                        class="outline-item-line">
                    <router-link :to="{name:'tabslike'}">
                        <el-row type="flex" align="middle">
                            <i class="iconfont icon-zhongtumoshi"></i>
                            <span>我关注的专题/文集/连载</span>
                        </el-row>
                    </router-link>
                </el-row>
                <el-row
                        class="outline-item-line">
                    <router-link :to="{name:'tabslike'}">
                        <el-row type="flex" align="middle">
                            <i class="iconfont icon-zan"></i>
                            <span>我喜欢的文章</span>
                        </el-row>
                    </router-link>
                </el-row>
            </el-row>

            <!--我创建的专题-->
            <el-row class="outline-item">
                <el-row
                        class="outline-item-line"
                        type="flex"
                        justify="space-between">
                    <span>我创建的专题</span>
                    <ws-base-button-text @click="createSubjectClick">
                        <span class="font-color-primary">
                            <i class="el-icon-plus"></i>新建专题
                        </span>
                    </ws-base-button-text>
                </el-row>
                <el-row class="outline-item-line">
                    <el-row class="subject"
                            type="flex"
                            align="middle"
                            :key="index"
                            v-for="(subject,index) in userBasicData.subjects">
                        <router-link :to="{name:'subject'}">
                            <el-row type="flex" align="middle">
                                <img class="subject-img" :src="subject.imgUrl" alt="">
                                <span>{{subject.name}}</span>
                            </el-row>
                        </router-link>
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
                            style="cursor:pointer;"
                            @click.native="myNotesClick"
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
    import WsBaseButtonText from '$src/components/base/ws-base-button-text.vue'

    export default {
        name: "ws-homepage",
        components: {
            WsBaseLayoutMainLeftAsideRight,
            WsHomepageTabsEssay,
            WsBaseButtonText
        },
        data() {
            return {
                userBasicData: {},
                isEditProfile: false
            };
        },
        created() {
            this.init()
        },
        methods: {
            init() {
                this.getUserBasicDataRequest()
            },

            //获取用户基础数据
            getUserBasicDataRequest() {
                let that = this
                this.request.getUserBasicData({}, function (err, res) {
                    if (res.code === 0) {
                        that.userBasicData = res.data
                    }
                })
            },

            createSubjectClick() {
                this.$message({
                    type: 'warning',
                    message: '待实现'
                })
            },

            myNotesClick() {
                this.$message({
                    type: 'warning',
                    message: '待实现'
                })
            }
        }
    }
</script>

<style scoped>

    /*左栏*/

    /*用户简介*/
    .container-user-header {
        margin-bottom: 12px;
    }

    .atavar {
        width: 60px;
        height: 60px;
        margin-right: 20px;
        border-radius: 30px;
    }

    .username {
        margin: 0;
    }

    .user-outline {
        border-right: 1px solid lightgrey;
        min-width: 50px;
    }

    .user-outline .el-row:last-child {
        min-width: 60px;
    }

    .user-outline:last-child {
        border-right: 0;
    }

    .user-outline .el-row:last-child {
        cursor: pointer;
        color: #C0C4CC;
    }

    /*右栏*/

    .outline-item {
        padding: 10px 0;
        border-bottom: 1px solid lightgrey;
    }

    .outline-item-line {
        padding: 5px 0;
        cursor: pointer;
    }

    i {
        margin-right: 5px;
    }

    /*我的专题*/

    .subject {
        margin-bottom: 8px;
    }

    .subject:last-child {
        margin-bottom: 0;
    }

    .subject-img {
        width: 24px;
        height: 20px;
        margin-right: 5px;
        -webkit-border-radius: 3px;
        -moz-border-radius: 3px;
        border-radius: 3px;
    }

    .note {
        margin-bottom: 8px;
    }

    .note:last-child {
        margin-bottom: 0;
    }
</style>