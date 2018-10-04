<template>
    <el-row :gutter="40" type="flex" justify="center">
        <el-col
                class="ws-sm-layout-main-center"
                :xs="14"
                :sm="14"
                :md="14"
                :lg="14"
                :xl="14">
            <slot name="left"></slot>
        </el-col>
        <el-col
                class="hidden-sm-and-down"
                :xs="8"
                :sm="8"
                :md="8"
                :lg="8"
                :xl="8">
            <slot name="right"></slot>
        </el-col>
    </el-row>
</template>

<script>
    export default {
        name: "ws-base-layout-main-left-aside-right"
    }
</script>

<style scoped>

</style>