<template>
    <el-row>

        <!--头部-->
        <el-row class="font-color-minor" type="flex" justify="space-between">
            <span>推荐作者</span>
            <el-row>
                <ws-base-button-text
                        @click="getPartAdviceUserClick"
                        :loading="adviceUser.isLoading"
                        type="text">
                    <span>换一批</span>
                </ws-base-button-text>
            </el-row>
        </el-row>

        <!--推荐作者列表-->
        <el-row class="container-list-author">
            <el-row
                    v-for="(user,index) in adviceUser.users"
                    :key="index"
                    class="container-item-author"
                    type="flex"
                    align="middle">
                <router-link :to="{name:'tabsessay'}">
                    <img class="author-img"
                         :src="user.avatar"
                         alt="">
                </router-link>
                <el-col>
                    <el-row type="flex" justify="space-between">
                        <router-link :to="{name:'tabsessay'}">
                            <span class="author font-color-main">{{user.name}}</span>
                        </router-link>

                        <ws-base-button-text
                                @click="cancelAttentionClick(index)"
                                v-if="user.isAttention">
                            <i class="icon el-icon-check"></i>
                            <span>已关注</span>
                        </ws-base-button-text>

                        <ws-base-button-text
                                @click="addAttentionClick(index)"
                                v-else>
                            <i class="icon font-color-success el-icon-plus"></i>
                            <span class="font-color-success">关注</span>
                        </ws-base-button-text>
                    </el-row>
                    <el-row class="font-color-minor">
                        写了 <span>{{user.wordNum}}</span>字 <span>{{user.likeNum}}</span>喜欢
                    </el-row>
                </el-col>
            </el-row>
        </el-row>

        <!--查看全部-->
        <el-row>
            <el-button
                    @click="turnToRecommendAuthorDetailClick"
                    size="mini"
                    class="author-btn"
                    plain
                    type="info">
                查看全部 <i class="el-icon-arrow-right"></i>
            </el-button>
        </el-row>
    </el-row>
</template>

<script>

    import WsBaseButtonText from '$src/components/base/ws-base-button-text.vue'

    export default {
        name: "ws-common-recommend-author",
        components: {
            WsBaseButtonText
        },
        data() {
            return {
                adviceUser: {
                    isLoading: false,
                    users: []
                }
            }
        },

        created() {
            this.getPartAdviceUserRequest()
        },

        methods: {

            init() {
                this.getEssaysRequest()
                this.getCarouselRequest()
                this.getPartAdviceUserRequest()
            },
            //获取推荐作者
            getPartAdviceUserRequest() {
                let that = this
                this.adviceUser.isLoading = true
                this.request.getPartAdviceUser(undefined, function (err, res) {
                    that.adviceUser.isLoading = false
                    if (res.code === 0 && res.data.length !== 0) {
                        that.adviceUser.users = res.data
                    }
                })
            },

            //请求取消关注
            cancelAttentionRequest(fun){
                this.request.cancelAttention({},function (err,res) {
                    if(res.code===0){
                       fun(res.data)
                    }
                })
            },

            //请求添加关注
            addAttentionRequest(fun){
                this.request.addAttention({},function (err,res) {
                    if(res.code===0){
                        fun(res.data)
                    }
                })
            },

            getPartAdviceUserClick() {
                this.getPartAdviceUserRequest()
            },

            cancelAttentionClick(index){
                let that=this
                this.cancelAttentionRequest(function (data) {
                    that.adviceUser.users[index].isAttention=false
                })
            },

            addAttentionClick(index){
                if(!this.$store.getters.loginStatus){
                    this.$router.push({name:'session'})
                    return
                }
                let that=this
                this.addAttentionRequest(function (data) {
                    that.adviceUser.users[index].isAttention=true
                })
            },

            turnToRecommendAuthorDetailClick(){
                this.$router.push({name:'recommend-author-detail'})
            }
        }
    }
</script>

<style scoped>

    /*推荐作者列表*/
    .container-list-author {
        margin-top: 12px;
    }

    .container-item-author {
        margin-bottom: 12px;
    }

    .author-img {
        width: 40px;
        height: 40px;
        border-radius: 20px;
        margin-right: 5px;
    }

    .author-img,.author:hover {
        cursor: pointer;
    }

    /*关注图标*/
    .icon{
        margin:0 -5px 0 0;
    }

    /*查看全部按钮*/
    .author-btn {
        width: 100%;
        margin-bottom:50px;
    }
</style>