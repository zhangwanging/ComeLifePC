<template>
    <el-row>
        <ws-base-error/>
    </el-row>
</template>

<script>

    import WsBaseError from '$src/components/base/error/ws-base-error.vue'
    export default {
        name: "ws-wallet",
        components: {WsBaseError}
    }
</script>

<style scoped>

</style>