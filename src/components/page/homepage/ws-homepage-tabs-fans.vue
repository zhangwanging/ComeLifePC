<template>
    <el-tabs @tab-click="handleClick" v-model="tabActiveName">
        <el-tab-pane label="关注用户" name="attention">
            <ws-homepage-fans-list :list="list"></ws-homepage-fans-list>
        </el-tab-pane>
        <el-tab-pane label="粉丝" name="dynamic">
            无~
        </el-tab-pane>
    </el-tabs>
</template>

<script>

    import WsHomepageFansList from '$src/components/page/homepage/ws-homepage-fans-list.vue'
    import {getUserAttention} from '$src/api/page/homepage.js'

    export default {
        name: "ws-homepage-tabs-fans",
        components:{
            WsHomepageFansList
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
                getUserAttention({},function (err,res) {
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