<template>
    <ws-message-main>
        <span slot="title">全部简信</span>
        <ws-message-information-list/>
    </ws-message-main>
</template>

<script>
    import WsMessageMain from '$src/components/page/message/ws-message-main.vue'
    import WsBaseError from '$src/components/base/error/ws-base-error.vue'
    import WsMessageInformationList from '$src/components/page/message/ws-message-information-list.vue'
    export default {
        name: "ws-message-information",
        components:{
            WsMessageMain,
            WsBaseError,
            WsMessageInformationList
        }
    }
</script>

<style scoped>

</style>