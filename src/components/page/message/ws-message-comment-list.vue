<template>
    <el-row>
        <el-row class="container-item">
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

<style scoped lang="scss">
    .container-item{
        @include border(top);
        padding:10px;
    }
</style>