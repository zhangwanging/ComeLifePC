<template>
    <el-container>
        <el-header>
            <Header></Header>
        </el-header>
        <el-main>
            <el-row type="flex" justify="center">
                <el-col :span="14">
                    <router-view name="main"></router-view>
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
    }
</style>