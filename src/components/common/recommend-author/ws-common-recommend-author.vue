<template>
    <el-row>
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
        <el-row class="container-list-author">
            <el-row v-for="(user,index) in adviceUser.users"
                    :key="index"
                    class="container-item-author"
                    type="flex"
                    align="middle">
                <img class="author-img"
                     :src="user.avatar"
                     alt="">
                <el-col>
                    <el-row type="flex" justify="space-between">
                        <span class="font-color-main">{{user.name}}</span>
                        <el-row class="font-color-success">
                            <i class="el-icon-plus"></i>
                            <span>关注</span>
                        </el-row>
                    </el-row>
                    <el-row class="font-color-minor">
                        写了 <span>{{user.wordNum}}</span>字 <span>{{user.likeNum}}</span>喜欢
                    </el-row>
                </el-col>
            </el-row>
        </el-row>
        <el-row>
            <el-button size="mini" class="author-btn" type="info">查看全部</el-button>
        </el-row>
    </el-row>
</template>

<script>

    import WsBaseButtonText from '$src/components/base/ws-base-button-text.vue'

    export default {
        name: "ws-common-recommend-author",
        components:{
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

            getPartAdviceUserClick() {
                this.getPartAdviceUserRequest()
            }
        }
    }
</script>

<style scoped>

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

    .author-btn {
        width: 100%;
    }
</style>