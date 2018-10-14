<template>
    <el-row type="flex" align="middle" justify="space-between">

        <img
                @click="turnToHomePageClick"
                :src="profile.avatar"
                class="avatar"
                alt="">

        <el-col>
            <el-row>
                <h3 @click="turnToHomePageClick"
                    class="title font-size-smalltitle">
                    {{profile.title}}
                </h3>
            </el-row>
            <el-row class="font-color-minor">
                写了{{profile.wordNum}}字，获得了 ▪ {{profile.likeNum}}个喜欢
            </el-row>
        </el-col>

        <el-row class="container-btn" type="flex">
            <el-button
                    @click="turnToInformationClick"
                    size="small"
                    type="primary"
                    round
                    plain>发简信</el-button>
            <el-button
                    @click="turnToHomePageClick"
                    size="small"
                    type="primary"
                    round
                    plain>个人主页</el-button>
        </el-row>

    </el-row>
</template>

<script>
    import {getUserCareProfile} from '$src/api/page/care.js'

    export default {
        name: "ws-care-user-detail-header",
        props:{
            //用户标志
            id:{
                type:String
            }
        },
        data(){
            return{
                profile:{}
            }
        },
        watch:{
            id:function (newId,oldId) {
                this.getUserCareProfileRequest(newId)
            }
        },
        created(){
            this.init()
        },
        methods:{
            init(){
                this.getUserCareProfileRequest(this.id)
            },
            getUserCareProfileRequest(id){
                let that=this
                getUserCareProfile({},function (err,res) {
                    if(res.code===0){
                        that.profile=res.data
                    }
                })
            },

            //转向个人主页
            turnToHomePageClick(){
                this.$router.push({name:'tabsessay'})
            },
            //转向简信
            turnToInformationClick(){
                this.$router.push({name:'information',params:{defaultActive:'information'}})
            }
        }
    }
</script>

<style scoped>

    .avatar {
        width: 50px;
        height: 50px;
        margin-right: 15px;
        -webkit-border-radius: 25px;
        -moz-border-radius: 25px;
        border-radius: 25px;
        cursor:pointer;
    }

    .title{
        margin:0 0 5px;
        cursor:pointer;
    }

    .container-btn .el-button{
        margin-left:15px;
    }
</style>