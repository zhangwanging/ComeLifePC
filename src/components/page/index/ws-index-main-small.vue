<template>
    <ws-base-layout-main-center>
        <router-view/>
    </ws-base-layout-main-center>
</template>

<script>

    import WsBaseLayoutMainCenter from '$src/components/base/layout/ws-base-layout-main-center.vue'

    export default {
        name: "ws-index-main-small",
        components:{
            WsBaseLayoutMainCenter
        }
    }
</script>

<style scoped>

</style>