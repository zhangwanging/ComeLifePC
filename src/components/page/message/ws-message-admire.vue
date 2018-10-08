<template>
    <ws-message-main>
        <span slot="title">赞赏和付费</span>
        <ws-base-error/>
    </ws-message-main>

</template>

<script>
    import WsMessageMain from '$src/components/page/message/ws-message-main.vue'
    import WsBaseError from '$src/components/base/error/ws-base-error.vue'
    export default {
        name: "ws-message-admire",
        components:{
            WsMessageMain,
            WsBaseError
        }
    }
</script>

<style scoped>

</style>