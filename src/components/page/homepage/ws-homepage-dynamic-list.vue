<template>
    <el-row>
        <el-row
                class="container-item border-color-first"
                v-for="(item,index) in dynamic.contents" :key="index">
            <ws-homepage-dynamic-list-item
                    :type="item.type"
                    :name="dynamic.name"
                    :atavar="dynamic.atavar"
                    :time="item.time">
                <ws-common-essay-list-item
                        v-if="item.type===0"
                        :title="item.title"
                        :content="item.content"
                        :author="item.author"
                        :commentNum="item.commentNum"
                        :imgUrl="item.imgUrl"
                        :likeNum="item.likeNum">
                </ws-common-essay-list-item>
            </ws-homepage-dynamic-list-item>
        </el-row>
    </el-row>
</template>

<script>

    import WsHomepageDynamicListItem from '$src/components/page/homepage/ws-homepage-dynamic-list-item.vue'
    import WsCommonEssayListItem from '$src/components/common/essay/ws-common-essay-list-item.vue'

    export default {
        name: "ws-homepage-dynamic-list",
        props:{
            dynamic:{
                type:Object
            }
        },
        components:{
            WsHomepageDynamicListItem,
            WsCommonEssayListItem
        },
        data(){
            return{

            }
        }
    }
</script>

<style scoped>
    .container-item{
        padding:10px 0;
        border-bottom-width: 1px;
        border-bottom-style:solid;
    }

</style>