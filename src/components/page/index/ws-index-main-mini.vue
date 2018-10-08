<template>
    <ws-base-layout-main-center-mini>
        <router-view></router-view>
    </ws-base-layout-main-center-mini>
</template>

<script>
    import WsBaseLayoutMainCenterMini from '$src/components/base/layout/ws-base-layout-main-center-mini.vue'

    export default {
        name: "ws-index-main-mini",
        components:{
            WsBaseLayoutMainCenterMini
        }
    }
</script>

<style scoped>

</style>