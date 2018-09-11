<template>
    <el-row type="flex" justify="center">
        <el-col :span="16">
            <h1 class="font-size-largetitle">C语言排序算法</h1>
            <el-row class='container-user' type="flex" align="middle">
                <img class='avatar' src="../../page/writeessay/logo.png" alt="">
                <el-col>
                    <span>极客江南</span>
                    <p class="font-color-minor">2018.09.04 15:48* 字数 1495 阅读 177评论 2喜欢 3</p>
                </el-col>
            </el-row>
            <el-row>
                <el-col>内容区域</el-col>
            </el-row>

            <el-row class="admire">
                <p>小礼物走一走，来简书关注我</p>
                <el-row type="flex" justify="center">
                    <el-button size="small" type="primary" round plain>赞赏支持</el-button>
                </el-row>
            </el-row>

            <el-row class="comment-write" type="flex">
                <img src="../../page/writeessay/logo.png" alt="" class="avatar">
                <el-input type="textarea" placeholder="写下你的评论..."></el-input>
            </el-row>

            <el-row>
                <h3>两条评论</h3>
                <el-row class="comment-item">
                    <el-row type="flex">
                        <img src="../../page/writeessay/logo.png" alt="" width="38" height="38">
                        <el-row>
                            <el-col>
                                <span>相遇123</span>
                            </el-col>
                            <el-col>
                                <span>3楼 2018.09.04 17:15</span>
                            </el-col>
                        </el-row>
                    </el-row>
                    <el-row>
                        <p>江哥有JS的视频教程嘛？</p>
                    </el-row>
                    <el-row type="flex">
                        <el-row>
                            <span>赞</span>
                        </el-row>
                        <el-row>
                            <span>回复</span>
                        </el-row>
                    </el-row>
                </el-row>
            </el-row>
        </el-col>
    </el-row>
</template>

<script>
    export default {
        name: "ws-common-essay-detail"
    }
</script>

<style scoped>

    /*用户信息概览*/
    .container-user {
        margin: 10px 0;
    }

    .container-user p{
        margin:0;
    }

    .avatar {
        width: 36px;
        height: 36px;
        margin-right:10px;
        border-radius: 18px;
    }
    /*end 用户信息概览*/

    /*赞赏支持*/
    .admire {
        margin-top: 20px;
        margin-bottom: 40px;
    }

    .admire p {
        text-align: center;
    }

    /*end 赞赏支持*/

    /*评论*/
    .comment-item {
        padding: 15px 0;
        border-bottom: 1px solid lightgray;
    }

    .comment-write {
        margin-bottom: 14px;
    }

    /*end 评论*/
</style>