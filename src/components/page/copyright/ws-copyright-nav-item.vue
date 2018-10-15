<template>
    <el-row class="container-ws-copyright-nav-item">
        <slot></slot>
    </el-row>
</template>

<script>
    export default {
        name: "ws-copyright-nav-item"
    }
</script>

<style scoped lang="scss">

    .container-ws-copyright-nav-item {
        padding: 10px 5px;
        @include border(bottom);
    }

    a{
        color:#409EFF;
    }
</style>