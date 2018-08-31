<template>
    <el-row>
        <el-col v-if="type===1">
            <div class="error">
                <img src="./icon_sorry.png" width="200" height="200" alt="">
                <p>服务器连接出错~</p>
            </div>
        </el-col>
        <el-col v-if="type===2">
            <div class="error">
                <img src="./icon_sorry.png" width="200" height="200" alt="">
                <p>空空如也~</p>
            </div>
        </el-col>
        <el-col v-if="type===0">
            <slot></slot>
        </el-col>
    </el-row>
</template>

<script>
    export default {
        name: "ErrorMsg",
        props: {
            type:{
                type:Number,
                default:0
            }
        },
        data: function () {
            return {}
        }
    }
</script>

<style scoped>
    .error {
        width: 300px;
        height: 300px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: fixed;
        top: calc(50% - 150px);
        left: calc(50% - 150px);
        text-align: center;
    }
</style>