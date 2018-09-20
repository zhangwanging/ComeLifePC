<template>
    <el-row>
        <el-row class="header">
            <slot name="header"></slot>
        </el-row>
        <el-row class="main">
            <slot></slot>
        </el-row>
    </el-row>
</template>

<script>
    export default {
        name: "ws-base-layout-main-bottom-header"
    }
</script>

<style scoped>
    .header{
        height:80px;
        overflow: hidden;
    }
</style>