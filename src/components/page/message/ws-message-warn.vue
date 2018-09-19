<template>
    <ws-message-main>
        <span slot="title">其他提醒</span>
        <ws-base-error/>
    </ws-message-main>
</template>

<script>
    import WsMessageMain from '$src/components/page/message/ws-message-main.vue'
    import WsBaseError from '$src/components/base/ws-base-error.vue'
    export default {
        name: "ws-message-warn",
        components:{
            WsMessageMain,
            WsBaseError
        }
    }
</script>

<style scoped>

</style>