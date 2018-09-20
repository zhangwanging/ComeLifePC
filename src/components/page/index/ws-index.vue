<template>
    <el-container class="container">
        <el-header class="border-color-first">
            <ws-index-header class="rs-container-header"/>
        </el-header>
        <el-main>
            <router-view/>
        </el-main>
    </el-container>
</template>

<script>
    import WsIndexHeader from '$src/components/page/index/ws-index-header.vue'

    export default {
        name: "ws-index",
        components:{
            WsIndexHeader
        }
    }
</script>

<style scoped>

    .container{
        height:100%;
    }

    .el-header{
        width:100%;
        position: fixed;
        top:0;
        left:0;
        border-bottom-width: 1px;
        border-bottom-style: solid;
        z-index:1;
        background-color: white;
    }

    .el-main{
        height:calc(100% - 60px);
        padding-bottom: 0;
        margin-top:60px;
        z-index:0;
        overflow:visible;
    }


</style>