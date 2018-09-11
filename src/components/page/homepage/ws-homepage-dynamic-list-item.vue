<template>
    <el-row >
        <template v-if="type===0">
            <el-row type="flex" align="middle" class="container-header">
                <img  :src="atavar" alt="" class="atavar">
                <span class="username">{{name}}</span>
                <span class="text-behavior font-color-minor">发表了文章</span>
                <span class="text-behavior font-color-minor">{{time}}</span>
            </el-row>
            <el-row>
                <slot></slot>
            </el-row>
        </template>
    </el-row>
</template>

<script>
    export default {
        name: "ws-homepage-dynamic-list-item",
        props: {
            type: {
                type: Number,
                default: 0
            },
            atavar: {
                type: String
            },
            name: {
                type: String
            },
            time: {
                type: String
            }
        },
        methods:{

        }
    }
</script>

<style scoped>

    /*头部*/
    .container-header{
        margin-bottom:5px;
    }

    .atavar{
        width:20px;
        height:20px;
        border-radius: 10px;
    }

    .username {
        margin: 0 7px;
    }

    .text-behavior {
        margin-right: 7px;
    }
    /*end 头部*/
</style>