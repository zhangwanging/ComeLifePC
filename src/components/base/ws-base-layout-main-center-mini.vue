<template>
    <el-row type="flex" justify="center">
        <el-col
                :span="10"
                class="rs-container-main">
            <slot></slot>
        </el-col>
    </el-row>
</template>

<script>
    export default {
        name: "ws-base-layout-main-center-mini"
    }
</script>

<style scoped>

    .el-row, .el-col {
        height: 100%;
    }

</style>