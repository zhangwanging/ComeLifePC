<template>
    <el-row>
        <el-row
                v-for="(item,index) in list"
                :key="index"
                class="container-item">
            <ws-homepage-fans-list-item
                    :avatar="item.avatar"
                    :title="item.title"
                    :attentionNum="item.attentionNum"
                    :fansNum="item.fansNum"
                    :essayNum="item.essayNum"
                    :wordNum="item.wordNum"
                    :likeNum="item.likeNum"
                    :isAttention="item.isAttention"
            ></ws-homepage-fans-list-item>
        </el-row>
    </el-row>
</template>

<script>

    import WsHomepageFansListItem from '$src/components/page/homepage/ws-homepage-fans-list-item.vue'
    export default {
        name: "ws-homepage-fans-list",
        components:{
            WsHomepageFansListItem
        },
        props:{
            list:{
                type:Array
            }
        }
    }
</script>

<style scoped lang="scss">
    .container-item{
        padding: 10px 0;
        @include border(bottom);
    }
</style>