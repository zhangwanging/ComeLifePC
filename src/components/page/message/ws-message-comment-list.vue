<template>
    <el-row>
        <el-row class="container-item border-color-first">
            <ws-message-comment-list-item/>
        </el-row>
    </el-row>
</template>

<script>

    import WsMessageCommentListItem from '$src/components/page/message/ws-message-comment-list-item.vue'

    export default {
        name: "ws-message-comment-list",
        components:{
            WsMessageCommentListItem
        }
    }
</script>

<style scoped>
    .container-item{
        border-top-width: 1px;
        border-top-style: solid;
        padding:10px;
    }
</style>