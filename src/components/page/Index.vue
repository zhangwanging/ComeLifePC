<template>
    <div class="container-y container-index" style="height:100%;">
        <Header></Header>
        <router-view class="app-common main" name="main"></router-view>
    </div>
</template>

<script>
    import Header from '$src/components/page/header/Header.vue'
    export default {
        name: "Index",
        components:{
            Header
        }
    }
</script>

<style scoped>

    .container-index{
        align-items: center;
        height:100%;
    }

    .app-common{
        margin-top:40px;
    }

    .main{
        width:960px;
        height:calc(100% - 40px)
    }
</style>