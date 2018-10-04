<template>
    <ws-base-layout-main-bottom-header>
        <template slot="header">
            <img :src="require(`$src/assets/img/subject-more-header.png`)"
                 alt=""
                 class="header-img">
        </template>

        <el-tabs v-model="tabActiveName">
            <el-tab-pane label="推荐" name="advice">
                <span slot="label"><i class="iconfont icon-guanzhu1"></i> 推荐</span>
                <ws-subject-more-tab/>
            </el-tab-pane>
            <el-tab-pane label="热门" name="hot">
                <span slot="label"><i class="iconfont icon-huore"></i> 热门</span>
                <ws-subject-more-tab/>
            </el-tab-pane>
            <el-tab-pane label="城市" name="city">
                <span slot="label"><i class="iconfont icon-huwai"></i> 城市</span>
                <ws-subject-more-tab/>
            </el-tab-pane>
            <el-tab-pane label="校园" name="campus">
                <span slot="label"><i class="iconfont icon-home"></i> 校园</span>
                <ws-subject-more-tab/>
            </el-tab-pane>
        </el-tabs>

    </ws-base-layout-main-bottom-header>
</template>

<script>

    /**
     * 注意：数据用的是recommend-author(推荐作者)的数据接口和模板
     */
    import WsBaseLayoutMainBottomHeader from '$src/components/base/ws-base-layout-main-bottom-header.vue'
    import WsSubjectMoreTab from '$src/components/page/subject/ws-subject-more-tab.vue'

    export default {
        name: "ws-subject-more",
        components:{
            WsBaseLayoutMainBottomHeader,
            WsSubjectMoreTab
        },
        data(){
            return{
                tabActiveName:'advice'
            }
        }
    }
</script>

<style scoped>

    .header-img {
        width: 100%;
        height: 100%;
        -webkit-border-radius: 3px;
        -moz-border-radius: 3px;
        border-radius: 3px;
    }
</style>