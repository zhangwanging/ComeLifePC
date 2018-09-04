<template>
    <el-row type="flex" align="middle">
        <el-col :span="5" class="title">
            <p>荧幕星光</p>
        </el-col>
        <!--左导航-->
        <el-col :span="13">
            <el-row type="flex">
                <el-col :span="8">
                    <el-menu default-active="1" class="el-menu-demo" mode="horizontal" @select="handleSelect">
                        <el-menu-item index="1">
                            <router-link :to="{name:'home'}">发现</router-link>
                        </el-menu-item>
                        <el-menu-item index="2">关注</el-menu-item>
                        <el-submenu index="3">
                            <template slot="title">消息</template>
                            <el-menu-item index="3-1">评论</el-menu-item>
                            <el-menu-item index="3-2">简信</el-menu-item>
                            <el-menu-item index="3-3">投稿请求</el-menu-item>
                            <el-menu-item index="3-3">喜欢和赞</el-menu-item>
                            <el-menu-item index="3-3">关注</el-menu-item>
                            <el-menu-item index="3-3">赞赏和付费</el-menu-item>
                            <el-menu-item index="3-3">其他提醒</el-menu-item>
                        </el-submenu>
                    </el-menu>
                </el-col>
                <el-col :span="6" class="search">
                    <el-form ref="form" :model="form">
                        <el-form-item>
                            <el-input type="search" placeholder="搜索"></el-input>
                        </el-form-item>
                    </el-form>
                </el-col>
            </el-row>
        </el-col>
        <!--右导航-->
        <el-col :span="6">
            <el-menu class="el-menu-demo" mode="horizontal" @select="handleSelect">
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
                    <el-menu-item index="3-7">帮助与反馈</el-menu-item>
                    <el-menu-item index="3-8">退出</el-menu-item>
                </el-submenu>
                <el-menu-item index="4">
                    <router-link :to="{name:'writeessay'}">写文章</router-link>
                </el-menu-item>
            </el-menu>
        </el-col>
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

    /*标题*/

    .title {
        text-align: center;
    }


    /*微调*/

    .search{
        display: flex;
        align-items: center;
    }

    .el-form-item{
        margin-bottom: 0;
    }

</style>