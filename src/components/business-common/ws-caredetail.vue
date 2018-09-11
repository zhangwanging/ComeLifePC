<template>
    <el-row>
        <el-row>
            <CareUserHeader
                    :avatar="userCareDetail.avatar"
                    :title="userCareDetail.title"
                    :essayNum="userCareDetail.essayNum"
                    :fansNum="userCareDetail.fansNum">
            </CareUserHeader>
        </el-row>
        <el-row>
            <EssayTabs></EssayTabs>
        </el-row>
    </el-row>
</template>

<script>

    import EssayTabs from '$src/components/page/homepage/EssayTabs.vue'
    import CareUserHeader from '$src/components/page/care/CareUserHeader.vue'
    export default {
        name: "ws-caredetail",
        components:{
            EssayTabs,
            CareUserHeader
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