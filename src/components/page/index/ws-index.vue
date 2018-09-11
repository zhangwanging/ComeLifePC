<template>
    <el-container class="container">
        <el-header class="border-color-first">
            <ws-index-header class="rs-container-header"/>
        </el-header>
        <el-main>
            <el-row type="flex" justify="center">
                <el-col :xs="24"  :sm="20" :md="18" :lg="14" :xl="12" class=" rs-container-main container-main">
                    <router-view name="main"></router-view>
                    <router-view name="homepage"></router-view>
                    <router-view name="setting"></router-view>
                    <router-view name="message"></router-view>
                    <router-view name="care"></router-view>
                    <router-view name="feedback"></router-view>
                    <router-view name="essay"></router-view>
                </el-col>
            </el-row>
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

    .container,.el-row,.el-col{
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
    }

    .container-main{
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }

</style>