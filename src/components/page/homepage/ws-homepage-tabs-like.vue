<template>
    <el-tabs @tab-click="handleClick" v-model="tabActiveName">
        <el-tab-pane label="关注的专题/文集/连载" name="subject">
            <span slot="label"><i class="el-icon-document"></i> 关注的专题/文集/连载</span>
            <ws-base-error/>
        </el-tab-pane>
        <el-tab-pane label="喜欢的文章" name="like">
            <span slot="label"><i class="iconfont icon-huore"></i> 喜欢的文章</span>
            <ws-common-essay-list/>
        </el-tab-pane>
    </el-tabs>
</template>

<script>
    import WsCommonEssayList from '$src/components/common/essay/ws-common-essay-list.vue'
    import WsBaseError from '$src/components/base/error/ws-base-error.vue'

    export default {
        name: "ws-homepage-tabs-like",
        components: {
            WsCommonEssayList,
            WsBaseError
        },
        data() {
            return {
                tabActiveName: 'subject',
                dynamic: {}
            };
        },
        created() {
            this.fetchData(this.tabActiveName)
        },
        methods: {
            handleClick(tab, event) {
                this.fetchData(tab.name)
            },
            fetchData(tabName) {
                if (tabName === 'essaylist') {
                } else if (tabName === 'dynamic') {
                    this.getDynamicsByUserId()
                } else if (tabName === 'new-comment') {//仅排序不同
                } else if (tabName === 'hot') {
                }
            }
        }
    }
</script>

<style scoped>

</style>