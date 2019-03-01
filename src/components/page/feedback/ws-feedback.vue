<template>
    <el-row :gutter="40">
        <el-col :span="16">
            <el-row >
                <el-row>
                    <h1 class="title">热门问题</h1>
                </el-row>
                <el-row>
                    <el-card>
                        <ul class="item-container">
                            <li><router-link :to="{name:'essaydetail'}">iOS充值问题（余额、使用、异常问题）</router-link></li>
                            <li><router-link :to="{name:'essaydetail'}">不想分享小程序怎么办？</router-link></li>
                            <li><router-link :to="{name:'essaydetail'}">为什么文章会被锁定？</router-link></li>
                        </ul>
                    </el-card>
                </el-row>
            </el-row>
            <el-row style="margin-top:20px;">
                <el-row>
                    <h1 class="title">如何玩转简书</h1>
                </el-row>
                <el-row>
                    <el-card>
                        <ul class="item-container">
                            <li><router-link :to="{name:'essaydetail'}">怎么关闭评论</router-link></li>
                            <li><router-link :to="{name:'essaydetail'}">如何在简书进行创作</router-link></li>
                            <li><router-link :to="{name:'essaydetail'}">发现页热门文章使用指南</router-link></li>
                            <li><router-link :to="{name:'essaydetail'}">如何让更多的人看到自己的文章</router-link></li>
                        </ul>
                    </el-card>
                </el-row>
            </el-row>
        </el-col>
        <el-col :span="8">
            <el-row class="right-item" type="flex">
                <img class="avatar" src="https://cdn2.jianshu.io/assets/web/faqs-helps-1235ff8d1b459bc6e8f838db329150a5.png" alt="" width="60" height="60">
                <el-col>
                    <p>没解决你的疑问？</p>
                    <p ><a style="color:#409EFF;" target="_blank" href="https://www.jianshu.com/help">去反馈</a></p>
                </el-col>
            </el-row>
            <el-row class="right-item">
                <p>帐户冻结、文章锁定问题，请邮件联系 help@jianshu.com</p>
            </el-row>
            <el-row class="right-item">
                <p>程序/功能问题、bug 反馈，可添加“简书专题社群委员会委员长”微信号：Jianshu_dama，备注“Web公测”，加群第一时间获得帮助。</p>
            </el-row>
            <el-row>
                <p>也可以<a style="color:#409EFF;" target="_blank" href="https://www.jianshu.com/contact">联系我们</a></p>
            </el-row>
        </el-col>
    </el-row>
</template>

<script>
    export default {
        name: "ws-feedback"
    }
</script>

<style scoped>


    .avatar{
        width:40px;
        height:40px;
        margin-right:5px;
    }

    .title {
        padding-left: 5px;
        margin-top:0;
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
        padding:20px 0;
        border-bottom: 1px solid lightgray;
    }

    .right-item:first-child{
        padding-top:0px;
    }

    .right-item p{
        margin:0 0 3px 0;
    }
</style>