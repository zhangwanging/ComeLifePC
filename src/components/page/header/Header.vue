<template>
    <el-row type="flex" align="middle" class="container">
        <el-col :span="5" class="title">
            <p>荧幕星光</p>
        </el-col>
        <!--左导航-->
        <el-col :span="14">
            <el-row type="flex" align="middle">
                <el-menu default-active="1" class="left-menu" mode="horizontal" @select="handleSelect">
                    <el-menu-item index="1">
                        <router-link :to="{name:'home'}"><i class="el-icon-view"></i><span
                                class="hidden-sm-and-down">发现</span></router-link>
                    </el-menu-item>
                    <el-menu-item index="2">
                        <router-link :to="{name:'care'}"><i class="el-icon-tickets"></i><span
                                class="hidden-sm-and-down">关注</span></router-link>
                    </el-menu-item>
                    <el-submenu index="3">
                        <template slot="title">
                            <router-link :to="{name:'message'}"><i class="el-icon-bell"></i><span
                                    class="hidden-sm-and-down">消息</span></router-link>
                        </template>
                        <el-menu-item index="3-1">评论</el-menu-item>
                        <el-menu-item index="3-2">简信</el-menu-item>
                        <el-menu-item index="3-3">投稿请求</el-menu-item>
                        <el-menu-item index="3-3">喜欢和赞</el-menu-item>
                        <el-menu-item index="3-3">关注</el-menu-item>
                        <el-menu-item index="3-3">赞赏和付费</el-menu-item>
                        <el-menu-item index="3-3">其他提醒</el-menu-item>
                    </el-submenu>
                </el-menu>
                <el-col class="search" :span="8">
                    <el-input type="search" placeholder="搜索"></el-input>
                </el-col>
            </el-row>
        </el-col>
        <!--右导航-->
        <el-menu class="container-nav-right" mode="horizontal" @select="handleSelect">
            <el-menu-item index="1">
                <router-link :to="{name:'register'}">注册</router-link>
            </el-menu-item>
            <el-menu-item index="2">
                <router-link :to="{name:'login'}">登录</router-link>
            </el-menu-item>
            <el-submenu index="3">
                <template slot="title">头像</template>
                <el-menu-item index="3-1">
                    <router-link :to="{name:'homepage'}">我的主页</router-link>
                </el-menu-item>
                <el-menu-item index="3-2">收藏的文章</el-menu-item>
                <el-menu-item index="3-3">喜欢的文章</el-menu-item>
                <el-menu-item index="3-4">已购内容</el-menu-item>
                <el-menu-item index="3-5">我的钱包</el-menu-item>
                <el-menu-item index="3-6">
                    <router-link :to="{name:'setting'}">设置</router-link>
                </el-menu-item>
                <el-menu-item index="3-7">
                    <router-link :to="{name:'feedback'}">帮助与反馈</router-link>
                </el-menu-item>
                <el-menu-item index="3-8">退出</el-menu-item>
            </el-submenu>
            <el-menu-item index="4">
                <router-link :to="{name:'writeessay'}">写文章</router-link>
            </el-menu-item>
        </el-menu>

    </el-row>

</template>

<script>
    export default {
        name: "Header",
        data() {
            return {
                activeIndex: '1',
                activeIndex2: '1'
            };
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>

<style scoped>

    .container {
    }

    /*标题*/

    .title {
        text-align: center;
    }

    /*end 标题*/

    /*左边导航栏*/

    .left-menu {
    }

    .search {

    }

    .el-menu-item {
        padding: 0 10px;
    }

    /*end左边导航栏*/

    /*右边导航栏*/

    .container-nav-right {
        min-width: 264px;
    }

    /*end右边导航栏*/

    /*微调*/

    .el-form-item {
        margin-bottom: 0;
    }

</style>