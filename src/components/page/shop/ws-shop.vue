<template>
    <el-row>
        <ws-base-layout-main-bottom-header>
            <template slot="header">
                <img
                        class="header-img"
                        :src="require(`$src/assets/img/recommend-author.png`)"
                        alt="">
            </template>
        </ws-base-layout-main-bottom-header>
    </el-row>
</template>

<script>

    import WsBaseLayoutMainCenter from '$src/components/base/ws-base-layout-main-center.vue'
    import WsBaseLayoutMainBottomHeader from '$src/components/base/ws-base-layout-main-bottom-header.vue'

    export default {
        name: "ws-shop",
        components: {
            WsBaseLayoutMainCenter,
            WsBaseLayoutMainBottomHeader
        }
    }
</script>

<style scoped>
    /*头部*/
    .header-img {
        width: 100%;
        height: 100%;
        -webkit-border-radius: 3px;
        -moz-border-radius: 3px;
        border-radius: 3px;
    }
</style>