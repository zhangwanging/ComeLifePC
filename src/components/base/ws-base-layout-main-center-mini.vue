<template>
    <el-row type="flex" justify="center">
        <el-col
                :xs="20"
                :sm="20"
                :md="11"
                :lg="11"
                :xl="11"
                class="ws-sm-layout-main-center">
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