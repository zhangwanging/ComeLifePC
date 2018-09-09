<template>
    <el-row>
        <el-row
                v-for="(item,index) in list"
                :key="index"
                class="container-item border-color-first">
            <ws-essayitem
                    :title="item.title"
                    :content="item.content"
                    :author="item.author"
                    :commentNum="item.commentNum"
                    :imgUrl="item.imgUrl"
                    :likeNum="item.likeNum">
            </ws-essayitem>
        </el-row>
    </el-row>
</template>

<script>

    import WsEssayitem from '$src/components/business-common/ws-essayitem.vue'

    export default {
        name: "ws-essaylist",
        props: {
            list: {
                type: Array
            }
        },
        components: {
            WsEssayitem
        }
    }
</script>

<style scoped>
    .container-item {
        padding: 10px 0;
        border-bottom-width: 1px;
        border-bottom-style: solid;
    }
</style>