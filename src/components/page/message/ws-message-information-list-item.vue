<template>
    <el-row type="flex" align="middle">
        <img class="avatar" :src="require(`$src/assets/star.jpg`)" alt="">
        <el-col>
            <el-row
                    type="flex"
                    justify="space-between"
                    align="middle">
                <span>疯哥哥</span>
                <span class="font-color-minor">09.18 15:07 </span>
            </el-row>
            <span class="font-color-minor">这么开心的？</span>
        </el-col>
    </el-row>
</template>

<script>
    export default {
        name: "ws-message-information-list-item"
    }
</script>

<style scoped>

    .avatar{
        width:40px;
        height:40px;
        margin-right:10px;
        -webkit-border-radius: 20px;
        -moz-border-radius: 20px;
        border-radius: 20px;
    }
    
</style>