<template>
    <ws-message-main>
        <span slot="title">收到的评论</span>
        <ws-message-comment-list/>
    </ws-message-main>
</template>

<script>
    import WsMessageMain from '$src/components/page/message/ws-message-main.vue'
    import WsBaseError from '$src/components/base/error/ws-base-error.vue'
    import WsMessageCommentList from '$src/components/page/message/ws-message-comment-list.vue'

    export default {
        name: "ws-message-comment",
        components: {
            WsMessageMain,
            WsBaseError,
            WsMessageCommentList
        }
    }
</script>

<style scoped>

</style>