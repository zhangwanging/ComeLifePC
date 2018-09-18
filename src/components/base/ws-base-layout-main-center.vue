<template>
    <el-row type="flex" justify="center">
        <el-col
                :xs="24"
                :sm="20"
                :md="18"
                :lg="13"
                :xl="12"
                class="rs-container-main">
            <slot></slot>
        </el-col>
    </el-row>
</template>

<script>
    export default {
        name: "ws-base-layout-main-center"
    }
</script>

<style scoped>

    .el-row, .el-col {
        height: 100%;
    }

</style>