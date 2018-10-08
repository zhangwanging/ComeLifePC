<template>
    <ws-base-layout-main-left-aside-right>
        <template slot="left">
            <el-row>
                <img class='title-img' :src="titleImg" alt="">
            </el-row>
            <el-row>
                <ws-common-essay-list/>
            </el-row>
        </template>
        <template slot="right">
            <ws-common-recommend-author/>
        </template>
    </ws-base-layout-main-left-aside-right>
</template>

<script>
    import WsBaseLayoutMainLeftAsideRight from '$src/components/base/layout/ws-base-layout-main-left-aside-right.vue'
    import WsCommonEssayList from '$src/components/common/essay/ws-common-essay-list.vue'
    import WsCommonRecommendAuthor from '$src/components/common/recommend-author/ws-common-recommend-author.vue'

    export default {
        name: "ws-hot-day",
        components: {
            WsBaseLayoutMainLeftAsideRight,
            WsCommonEssayList,
            WsCommonRecommendAuthor
        },
        props: {
            titleImg: {
                type: String
            },
            type: {
                type: Number
            }
        },
        data() {
            return {}
        },
        created() {
            this.init()
        },
        methods: {

            init() {

            }
        }
    }
</script>

<style scoped>
    .title-img {
        width: 100%;
        height: 80px;
        -webkit-border-radius: 3px;
        -moz-border-radius: 3px;
        border-radius: 3px;
    }
</style>