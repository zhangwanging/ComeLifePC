<template>
    <el-row>
        <el-row>
            <ws-care-user-detail-header
                    :avatar="userCareDetail.avatar"
                    :title="userCareDetail.title"
                    :essayNum="userCareDetail.essayNum"
                    :fansNum="userCareDetail.fansNum"/>
        </el-row>
        <el-row>
            <ws-care-user-detail-main/>
        </el-row>
    </el-row>
</template>

<script>

    import WsCareUserDetailHeader from '$src/components/page/care/ws-care-user-detail-header.vue'
    import WsCareUserDetailMain from '$src/components/page/care/ws-care-user-detail-main.vue'

    export default {
        name: "ws-care-user-detail",
        components:{
            WsCareUserDetailHeader,
            WsCareUserDetailMain
        },
        data(){
            return{
                userCareDetail:{
                    avatar:require(`./logo.png`),
                    title:'title1',
                    essayNum:10,
                    fansNum:11
                }
            }
        },
        methods:{

        }
    }
</script>

<style scoped>

</style>