<template>
    <el-row class="container-ws-copyright-nav-item border-color-first">
        <slot></slot>
    </el-row>
</template>

<script>
    export default {
        name: "ws-copyright-nav-item"
    }
</script>

<style scoped>

    .container-ws-copyright-nav-item {
        padding: 10px 5px;
        border-top-width: 1px;
        border-top-style: solid;
    }

    a{
        color:#409EFF;
    }
</style>