<template>
    <el-row :gutter="20">
        <el-col :span="14">
            <slot name="left"></slot>
        </el-col>
        <el-col :span="8">
            <slot name="right"></slot>
        </el-col>
    </el-row>
</template>

<script>
    export default {
        name: "ws-mainlayout"
    }
</script>

<style scoped>

</style>