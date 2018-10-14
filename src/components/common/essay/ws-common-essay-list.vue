<template>

    <el-row>
        <transition-group name="more">
            <el-row
                    v-for="(item,index) in essays"
                    :key="index"
                    class="container-item">
                <ws-common-essay-list-item
                        :title="item.title"
                        :content="item.content"
                        :author="item.author"
                        :commentNum="item.commentNum"
                        :imgUrl="item.imgUrl"
                        :likeNum="item.likeNum">
                </ws-common-essay-list-item>
            </el-row>
        </transition-group>
        <el-button
                :loading="loading"
                @click="getMoreEssaysClick"
                class="btn-leanmore"
                size="mini"
                type="info"
                round>
            阅读更多
        </el-button>
    </el-row>

</template>

<script>

    import WsCommonEssayListItem from '$src/components/common/essay/ws-common-essay-list-item.vue'
    import {getEssaysByUserId} from '$src/api/common/essay.js'

    export default {
        name: "ws-common-essay-list",
        components: {
            WsCommonEssayListItem
        },
        props: {
            id: {
                type: String
            }
        },
        data() {
            return {
                //文章列表
                essays: [],
                loading:false
            }
        },
        watch: {
            id: function (newId, oldId) {
                this.getEssaysInit()
            }
        },
        created() {
            this.init()
        },
        methods: {
            init() {
                this.getEssaysInit()
            },

            showLoading(){
              this.loading=true
            },

            hideLoading(){
              this.loading=false
            },

            //获取文章列表
            getEssaysByUserIdRequest(fun) {
                let that = this
                this.showLoading()
                getEssaysByUserId(undefined, function (err, res) {
                    that.hideLoading()
                    if (err) {
                        return
                    }
                    if (res.code === 0) {
                        if (res.data.length !== 0) {
                            fun(res.data)
                        }
                    }
                })
            },

            //初次获取文章
            getEssaysInit() {
                let that = this
                this.getEssaysByUserIdRequest(function (data) {
                    that.essays = data
                })
            },

            //获取更多文章
            getMoreEssays() {
                let that = this
                this.getEssaysByUserIdRequest(function (data) {
                    that.essays = that.essays.concat(data)
                })
            },

            getMoreEssaysClick() {
                this.getMoreEssays()
            }
        }
    }
</script>

<style scoped lang="scss">
    .container-item {
        padding: 10px 0;
        @include border(bottom)
    }

    .btn-leanmore {
        width: 100%;
        margin-top: 20px;
        margin-bottom: 60px;
    }

    /*过渡效果*/
    .more-enter-active, .more-leave-active {

    }

    .more-enter /* .fade-leave-active below version 2.1.8 */
    {

    }
</style>