<template>
    <el-container>
        <el-header>
            <Header class="rs-container-header"></Header>
        </el-header>
        <el-main>
            <el-row type="flex" justify="center">
                <el-col :xs="24"  :sm="20" :md="18" :lg="14" xl="12" class=" rs-container-main container-main">
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
    import Header from '$src/components/page/header/Header.vue'
    export default {
        name: "Index",
        components:{
            Header
        }
    }
</script>

<style scoped>
    .el-header{
        width:100%;
        position: fixed;
        top:0;
        left:0;
        border-bottom: 1px solid gray;
        z-index:1;
        background-color: white;
    }

    .el-main{
        margin-top:60px;
        z-index:0;
    }

    .container-main{
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }


</style>