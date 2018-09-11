<template>
    <el-row>
        <el-row
                @click.native="handleItemClick(item)"
                v-for="(item,index) in list"
                :key="index"
                class="container-item border-color-first">
            <ws-common-essay-list-item
                    :title="item.title"
                    :content="item.content"
                    :author="item.author"
                    :commentNum="item.commentNum"
                    :imgUrl="item.imgUrl"
                    :likeNum="item.likeNum">
            </ws-common-essay-list-item>
        </el-row>
    </el-row>
</template>

<script>

    import WsCommonEssayListItem from '$src/components/common/essay/ws-common-essay-list-item.vue'

    export default {
        name: "ws-common-essay-list",
        props: {
            list: {
                type: Array
            }
        },
        components: {
            WsCommonEssayListItem
        },
        methods:{
            handleItemClick(item){
                console.log("item:"+item)
                this.$router.push({name:'essaydetail',params:item})
            }
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