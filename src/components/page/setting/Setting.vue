<template>
    <el-row :gutter="20">
        <el-col :span="8">
            <el-menu
                    :router="true"
                    default-active="1"
                    class="el-menu-vertical-demo">
                <el-menu-item :index="{name:'basic-setting'}">
                    <i class="el-icon-location"></i>
                    <span slot="title">基础设置</span>
                </el-menu-item>
                <el-menu-item :index="{name:'personal-data'}">
                    <i class="el-icon-menu"></i>
                    <span slot="title">个人资料</span>
                </el-menu-item>
                <el-menu-item :index="{name:'weibo-certify'}">
                    <i class="el-icon-document"></i>
                    <span slot="title">微博认证</span>
                </el-menu-item>
                <el-menu-item :index="{name:'blacklist'}">
                    <i class="el-icon-setting"></i>
                    <span slot="title">黑名单</span>
                </el-menu-item>
                <el-menu-item :index="{name:'appreciation-setting'}">
                    <i class="el-icon-setting"></i>
                    <span slot="title">赞赏设置</span>
                </el-menu-item>
                <el-menu-item :index="{name:'account-management'}">
                    <i class="el-icon-setting"></i>
                    <span slot="title">账户管理</span>
                </el-menu-item>
            </el-menu>
        </el-col>
        <el-col :span="16">
            <router-view name="setting-content"></router-view>
            <router-view></router-view>
        </el-col>
    </el-row>
</template>

<script>
    export default {
        name: "Setting"
    }
</script>

<style scoped>

</style>