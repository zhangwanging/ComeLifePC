<template>

    <div class="container">
        <el-button v-if="type!=='text'" type="type" size="mini">

        </el-button>
        <el-button v-else
                   class="type-text"
                   type="text"
                   :loading="loading"
                    @click="handleClick">
            <span class="font-color-minor font-size-content">
                <slot></slot>
            </span>
        </el-button>
    </div>

</template>

<script>

    /**
     * 修饰作用
     */
    export default {
        name: "ws-button",
        props: {
            type: {
                type: String,
                default: 'primary'
            },
            loading:{
                type:Boolean,
                default:false
            }
        },
        methods:{
            handleClick(e){
                this.$emit('click',e)
            }
        }
    }
</script>

<style scoped>

    .container {
        display: inline-block;
    }

    .type-text {
        padding: 0;
    }
</style>