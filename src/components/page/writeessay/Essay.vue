<template>
    <el-row type="flex" justify="center">
        <el-col :span="16">
            <el-row>
                <h1>C语言排序算法</h1>
            </el-row>
            <el-row class='user' type="flex">
                <img src="./logo.png" alt="" width="48" height="48">
                <el-col>
                    <el-row>
                        <span>极客江南</span>
                    </el-row>
                    <el-row>
                        <p>2018.09.04 15:48* 字数 1495 阅读 177评论 2喜欢 3</p>
                    </el-row>
                </el-col>
            </el-row>
            <el-row>
                <p>内容</p>
            </el-row>

            <el-row class="admire">
                <p>小礼物走一走，来简书关注我</p>
                <el-row type="flex" justify="center">
                    <el-button size="small" type="primary">赞赏支持</el-button>
                </el-row>
            </el-row>

            <el-row class="comment-write" type="flex">
                <img src="./logo.png" alt="" width="38" height="38">
                <el-input type="textarea" placeholder="写下你的评论..."></el-input>
            </el-row>

            <el-row>
                <h3>两条评论</h3>
                <el-row v-for="n in 2" class="comment-item">
                    <el-row type="flex">
                        <img src="./logo.png" alt="" width="38" height="38">
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
        name: "Essay"
    }
</script>

<style scoped>
    .user {
        margin: 10px 0;
    }

    /*赞赏支持*/
    .admire {
        margin-top: 20px;
        margin-bottom: 40px;
    }

    .admire p {
        text-align: center;
    }

    /*评论*/
    .comment-item {
        padding: 15px 0;
        border-bottom: 1px solid lightgray;
    }

    .comment-write {
        margin-bottom: 14px;
    }
</style>