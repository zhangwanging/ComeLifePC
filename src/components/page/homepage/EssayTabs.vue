<template>
    <el-tabs @tab-click="handleClick">
        <el-tab-pane label="文章" name="essaylist">
            <ws-essaylist :list="essays"></ws-essaylist>
        </el-tab-pane>
        <el-tab-pane label="动态" name="dynamic">
            <ws-dynamiclist :dynamic="dynamic"></ws-dynamiclist>
        </el-tab-pane>
        <el-tab-pane label="最新评论" name="new-comment">
            <ws-essaylist :list="essays"></ws-essaylist>
        </el-tab-pane>
        <el-tab-pane label="热门" name="hot">
            <ws-essaylist :list="essays"></ws-essaylist>
        </el-tab-pane>
    </el-tabs>
</template>

<script>
    import WsEssaylist from '$src/components/business-common/ws-essaylist.vue'
    import WsDynamiclist from '$src/components/business-common/ws-dynamiclist.vue'
    export default {
        name: "EssayTabs",
        components: {
            WsEssaylist,
            WsDynamiclist
        },
        data() {
            return {
                essays:[],
                dynamic:{}
            };
        },
        methods:{
            handleClick(tab, event) {
                console.log(tab, event);
                this.fetchData(tab.name)
            },
            fetchData(tabName){
                if(tabName==='essaylist'){
                    this.getEssaysByUserId()
                }else if(tabName==='dynamic'){
                    this.getDynamicsByUserId()
                }else if(tabName==='new-comment'){//仅排序不同
                    this.getEssaysByUserId()
                }else if(tabName==='hot'){
                    this.getEssaysByUserId()
                }
            },
            getEssaysByUserId(){
                let that=this
                this.request.getEssaysByUserId({
                    id:'',
                },function (err,res) {
                    if(err)return;
                    if(res.code===0){
                        that.essays=res.data
                    }
                })
            },
            getDynamicsByUserId(){
                let that=this
                this.request.getDynamicsByUserId({
                    id:'',
                },function (err,res) {
                    console.log(JSON.stringify(res.data))
                    if(err)return;
                    if(res.code===0){
                        that.dynamic=res.data
                    }
                })
            }
        }
    }
</script>

<style scoped>

</style>