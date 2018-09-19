<template>
    <el-row class="ws-message-main">
        <h3 class="title">
            <slot name="title"></slot>
        </h3>
        <el-row class="container-shot">
            <slot></slot>
        </el-row>
    </el-row>
</template>

<script>
    export default {
        name: "ws-message-main"
    }
</script>

<style scoped>

    .ws-message-main{
    }

    .title{
        height:30px;
        margin:0 0 10px;
        font-size:14px;
    }

    .container-shot{
        width:100%;
    }

</style>