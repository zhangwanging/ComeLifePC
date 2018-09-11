<template>
    <el-row>
        <el-row>
            <img src="./logo.png" alt="" width="250" height="150">
        </el-row>
        <el-row class="item-container">
            <el-row>
                <span>简书新浪微博联合认证</span>
                <span>简书推荐作者</span>
            </el-row>
            <el-row>
                <i></i>
                <span>简书帐号注册超过 30 天</span>
            </el-row>
            <el-row>
                <i></i>
                <span>简书帐号绑定新浪微博帐号</span>
            </el-row>
            <el-row>
                <i></i>
                <span>绑定手机号码</span>
            </el-row>
            <el-row>
                <i></i>
                <span>在简书发表文章字数达到 20000 字</span>
            </el-row>
            <el-row>
                <i></i>
                <span>在简书收获喜欢数达到 2000 个</span>
            </el-row>
        </el-row>
        <el-row>
            <el-row>
                <span>简书新浪微博联合认证</span>
                <span>简书专题运营者</span>
            </el-row>
            <el-row>
                <i></i>
                <span>简书帐号注册超过 30 天</span>
            </el-row>
            <el-row>
                <i></i>
                <span>简书帐号注册超过 30 天</span>
            </el-row>
            <el-row>
                <i></i>
                <span>绑定手机号码</span>
            </el-row>
            <el-row>
                <i></i>
                <span>在简书参与编辑的专题收获订阅总数达到 1000 个</span>
            </el-row>
        </el-row>
    </el-row>
</template>

<script>
    export default {
        name: "ws-setting-weibo-certify"
    }
</script>

<style scoped>
    .item-container {
        margin: 15px 0;
    }

    span {
        display: inline-block;
        padding: 3px 0;
        margin-right: 10px;
    }
</style>