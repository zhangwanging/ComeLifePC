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
                titleImg:require('$src/assets/img/hot-day-30.png')
            }
        }
    }
</script>

<style scoped>

</style>