<template>
    <el-row class="container-ws-base-error">
        <img class="errorImg" :src="errorImgUrl" alt="">
        <p class="content">这里还木有内容哦~</p>
    </el-row>
</template>

<script>
    export default {
        name: "ws-base-error",
        data(){
            return{
                errorImgUrl:require(`./error.png`)
            }
        }
    }
</script>

<style scoped>

    .container-ws-base-error{
        display: flex;
        flex-direction: column;
        align-items: center;
        width:100%;
        margin-top:60px;
    }

    .errorImg{
        width:80px;
        height:80px;
    }

    .content{
        font-weight: bold;
    }

</style>