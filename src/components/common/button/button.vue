<template>
    <button @click="handleClick" class="ws-button">
        <slot></slot>
    </button>
</template>

<script>
    export default {
        name: "WsButton",
        methods: {
            handleClick(e) {
                this.$emit('click', e);
            }
        }
    }
</script>

<style scoped>
    .ws-button {
        border: 1px solid gray;
        border-radius: 5px;
        padding-left: 20px;
        padding-right: 20px;
        width:100px;
        height:35px;
        background-color: white;
        text-align: center;
    }
</style>