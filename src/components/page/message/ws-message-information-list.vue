<template>
    <el-row>
        <el-col class="container-item">
             <ws-message-information-list-item/>
        </el-col>
    </el-row>
</template>

<script>

    import WsMessageInformationListItem from '$src/components/page/message/ws-message-information-list-item.vue'

    export default {
        name: "ws-message-information-list",
        components:{
            WsMessageInformationListItem
        }
    }
</script>

<style scoped lang="scss">

    .container-item{
        @include border(top);
        padding:10px;
    }

</style>