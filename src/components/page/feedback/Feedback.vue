<template>
    <el-row :gutter="40">
        <el-col :span="16">
            <el-row v-for="n in 4">
                <el-row>
                    <h1 class="title">热门问题</h1>
                </el-row>
                <el-row>
                    <el-card>
                        <ul class="item-container">
                            <li><a href="#">iOS充值问题（余额、使用、异常问题）</a></li>
                            <li><a href="#">不想分享小程序怎么办？</a></li>
                            <li><a href="#">为什么文章会被锁定？</a></li>
                        </ul>
                    </el-card>
                </el-row>
            </el-row>
        </el-col>
        <el-col :span="8">
            <el-row class="right-item">
                <img src="./logo.png" alt="" width="60" height="60">
                <el-row>
                    <p>没解决你的疑问？</p>
                    <p><a href="#">去反馈</a></p>
                </el-row>
            </el-row>
            <el-row class="right-item">
                <p>帐户冻结、文章锁定问题，请邮件联系 help@jianshu.com</p>
            </el-row>
            <el-row class="right-item">
                <p>程序/功能问题、bug 反馈，可添加“简书专题社群委员会委员长”微信号：Jianshu_dama，备注“Web公测”，加群第一时间获得帮助。</p>
            </el-row>
            <el-row>
                <p>也可以<a href="#">联系我们</a></p>
            </el-row>
        </el-col>
    </el-row>
</template>

<script>
    export default {
        name: "Feedback"
    }
</script>

<style scoped>
    .title {
        padding-left: 5px;
        border-left: 3px solid red;
    }

    .item-container {
        padding: 0 10px;
    }

    .item-container li {
        padding: 10px 0;
    }

    /*右边*/
    .right-item {
        border-bottom: 1px solid lightgray;
    }
</style>