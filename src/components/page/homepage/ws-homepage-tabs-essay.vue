<template>
    <el-tabs @tab-click="handleClick" v-model="tabActiveName">
        <el-tab-pane label="文章" name="essaylist">
            <ws-common-essay-list/>
        </el-tab-pane>
        <el-tab-pane label="动态" name="dynamic">
            <ws-homepage-dynamic-list :dynamic="dynamic"/>
        </el-tab-pane>
        <el-tab-pane label="最新评论" name="new-comment">
            <ws-common-essay-list/>
        </el-tab-pane>
        <el-tab-pane label="热门" name="hot">
            <ws-common-essay-list/>
        </el-tab-pane>
    </el-tabs>
</template>

<script>
    import WsCommonEssayList from '$src/components/common/essay/ws-common-essay-list.vue'
    import WsHomepageDynamicList from '$src/components/page/homepage/ws-homepage-dynamic-list.vue'

    export default {
        name: "ws-homepage-tabs-essay",
        components: {
            WsCommonEssayList,
            WsHomepageDynamicList
        },
        data() {
            return {
                tabActiveName: 'essaylist',
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
            },

            //获取用户动态
            getDynamicsByUserId() {
                let that = this
                this.request.getDynamicsByUserId({
                    id: '',
                }, function (err, res) {
                    if (err) return;
                    if (res.code === 0) {
                        that.dynamic = res.data
                    }
                })
            }
        }
    }
</script>

<style scoped>

</style>