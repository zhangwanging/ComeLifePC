<template>
    <el-tabs @tab-click="handleClick" v-model="tabActiveName">
        <el-tab-pane label="关注用户" name="attention">
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
                tabActiveName:'attention',
                list:[]
            }
        },
        created(){
          this.fetchData(this.tabActiveName)
        },
        methods:{
            handleClick(tab,event){
                this.fetchData(tab.name)
            },
            fetchData(tabName){
              if(tabName==='attention'){
                  this.getFansList()
              }
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