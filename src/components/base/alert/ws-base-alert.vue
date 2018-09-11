<template>
    <transition name="ws-alert-fade">
        <div
                class="ws-alert-container"
                v-show="visible"
                role="alert">
            <div class="ws-alert-content">
                <p class="ws-alert-title">{{title}}</p>
                <slot>
                    <p class="ws-alert-description" v-if="description">{{description}}</p>
                </slot>
            </div>
            <span @click="close" class="ws-alert-close-button">X</span>
        </div>
    </transition>
</template>

<script>
    export default {
        name: "ws-base-alert",
        props: {
            title: {
                type: String,
                default: ''
            },
            description: {
                type: String,
                default: ''
            }
        },
        data() {
            return {
                visible: true
            }
        },
        methods: {
            close(e) {
                this.visible = false;
                this.$emit('click', e);
            }
        }
    }
</script>

<style scoped>
    .ws-alert-container {
        width: 100%;
        display: flex;
        justify-content: space-between;
        box-sizing: border-box;
        min-height: 30px;
        background-color: orange;
        border-radius: 5px;
        padding-top: 5px;
        padding-bottom: 5px;
        padding-left: 15px;
        padding-right: 15px;
    }

    .ws-alert-content {
    }

    .ws-alert-title {
        font-weight: bold;
        margin: 0;
    }

    .ws-alert-description {
        margin: 0;
    }

    .ws-alert-close-button {
        cursor: pointer;
    }

    /*过渡*/
    .ws-alert-fade-enter-active,.ws-alert-fade-leave-active{
        transition:opacity .5s;
    }

    .ws-alert-fade-enter,.ws-alert-fade-leave-to{
        opacity:0;
    }
</style>