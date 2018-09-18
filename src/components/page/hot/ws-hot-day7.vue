<template>
    <hot-day :title-img="titleImg"/>
</template>

<script>

    import HotDay from '$src/components/page/hot/ws-hot-day.vue'

    export default {
        name: "ws-hot-day7",
        components:{
            HotDay
        },
        data(){
            return{
                titleImg:'https://cdn2.jianshu.io/assets/web/seven-hot-344e8726a99ec07a8d552b33fe50be82.png'
            }
        }
    }
</script>

<style scoped>

</style>