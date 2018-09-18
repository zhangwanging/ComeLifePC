<template>
    <el-row>
        <el-row>
            <ws-care-user-detail-header :id="id"/>
        </el-row>
        <el-row>
            <ws-care-user-detail-main :id="id"/>
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
        props:{
            //用户标志
          id:{
              type:String
          }
        },
        data(){
            return{

            }
        },
        created(){
        },
        methods:{
        }
    }
</script>

<style scoped>

</style>