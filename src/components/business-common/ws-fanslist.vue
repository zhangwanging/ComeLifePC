<template>
    <el-row>
        <el-row
                v-for="item in list"
                class="container-item border-color-first">
            <ws-fansitem
                    :avatar="item.avatar"
                    :title="item.title"
                    :attentionNum="item.attentionNum"
                    :fansNum="item.fansNum"
                    :essayNum="item.essayNum"
                    :wordNum="item.wordNum"
                    :likeNum="item.likeNum"
                    :isAttention="item.isAttention"
            ></ws-fansitem>
        </el-row>
    </el-row>
</template>

<script>

    import WsFansitem from '$src/components/business-common/ws-fansitem.vue'
    export default {
        name: "ws-fanslist",
        components:{
            WsFansitem
        },
        props:{
            list:{
                type:Array
            }
        }
    }
</script>

<style scoped>
    .container-item{
        padding: 10px 0;
        border-bottom-width: 1px;
        border-bottom-style: solid;
    }
</style>