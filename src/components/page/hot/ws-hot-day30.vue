<template>
    <hot-day :title-img="titleImg"/>
</template>

<script>

    import HotDay from '$src/components/page/hot/ws-hot-day.vue'

    export default {
        name: "ws-hot-day30",
        components:{
            HotDay
        },
        data(){
            return{
                titleImg:'https://cdn2.jianshu.io/assets/web/thirty-hot-f02153a572050a38141287bda2503320.png'
            }
        }
    }
</script>

<style scoped>

</style>