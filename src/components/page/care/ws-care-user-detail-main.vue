<template>

        <el-tabs @tab-click="handleTabClick" v-model="tabActiveName">
            <el-tab-pane label="最新发布" name="essaylist">
                <span slot="label"><i class="el-icon-document"></i> 最新发布</span>
                <ws-common-essay-list :id="id"/>
            </el-tab-pane>
            <el-tab-pane label="最新评论" name="new-comment">
                <span slot="label"><i class="iconfont icon-xiaoxi"></i> 最新评论</span>
                <ws-common-essay-list :id="id"/>
            </el-tab-pane>
            <el-tab-pane label="热门" name="hot">
                <span slot="label"><i class="iconfont icon-huore"></i> 热门</span>
                <ws-common-essay-list :id="id"/>
            </el-tab-pane>
        </el-tabs>
</template>

<script>

    import WsCommonEssayList from '$src/components/common/essay/ws-common-essay-list.vue'

    export default {
        name: "ws-care-user-detail-main",
        components: {
            WsCommonEssayList
        },
        props: {
            //用户标志
            id: {
                type: String
            }
        },
        data() {
            return {
                //当前选中的选项卡
                tabActiveName: 'essaylist'
            }
        },
        methods: {
            handleTabClick(tab) {
            }
        }
    }
</script>

<style scoped>

</style>