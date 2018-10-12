<template>
    <div
            id="app"
            class="container-app">

        <transition name="fade">
            <!--首页的不同排版，index是默认排版-->
            <router-view name="index"/>
            <router-view name="writeessay"/>
            <router-view name="session"/>
            <!--优选连载-->
            <router-view name="serial"/>
        </transition>
        <ws-base-scroll-to-top/>
    </div>
</template>

<script>

    import WsBaseScrollToTop from '$src/components/base/scroll/ws-base-scrolltotop.vue'

    export default {
        name: 'App',
        components:{
            WsBaseScrollToTop
        },
        data() {
            return {
            }
        },
        created() {

        }
    }
</script>

<style scoped lang="scss">

    .container-app {
        height: 100%;
    }

</style>
