<template>
    <el-row class="container-ws-copyright-nav">
        <h3 class="title">
            <slot name="title"></slot>
        </h3>
        <el-row>
            <slot name="content"></slot>
        </el-row>
    </el-row>
</template>

<script>
    export default {
        name: "ws-copyright-nav"
    }
</script>

<style scoped>

    .container-ws-copyright-nav {
        margin-bottom: 35px;
    }

    .title {
        font-size: 14px;
        margin: 0 0 10px;
    }

</style>