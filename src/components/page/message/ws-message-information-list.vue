<template>
    <el-row>
        <el-col class="container-item border-color-first">
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

<style scoped>

    .container-item{
        border-top-width: 1px;
        border-top-style: solid;
        padding:10px;
    }

</style>