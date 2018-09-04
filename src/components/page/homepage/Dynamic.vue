<template>
    <el-row>
        <el-row class="item-container" type="flex" align="middle" v-for="i in 6">
            <el-col :span="18">
                <el-row type="flex" align="middle">
                    <img src="../setting/logo.png" alt="" width="24" height="24">
                    <span class="username">携手前行</span>
                    <span class="activity-outline">喜欢了文章</span>
                    <span class="activity-outline">08.28 10:35</span>
                </el-row>
                <el-row>
                    <h3>微信小程序常见的UI框架/组件库总结</h3>
                    <p class="activity-outline">
                        想要开发出一套高质量的小程序，运用框架，组件库是省时省力省心必不可少一部分，随着小程序日渐火爆，各种不同类型的小程序也渐渐更新，其中不乏一些优秀好用的框架/组件库。 1：We...</p>
                </el-row>
                <el-row>
                    <span class="activity-outline">祈澈菇凉</span>
                    <i></i>
                    <span class="activity-outline">1203</span>
                    <i></i>
                    <span class="activity-outline">3</span>
                    <i></i>
                    <span class="activity-outline">44</span>
                </el-row>
            </el-col>
            <el-col :span="6" class="item-img-container">
                <el-row class="item-img-wrapper" type="flex" align="middle">
                    <img src="../setting/logo.png" alt="" width="125" height="100">
                </el-row>
            </el-col>
        </el-row>
    </el-row>
</template>

<script>
    export default {
        name: "Dynamic"
    }
</script>

<style scoped>

    .item-container{
        height:180px;
        border-bottom: 1px solid lightgrey;
    }

    .username {
        margin: 0 5px;
    }

    .activity-outline {
        color: lightgrey;
        margin-right: 5px;
    }

    /*右边*/
    .item-img-container{
        height:100%;
    }

    .item-img-wrapper{
        height:100%;
    }
</style>