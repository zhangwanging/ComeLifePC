<template>
    <el-row>
        <el-row
                v-for="(item,index) in essays"
                :key="index"
                class="container-item border-color-first">
            <ws-common-essay-list-item
                    :title="item.title"
                    :content="item.content"
                    :author="item.author"
                    :commentNum="item.commentNum"
                    :imgUrl="item.imgUrl"
                    :likeNum="item.likeNum">
            </ws-common-essay-list-item>
        </el-row>
        <el-button
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


    export default {
        name: "ws-common-essay-list",
        components: {
            WsCommonEssayListItem
        },
        props: {

        },
        data(){
          return{
              //文章列表
              essays: []
          }
        },
        created() {
            this.init()
        },
        methods:{
            init(){
                this.getEssaysRequest()
            },

            //获取文章列表
            getEssaysRequest() {
                let that = this
                this.request.getColdJoke(undefined, function (err, res) {
                    if (err) {
                        return
                    }
                    if (res.code === 0) {
                        if (res.data.length !== 0) {
                            that.essays = that.essays.concat(res.data)
                        }
                    }
                })
            },

            getMoreEssaysClick() {
                this.getEssaysRequest()
            }
        }
    }
</script>

<style scoped>
    .container-item {
        padding: 10px 0;
        border-bottom-width: 1px;
        border-bottom-style: solid;
    }

    .btn-leanmore {
        width: 100%;
        margin-top: 20px;
        margin-bottom: 60px;
    }

</style>