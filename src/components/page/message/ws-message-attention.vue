<template>
    <ws-message-main>
        <span slot="title">全部关注</span>
        <ws-base-error/>
    </ws-message-main>

</template>

<script>
    import WsMessageMain from '$src/components/page/message/ws-message-main.vue'
    import WsBaseError from '$src/components/base/ws-base-error.vue'
    export default {
        name: "ws-message-attention",
        components:{
            WsMessageMain,
            WsBaseError
        }
    }
</script>

<style scoped>

</style>