<template>
    <el-row>
        <el-row
                class="container-item border-color-first"
                v-for="item in dynamic.contents">
            <ws-dynamicitem
                    :type="item.type"
                    :name="dynamic.name"
                    :atavar="dynamic.atavar"
                    :time="item.time">
                <ws-essayitem
                        v-if="item.type===0"
                        :title="item.title"
                        :content="item.content"
                        :author="item.author"
                        :commentNum="item.commentNum"
                        :imgUrl="item.imgUrl"
                        :likeNum="item.likeNum">
                </ws-essayitem>
            </ws-dynamicitem>
        </el-row>
    </el-row>
</template>

<script>

    /*
                   dynamic:{
                    id:'1',
                    name:'name',
                    atavar:require(`./logo.png`),
                    contents:[
                        {
                            id:'1',
                            type:0,
                            title:'title',
                            content:'content',
                            author:'author',
                            commentNum:22,
                            imgUrl:require(`./logo.png`),
                            likeNum:33,
                            time:'2019.1.1'
                        }
                    ]
                }
     */

    import WsDynamicitem from '$src/components/business-common/ws-dynamicitem.vue'
    import WsEssayitem from '$src/components/business-common/ws-essayitem.vue'

    export default {
        name: "ws-dynamiclist",
        props:{
            dynamic:{
                type:Object
            }
        },
        components:{
            WsDynamicitem,
            WsEssayitem
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