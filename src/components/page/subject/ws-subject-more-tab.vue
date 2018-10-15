<template>
    <!--作者网格布局-->
    <el-row>
        <el-row class="container-author-grid" :gutter="20">
            <el-col v-for="(author,index) in authors"
                    :key="index"
                    :span="8">
                <ws-subject-more-tab-item
                        :is-attention="author.isAttention"
                        :profile="author.profile"
                        :name="author.name"
                        :avatar="author.avatar"/>
            </el-col>
        </el-row>

        <!--加载更多按钮-->
        <el-row type="flex" justify="center">
            <el-button
                    @click="getMoreRecommendAuthorClick"
                    class="btn-loadmore"
                    size="small"
                    type="info"
                    round>
                加载更多
            </el-button>
        </el-row>
    </el-row>
</template>

<script>

    import WsSubjectMoreTabItem from '$src/components/page/subject/ws-subject-more-tab-item.vue'
    import {getAllRecommendAuthor} from '$src/api/common/recommend-author.js'
    export default {
        name: "ws-subject-more-tab",
        components: {
            WsSubjectMoreTabItem
        },
        data() {
            return {
                authors: []
            }
        },
        created() {
            this.init()
        },
        methods: {
            init() {
                this.getInitRecommendAuthor()
            },

            //请求获取推荐作者
            getAllRecommendAuthorRequest(fun) {
                getAllRecommendAuthor({}, function (err, res) {
                    if (res.code === 0) {
                        fun(res.data)
                    }
                })
            },

            //初始获取作者
            getInitRecommendAuthor(){
                let that = this
                this.getAllRecommendAuthorRequest(function (data) {
                    that.authors=data
                })
            },

            //获取更多作者事件
            getMoreRecommendAuthorClick(){
                let that = this
                this.getAllRecommendAuthorRequest(function (data) {
                    that.authors=that.authors.concat(data)
                })
            }
        }
    }
</script>

<style scoped>


    /*头部*/
    .header-img {
        width: 100%;
        height: 100%;
        -webkit-border-radius: 3px;
        -moz-border-radius: 3px;
        border-radius: 3px;
    }

    /*推荐作者网格布局*/
    .container-author-grid {

    }

    .container-author-grid .el-col{
        margin-top:30px;
    }

    /*加载更多按钮*/
    .btn-loadmore {
        width: 50%;
        margin-top:35px;
        margin-bottom: 70px !important;
    }

</style>