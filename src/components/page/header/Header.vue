<template>
        <el-row type="flex" justify="center" align="middle">
            <el-col :span="20">
                <el-row type="flex" justify="space-between">
                    <el-col :span="16">
                        <ul class="container-x left-menu">
                            <li class="item">
                                <router-link :to="{name:'home'}">发现</router-link>
                            </li>
                        </ul>
                    </el-col>
                    <el-col :span="8">
                        <ul class="container-x right-menu">
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
                    </el-col>
                </el-row>
            </el-col>
        </el-row>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>

    .el-row{
        height:100%;
    }

    /*左菜单*/
    .left-menu{
    }

    /*右菜单*/
    .right-menu{
        justify-content: flex-end;
    }

    .right-menu li{
        margin-left:20px;
    }
</style>