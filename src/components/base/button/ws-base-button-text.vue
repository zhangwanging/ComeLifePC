<template>

    <div class="container">
        <el-button v-if="type!=='text'" type="type" size="mini">

        </el-button>
        <el-button v-if="type=='text'"
                   class="type-text"
                   :type="type"
                   :loading="loading"
                   @click="handleClick">
            <span class="font-slot">
                <slot></slot>
            </span>
        </el-button>
    </div>

</template>

<script>

    export default {
        name: "ws-base-button-text",
        props: {
            type: {
                type: String,
                default: 'text'
            },
            loading: {
                type: Boolean,
                default: false
            }
        },
        methods: {
            handleClick(e) {
                this.$emit('click', e)
            }
        }
    }
</script>

<style scoped lang="scss">

    .container {
        display: inline-block;

        .type-text {
            padding: 0;
        }
        .font-slot{
            color:$font-color-formal;
            font-size:$font-size-formal;
        }
    }


</style>