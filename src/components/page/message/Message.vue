<template>
    <el-row :gutter="20">
        <el-col :span="8">
            <el-menu
                    default-active="1"
                    class="el-menu-vertical-demo"
                    router="true">
                <el-menu-item :index="{name:'comment'}">
                    <i class="el-icon-location"></i>
                    <span slot="title">评论</span>
                </el-menu-item>
                <el-menu-item :index="{name:'information'}">
                    <i class="el-icon-menu"></i>
                    <span slot="title">简信</span>
                </el-menu-item>
                <el-menu-item :index="{name:'contribution'}">
                    <i class="el-icon-document"></i>
                    <span slot="title">投稿请求</span>
                </el-menu-item>
                <el-menu-item :index="{name:'love-and-favour'}">
                    <i class="el-icon-setting"></i>
                    <span slot="title">喜欢和赞</span>
                </el-menu-item>
                <el-menu-item :index="{name:'attention'}">
                    <i class="el-icon-setting"></i>
                    <span slot="title">关注</span>
                </el-menu-item>
                <el-menu-item :index="{name:'admire'}">
                    <i class="el-icon-setting"></i>
                    <span slot="title">赞赏和付费</span>
                </el-menu-item>
                <el-menu-item :index="{name:'warn'}">
                    <i class="el-icon-setting"></i>
                    <span slot="title">其他提醒</span>
                </el-menu-item>
            </el-menu>
        </el-col>
        <el-col :span="16">
            <router-view name="message"></router-view>
        </el-col>
    </el-row>
</template>

<script>
    export default {
        name: "Message"
    }
</script>

<style scoped>

</style>