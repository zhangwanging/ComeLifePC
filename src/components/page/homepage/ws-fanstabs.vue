<template>
    <el-tabs @tab-click="handleClick">
        <el-tab-pane label="关注用户" name="essaylist">
            <ws-fanslist :list="list"></ws-fanslist>
        </el-tab-pane>
        <el-tab-pane label="粉丝" name="dynamic">
            未知~
        </el-tab-pane>
    </el-tabs>
</template>

<script>
    import WsFanslist from '$src/components/business-common/ws-fanslist.vue'
    export default {
        name: "ws-fanstabs",
        components:{
            WsFanslist
        },
        data(){
            return{
                list:[]
            }
        },
        methods:{
            handleClick(){
                this.getFansList()
            },
            getFansList(){
                let that=this
                this.request.getUserAttention({},function (err,res) {
                    if(err)return
                    if(res.code===0){
                        that.list=res.data
                    }
                })
            }
        }
    }
</script>

<style scoped>

</style>