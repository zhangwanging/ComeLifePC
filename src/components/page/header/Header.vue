<template>
    <div class="container-y">
        <el-row >
            <el-col :span="24" class="container-header">
                <div class="menu">
                    <ul>
                        <li>
                            <router-link :to="{name:'home'}">发现</router-link>
                        </li>
                    </ul>
                </div>

                <div class="right">
                    <ul class="container-x">
                        <li>
                            <router-link :to="{name:'login'}">登录</router-link>
                        </li>
                        <li>
                            <router-link :to="{name:'register'}">注册</router-link>
                        </li>
                        <li>
                            <router-link :to="{name:'writeessay'}">写文章</router-link>
                        </li>
                    </ul>
                </div>
            </el-col>
        </el-row>

    </div>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>
    .container-header{
        position:fixed;
        top:0;
        left:0;
        height:40px;
        background-color: gray;
        margin-bottom: 20px;
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
    }

    .menu{
        width:1440px;
    }

    .right{
        width:400px;
    }

    .right ul li{
        margin-right:5px;
    }
</style>