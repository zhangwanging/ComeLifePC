<template>
    <ws-message-main>
        <span slot="title">收到的喜欢和赞</span>
        <ws-base-error/>
    </ws-message-main>
</template>

<script>
    import WsMessageMain from '$src/components/page/message/ws-message-main.vue'
    import WsBaseError from '$src/components/base/error/ws-base-error.vue'
    export default {
        name: "ws-message-favour",
        components:{
            WsMessageMain,
            WsBaseError
        }
    }
</script>

<style scoped>

</style>