<template>
    <el-row type="flex" justify="center">
        <el-col
                :xs="24"
                :sm="20"
                :md="16"
                :lg="18"
                :xl="18"
                class="container-ws-base-layout-main-center">
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

    .container-ws-base-layout-main-center{

    }

    .el-row, .el-col {

    }

</style>
