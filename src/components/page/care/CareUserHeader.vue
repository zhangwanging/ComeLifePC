<template>
    <el-row type="flex" align="middle">
        <img src="./logo.png" alt="" width="80" height="80">
        <el-col :span="10">
            <el-row>
                <h3>短片小说</h3>
            </el-row>
            <el-row>
                <span>简书 遍.</span>
                <span>收录了</span>
                <span>71229</span>
                <span>篇文章.</span>
                <span>2268028</span>
                <span>人关注</span>
            </el-row>
        </el-col>
        <el-button size="small" type="primary">投稿</el-button>
        <el-button size="small" type="primary">专题主页</el-button>
    </el-row>
</template>

<script>
    export default {
        name: "CareUser"
    }
</script>

<style scoped>

</style>